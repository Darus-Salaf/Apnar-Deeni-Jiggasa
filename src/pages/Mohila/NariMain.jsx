import useFetch from "../Admin/useFetch"
import { useParams } from "react-router-dom"
import CategoryMain from "../CategoryMain"


export default function NariMain() {

    const { nariId } = useParams()
    let data = useFetch(`http://139.59.11.242/backend/api/v1/posts/nari-ongon/${nariId}`, nariId)

    return <CategoryMain headings={'প্রশ্নোত্তরসমূহ - নারী অঙ্গন'} data={data} />
}
