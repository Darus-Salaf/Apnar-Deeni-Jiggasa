import Category from '../../components/home/Category'
import { PdfCategories } from '../../fakedata/category'

export default function Pdf() {
    return <Category categories={PdfCategories} slug={'e-books'} headings={'ক্যাটাগরিভিত্তিক ডাউনলোড করুন পিডিএফ কিতাব'} />
}
