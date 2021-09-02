import c from '../../styles/blog.module.css'
import c2 from '../../styles/form.module.css'
import AccountCircleIcon from '@material-ui/icons/AccountCircle'
import { Button } from '@material-ui/core'
import { useState } from 'react'

export default function CreateBlog() {

    const [input, setInput] = useState({
        name: '',
        email: '',
        question: '',
        answer: '',
        status: 'temp',
        date: new Date(),
        comments: []
    })

    const handleInput = e => {
        let formInput = { ...input }
        formInput[e.target.name] = e.target.value
        setInput(formInput)
    }

    const handlePost = () => {

        if (input.email && input.question) {

            fetch('http://apnardeenijiggasa.com/backend/api/v1/create/question', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(input)
            })
                .then(res => res.json())
                .then(data => {
                    if (data.insertedId) {
                        alert('Question created successfully. Please wait for admin approval.')
                        window.location.reload()
                    } else {
                        alert('Question creation failed !')
                        window.location.reload()
                    }
                })
                .catch(err => alert(err.message))

        } else alert('Please enter your email address and question')
    }

    let width = window.innerWidth < 500

    return (
        <div className={c.blogCreate}>
            <div className="row">
                <div className="col-1"><AccountCircleIcon fontSize={width ? 'small' : 'large'} style={{ color: '#eee', marginTop: '10px' }} /></div>
                <div className="col-11">
                    <div className={c2.create}>
                        <input className="bangla" onChange={e => handleInput(e)} name="name" placeholder="আপনার নাম ( ঐচ্ছিক )" type="text" />
                        <input className="bangla" onChange={e => handleInput(e)} name="email" placeholder="ইমেইল এ্যাড্রেস ( আবশ্যক )" type="email" />
                        <textarea name="question" onChange={e => handleInput(e)} placeholder="আপনার প্রশ্নটি লিখুন" className="bangla w-100" rows="5"></textarea>
                        <div className="my-2 w-100 text-end">
                            <Button onClick={() => handlePost()} variant="contained">পোস্ট করুন</Button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
