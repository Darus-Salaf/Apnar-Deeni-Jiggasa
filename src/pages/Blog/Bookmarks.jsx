import RightSide from "../../components/home/RightSide"
import { useEffect, useState } from "react"
import SinglePost from "../../components/blog/SinglePost"


export default function Bookmarks() {

    let width = window.innerWidth < 1230
    const [saved, setSaved] = useState([])
    useEffect(() => {
        let saves = localStorage.getItem('saved')
        setSaved(JSON.parse(saves))
    }, [])

    return <div className={`${width ? 'container' : ''} my-4`}>

        <div className="row">

            <div className='col-md-8'>
                <h1 className="text-center text-info">The Blog Posts You Loved</h1>
                <hr style={{ height: '2px', color: '#eee' }} />
                {
                    saved.map(save => <SinglePost id={save} />)
                }
            </div>

            <div className='col-md-4'>
                <RightSide />
            </div>

        </div>
    </div>
}
