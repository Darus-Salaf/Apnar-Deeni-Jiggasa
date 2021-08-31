import { useEffect, useState } from 'react'

export default function useFetch(link, dep) {

    const [data, setData] = useState([])

    useEffect(() => {
        fetch(link)
            .then(res => res.json())
            .then(data => setData(data))
            .catch(err => console.log(err.message))
    }, [link, dep])

    return data

}