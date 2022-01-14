import React from 'react';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import AdminSide from "./AdminSide";
import useFetch from "./useFetch";
import { Button, TableBody } from '@material-ui/core';
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Slide from '@material-ui/core/Slide';
import axios from 'axios';

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

const useStyles = makeStyles({
    table: {
        minWidth: 700,
    },
});


export default function Reports() {

    const deleteReport = id => {
        axios.delete(`https://apnardeenijiggasa.com/api/jiggasa/delete/report/${id}`)
            .then(res => {
                if (res.status === 200) {
                    alert('Successfully Deleted the Report !')
                    window.location.reload()
                } else alert('Deletion failed !')
            })
            .catch(err => alert(err.message))
    }

    const classes = useStyles();
    let data = useFetch('https://apnardeenijiggasa.com/api/jiggasa/report/comments')

    return <div className="row">
        <AdminSide />
        <div className="col-md-10">
            <h1 className="text-center text-light mt-4 border rounded py-3"> Reports ({data.length} টি)</h1>
            <TableContainer component={Paper}>
                <Table className={classes.table} aria-label="customized table">
                    <TableHead>
                        <TableRow>
                            <StyledTableCell>Comment ID</StyledTableCell>
                            <StyledTableCell>এ্যাকশন</StyledTableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {
                            data.map((d, i) => <StyledTableRow key={i}>
                                <StyledTableCell><ReportDialog id={d.id} comment={d.comment} /></StyledTableCell>
                                <StyledTableCell><Button onClick={() => deleteReport(d._id)} variant="contained" color="secondary">DELETE</Button></StyledTableCell>
                            </StyledTableRow>)
                        }
                    </TableBody>
                </Table>
            </TableContainer >
        </div>
    </div>
}


const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
})

function ReportDialog({ id, comment }) {

    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    }

    const handleClose = () => {
        setOpen(false);
    }

    return (
        <div>
            <Button onClick={handleClickOpen} style={{color: '#eee'}}>
                {id}
            </Button>
            <Dialog
                open={open}
                TransitionComponent={Transition}
                keepMounted
                onClose={handleClose}
                aria-labelledby="alert-dialog-slide-title"
                aria-describedby="alert-dialog-slide-description"
            >
                <DialogTitle id="alert-dialog-slide-title" className="text-light">Reported Comment ID : {id}</DialogTitle>
                <DialogContent>
                    <DialogContentText className="text-light" id="alert-dialog-slide-description">
                        {comment}
                    </DialogContentText>
                </DialogContent>
            </Dialog>
        </div>
    )
}
