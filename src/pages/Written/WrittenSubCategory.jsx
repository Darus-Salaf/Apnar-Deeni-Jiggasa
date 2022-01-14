import { useParams } from 'react-router-dom'
import SubCategories from '../../components/home/SubCategories'
import cats from '../../fakedata/cats'

export default function WrittenSubCategories() {

  const { subCat } = useParams()
  let _sub = cats.filter(item => item.cat === subCat)
  let subCategories = _sub.map(item => item.subCat)

  return <SubCategories categories={subCategories} headings={`${subCat}বিষয়ক লিখিত প্রশ্নোত্তর`} />
}
