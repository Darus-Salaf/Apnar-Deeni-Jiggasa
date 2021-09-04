import React from 'react';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Dialog from '@material-ui/core/Dialog';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz'

function SimpleDialog(props) {
    const { onClose, open, id, comment } = props;

    const handleClose = () => {
        onClose()
    }

    const handleReport = () => {
        fetch(`/backend/api/v1/report/comment`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ id, comment })
        })
            .then(res => console.log(res))
            .catch(err => console.log(err.message))
        onClose();
    }

    return (
        <Dialog onClose={handleClose} aria-labelledby="simple-dialog-title" open={open}>
            <DialogTitle id="simple-dialog-title" style={{ color: '#eee' }}>Choose an action</DialogTitle>
            <List>
                <ListItem button>
                    <Button onClick={() => handleReport()}><ListItemText style={{ color: '#eee', backgroundColor: '#1b585c', padding: '5px 7px' }} primary={'Report this comment for deletion'} /></Button>
                </ListItem>
            </List>
        </Dialog>
    );
}

SimpleDialog.propTypes = {
    onClose: PropTypes.func.isRequired,
    open: PropTypes.bool.isRequired,
    selectedValue: PropTypes.string.isRequired,
};

export default function ReportComment({ id, comment }) {
    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    }

    const handleClose = (value) => {
        setOpen(false);
    }

    return (
        <div>
            <Button style={{ color: '#eee' }} onClick={handleClickOpen}>
                <MoreHorizIcon />
            </Button>
            <SimpleDialog open={open} id={id} comment={comment} onClose={handleClose} />
        </div>
    );
}
