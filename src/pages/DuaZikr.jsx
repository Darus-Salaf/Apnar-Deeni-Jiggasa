import React, { useEffect } from 'react'
import { useState } from 'react'
import c from '../styles/dua.module.css'

export default function DuaZikr() {

    const [name, setName] = useState([])
    const [dua, setDua] = useState([])
    const [selected, setSelected] = useState([])

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
        console.log(result)
    }



    let width = window.innerWidth < 1230
    return <div className={`${width ? 'container' : ''} my-4`}>
        <div className="row">
            <div className="col-md-3">
                <div className="left">
                    <h3 className="text-center">দোয়া খুঁজুন</h3>
                    <div className={c.duabox}>
                        <ul>
                            {
                                name.map((item, index) => {
                                    return <li key={index}><button onClick={() => handleDuaNumber(item[0])}>{item[1]}</button></li>
                                })
                            }
                        </ul>
                    </div>
                </div>
            </div>
            <div className="col-md-7">
                <div className="dua">
                    <h1 className="text-center">দোয়া ও যিকরসমূহ</h1>
                    {
                        selected?.map((item, index) => <div className={c.duaContainer} key={index}>
                            <p className={c.arabic}>{item[6]}</p> <hr style={{ color: '#eee', height: '1px' }} />
                            <div className={c.transliteration}>
                                <p><strong>উচ্চারণঃ</strong></p>
                                <p>{item[7]}</p>
                            </div> <hr style={{ color: '#eee', height: '1px' }} />
                            <div className={c.translation}>
                                <p><strong>অর্থঃ</strong></p>
                                <p>{item[8]}</p>
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
            <div className="col-md-2">
                <div className="right">
                    <h3 className="text-center">ফন্ট পরিবর্তন</h3>
                </div>
            </div>
        </div>
    </div>
}
