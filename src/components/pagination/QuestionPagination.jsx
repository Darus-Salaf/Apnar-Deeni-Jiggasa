import { Button } from "@material-ui/core"
import { useEffect, useState } from "react"
import Dialog from '../Dialog'
import './pagination.css'

export default function QuestionPagination({ data, pageLimit }) {

    let dataLimit = 3
    let pages = Math.ceil(data.length / dataLimit)
    const [currentPage, setCurrentPage] = useState(1)

    useEffect(() => {
        window.scrollTo({ behavior: 'smooth', top: '0px' });
    }, [currentPage]);
    const goToNextPage = () => {
        setCurrentPage(page => page + 1)
    }
    const goToPreviousPage = () => {
        setCurrentPage(page => page - 1)
    }
    const getPaginatedData = () => {
        const startIndex = currentPage * dataLimit - dataLimit
        const endIndex = startIndex + dataLimit;
        return data.slice(startIndex, endIndex)
    }

    return (
        <>

            {getPaginatedData().map((d, index) => <li key={index}><Dialog topic={d.topic} question={d.question} answer={d.answer} /> </li>)}

            <nav className="navbar myNav justify-content-center mt-5 mb-3">
                <ul className="pagination d-flex align-items-center">
                    <li>
                        <Button
                            variant="contained" color="primary"
                            onClick={goToPreviousPage}
                            className={currentPage === 1 ? 'disabled' : ''}
                        >
                            prev
                        </Button>
                    </li>
                    <li>
                        <Button
                            variant="contained" color="primary"
                            onClick={goToNextPage}
                            className={currentPage === pages ? 'disabled' : ''}
                        >
                            next
                        </Button>
                    </li>
                </ul>
            </nav>

            {/* <nav className="navbar myNav justify-content-center pt-5">
                <ul className="pagination">
                    <li className="page-item">
                        <button
                            onClick={goToPreviousPage}
                            className={`page-link ${currentPage === 1 ? 'disabled' : ''}`}
                        >
                            prev
                        </button>
                    </li>
                    <li>
                        <ul className="pageCount">
                            {getPaginationGroup().map((item, index) => (
                                <button
                                    key={index}
                                    onClick={changePage}
                                    className={`page-link ${currentPage === item ? 'active' : null}`}
                                >
                                    <li className="page-item">{item}</li>
                                </button>
                            ))}
                        </ul>
                    </li>
                    <li className="page-item">
                        <button
                            onClick={goToNextPage}
                            className={`page-link ${currentPage === pages ? 'disabled' : ''}`}
                        >
                            next
                        </button>
                    </li>
                </ul>
            </nav> */}
        </>
    )
}
