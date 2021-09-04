import { Button } from "@material-ui/core"
import MakeComment from '../../components/blog/MakeComment'
import AccountCircleIcon from '@material-ui/icons/AccountCircle'
import DeleteForeverIcon from '@material-ui/icons/DeleteForever'
import TelegramIcon from '@material-ui/icons/Telegram'
import moment from "moment"
import c from '../../styles/blog.module.css'
import { Link, useHistory } from "react-router-dom"
import useFetch from "../../pages/Admin/useFetch"

const SinglePost = ({ id }) => {

    const history = useHistory()

    let data = useFetch(`http://www.apnardeenijiggasa.com/backend/api/v1/questions/per/${id}`)
    let time = moment(data[0]?.date)

    const handleUnSave = id => {
        let saved = JSON.parse(localStorage.getItem('saved'))
        let filterdSave = saved.filter(item => item !== id)
        localStorage.setItem('saved', JSON.stringify(filterdSave))
        history.push('/blog')
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
                    <Button onClick={() => handleUnSave(id)} variant="contained" className={c.bottomButton}><DeleteForeverIcon color="secondary" /></Button>
                    <MakeComment id={id} />
                    <Button variant="contained" className={c.bottomButton}><TelegramIcon /></Button>
                </div>
            </div>
        </div>
    </div>
}

export default SinglePost