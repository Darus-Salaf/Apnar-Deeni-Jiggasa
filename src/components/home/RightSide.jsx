import { contemBlog } from "../../fakedata/category"
import Contemporary from "./Contemporary"
import c from '../../styles/category.module.css'
import { Link } from "react-router-dom"
import useFetch from "../../pages/Admin/useFetch"

export default function RightSide() {

    let data = useFetch('http://apnardeenijiggasa.com/backend/api/v1/posts/')

    return <>
        <Contemporary name={'সাম্প্রতিক বিষয়াদি'} item={data.slice(0, 5)} isWritten={true} />
        <div className="mt-md-5"><Contemporary name={'সাম্প্রতিক ব্লগ পোস্টসমূহ'} item={contemBlog} isWritten={false} /></div>
        <div className="mt-5"><div className={c.title}><Link to="/"><h1 className="p-3 fw-bold">বাচ্চাদের ইসলামী নামসমূহ</h1></Link></div></div>
    </>
}
