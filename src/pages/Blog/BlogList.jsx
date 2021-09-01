import FavoriteIcon from '@material-ui/icons/Favorite'
import BlogPost from "../../components/blog/BlogPost"
import CreateBlog from "../../components/blog/CreateBlog"
import RightSide from "../../components/home/RightSide"
import useFetch from "../Admin/useFetch"
import c from '../../styles/category.module.css'
import { Link } from 'react-router-dom'


export default function BlogList() {

    let lists = []
    let data = useFetch('http://139.59.11.242/backend/api/v1/questions/per')
    data.map(i => lists.unshift(i))
    let width = window.innerWidth < 1230
    return <div className={`${width ? 'container' : ''} my-4`}>

        <div className="row">

            <div className='col-md-8'>
                <CreateBlog />
                {
                    lists.map(list => <BlogPost id={list._id} name={list.name} question={list.question} date={list.date} />)
                }
            </div>

            <div className='col-md-4'>
                <div className={`${c.title} py-3 mt-0 mb-5`} style={{ backgroundColor: '#163c3f !important' }}>
                    <Link to="/blogpost/bookmark">
                        <h3 className="mb-0"><FavoriteIcon color="secondary" fontSize="large" /> Loved Blog Posts </h3>
                    </Link>
                </div>
                <RightSide />
            </div>

        </div>
    </div>
}
