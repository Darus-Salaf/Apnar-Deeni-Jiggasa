import AdminSide from './AdminSide'
import List from './List'
import useFetch from './useFetch'

export default function PdfList() {

    const data = useFetch('http://139.59.11.242/backend/api/v1/pdfs')

    return <div className="row">
        <AdminSide />
        <div className="col-md-10">
            <h1 className="text-center text-light mt-4 border rounded py-3"> পিডিএফ লিস্ট ({data.length} টি)</h1>
            <List topic={'বইয়ের নাম'} data={data} action={'pdf'} />
        </div>
    </div>
}
