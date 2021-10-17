import React from 'react'
import Button from '@material-ui/core/Button'
import TextField from '@material-ui/core/TextField'
import Dialog from '@material-ui/core/Dialog'
import DialogActions from '@material-ui/core/DialogActions'
import DialogContent from '@material-ui/core/DialogContent'
import ChatBubbleOutlineIcon from '@material-ui/icons/ChatBubbleOutline'
import DialogTitle from '@material-ui/core/DialogTitle'
import c from '../../styles/blog.module.css'

export default function Answer({ id }) {

    const [open, setOpen] = React.useState(false)
    const [text, setText] = React.useState({
        comment: ''
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
        if (text.comment) {
            fetch(`https://apnardeenijiggasa.com/api/jiggasa/comment`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ id, comment: text.comment })
            })
                .then(res => {
                    if (res.status === 200) {
                        alert('Successfully Commented !')
                        setOpen(false)
                        setText({comment: ''})
                    } else {
                        alert('Failed to comment. Please try again')
                        window.location.reload()
                    }
                })
                .catch(err => alert(err.message))
        } else alert('Please edit the fields')
    }

    return <div>

        <Button onClick={handleClickOpen} className={c.bottomButton} variant="contained"> <ChatBubbleOutlineIcon /></Button>

        <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">

            <DialogTitle id="form-dialog-title" style={{ color: '#eee', fontWeight: 'bold' }}>Enter Your Comment</DialogTitle>

            <DialogContent style={{ color: '#eee !important' }}>
                <TextField
                    margin="dense"
                    id="name"
                    label="write a comment..."
                    fullWidth
                    multiline
                    name="comment"
                    rows="4"
                    onChange={e => handleChange(e)}
                />
            </DialogContent>
            <DialogActions>
                <Button onClick={handleClose} variant="contained" color="secondary">
                    Cancel
                </Button>
                <Button onClick={handleUpdate} variant="contained" color="primary">
                    Comment
                </Button>
            </DialogActions>
        </Dialog>
    </div>
}
