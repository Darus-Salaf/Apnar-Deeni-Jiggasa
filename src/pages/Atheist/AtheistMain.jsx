import useFetch from "../Admin/useFetch"
import { useParams } from "react-router-dom"
import CategoryMain from "../CategoryMain"


export default function AtheistMain() {

    const { athId } = useParams()
    let data = useFetch(`http://139.59.11.242/backend/api/v1/posts/nastikkobad/${athId}`, athId)

    return <CategoryMain headings={'নাস্তিক্যবাদের জবাবসমূহ'} data={data} />
}
