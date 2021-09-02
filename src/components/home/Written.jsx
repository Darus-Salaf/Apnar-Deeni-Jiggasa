import { Link } from 'react-router-dom'
import Dialog from '../Dialog'
import c from '../../styles/qa.module.css'
import useFetch from '../../pages/Admin/useFetch'
import Spinner from '../Spinner'

export default function Written() {

    let likhito = useFetch('/backend/api/v1/posts/likhito-proshno/tawheed')
    let nari = useFetch('/backend/api/v1/posts/nari-ongon/salat')

    return <div className={c.bg}>

        <div className={c.heading}><Link to="/likhito-proshno">লিখিত প্রশ্নোত্তর</Link></div>
        <hr className={c.hr} />

        <div className={c.list}>
            <ul>
                {!likhito.length && <div className="py-5 my-5 text-center"><Spinner /></div>}
                {
                    likhito.map((q, index) => <li key={index}><Dialog question={q.question} topic={q.topic} answer={q.answer} /></li>)
                }
            </ul>
        </div>

        <p><Link to="/likhito-proshno">MORE {'>>'}</Link></p>

        <div className={c.heading}><Link to="/nari-ongon">নারী অঙ্গন</Link></div>
        <hr className={c.hr} />

        <div className={c.list}>

            <ul>
                {
                    nari.slice(0, 3).map((q, index) => <li key={index}><Dialog question={q.question} topic={q.topic} answer={q.answer} /></li>)
                }
            </ul>
        </div>

        <p><Link to="/nari-ongon">MORE {'>>'}</Link></p>

    </div>
}
