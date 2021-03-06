import { Button } from "@material-ui/core";
import { useState } from "react";
import { Link, useHistory } from "react-router-dom";

export default function Footer() {

    const [input, setInput] = useState('')
    const isSignedIn = localStorage.getItem('admin_token') || localStorage.getItem('moderator_token')
    const history = useHistory()

    const handleLogout = () => {

        if (isSignedIn === localStorage.getItem('admin_token')) {
            localStorage.removeItem('admin_token')
            history.push('/')
            window.location.reload()
        } else if (isSignedIn === localStorage.getItem('moderator_token')) {
            localStorage.removeItem('moderator_token')
            localStorage.removeItem('hash')
            history.push('/')
            window.location.reload()
        }
    }

    return (
        <footer>
            <main>
                <div className="container">
                    <div className="row cntr">
                        <div className="col-md-5">
                            <div className="left">

                                <h2>আপনার দ্বীনি জিজ্ঞাসা</h2>
                                <p>একটি সম্পূর্ণ অলাভজনক প্রতিষ্ঠান, <br /> এবং স্ব-উদ্যোগে ব্যক্তিগত অর্থায়নে তৈরি ওয়েবসাইট।</p>
                                <h5><Link to="/about-us">আমাদের সম্পর্কে</Link></h5>
                                <div>
                                    <div className="footerInput input-group my-3">
                                        <input onChange={e => setInput(e.target.value)} type="text" class="form-control" placeholder="Search here..." aria-label="Search Button" aria-describedby="search here" />
                                        <button onClick={() => history.push(`/search/${input}`)} className="btn" type="button">Search</button>
                                    </div>
                                    <p>
                                        {isSignedIn && <Button variant="outlined" style={{ color: '#eee', borderColor: '#eee' }} onClick={handleLogout}>Logout</Button>}
                                        {!isSignedIn && <Link to="/admin">Login</Link>}
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="col-md-4">
                            <div className="middle">
                                <h3>ক্যাটাগরি</h3>

                                <div className="row">
                                    <div className="col-6 footerpl"><ul>
                                        <li><Link to="/likhito-proshno">লিখিত প্রশ্নোত্তর</Link></li>
                                        <li><Link to="/video-proshno">ভিডিও প্রশ্নোত্তর</Link></li>
                                        <li><Link to="/nastikkobad">নাস্তিক্যবাদের জবাব</Link></li>
                                    </ul></div>
                                    <div className="col-6"><ul>
                                        <li><Link to="/dua-zikr">দোয়া ও যিকির</Link></li>
                                        <li><Link to="/nari-ongon">মহিলা অঙ্গন</Link></li>
                                        <li><Link to="/blog">ব্লগ</Link></li>
                                    </ul></div>
                                </div>
                            </div>
                        </div>

                        <div className="col-md-3">
                            <div className="right">

                                <h3>যোগাযোগ</h3>
                                <div className="footerpl">
                                    <p>Md Razib Ahmed</p>
                                    <p>+966531080105</p>
                                    <p>razeemrazib@gmail.com</p>
                                    <p>Al Madrasha Street</p>
                                    <p>Al Jubail, KSA</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </footer>
    )
}
