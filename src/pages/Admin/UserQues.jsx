import AdminSide from './AdminSide'
import List from './List'
import useFetch from './useFetch'

export default function UserQues() {

    const data = useFetch('http://localhost:5000/api/v1/questions')

    return <div className="row">
        <AdminSide />
        <div className="col-md-10">
            <h1 className="text-center text-light mt-4 border rounded py-3"> ইউজারের প্রশ্ন ({data.length} টি)</h1>
            <List topic={'প্রশ্ন'} data={data} action={'ques'} isquestion={true} />
        </div>
    </div>
}
