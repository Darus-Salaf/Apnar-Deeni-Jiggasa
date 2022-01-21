import Categorycopy from '../../components/home/Categorycopy'
import cats from '../../fakedata/cats'

export default function WrittenCategories() {
    return <Categorycopy types='post' categories={cats} headings={'ক্যাটাগরিভিত্তিক লিখিত প্রশ্নোত্তর'} />
}
