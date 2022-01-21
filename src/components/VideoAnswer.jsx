import { useEffect } from 'react'
import { useState } from 'react'
import { useParams } from 'react-router'
import Spinner from './Spinner'

export default function VideoAnswer() {

    const { vidId } = useParams()
    const [data, setData] = useState(null)
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        setLoading(true)
        fetch(`https://darulislam.foundation/datacenter/api/video/${vidId}`)
            .then(res => res.json())
            .then(data => {
                setLoading(false)
                setData(data)
            })
            .catch(err => {
                setLoading(false)
                console.log(err)
            })

    }, [vidId])

    return !loading ? <div className="container py-5 mt-5">
        <div className="videoMain">
            <iframe width="100%"
                src={data?.video[0]?.link}
                title={data?.video[0]?.question}
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
            />
        </div>
        <h1 className="text-center text-light my-3 border py-3 rounded">{data?.video[0]?.question}</h1>
    </div> : <div className="d-flex align-items-center justify-content-center" style={{ minHeight: '80vh' }}><Spinner /></div>
}
