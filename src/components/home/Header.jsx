import { Link } from 'react-router-dom'
import c from '../../styles/header.module.css'

let width = window.innerWidth < 1230

export default function Header() {
    return (
        <div className={width ? 'container' : ''} id="back-to-top">
            <div className="text-center my-3">
                <Link to="/">
                    <div className={c.header}>
                        <h5>
                            জ্ঞানীদের জিজ্ঞাসা করো, যদি তোমরা না জানো (সূরা নাহল-৪৩)
                        </h5>
                        <h1>
                            আপনার দ্বীনি জিজ্ঞাসা
                        </h1>
                    </div></Link>
            </div>
        </div>
    )
}
