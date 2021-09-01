import { Button, TextField } from '@material-ui/core'
import AccountCircleIcon from '@material-ui/icons/AccountCircle'
import FavoriteIcon from '@material-ui/icons/Favorite'
import VerifiedUserIcon from '@material-ui/icons/VerifiedUser'
import TelegramIcon from '@material-ui/icons/Telegram'
import RightSide from "../../components/home/RightSide"
import c from '../../styles/blog.module.css'
import { useParams } from 'react-router-dom'
import { useState } from 'react'
import { useEffect } from 'react'
import moment from 'moment'
import Comment from '../../components/blog/Comment'


export default function BlogDetails() {

    const { blogId } = useParams()
    const [post, setPost] = useState({})
    const [text, setText] = useState('')

    useEffect(() => {
        fetch(`http://139.59.11.242/backend/api/v1/questions/per/${blogId}`)
            .then(res => res.json())
            .then(data => setPost(data[0]))
            .catch(err => console.log((err.message)))
    }, [blogId])

    const handleComment = () => {
        if (text) {
            fetch(`http://139.59.11.242/backend/api/v1/comment`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ id: blogId, comment: text })
            })
                .then(res => {
                    if (res.status === 200) {
                        alert('Successfully Commented !')
                        window.location.reload()
                    } else {
                        alert('Failed to comment. Please try again')
                        window.location.reload()
                    }
                })
                .catch(err => alert(err.message))
        } else alert('Please edit the fields')
    }
    const handleSave = id => {

        let saved = JSON.parse(localStorage.getItem('saved'))

        if (saved !== null) {
            if (saved.indexOf(id) === -1) {
                let savedPost = [...saved]
                savedPost.push(id)
                localStorage.setItem('saved', JSON.stringify(savedPost))
            } else alert('Already Loved !')
        }
        else {
            let savedPost = []
            savedPost.push(id)
            localStorage.setItem('saved', JSON.stringify(savedPost))
        }
    }


    let { question, answer, comments, date, name, _id } = post
    let time = moment(date)

    let width = window.innerWidth < 1230
    let widthforSide = window.innerWidth < 1200

    return <div className={`${width ? 'container' : ''} my-4`}>

        <div className="row">

            <div className={widthforSide ? 'col-md-9' : 'col-md-8'}>
                <div className={c.blogPost}>
                    <div className="d-flex align-items-center">
                        <AccountCircleIcon fontSize="large" style={{ color: '#eee', marginRight: '0.6rem' }} />
                        <div>
                            <p className="text-light mb-0 fw-bold">{name}</p>
                            <p className="text-light mb-0" style={{ fontSize: '0.7rem' }}>{time.format("DD . MM . YY , HH:mm")}</p>
                        </div>
                    </div>
                    <div className={`my-4 bg-light p-3 text-dark question ${c.qu}`} style={{ borderRadius: '10px' }}>
                        {question}
                    </div>
                    <div className="mb-2 d-flex justify-content-evenly align-items-center">
                        <Button onClick={() => handleSave(_id)} variant="contained" className={c.bottomButton}><FavoriteIcon /></Button>
                        <Button variant="contained" className={c.bottomButton}><TelegramIcon /></Button>
                    </div> <hr style={{ height: '2px', color: '#eee' }} />
                    <div className="ps-3">
                        <div className="d-flex align-items-center">
                            <VerifiedUserIcon fontSize="large" style={{ color: '#ffc107', marginRight: '0.6rem' }} />
                            <div>
                                <p className="text-warning mb-0 fw-bold">ADMIN</p>
                                <p className="text-light mb-0" style={{ fontSize: '0.7rem' }}>{time.format("DD . MM . YY , HH:mm")}</p>
                            </div>
                        </div>
                        <div className={`my-4 bg-light p-3 text-dark`} style={{ borderRadius: '10px' }}>
                            {answer}
                        </div>
                        <hr style={{ height: '2px', color: '#eee' }} />

                        {
                            comments?.map(comment => <Comment comment={comment} />)
                        }

                        <div className={c.createComment}>
                            <div className={c.commentBox}>
                                <AccountCircleIcon fontSize="large" style={{ color: '#eee', marginRight: '0.6rem' }} />
                                <TextField
                                    margin="dense"
                                    id="name"
                                    placeholder="write a comment..."
                                    fullWidth
                                    multiline
                                    name="comment"
                                    rows="4"
                                    onChange={e => setText(e.target.value)}
                                />
                            </div>
                            <div className="w-100 text-end">
                                <Button onClick={() => handleComment()}>Post Comment</Button>
                            </div>
                        </div>

                    </div>
                </div>
            </div>

            <div className={widthforSide ? 'col-md-3' : 'col-md-4'}>
                <RightSide />
            </div>

        </div>
    </div>
}
