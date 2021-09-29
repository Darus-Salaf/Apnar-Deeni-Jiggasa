import React, { useEffect } from 'react'
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import Slider from '@material-ui/core/Slider'
import { useState } from 'react'
import c from '../styles/dua.module.css'
import Spinner from '../components/Spinner';
import DuaFazilat from '../components/DuaFazilat';
import DuaCategory from '../components/DuaCategory';

export default function DuaZikr() {

    const [name, setName] = useState([])
    const [dua, setDua] = useState([])
    const [title, setTitle] = useState([])
    const [selected, setSelected] = useState([])
    const [input, setInput] = useState('')
    const [background, setBackground] = useState(null)
    const [arabicSize, setArabicSize] = useState(30)
    const [banglaSize, setBanglaSize] = useState(16)
    const [open, setOpen] = useState(false)
    const [open2, setOpen2] = useState(false)

    useEffect(() => {
        fetch('/backend/api/v1/duaname')
            .then(res => res.json())
            .then(data => setName(data[0].duaname))
            .catch(err => console.log(err.message))

        fetch('/backend/api/v1/dua')
            .then(res => res.json())
            .then(data => setDua(data[0].dua))
            .catch(err => console.log(err.message))
    }, [])

    const handleDuaNumber = id => {
        let result = dua.filter(i => i[1].toString() === id.toString())
        setSelected(result)
        setBackground(id)

        let names = name.filter(item => item[0] === id)
        setTitle(names)
        setOpen(false)
    }
    const handleArabic = (event, newValue) => {
        setArabicSize(newValue)
    }
    const handleBangla = (event, newValue) => {
        setBanglaSize(newValue)
    }

    let searched = name.filter(item => item[1].includes(input))

    let width = window.innerWidth < 1030

    return <div className={`${width ? 'container' : 'mx-3'} my-4`}>
        <div className="row">
            <div className={`col-md-3 ${c.desktopcat}`}>
                <div className="left">
                    <div className={c.searchbox}>
                        <h3 className="text-center">দোয়া খুঁজুন</h3>
                        <input onChange={e => setInput(e.target.value)} type="text" placeholder="দু'আর নাম সার্চ করুন" />
                        <div className="my-2">
                            <DuaCategory mobile={false} dua={name} handleDuaNumber={handleDuaNumber} />
                        </div>
                    </div>
                    <div className={c.duabox}>
                        <h2 className="text-center text-light">দু'আসমূহ</h2>
                        <ul>
                            {!name.length && <div className="text-center pt-5"><Spinner /></div>}
                            {
                                searched.map((item, index) => {
                                    return <li style={{ backgroundColor: item[0] === background && '#163c3f' }} key={index}>
                                        <button onClick={() => handleDuaNumber(item[0])}>{item[1]}
                                        </button></li>
                                })
                            }
                        </ul>
                        <p className="text-center text-light pt-2 mb-0" style={{ borderTop: '2px solid #9e9e9e' }}>"হিসনুল মুসলিম" থেকে</p>
                    </div>
                </div>
            </div>

            <div className={width ? "col-12" : "col-md-7"}>
                <div className={c.dua}>

                    <div className={c.mobileHolder}>
                        <span className={c.mobileBtn}>
                            <Button style={{ borderRight: '2px solid #163c3f' }} onClick={() => setOpen(true)}>
                                দু'আ নির্বাচন করুন
                            </Button>
                            <Dialog
                                open={open}
                                onClose={() => setOpen(false)}
                                aria-labelledby="alert-dialog-title"
                                aria-describedby="alert-dialog-description"
                            >
                                <div className={c.duabox}>
                                    <h2 className="text-center text-light">দু'আসমূহ</h2>
                                    <ul style={{ marginBottom: '0px' }}>
                                        {
                                            name.map((item, index) => {
                                                return <li style={{ backgroundColor: item[0] === background && '#163c3f' }} key={index}>
                                                    <button onClick={() => handleDuaNumber(item[0])}>{item[1]}
                                                    </button></li>
                                            })
                                        }
                                    </ul>
                                    <p className="text-center text-light py-1" style={{ borderTop: '2px solid #9e9e9e' }}>"হিসনুল মুসলিম" থেকে</p>
                                </div>
                            </Dialog>
                        </span>
                        <span className={c.mobileBtn}>
                            <Button style={{ borderLeft: '2px solid #163c3f' }} onClick={() => setOpen2(true)}>
                                ফন্ট সেটিং করুন
                            </Button>
                            <Dialog
                                open={open2}
                                onClose={() => setOpen2(false)}
                                aria-labelledby="alert-dialog-title"
                                aria-describedby="alert-dialog-description"
                            >
                                <div className={c.right} style={{ width: '300px' }}>
                                    <h4 className="text-center pt-3 text-light">ফন্ট সেটিংস</h4>
                                    <div className="px-2">
                                        <p className="pt-2 mb-0 text-light"><strong>ফন্ট সাইজ (আরবী)</strong></p>
                                        <Slider style={{ color: '#eee' }} value={arabicSize} onChange={handleArabic} aria-labelledby="font-size-slider" />
                                        <p className="pt-2 mb-0 text-light"><strong>ফন্ট সাইজ (বাংলা)</strong></p>
                                        <Slider style={{ color: '#eee' }} value={banglaSize} onChange={handleBangla} aria-labelledby="font-size-slider" />
                                    </div>
                                </div>
                            </Dialog>
                        </span>
                        <div className="w-100 mx-auto text-center">
                            <DuaCategory mobile={true} dua={name} handleDuaNumber={handleDuaNumber} />
                        </div>
                    </div>
                    <h1 className="text-center">দোয়া ও যিকরসমূহ</h1>
                    {
                        !selected.length && <div>
                            <DuaFazilat />
                        </div>
                    }
                    {
                        selected?.map((item, index) => <div className={c.duaContainer} key={index}>
                            <p className="text-center fw-bold">
                                {
                                    title.map(i => i[1])
                                }
                            </p>
                            <p className={c.duaarabic} style={{ fontSize: `${arabicSize}px` }}><p className="arabic">{item[6]}</p></p>
                            <hr style={{ color: '#eee', height: '1px' }} />
                            <div className={c.transliteration}>
                                <p style={{ fontSize: `${banglaSize}px` }}><strong>উচ্চারণঃ</strong></p>
                                <p style={{ fontSize: `${banglaSize}px` }}>{item[7]}</p>
                            </div> <hr style={{ color: '#eee', height: '1px' }} />
                            <div className={c.translation}>
                                <p style={{ fontSize: `${banglaSize}px` }}><strong>অর্থঃ</strong></p>
                                <p style={{ fontSize: `${banglaSize}px` }}>{item[8]}</p>
                            </div>
                            {
                                item[10] && <div className={c.ref}>
                                    <p><strong>রেফারেন্সঃ</strong></p>
                                    <p>{item[10]}</p>
                                </div>
                            }
                        </div>)
                    }
                </div>
            </div>
            <div className={`col-md-2 ${c.desktopcat}`}>
                <div className={c.right}>
                    <h4 className="text-center pt-3 text-light">ফন্ট সেটিংস</h4>
                    <div className="px-2">
                        <p className="pt-2 mb-0 text-light"><strong>ফন্ট সাইজ (আরবী)</strong></p>
                        <Slider style={{ color: '#eee' }} value={arabicSize} onChange={handleArabic} aria-labelledby="font-size-slider" />
                        <p className="pt-2 mb-0 text-light"><strong>ফন্ট সাইজ (বাংলা)</strong></p>
                        <Slider style={{ color: '#eee' }} value={banglaSize} onChange={handleBangla} aria-labelledby="font-size-slider" />
                    </div>
                </div>
            </div>
        </div>
    </div>
}
