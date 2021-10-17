import { Button, FormControl, InputLabel, MenuItem, Select, TextField } from '@material-ui/core'
import React from 'react'
import AdminSide from './AdminSide'
import c from '../../styles/admin.module.css'
import { useState } from 'react'

export default function CreatePost() {

    const [input, setInput] = useState({
        cat: '',
        subcat: '',
        question: '',
        answer: '',
        topic: '',
        ref: '',
    })

    const handleChange = e => {
        let initialData = { ...input }
        initialData[e.target.name] = e.target.value
        setInput(initialData)
    }

    const handlePost = () => {
        if (input.cat && input.subcat && input.question && input.answer && input.topic) {

            fetch('/api/jiggasa/create/post', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(input)
            })
                .then(res => res.json())
                .then(data => {
                    if (data.insertedId) {
                        alert('Post created successfully')
                        window.location.reload()
                    } else alert('Post creation failed !')
                })
                .catch(err => alert(err.message))

        } else alert('Please fill all the field')
    }

    return <div className="row">
        <AdminSide />
        <div className="col-md-10">
            <h1 className="text-center text-light mt-4 border rounded py-3">একটি প্রশ্ন/পোস্ট লিখুন</h1>
            <div className={c.adminInput}>
                <div className="my-4 d-flex justify-content-between">
                    <FormControl style={{ width: '45%', }}>
                        <InputLabel id="demo-simple-select-label">ক্যাটাগরি সিলেক্ট করুন</InputLabel>
                        <Select
                            labelId="demo-simple-select-label"
                            value={input.cat}
                            name="cat"
                            onChange={handleChange}
                        >
                            <MenuItem value={'likhito-proshno'}>লিখিত প্রশ্ন</MenuItem>
                            <MenuItem value={'nari-ongon'}>নারী অঙ্গন</MenuItem>
                            <MenuItem value={'nastikkobad'}>নাস্তিক্যবাদের জবাব</MenuItem>

                        </Select>
                    </FormControl>
                    <FormControl style={{ width: '45%' }}>
                        <InputLabel id="demo-simple-select-label">সাব ক্যাটাগরি সিলেক্ট করুন</InputLabel>
                        <Select
                            labelId="demo-simple-select-label"
                            value={input.subcat}
                            name="subcat"
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
                            <MenuItem value={'porda'}>পর্দা</MenuItem>
                            <MenuItem value={'pobitrota'}>পবিত্রতা</MenuItem>
                        </Select>
                    </FormControl>
                </div>
                <div className="my-4">
                    <TextField
                        name="question"
                        style={{ width: '100%' }}
                        className="bangla"
                        label="প্রশ্নটি লিখুন"
                        multiline
                        maxRows={8}
                        value={input.question}
                        onChange={handleChange}
                    />
                </div>
                <div className="my-4">
                    <TextField
                        name="answer"
                        style={{ width: '100%' }}
                        label="উত্তরটি লিখুন"
                        multiline
                        maxRows={20}
                        value={input.answer}
                        onChange={handleChange}
                    />
                </div>
                <div className="my-4">
                    <TextField name="topic" value={input.topic} onChange={handleChange} label="টপিক লাইন" style={{ width: '100%' }} />
                </div>
                <div className="my-4">
                    <TextField name="ref" value={input.ref} onChange={handleChange} label="রেফারেন্স" style={{ width: '100%' }} />
                </div>
                <div className="my-5">
                    <Button variant="contained" onClick={handlePost}>পোস্ট করুন</Button>
                </div>
            </div>
        </div>
    </div>
}
