import { useEffect, useState } from 'react'

export default function useFetch2(link, dep) {

  const [data, setData] = useState([])
  const [err, setErr] = useState(null)

  useEffect(() => {
    fetch(link)
      .then(res => res.json())
      .then(data => setData(data))
      .catch(err => setErr(err.message))
  }, [link, dep])

  return { data, err }

}