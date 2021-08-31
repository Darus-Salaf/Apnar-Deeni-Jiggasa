import Category from '../../components/home/Category'
import { nari } from '../../fakedata/category'

export default function NariCategories() {
    return <Category categories={nari} slug={'proshnottor'} headings={'নারী অঙ্গন'} isCategory={true}/>
}
