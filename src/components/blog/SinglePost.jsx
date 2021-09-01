import { Button } from "@material-ui/core"
import MakeComment from '../../components/blog/MakeComment'
import AccountCircleIcon from '@material-ui/icons/AccountCircle'
import FavoriteIcon from '@material-ui/icons/Favorite'
import TelegramIcon from '@material-ui/icons/Telegram'
import moment from "moment"
import c from '../../styles/blog.module.css'
import { Link } from "react-router-dom"
import useFetch from "../../pages/Admin/useFetch"
import { useEffect, useState } from "react"

const SinglePost = ({ id }) => {
    console.log(id)

    let data = useFetch(`http://localhost:5000/backend/api/v1/questions/per/${id}`)
    let time = moment(data[0]?.date)

    const handleUnSave = id => {

    }

    return <div className={c.blogPost}>
        <div className="row">
            <div className="col-1"><AccountCircleIcon fontSize="large" style={{ color: '#eee' }} /></div>
            <div className="col-11">
                <p className="text-light mb-0 fw-bold">{data[0]?.name || 'unknown'}</p>
                <p className="text-light mb-0" style={{ fontSize: '0.7rem' }}>{time.format("DD . MM . YY , HH:mm")}</p>
                <Link to={`/blog-post/${id}`}>
                    <div className="my-4 bg-light p-3 text-dark question" style={{ borderRadius: '10px' }}>
                        {data[0]?.question}
                    </div>
                </Link>
                <div className="mb-2 d-flex justify-content-evenly align-items-center">
                    <Button onClick={() => handleUnSave(id)} variant="contained" className={c.bottomButton}><FavoriteIcon /></Button>
                    <MakeComment id={id} />
                    <Button variant="contained" className={c.bottomButton}><TelegramIcon /></Button>
                </div>
            </div>
        </div>
    </div>
}

export default SinglePost