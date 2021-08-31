import Category from '../../components/home/Category'
import { written } from '../../fakedata/category'

export default function WrittenCategories() {
    return <Category categories={written} slug={'proshnottor'} headings={'ক্যাটাগরিভিত্তিক লিখিত প্রশ্নোত্তর'} />
}
