import RightSide from "../../components/home/RightSide"
import QaForm from '../../components/home/QaForm'
import c from '../../styles/pdf.module.css'
import c2 from '../../styles/qa.module.css'
import { useParams } from "react-router-dom"
import useFetch from "../Admin/useFetch"
import booklogo from '../../icon/pdf.svg'
import PdfDialog from "../../components/PdfDialog"
import { Button } from "@material-ui/core"
import Spinner from "../../components/Spinner"

let width = window.innerWidth < 1230

export default function PdfMain() {

    const { pdfId } = useParams()
    let data = useFetch(`http://apnardeenijiggasa.com/backend/api/v1/pdfs/${pdfId}`)
    console.log(data)

    return <div className={`${width ? 'container' : ''} my-4`}>

        <div className="row">

            <div className="col-lg-7 col-md-12">
                <div className={c2.bg}>
                    <h1 className="text-light text-center">ক্যাটাগরিভিত্তিক পিডিএফ বইসমূহ</h1> <hr style={{ height: '2px', color: '#eee' }} />
                    <div className="row">
                        {!data.length && <div className="py-5 my-5 text-center"><Spinner /></div>}
                        {
                            data.map(pdf => <div className="col-xs-12 col-sm-6 col-md-6">
                                <div className={c.book}>
                                    <img src={booklogo} alt="pdfBook" />
                                    <p className="fw-bold">{pdf.name}</p>
                                    <div className="d-flex justify-content-evenly mt-3">
                                        <PdfDialog name={pdf.name} description={pdf.description} />
                                        <Button><a href={pdf.link} target="_blank" rel="noreferrer">ডাউনলোড</a></Button>
                                    </div>

                                </div>
                            </div>)
                        }
                    </div>
                </div>
                <div className="my-5"><QaForm /></div>
            </div>

            <div className="col-lg-5 col-md-12">
                <RightSide />
            </div>

        </div>
    </div>
}
