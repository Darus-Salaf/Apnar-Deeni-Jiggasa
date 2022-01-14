import useFetch from "../../utils/Hooks/useFetch"
import { useParams } from "react-router-dom"
import CategoryMain from "../CategoryMain"


export default function NariMain() {

    const { nariId } = useParams()
    let data = useFetch(`https://apnardeenijiggasa.com/api/jiggasa/posts/nari-ongon/${nariId}`, nariId)

    return <CategoryMain headings={'প্রশ্নোত্তরসমূহ - নারী অঙ্গন'} data={data} />
}
