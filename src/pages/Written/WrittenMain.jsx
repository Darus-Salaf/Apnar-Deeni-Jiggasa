import useFetch from "../../utils/Hooks/useFetch"
import { useParams } from "react-router-dom"
import CategoryMain from "../CategoryMain"


export default function WrittenMain() {

    const { likId } = useParams()
    let data = useFetch(`https://apnardeenijiggasa.com/api/jiggasa/posts/likhito-proshno/${likId}`, likId)

    return <CategoryMain headings={'লিখিত প্রশ্নোত্তরসমূহ'} data={data} />
}
