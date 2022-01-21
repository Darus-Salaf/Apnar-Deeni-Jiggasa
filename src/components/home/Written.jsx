import { Link } from 'react-router-dom'
import c from '../../styles/qa.module.css'
import useFetch from '../../utils/Hooks/useFetch'
import useFetch2 from '../../utils/Hooks/useFetch2'
import Spinner from '../Spinner'

export default function Written() {

    let { data, loading } = useFetch2('http://localhost:5000/datacenter/api/post')
    let nari = useFetch('http://localhost:5000/datacenter/api/nari/')

    return <div className={c.bg}>

        <div className={c.heading}><Link to="/likhito-proshno">লিখিত প্রশ্নোত্তর</Link></div>
        <hr className={c.hr} />

        <div className={c.list}>
            <ul>
                {loading ? <div className="py-5 my-5 text-center"><Spinner /></div>
                    :
                    data?.response?.map((q, index) => <li key={index}><Link to={`/answer/cat/post/id/${q._id}`}>{q.topic}</Link></li>)
                }
            </ul>
        </div>

        <p><Link to="/likhito-proshno">MORE {'>>'}</Link></p>

        <div className={c.heading}><Link to="/nari-ongon">নারী অঙ্গন</Link></div>
        <hr className={c.hr} />

        <div className={c.list}>

            <ul>
                {
                    nari?.response?.map((q, index) => <li key={index}><Link to={`/answer/cat/nari/id/${q._id}`}>{q.question}</Link></li>)
                }
            </ul>
        </div>

        <p><Link to="/nari-ongon">MORE {'>>'}</Link></p>

    </div>
}
