import AdminSide from './AdminSide'
import List from './List'
import useFetch from './useFetch'

export default function PostList() {
    
    const data = useFetch('https://apnardeenijiggasa.com/api/jiggasa/posts')
    
    return <div className="row">
        <AdminSide />
        <div className="col-md-10">
            <h1 className="text-center text-light mt-4 border rounded py-3">পোস্ট লিস্ট ({data.length} টি)</h1>
            <List topic={'প্রশ্নের টপিক'} data={data} action={'edit'} />
        </div>
    </div>
}
