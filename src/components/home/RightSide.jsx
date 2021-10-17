import Contemporary from "./Contemporary"
import useFetch from "../../pages/Admin/useFetch"

export default function RightSide() {

    let data = useFetch('/api/jiggasa/posts/')
    let blogs = useFetch('/api/jiggasa/questions/per')

    return <>
        <Contemporary name={'সাম্প্রতিক বিষয়াদি'} item={data.slice(7, 12).reverse()} isWritten={true} />
        <div className="mt-md-5"><Contemporary name={'সাম্প্রতিক ব্লগ পোস্টসমূহ'} item={blogs.slice(0, 5)} isWritten={false} /></div>
    </>
}
