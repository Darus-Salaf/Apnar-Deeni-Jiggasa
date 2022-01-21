import { Link } from 'react-router-dom';
import cats from '../../fakedata/cats';
import c from '../../styles/category.module.css'

export default function Sidebar({ w, b }) {
    const cat = cats.map(item => item.cat)
    return (
        <div className={c.bg} style={{ maxWidth: w, borderRadius: '20px' }}>
            <ul>
                {
                    cat.map((d, i) => <li key={i}><Link to={`/category/${d}/type/post`}>{d}</Link></li>)
                }
            </ul>
        </div>
    )
}
