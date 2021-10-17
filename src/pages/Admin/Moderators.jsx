import useFetch from './useFetch'
import AdminSide from './AdminSide'
import React from 'react';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import DeleteForeverIcon from '@material-ui/icons/DeleteForever'


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
        color: '#eee'
    }
});

export default function Moderators() {

    const classes = useStyles();
    let data = useFetch('/api/jiggasa/moderators')

    const handleReset = id => {
        fetch(`/api/jiggasa/moderators/remove/post/${id}`)
            .then(res => {
                if (res.status === 200) {
                    alert('Successfully Reset this moderator')
                    window.location.reload()
                } else alert('Failed to Reset this moderator, Please try again later')
            })
            .catch(err => alert(err.message))
    }

    return <div className="row">
        <AdminSide />
        <div className="col-md-10">
            <h1 className="text-center text-light mt-4 border rounded py-3"> মডারেটর লিস্ট ({data.length} টি)</h1>
            <div>
                <TableContainer component={Paper}>
                    <Table className={classes.table} aria-label="customized table">
                        <TableHead>
                            <TableRow>
                                <StyledTableCell StyledTableCell> নাম</StyledTableCell>
                                <StyledTableCell StyledTableCell> ইমেইল</StyledTableCell>
                                <StyledTableCell StyledTableCell> পোস্টসংখ্যা</StyledTableCell>
                                <StyledTableCell StyledTableCell> পোস্ট রিসেট করুন</StyledTableCell>
                            </TableRow>
                        </TableHead>
                        {
                            data.map((item, key) => <StyledTableRow key={key}>
                                <StyledTableCell>{item.name}</StyledTableCell>
                                <StyledTableCell>{item.email}</StyledTableCell>
                                <StyledTableCell>{item.post.length}</StyledTableCell>
                                <StyledTableCell><Button onClick={() => handleReset(item._id)} variant="contained" color="secondary"><DeleteForeverIcon /> রিসেট</Button></StyledTableCell>
                            </StyledTableRow>)
                        }
                    </Table>
                </TableContainer >
            </div>
        </div>
    </div>
}
