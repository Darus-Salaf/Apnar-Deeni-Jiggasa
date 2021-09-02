import { Link, useHistory } from "react-router-dom"
import SearchIcon from '@material-ui/icons/Search'
import CustomMenu from './CustomMenu'
import c from '../../../styles/header.module.css'
import { categoryLink, menuLink } from '../../../fakedata/links'
import { InputAdornment, TextField } from "@material-ui/core"
import { useState } from "react"

let width = window.innerWidth < 1230

export default function Navbar() {

    const history = useHistory()
    const [input, setInput] = useState('')

    const handleMobileSearch = e => {
        e.preventDefault()
        history.push(`/search/${input}`)
    }
    const handlePCSearch = () => {
        history.push(`/search/${input}`)
    }

    return <>
        <div className={`${c.navbar} ${width ? 'container' : ''}`}>
            <div className="d-flex align-items-center justify-content-between">
                <div className={c.menuItem}>
                    <ul>
                        <li><Link to="/">মূলপাতা</Link></li>
                        <li><Link to="/Dua-Zikir">দোয়া ও যিকির</Link></li>
                        <li><Link to="/pdf-books">পিডিএফ বই</Link></li>
                        <li><Link to="/nastikkobad">নাস্তিক্যবাদ</Link></li>
                        <li><Link to="/blog">ব্লগ</Link></li>
                        <li><Link to="/about-us">আমাদের সম্পর্কে</Link></li>
                    </ul>
                </div>
                <form onSubmit={e => handleMobileSearch(e)}>
                    <div className={c.search}>
                        <input
                            type="text"
                            placeholder="এখানে সার্চ করুন"
                            onChange={e => setInput(e.target.value)}
                        />
                        <button onClick={() => handlePCSearch()}>
                            <SearchIcon style={{ color: '#eee' }} />
                        </button>
                    </div>
                </form>
            </div>
        </div>

        <div className={c.mobileNav}>
            <div className="pe-2 d-flex align-items-center justify-content-between" id="notMobile">
                <div className="d-flex">
                    <CustomMenu title={'মেনুবার'} links={menuLink} />
                    <div className="vLine"></div>
                    <CustomMenu title={'ক্যাটাগরি'} links={categoryLink} />
                </div>


                <form className={c.mobileForm} onSubmit={e => handleMobileSearch(e)} style={{ width: '50%' }}>
                    <TextField
                        onChange={e => setInput(e.target.value)}
                        placeholder="Search here..."
                        InputProps={{
                            endAdornment: (
                                <InputAdornment position="start">
                                    <SearchIcon style={{ color: '#eee' }} />
                                </InputAdornment>
                            ),
                        }}
                    />
                </form>
            </div>
        </div>
    </>
}
