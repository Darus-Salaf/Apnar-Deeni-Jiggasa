import React from 'react'
import { useParams } from 'react-router-dom'
import AnswerList from '../../pages/AnswerList'
import useFetch2 from '../../utils/Hooks/useFetch2'
import Spinner from '../Spinner'

export default function QuestionList() {

  const { cat, subCat, type } = useParams()
  const { data, loading } = useFetch2(`https://darulislam.foundation/datacenter/api/${type}/cat/${cat}/sub/${subCat}/page/1`)

  return loading ? <div className="d-flex align-items-center justify-content-center" style={{ minHeight: '60vh' }}><Spinner /></div>
    : <AnswerList headings={subCat} data={data.response ?? []} type={type} />
}
