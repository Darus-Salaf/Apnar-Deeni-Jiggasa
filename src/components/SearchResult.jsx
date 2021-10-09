import { useParams } from "react-router-dom"
import useFetch from "../pages/Admin/useFetch"
import RightSide from "./home/RightSide"
import c from '../styles/qa.module.css'
import Spinner from "./Spinner"
import Dialog from '../components/Dialog'
import QaForm from '../components/home/QaForm'

export default function SearchResult() {

    const { search } = useParams()

    let data = useFetch('/api/jiggasa/posts')
    let filteredData = data.filter(item => item.answer.toLowerCase().includes(search.toLowerCase()))

    let width = window.innerWidth < 1230

    return (
        <div className={`${width ? 'container' : ''} my-4`}>
            <div className="row">

                <div className='col-md-8'>

                    <div className={c.bg}>

                        <h1 className="text-center text-light">
                            "{search}" নিয়ে {filteredData.length}টি ফলাফল পাওয়া গিয়েছে।
                        </h1><hr style={{ height: '1px', color: '#eee' }} />

                        <div className={c.list}>
                            <ul>
                                {!filteredData.length && <div className="py-5 my-5 text-center"><Spinner /></div>}
                                {
                                    filteredData.map((q, index) => <li key={index}><Dialog question={q.question} topic={q.topic} answer={q.answer} /></li>)
                                }
                            </ul>
                        </div>
                    </div>
                    <div className="my-5">
                        <QaForm />
                    </div>
                </div>

                <div className='col-md-4'>
                    <RightSide />
                </div>

            </div>
        </div>
    )
}
