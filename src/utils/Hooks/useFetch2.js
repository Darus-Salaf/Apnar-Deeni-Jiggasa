import { useEffect, useState } from 'react'

export default function useFetch2(link, dep) {

  const [data, setData] = useState([])
  const [err, setErr] = useState(null)
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    setLoading(true)
    fetch(link)
      .then(res => res.json())
      .then(data => {
        setData(data)
        setLoading(false)
      })
      .catch(err => {
        setLoading(false)
        setErr(err.message)
      })
  }, [link, dep])

  return { data, err, loading }

}