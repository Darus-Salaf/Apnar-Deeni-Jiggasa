import QaForm from "../components/home/QaForm"
import Dialog from "../components/Dialog"
import RightSide from "../components/home/RightSide"
import c from '../styles/qa.module.css'
import Spinner from "../components/Spinner"

let width = window.innerWidth < 1230

export default function CategoryMain({ headings, data }) {

    console.log(data, headings)

    return <div className={`${width ? 'container' : ''} my-4`}>

        <div className="row">

            <div className="col-lg-7 col-md-12">
                <div className={c.bg}>
                    <h1 className="text-light text-center">{headings}</h1> <hr style={{ height: '2px', color: '#eee' }} />
                    <div className={c.list}>
                        <ul>
                            {!data.length && <div className="py-5 my-5 text-center"><Spinner /></div>}
                            {
                                data.map((q, index) => <li key={index}><Dialog question={q.question} topic={q.topic} answer={q.answer} /></li>)
                            }
                        </ul>
                    </div>
                </div>
                <div className="my-5"><QaForm /></div>
            </div>

            <div className="col-lg-5 col-md-12">
                <RightSide />
            </div>

        </div>
    </div>
}
