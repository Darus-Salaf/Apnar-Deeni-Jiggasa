import Category from '../../components/home/Category'
import { video } from '../../fakedata/category'

export default function VideoCategories() {
    return <Category categories={video} slug={'videos'} headings={'ক্যাটাগরিভিত্তিক ভিডিও প্রশ্নোত্তর'} isCategory={true} />
}
