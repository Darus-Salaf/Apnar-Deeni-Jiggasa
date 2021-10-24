import React, { useState, useEffect } from 'react'
import c from '../../../styles/admin.module.css'
import { Button, FormControl, InputLabel, MenuItem, Select, TextField } from '@material-ui/core'
import { Link } from 'react-router-dom'
import jwt from 'jsonwebtoken'



export default function ModeratorVideo() {

    const [modData, setModData] = useState({})
    const [input, setInput] = useState({
        cat: '',
        link: '',
        sheikh: '',
        topic: ''
    })

    const handleChange = e => {
        let initialData = { ...input }
        initialData[e.target.name] = e.target.value
        setInput(initialData)
    }
    let hash = localStorage.getItem('hash')
    let token = localStorage.getItem('moderator_token')
    const decodedToken = jwt.verify(token, hash)

    useEffect(() => {
        fetch(`/api/jiggasa/moderator-video/${decodedToken.email}`)
            .then(res => res.json())
            .then(data => setModData(data))
            .catch(err => console.log(err.message))
    }, [decodedToken.email])

    const handlePost = () => {
        if (input.cat && input.link && input.sheikh && input.topic) {

            let tobePost = {
                ...input,
                creator: decodedToken.email
            }
            fetch('/api/jiggasa/create/video', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(tobePost)
            })
                .then(res => res.json())
                .then(data => {
                    if (data.insertedId) {

                        // Increase a count for the video of this moderator
                        fetch(`/api/jiggasa/moderator/${decodedToken.email}/video/${input.topic}`)
                            .then(res => res.json())
                            .then(data => console.log(data))
                            .catch(err => console.log(err.message))

                        alert('video created successfully')
                        window.location.reload()
                    } else alert('video creation failed !')
                })
                .catch(err => alert(err.message))

        } else alert('Please fill all the field')
    }

    return (
        <div className="container">
            <h2 className="text-center text-light mt-4 border rounded py-3">আপনার ভিডিও সংখ্যা <strong className="text-warning ps-3"> {modData.videos?.length}</strong></h2>
            <h1 className="text-center text-light mt-4 border rounded py-3"><Link to="/moderator">একটি প্রশ্ন লিখুন</Link> || <Link to="/moderator-video">একটি ভিডিও পোস্ট করুন</Link></h1>
            <div className={c.adminInput}>
                <div className="my-4">
                    <FormControl style={{ width: '50%', }}>
                        <InputLabel id="demo-simple-select-label">ক্যাটাগরি সিলেক্ট করুন</InputLabel>
                        <Select
                            labelId="demo-simple-select-label"
                            value={input.cat}
                            name="cat"
                            onChange={handleChange}
                        >
                            <MenuItem value={'tawheed'}>তাওহীদ</MenuItem>
                            <MenuItem value={'salat'}>সালাত</MenuItem>
                            <MenuItem value={'zakat'}>যাকাত</MenuItem>
                            <MenuItem value={'siyam'}>সিয়াম</MenuItem>
                            <MenuItem value={'hajj'}>হজ্জ</MenuItem>
                            <MenuItem value={'jihad'}>জিহাদ</MenuItem>
                            <MenuItem value={'duaozikir'}>দোয়া/যিকির</MenuItem>
                            <MenuItem value={'akhlaq'}>আখলাক্ব</MenuItem>
                            <MenuItem value={'harambishoy'}>হারাম বিষয়াবলি</MenuItem>
                        </Select>
                    </FormControl>
                </div>
                <div className="my-4">
                    <TextField name="link" value={input.link} onChange={handleChange} label="লিংক দিন" style={{ width: '100%' }} />
                </div>
                <div className="my-4">
                    <TextField name="sheikh" value={input.sheikh} onChange={handleChange} label="শাইখের নাম" style={{ width: '100%' }} />
                </div>
                <div className="my-4">
                    <TextField name="topic" value={input.topic} onChange={handleChange} label="টপিক লাইন" style={{ width: '100%' }} />
                </div>
                <div className="my-5">
                    <Button variant="contained" onClick={handlePost}>পোস্ট করুন</Button>
                </div>
            </div>
        </div>
    )
}
