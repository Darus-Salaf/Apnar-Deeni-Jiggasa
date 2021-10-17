import AdminSide from './AdminSide'
import List from './List'
import useFetch from './useFetch'

export default function VideoList() {

    const data = useFetch('https://apnardeenijiggasa.com/api/jiggasa/videos')

    return <div className="row">
        <AdminSide />
        <div className="col-md-10">
            <h1 className="text-center text-light mt-4 border rounded py-3">ভিডিও লিস্ট ({data.length} টি)</h1>
            <List topic={'ভিডিওর টপিক'} data={data} action='videoedit' />
        </div>
    </div>
}
