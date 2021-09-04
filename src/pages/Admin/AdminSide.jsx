import c from '../../styles/admin.module.css'
import { Link } from "react-router-dom"

export default function AdminSide() {

    return <div className="col-md-2">
        <div style={{ minHeight: '80vh' }} className={c.admin}>
            <ul>
                <li><Link to="/create-post">প্রশ্ন ক্রিয়েট করুন</Link></li>
                <li><Link to="/post-list">সব প্রশ্নের লিস্ট</Link></li>
                <li><Link to="/create-video">ভিডিও ক্রিয়েট করুন</Link></li>
                <li><Link to="/video-list">সব ভিডিও লিস্ট</Link></li>
                <li><Link to="/create-pdf">পিডিএফ ক্রিয়েট করুন</Link></li>
                <li><Link to="/pdf-list">সব পিডিএফ লিস্ট</Link></li>
                <li><Link to="/user-question-list">ইউজারের প্রশ্ন লিস্ট</Link></li>
                <li><Link to="/reports">Reports</Link></li>
            </ul>
        </div>
    </div>
}
