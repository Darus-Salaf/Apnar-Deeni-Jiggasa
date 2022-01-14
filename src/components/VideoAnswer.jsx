import React from 'react'
import { useParams } from 'react-router'
import useFetch from '../pages/Admin/useFetch'
import Spinner from './Spinner'

export default function VideoAnswer() {

    const { vidId } = useParams()
    let data = useFetch(`https://apnardeenijiggasa.com/api/jiggasa/video/${vidId}`)

    return data.length > 0 ? <div className="container py-5 mt-5">
        <div className="videoMain">
            <iframe width="100%"
                src={data[0].link}
                title={data[0].topic}
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
            />
        </div>
        <h1 className="text-center text-light my-3 border py-3 rounded">{data[0].topic}</h1>
    </div> : <div className="d-flex align-items-center justify-content-center" style={{minHeight: '80vh' }}><Spinner /></div>
}
