import { Link } from "react-router-dom";
import CustomMenu from './CustomMenu'
import c from '../../../styles/header.module.css'
import { categoryLink, menuLink } from '../../../fakedata/links';

let width = window.innerWidth < 1230

export default function Navbar() {

    return <>
        <div className={`${c.navbar} ${width ? 'container' : ''}`}>
            <div className="d-flex align-items-center justify-content-between">
                <div className={c.menuItem}>
                    <ul>
                        <li><Link to="/">মূলপাতা</Link></li>
                        <li><Link to="/Quran">কুরআন</Link></li>
                        <li><Link to="/Hadis">হাদীস</Link></li>
                        <li><Link to="/Dua-Zikir">দোয়া ও যিকির</Link></li>
                        <li><Link to="/pdf-books">পিডিএফ বই</Link></li>
                        <li><Link to="/nastikkobad">নাস্তিক্যবাদ</Link></li>
                        <li><Link to="/about-us">আমাদের সম্পর্কে</Link></li>
                    </ul>
                </div>
                <div className={c.search}>
                    <input
                        type="text"
                        placeholder="এখানে সার্চ করুন"
                    />
                </div>
            </div>
        </div>

        <div className={c.mobileNav}>
            <div className="container d-flex align-items-center justify-content-between" id="notMobile">
                <div className="d-flex">
                    <CustomMenu title={'মেনুবার'} links={menuLink} />
                    <div className="vLine"></div>
                    <CustomMenu title={'ক্যাটাগরি'} links={categoryLink} />
                </div>
                <div className={c.search} id="notMobile2">
                    <input
                        type="text"
                        placeholder="এখানে সার্চ করুন"
                    />
                </div>
            </div>
        </div>
    </>
}
