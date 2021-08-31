import { sheikhs } from '../../fakedata/sheikh'
import c from '../../styles/qa.module.css'
import c2 from '../../styles/category.module.css'
import { Link } from 'react-router-dom'

export default function Videoqa() {
    return (
        <div className="my-5">

            <div className={c.heading}><Link to="/video-proshno">ভিডিও প্রশ্নোত্তর</Link></div>
            <hr className={c.hr} />

            <div className={`${c.bg} row p-4 mt-4`}>
                {
                    sheikhs.slice(0, 4).map((sheikh, i) => (
                        <div className="col-6" key={i}>
                            <div className="p-2">
                                <a href="/"><img width="100%" height="150px" style={{ borderRadius: '5px' }} src={sheikh.img} alt="sheikh" /></a>
                                <div className="mt-3 mb-4 text-center"><a className={c2.capsul} href="/">{sheikh.name}</a></div>
                            </div>
                        </div>
                    ))
                }
                <p><Link to="/video-proshno">MORE {'>>'}</Link></p>
            </div>
        </div>
    )
}
