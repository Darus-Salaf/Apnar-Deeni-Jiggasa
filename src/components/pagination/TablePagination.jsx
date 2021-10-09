import React, { useEffect, useState } from "react"
import { withStyles } from '@material-ui/core/styles'
import TableBody from '@material-ui/core/TableBody'
import TableCell from '@material-ui/core/TableCell'
import TableRow from '@material-ui/core/TableRow'
import { Button } from '@material-ui/core'
import { DeleteForever } from '@material-ui/icons'
import './pagination.css'
import axios from "axios"
import Edit from "../Edit"
import moment from "moment"
import Answer from "../Answer"

const StyledTableCell = withStyles((theme) => ({
    head: {
        backgroundColor: '#163c3f',
        color: '#eee',
        fontWeight: 600,
        fontSize: '1.2rem'
    },
    body: {
        fontSize: 13,
        color: '#eee',
    },
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
    root: {
        '&:nth-of-type(odd)': {
            backgroundColor: '#4d878b',
        },
        '&:hover': {
            backgroundColor: '#163c3f'
        }
    },
}))(TableRow);

export default function TablePagination({ data, action, isquestion }) {

    const [dataLimit, setDataLimit] = useState(5)
    const [currentPage, setCurrentPage] = useState(1)
    const [countedData, setCountedData] = useState([])

    let pages = Math.ceil(data.length / dataLimit)
    let localCurrentPage = localStorage.getItem('currentPage')
    let _currentPage = localCurrentPage ? localCurrentPage : currentPage
    let __currentPage = Number(_currentPage)

    const goToNextPage = () => {
        setCurrentPage(page => page + 1)
        localStorage.setItem('currentPage', __currentPage + 1)
    }
    const goToPreviousPage = () => {
        setCurrentPage(page => page - 1)
        localStorage.setItem('currentPage', __currentPage - 1)
    }

    useEffect(() => {
        const startIndex = __currentPage * dataLimit - dataLimit
        const endIndex = startIndex + dataLimit;
        let newData = data.slice(startIndex, endIndex)
        setCountedData(newData)
    }, [data, dataLimit, __currentPage])

    const handleDeleteQuestion = id => {
        axios.delete(`/api/jiggasa/delete/question/${id}`)
            .then(res => {
                if (res.status === 200) {
                    alert('Successfully Deleted !')
                    window.location.reload()
                } else alert('Deletion failed !')
            })
            .catch(err => alert(err.message))
    }
    const handleDeletePost = id => {
        axios.delete(`/api/jiggasa/delete/post/${id}`)
            .then(res => {
                if (res.status === 200) {
                    alert('Successfully Deleted !')
                    window.location.reload()
                } else alert('Deletion failed !')
            })
            .catch(err => alert(err.message))
    }
    const handleDeleteVideo = id => {
        axios.delete(`/api/jiggasa/delete/video/${id}`)
            .then(res => {
                if (res.status === 200) {
                    alert('Successfully Deleted this video !')
                    window.location.reload()
                } else alert('Deletion failed !')
            })
            .catch(err => alert(err.message))
    }
    const handleDeletePdf = id => {
        axios.delete(`/api/jiggasa/delete/pdf/${id}`)
            .then(res => {
                if (res.status === 200) {
                    alert('Successfully Deleted this pdf !')
                    window.location.reload()
                } else alert('Deletion failed !')
            })
            .catch(err => alert(err.message))
    }

    return (<>
        <TableBody>
            {countedData.map((item, index) => {
                return <StyledTableRow key={index}>
                    <StyledTableCell >
                        {isquestion && item.question}
                        {!isquestion && (item.topic || item.name)}
                    </StyledTableCell>
                    {isquestion && <StyledTableCell>{moment(item.date).format("DD/MM/YY, HH:mm")}</StyledTableCell>}
                    {
                        action === 'edit' &&
                        <StyledTableCell><Edit id={item._id} topic={item.topic} question={item.question} answer={item.answer} /></StyledTableCell>
                    }
                    {
                        action === 'ques' &&
                        <StyledTableCell><Answer question={item.question} id={item._id} status={item.status} style={{ pointerEvents: item.status === 'per' ? 'none' : '' }}
                            variant="contained" color={item.status === 'per' ? '' : 'primary'}>
                            {item.status === 'per' ? 'গৃহীত' : 'উত্তর লিখুন'}
                        </Answer>
                        </StyledTableCell>

                    }
                    {action === 'edit' && <StyledTableCell><Button onClick={() => handleDeletePost(item._id)} variant="contained" color="secondary">ডিলিট <DeleteForever className="ps-1 ms-2" /> </Button></StyledTableCell>}
                    {isquestion && <StyledTableCell><Button onClick={() => handleDeleteQuestion(item._id)} variant="contained" color="secondary">ডিলিট <DeleteForever className="ps-1 ms-2" /> </Button></StyledTableCell>}
                    {action === 'video' && <StyledTableCell><Button onClick={() => handleDeleteVideo(item._id)} variant="contained" color="secondary">ডিলিটv <DeleteForever className="ps-1 ms-2" /> </Button></StyledTableCell>}
                    {action === 'pdf' && <StyledTableCell><Button onClick={() => handleDeletePdf(item._id)} variant="contained" color="secondary">ডিলিটp <DeleteForever className="ps-1 ms-2" /> </Button></StyledTableCell>}

                </StyledTableRow>
            })}
        </TableBody>

        <nav className="navbar myNav justify-content-center mt-5 mb-3">
            <ul className="pagination d-flex align-items-center">
                <li>
                    <Button
                        variant="contained" color="primary"
                        onClick={goToPreviousPage}
                        className={__currentPage === 1 ? 'disabled' : ''}
                    >
                        prev
                    </Button>
                </li>
                <p className="my-auto px-2">Page <span className="text-light px-1 fw-bold">{__currentPage}</span> of <span className="text-light px-1 fw-bold">{pages}</span></p>
                <li>
                    <Button
                        variant="contained" color="primary"
                        onClick={goToNextPage}
                        className={__currentPage === pages ? 'disabled' : ''}
                    >
                        next
                    </Button>
                </li>
                <li>
                    <p className=" ps-3 mb-0">Item per page
                        <select onChange={e => setDataLimit(e.target.value)} className="ms-2">
                            <option value={5}>5</option>
                            <option value={10}>10</option>
                            <option value={15}>15</option>
                            <option value={20}>20</option>
                        </select>
                    </p>
                </li>
            </ul>
        </nav>
    </>)

}
