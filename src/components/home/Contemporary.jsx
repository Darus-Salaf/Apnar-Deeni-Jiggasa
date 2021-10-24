import { Link } from 'react-router-dom'
import c from '../../styles/qa.module.css'
import Spinner from '../Spinner'

export default function Contemporary({ name, item, isWritten }) {
    return <>
        <div className={c.bg2}>
            <h5>{name}</h5>
            <ul style={{ display: isWritten ? 'none' : 'block' }}>
                {
                    item.map((i, index) => <li className={c.listItem} key={index}><Link className={c.contempList} to={`/blog-post/${i._id}`}>{i.question.slice(0, 80)}. . .</Link></li>)
                }
            </ul>
            <ul style={{ display: !isWritten ? 'none' : 'block' }}>
                {!item.length && <div className="py-5 my-5 text-center"><Spinner /></div>}
                {
                    item.map((i, index) => <><li className={c.listItem} key={index}><Link to={`/answer/${i._id}`}>{i.question}</Link></li><hr style={{ height: '01px', color: '#ddd', margin: '0px' }} /></>)
                }
            </ul>
        </div>
    </>
}
