import React, { useState } from 'react'
import AdminSide from './AdminSide'
import c from '../../styles/admin.module.css'
import { Button, FormControl, InputLabel, MenuItem, Select, TextField } from '@material-ui/core'

export default function CreateVideo() {

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

    const handlePost = () => {
        if (input.cat && input.link && input.sheikh && input.topic) {

            fetch('/backend/api/v1/create/video', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(input)
            })
                .then(res => res.json())
                .then(data => data.insertedId ? alert('Post created successfully') : alert('Post creation failed !'))
                .catch(err => alert(err.message))

        } else alert('Please fill all the field')
    }

    return <div className="row">
        <AdminSide />
        <div className="col-md-10">
            <h1 className="text-center text-light mt-4 border rounded py-3">একটি ভিডিও পোস্ট করুন</h1>
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
    </div>
}
