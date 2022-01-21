import { Link } from 'react-router-dom'

export default function SideCategory({ name, cat, item, slug }) {
    return <ul>
        {
            item.map((i, index) => <li key={index}><Link to={`${slug}/${cat}/${i.subCat}`}>{i}</Link></li>)
        }
    </ul>
}
