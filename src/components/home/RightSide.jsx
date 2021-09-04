import Contemporary from "./Contemporary"
import useFetch from "../../pages/Admin/useFetch"

export default function RightSide() {

    let data = useFetch('/backend/api/v1/posts/')
    let blogs = useFetch('/backend/api/v1/questions/per')

    return <>
        <Contemporary name={'সাম্প্রতিক বিষয়াদি'} item={data.reverse().slice(7, 12)} isWritten={true} />
        <div className="mt-md-5"><Contemporary name={'সাম্প্রতিক ব্লগ পোস্টসমূহ'} item={blogs.slice(0, 5)} isWritten={false} /></div>
        {/* <div className="mt-5"><div className={c.title}><Link to="/"><h1 className="p-3 fw-bold">বাচ্চাদের ইসলামী নামসমূহ</h1></Link></div></div> */}
    </>
}
