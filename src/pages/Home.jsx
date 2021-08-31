import Sidebar from "../components/home/Sidebar"
import QaForm from "../components/home/QaForm"
import Videoqa from "../components/home/Videoqa"
import Written from "../components/home/Written"
import RightSide from "../components/home/RightSide"


export default function Home() {

    let width = window.innerWidth < 1230
    let widthforSide = window.innerWidth < 1200

    return (
        <div className={`${width ? 'container' : ''} my-4`}>

            <div className="row">

                <div className="col-md-2 categ">
                    <Sidebar w={'180px'} />
                </div>

                <div className={widthforSide ? 'col-md-8' : 'col-md-6'}>
                    <Written />
                    <Videoqa />
                    <QaForm />
                </div>

                <div className={widthforSide ? 'col-md-4' : 'col-md-4'}>
                    <RightSide />
                </div>

            </div>
        </div>
    )
}
