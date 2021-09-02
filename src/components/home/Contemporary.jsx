import { Link } from 'react-router-dom'
import Dialog from '../Dialog'
import c from '../../styles/qa.module.css'
import Spinner from '../Spinner'

export default function Contemporary({ name, item, isWritten }) {
    return <>
        <div className={c.bg2}>
            <h5>{name}</h5>
            <ul style={{ display: isWritten ? 'none' : 'block' }}>
                {
                    item.map((i, index) => <li key={index}><Link className={c.contempList} to={`/blog-post/${i._id}`}>{i.name}</Link></li>)
                }
            </ul>
            <ul style={{ display: !isWritten ? 'none' : 'block' }}>
                {!item.length && <div className="py-5 my-5 text-center"><Spinner /></div>}
                {
                    item.map((i, index) => <li key={index}><Dialog question={i.question} topic={i.topic} answer={i.answer} /></li>)
                }
            </ul>
        </div>
    </>
}
