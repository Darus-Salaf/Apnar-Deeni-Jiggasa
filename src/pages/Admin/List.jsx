import React from 'react';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import TablePagination from '../../components/pagination/TablePagination';

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

const useStyles = makeStyles({
    table: {
        minWidth: 700,
    },
});

export default function List({ topic, data, action, isquestion }) {

    const classes = useStyles();

    return (
        <TableContainer component={Paper}>
            <Table className={classes.table} aria-label="customized table">
                <TableHead>
                    <TableRow>
                        <StyledTableCell>{topic}</StyledTableCell>
                        {isquestion && <StyledTableCell StyledTableCell> সময়</StyledTableCell>}
                        {action === 'edit' && <StyledTableCell StyledTableCell> এ্যাকশন</StyledTableCell>}
                        {isquestion && <StyledTableCell StyledTableCell> এ্যাকশন</StyledTableCell>}
                        <StyledTableCell>এ্যাকশন</StyledTableCell>
                    </TableRow>
                </TableHead>
                <TablePagination
                    data={data}
                    dataLimit={5}
                    action={action}
                    isquestion={isquestion}
                />
            </Table>
        </TableContainer >
    );
}
