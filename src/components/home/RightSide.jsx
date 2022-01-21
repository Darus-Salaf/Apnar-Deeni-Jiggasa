import Contemporary from "./Contemporary"
import useFetch from "../../utils/Hooks/useFetch"
// import useFetch2 from "../../utils/Hooks/useFetch2"

export default function RightSide() {

    let data = useFetch('http://localhost:5000/datacenter/api/post/')
    let blogs = useFetch('https://apnardeenijiggasa.com/api/jiggasa/questions/per')

    // const [data, setData] = useState(null)

    return <>
        <Contemporary name={'সাম্প্রতিক বিষয়াদি'} item={data} isWritten={true} />
        <div className="mt-md-5"><Contemporary name={'সাম্প্রতিক ব্লগ পোস্টসমূহ'} item={blogs.slice(0, 5)} isWritten={false} /></div>
    </>
}
