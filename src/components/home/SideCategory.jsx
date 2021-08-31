import { Link } from 'react-router-dom'
import c from '../../styles/category.module.css'

export default function SideCategory({ name, cat, item, slug }) {
    return <>
        <div className={c.title}>
            <span><Link to={'/' + cat}>{name}</Link></span>
        </div>
        <ul>
            {
                item.map((i, index) => <li key={index}><Link to={`${slug}/${cat}/${i.subCat}`}>{i.name}</Link></li>)
            }
        </ul>
    </>
}
