import React, { useEffect } from 'react'
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import Radio from '@material-ui/core/Radio'
import Slider from '@material-ui/core/Slider'
import RadioGroup from '@material-ui/core/RadioGroup'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import { useState } from 'react'
import c from '../styles/dua.module.css'

export default function DuaZikr() {

    const [name, setName] = useState([])
    const [dua, setDua] = useState([])
    const [title, setTitle] = useState([])
    const [selected, setSelected] = useState([])
    const [background, setBackground] = useState(null)
    const [value, setValue] = React.useState('1');
    const [arabicSize, setArabicSize] = useState(30)
    const [banglaSize, setBanglaSize] = useState(16)
    const [open, setOpen] = React.useState(false);
    const [open2, setOpen2] = React.useState(false);

    useEffect(() => {
        fetch('http://apnardeenijiggasa.com/backend/api/v1/duaname')
            .then(res => res.json())
            .then(data => setName(data[0].duaname))
            .catch(err => console.log(err.message))

        fetch('http://apnardeenijiggasa.com/backend/api/v1/dua')
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


    // const handleClickOpen = () => {
    //     setOpen(true);
    // };

    // const handleClose = () => {
    //     setOpen(false);
    // };


    let width = window.innerWidth < 1230

    return <div className={`${width ? 'container' : ''} my-4`}>
        <div className="row">
            <div className={`col-md-3 ${c.desktopcat}`}>
                <div className="left">
                    <div className={c.searchbox}>
                        <h3 className="text-center">দোয়া খুঁজুন</h3>
                        <form><input type="text" placeholder="দু'আর নাম সার্চ করুন" /></form>
                    </div>
                    <div className={c.duabox}>
                        <h2 className="text-center text-light">দু'আসমূহ</h2>
                        <ul>
                            {
                                name.map((item, index) => {
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

            <div className="col-md-7">
                <div className={c.dua}>

                    <div className={c.mobileHolder}>
                        <span className={c.mobileBtn}>
                            <Button style={{borderRight: '2px solid #163c3f'}} onClick={() => setOpen(true)}>
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
                            <Button style={{borderLeft: '2px solid #163c3f'}} onClick={() => setOpen2(true)}>
                                ফন্ট সেটিং করুন
                            </Button>
                            <Dialog
                                open={open2}
                                onClose={() => setOpen2(false)}
                                aria-labelledby="alert-dialog-title"
                                aria-describedby="alert-dialog-description"
                            >
                                <div className={c.right}>
                                    <h4 className="text-center pt-3 text-light">ফন্ট সেটিংস</h4>
                                    <p className="pt-2 mb-0 px-2 text-light"><strong>ফন্ট স্টাইল</strong></p>
                                    <div className="px-2 text-light">
                                        <RadioGroup aria-label="gender" name="gender1" value={value} onChange={e => setValue(e.target.value)}>
                                            <FormControlLabel value="1" control={<Radio style={{ color: '#eee' }} />} label="Qalam" />
                                            <FormControlLabel value="2" control={<Radio style={{ color: '#eee' }} />} label="Uthmani" />
                                            <FormControlLabel value="3" control={<Radio style={{ color: '#eee' }} />} label="Simple" />
                                        </RadioGroup>
                                    </div> <hr style={{ color: '#eee', height: '1px' }} />
                                    <div className="px-2">
                                        <p className="pt-2 mb-0 text-light"><strong>ফন্ট সাইজ (আরবী)</strong></p>
                                        <Slider style={{ color: '#eee' }} value={arabicSize} onChange={handleArabic} aria-labelledby="font-size-slider" />
                                        <p className="pt-2 mb-0 text-light"><strong>ফন্ট সাইজ (বাংলা)</strong></p>
                                        <Slider style={{ color: '#eee' }} value={banglaSize} onChange={handleBangla} aria-labelledby="font-size-slider" />
                                    </div>
                                </div>
                            </Dialog>
                        </span>
                    </div>


                    <h1 className="text-center">দোয়া ও যিকরসমূহ</h1>
                    {
                        !selected.length && <div>
                            <p>দু'আ ও যিকরের ফযীলত</p>
                        </div>
                    }
                    {
                        selected?.map((item, index) => <div className={c.duaContainer} key={index}>
                            <p className="text-center fw-bold">
                                {
                                    title.map(i => i[1])
                                }
                            </p>
                            <p className={c.arabic} style={{ fontSize: `${arabicSize}px` }}>{item[6]}</p> <hr style={{ color: '#eee', height: '1px' }} />
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
                    <p className="pt-2 mb-0 px-2 text-light"><strong>ফন্ট স্টাইল</strong></p>
                    <div className="px-2 text-light">
                        <RadioGroup aria-label="gender" name="gender1" value={value} onChange={e => setValue(e.target.value)}>
                            <FormControlLabel value="1" control={<Radio style={{ color: '#eee' }} />} label="Qalam" />
                            <FormControlLabel value="2" control={<Radio style={{ color: '#eee' }} />} label="Uthmani" />
                            <FormControlLabel value="3" control={<Radio style={{ color: '#eee' }} />} label="Simple" />
                        </RadioGroup>
                    </div> <hr style={{ color: '#eee', height: '1px' }} />
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
