import useFetch from "../Admin/useFetch"
import { useParams } from "react-router-dom"
import CategoryMain from "../CategoryMain"


export default function WrittenMain() {

    const { likId } = useParams()
    let data = useFetch(`/backend/api/v1/posts/likhito-proshno/${likId}`, likId)

    return <CategoryMain headings={'লিখিত প্রশ্নোত্তরসমূহ'} data={data} />
}
