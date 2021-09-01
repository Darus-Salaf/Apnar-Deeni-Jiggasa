import { Button } from '@material-ui/core'
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
    useEffect(() => {
        fetch(`http://localhost:5000/backend/api/v1/questions/per/${blogId}`)
            .then(res => res.json())
            .then(data => setPost(data[0]))
            .catch(err => console.log((err.message)))
    }, [blogId])

    let { question, answer, comments, date, name } = post
    let time = moment(date)

    let width = window.innerWidth < 1230
    let widthforSide = window.innerWidth < 1200

    return <div className={`${width ? 'container' : ''} my-4`}>

        <div className="row">

            <div className={widthforSide ? 'col-md-9' : 'col-md-8'}>
                <div className={c.blogPost}>
                    <div className="row">
                        <div className="col-1"><AccountCircleIcon fontSize="large" style={{ color: '#eee' }} /></div>
                        <div className="col-11">
                            <p className="text-light mb-0 fw-bold">{name}</p>
                            <p className="text-light mb-0" style={{ fontSize: '0.7rem' }}>{time.format("DD . MM . YY , HH:mm")}</p>
                            <div className={`my-4 bg-light p-3 text-dark question ${c.qu}`} style={{ borderRadius: '10px' }}>
                                {question}
                            </div>
                            <div className="mb-2 d-flex justify-content-between align-items-center">
                                <Button variant="contained" className={c.bottomButton}><FavoriteIcon /></Button>
                                <Button variant="contained" className={c.bottomButton}><TelegramIcon /></Button>
                            </div> <hr style={{ height: '2px', color: '#eee' }} />
                            <div className="row">
                                <div className="col-1"><VerifiedUserIcon fontSize="large" style={{ color: '#ffc107' }} /></div>
                                <div className="col-11">
                                    <p className="text-warning mb-0 fw-bold">ADMIN</p>
                                    <p className="text-light mb-0" style={{ fontSize: '0.7rem' }}>{time.format("DD . MM . YY , HH:mm")}</p>
                                    <div className={`my-4 bg-light p-3 text-dark`} style={{ borderRadius: '10px' }}>
                                        {answer}
                                    </div>
                                    <hr style={{ height: '2px', color: '#eee' }} />

                                    {
                                        comments?.map(comment => <Comment comment={comment} />)
                                    }

                                </div>
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
