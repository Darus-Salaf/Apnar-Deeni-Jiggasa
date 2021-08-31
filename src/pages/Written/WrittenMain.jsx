import useFetch from "../Admin/useFetch"
import { useParams } from "react-router-dom"
import CategoryMain from "../CategoryMain"


export default function WrittenMain() {

    const { likId } = useParams()
    let data = useFetch(`http://139.59.11.242/backend/api/v1/posts/likhito-proshno/${likId}`, likId)

    return <CategoryMain headings={'লিখিত প্রশ্নোত্তরসমূহ'} data={data} />
}
