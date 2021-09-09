import { useEffect } from 'react'
import { useState } from 'react'
import c from '../styles/dua.module.css'

export default function DuaZikr() {

    const [name, setName] = useState([])
    const [dua, setDua] = useState([])

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
        let result = dua.filter(i => i[2].toString() === id.toString())
        console.log(result)
    }


    // console.log(dua.length)
    // dua.slice(0, 20).map(i => console.log(i))

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
                                    if (item[4] !== '') {
                                        return <li key={index}><button onClick={() => handleDuaNumber(item[2])}>{item[4]}</button></li>
                                    } else return
                                })
                            }
                        </ul>
                    </div>
                </div>
            </div>
            <div className="col-md-6">
                <div className="dua">
                    <h1 className="text-center">দোয়া ও যিকরসমূহ</h1>

                </div>
            </div>
            <div className="col-md-3">
                <div className="right">
                    <h3 className="text-center">ফন্ট পরিবর্তন</h3>
                </div>
            </div>
        </div>
    </div>
}
