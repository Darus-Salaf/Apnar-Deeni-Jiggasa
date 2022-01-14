import { Link } from 'react-router-dom'
import c from '../../styles/qa.module.css'
import useFetch from '../../utils/Hooks/useFetch'
import Spinner from '../Spinner'

export default function Written() {

    let likhito = useFetch('https://apnardeenijiggasa.com/api/jiggasa/posts/likhito-proshno/tawheed')
    let nari = useFetch('https://apnardeenijiggasa.com/api/jiggasa/posts/nari-ongon/porda')

    return <div className={c.bg}>

        <div className={c.heading}><Link to="/likhito-proshno">লিখিত প্রশ্নোত্তর</Link></div>
        <hr className={c.hr} />

        <div className={c.list}>
            <ul>
                {!likhito.length && <div className="py-5 my-5 text-center"><Spinner /></div>}
                {
                    likhito.map((q, index) => <li key={index}><Link to={`/answer/${q._id}`}>{q.question}</Link></li>)
                }
            </ul>
        </div>

        <p><Link to="/likhito-proshno">MORE {'>>'}</Link></p>

        <div className={c.heading}><Link to="/nari-ongon">নারী অঙ্গন</Link></div>
        <hr className={c.hr} />

        <div className={c.list}>

            <ul>
                {
                    nari.slice(0, 3).map((q, index) => <li key={index}><Link to={`/answer/${q._id}`}>{q.question}</Link></li>)
                }
            </ul>
        </div>

        <p><Link to="/nari-ongon">MORE {'>>'}</Link></p>

    </div>
}
