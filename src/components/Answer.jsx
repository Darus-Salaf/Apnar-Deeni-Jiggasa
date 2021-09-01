import React from 'react'
import Button from '@material-ui/core/Button'
import TextField from '@material-ui/core/TextField'
import Dialog from '@material-ui/core/Dialog'
import DialogActions from '@material-ui/core/DialogActions'
import DialogContent from '@material-ui/core/DialogContent'
import DialogContentText from '@material-ui/core/DialogContentText'
import DialogTitle from '@material-ui/core/DialogTitle'
import CreateIcon from '@material-ui/icons/Create'

export default function Answer({ children, question, id, status }) {

    const [open, setOpen] = React.useState(false)
    const [text, setText] = React.useState({
        answer: ''
    })

    const handleChange = e => {
        let texts = { ...text }
        texts[e.target.name] = e.target.value
        setText(texts)
    }

    const handleClickOpen = () => {
        setOpen(true)
    }

    const handleClose = () => {
        setOpen(false)
    }

    const handleUpdate = () => {
        if (text.answer) {
            fetch(`http://localhost:5000/backend/api/v1/update/question`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ id, answer: text.answer })
            })
                .then(res => {
                    if (res.status === 200) {
                        alert('Question answered and approved successfully !')
                        window.location.reload()
                    } else {
                        alert('Failed to approved question. Please reload the page and try again')
                        window.location.reload()
                    }
                })
                .catch(err => alert(err.message))
        } else alert('Please edit the fields')
    }

    return <div>
        <Button style={{pointerEvents: status === 'per' ? 'none' : ''}} onClick={handleClickOpen} variant="contained" color={status === 'per' ? '' : 'primary'}> {children} <CreateIcon fontSize="small" className="ps-1 ms-2" /></Button>

        <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
            <DialogTitle id="form-dialog-title" style={{ color: '#eee', fontWeight: 'bold' }}>Answer this Qustion</DialogTitle>
            <DialogContent style={{ color: '#eee !important' }}>
                <DialogContentText style={{ color: '#eee' }}>
                    <strong>প্রশ্নঃ</strong>{' '} {question}
                </DialogContentText>
                <TextField
                    margin="dense"
                    id="name"
                    label="উত্তর লিখুন"
                    fullWidth
                    multiline
                    name="answer"
                    rows="5"
                    value={text.answer}
                    onChange={e => handleChange(e)}
                />
            </DialogContent>
            <DialogActions>
                <Button onClick={handleClose} variant="contained" color="secondary">
                    Cancel
                </Button>
                <Button onClick={handleUpdate} variant="contained" color="primary">
                    Post Answer
                </Button>
            </DialogActions>
        </Dialog>
    </div>
}
