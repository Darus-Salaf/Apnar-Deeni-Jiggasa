import AdminSide from './AdminSide'

export default function Admin() {
    return (
        <div className="row">
            <AdminSide />
            <div className="col-md-10">
                <h1 className="text-center text-light mt-4 border py-5">Welcome to Admin Panel</h1>
            </div>
        </div>
    )
}
