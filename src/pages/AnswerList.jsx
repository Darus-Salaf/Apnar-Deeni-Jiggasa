import QaForm from "../components/home/QaForm"
import RightSide from "../components/home/RightSide"
import c from '../styles/qa.module.css'
import { Link } from "react-router-dom"

let width = window.innerWidth < 1230

export default function AnswerList({ headings, data, type }) {

    return <div className={`${width ? 'container' : ''} my-4`}>

        <div className="row">

            <div className="col-lg-7 col-md-12">
                <div className={c.bg}>
                    <h2 className="text-light text-center"><span style={{ color: 'aqua' }}>{headings}</span> -বিষয়ক প্রশ্নোত্তর</h2> <hr style={{ height: '2px', color: '#eee' }} />
                    {
                        !data.length ?
                            <div style={{ textAlign: 'center', color: 'orange', minHeight: '10vh' }}>
                                <h3>
                                    <span style={{ color: 'aqua' }}>{headings} - </span> বিষয়ক কোনো প্রশ্নোত্তর পাওয়া যায়নি।
                                </h3>
                            </div> :
                            <div className={c.list}>
                                {
                                    type === 'video' ?
                                        <ul>
                                            {data.map((d, index) => <li key={index}><Link to={`/video-answer/q/${d.question.slice(0, 20)}/id/${d._id}`}>{d.question}</Link></li>)}
                                        </ul> :
                                        <ul>
                                            {data.map((d, index) => <li key={index}><Link to={`/answer/cat/${type}/id/${d._id}`}>{d.question}</Link> </li>)}
                                        </ul>

                                }
                            </div>
                    }
                </div>
                <div className="my-5"><QaForm /></div>
            </div>

            <div className="col-lg-5 col-md-12">
                <RightSide />
            </div>

        </div>
    </div>
}
