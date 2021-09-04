import { Button } from '@material-ui/core'
import AccountCircleIcon from '@material-ui/icons/AccountCircle'
import FavoriteIcon from '@material-ui/icons/Favorite'
import TelegramIcon from '@material-ui/icons/Telegram'
import moment from 'moment'
import { Link } from 'react-router-dom'
import MakeComment from './MakeComment'
import c from '../../styles/blog.module.css'

export default function BlogPost({ id, name, question, date }) {

    let width = window.innerWidth < 500
    let time = moment(date)

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

    return (
        <div className={c.blogPost}>
            <div className="row">
                <div className="col-1"><AccountCircleIcon fontSize={width ? 'small' : 'large'} style={{ color: '#eee', margin: '0 15px 0 0' }} /></div>
                <div className="col-11">
                    <p className="text-light mb-0 fw-bold">{name || 'unknown'}</p>
                    <p className="text-light mb-0" style={{ fontSize: '0.7rem' }}>{time.format("DD . MM . YY , HH:mm")}</p>
                    <Link to={`/blog-post/${id}`}>
                        <div className={`my-4 bg-light p-3 text-dark question`} style={{ borderRadius: '10px' }}>
                            {question}
                        </div>
                    </Link>
                    <div className={`mb-2 d-flex justify-content-${width ? 'between' : 'evenly'} align-items-center`}>
                        <Button onClick={() => handleSave(id)} variant="contained" className={c.bottomButton}><FavoriteIcon /></Button>
                        <MakeComment id={id} />
                        <Button variant="contained" className={c.bottomButton}><TelegramIcon /></Button>
                    </div>
                </div>
            </div>
        </div>
    )
}
