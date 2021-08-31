import QaForm from "./QaForm"
import Sidebar from "./Sidebar"
import c from '../../styles/category.module.css'
import RightSide from "./RightSide"
import { Link } from "react-router-dom"

let widthforSide = window.innerWidth < 1200
let width = window.innerWidth < 1230

export default function Category({ categories, headings, slug }) {

    return <div className={`${width ? 'container' : ''} my-4`}>

        <div className="row">

            <div className="col-md-2 categ">
                <Sidebar w={'180px'} />
            </div>

            <div className={widthforSide ? 'col-md-8' : 'col-md-6'}>

                <h2 className="text-center bangla text-light my-3">{headings}</h2> <hr style={{ height: '2px', color: '#eee' }} />
                <div className="row mb-5">
                    {
                        categories.map((cat, i) => (
                            <div className="col-lg-4 col-6" key={i}>
                                <Link to={`/${slug}/${cat.cat}/${cat.subCat}`}>
                                    <div className={c.category}>
                                        <img width="100px" height="100px" src={cat.icon} alt="category" />
                                        <h4>{cat.name}</h4>
                                    </div>
                                </Link>
                            </div>
                        ))
                    }
                </div>

                <QaForm />
            </div>

            <div className={widthforSide ? 'col-md-4' : 'col-md-4'}>
                <RightSide />
            </div>

        </div>
    </div>
}
