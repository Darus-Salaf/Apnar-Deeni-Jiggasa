import useFetch from '../../pages/Admin/useFetch'
import c from '../../styles/qa.module.css'
import { Link } from 'react-router-dom'

export default function Videoqa() {

    const data = useFetch('/api/jiggasa/videos')
    console.log(data)

    return (
        <div className="my-5">

            <div className={c.heading}><Link to="/video-proshno">ভিডিও প্রশ্নোত্তর</Link></div>
            <hr className={c.hr} />

            <div className={`${c.bg} row p-4 mt-4`}>
                {
                    data.reverse().slice(0, 4).map((video, i) => (
                        <div className="col-6" key={i}>
                            <div className="p-2">
                                <div className="videoMain2">
                                    <iframe width="100%"
                                        src={video.link}
                                        title={video.topic}
                                        frameborder="0"
                                    />
                                </div>
                                <div className="mt-3 mb-4"><Link style={{borderLeft: '5px solid #eee', paddingLeft: '5px'}} to={`/videos/video-proshno/${video.cat}`}>{video.topic}</Link></div>
                            </div>
                        </div>
                    ))
                }
                <p><Link to="/video-proshno">MORE {'>>'}</Link></p>
            </div>
        </div>
    )
}
