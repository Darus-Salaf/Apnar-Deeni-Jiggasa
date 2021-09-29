import { Link } from "react-router-dom";

export default function Footer() {

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
                                <h5><Link to="/faq">FAQ</Link></h5>
                                <div>
                                    <div className="footerInput input-group my-3">
                                        <input type="text" class="form-control" placeholder="Search here..." aria-label="Search Button" aria-describedby="search here" />
                                        <button className="btn" type="button">Search</button>
                                    </div>
                                    <p>
                                        <Link to="/admin">Login</Link>
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
