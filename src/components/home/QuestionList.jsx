import React from 'react'
import { useParams } from 'react-router-dom'
import useFetch2 from '../../utils/Hooks/useFetch2'

export default function QuestionList() {

  const { cat, subCat } = useParams()
  const { data, err } = useFetch2(`http://localhost:5000/datacenter/api/posts/cat/${cat}/sub/${subCat}/page/1`)
  console.log('dataaaa', data)
  console.log('errorsss', err)

  return (
    <div>
      <h1>cat {cat}</h1>
      <h1>Subcat {subCat}</h1>
    </div>
  )
}
