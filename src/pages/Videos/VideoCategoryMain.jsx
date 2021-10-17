import RightSide from '../../components/home/RightSide';
import QaForm from '../../components/home/QaForm';
import c2 from '../../styles/qa.module.css'
import { useParams } from 'react-router-dom';
import useFetch from '../Admin/useFetch';
import VideoDialog from '../../components/VideoDialog';
import Spinner from '../../components/Spinner';

let width = window.innerWidth < 1230

export default function VideoCategoryMain() {

    const { vidId } = useParams()
    let data = useFetch(`/api/jiggasa/videos/${vidId}`, vidId)

    return <div className={`${width ? 'container' : ''} my-4`}>

        <div className="row">

            <div className="col-lg-7 col-md-12">
                <div className={c2.bg}>
                    <h1 className="text-light text-center">ক্যাটাগরিভিত্তিক ভিডিওসমূহ</h1> <hr style={{ height: '2px', color: '#eee' }} />
                    <div className={c2.video}>
                        <ul>
                            {!data.length && <div className="py-5 my-5 text-center"><Spinner /></div>}
                            {
                                data.map(vid => <li><VideoDialog topic={vid.topic} link={vid.link} /></li>)
                            }
                        </ul>
                    </div>
                </div>
                <div className="my-5"><QaForm /></div>
            </div>

            <div className="col-lg-5 col-md-12">
                <RightSide />
            </div>

        </div>
    </div>
}
