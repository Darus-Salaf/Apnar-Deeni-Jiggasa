import React from 'react'
import Button from '@material-ui/core/Button'
import TextField from '@material-ui/core/TextField'
import Dialog from '@material-ui/core/Dialog'
import DialogActions from '@material-ui/core/DialogActions'
import DialogContent from '@material-ui/core/DialogContent'
import DialogContentText from '@material-ui/core/DialogContentText'
import DialogTitle from '@material-ui/core/DialogTitle'
import CreateIcon from '@material-ui/icons/Create'

export default function Edit({ id, topic, question, answer }) {

    const [open, setOpen] = React.useState(false)
    const [text, setText] = React.useState({
        topic: '',
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
        if (text.topic && text.answer) {
            fetch('https://apnardeenijiggasa.com/api/jiggasa/update/post', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ id: id, topic: text.topic, answer: text.answer })
            })
                .then(res => {
                    if (res.status === 200) {
                        alert('Post Edited Successfully')
                        window.location.reload()
                    } else alert('Failded to edit post !')
                })
                .catch(err => alert(err.message))
        } else alert('Please edit the fields')
    }

    return <div>
        <Button onClick={handleClickOpen} variant="contained" color="primary">এডিট <CreateIcon fontSize="small" className="ps-1 ms-2" /></Button>

        <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
            <DialogTitle id="form-dialog-title" style={{ color: '#eee', fontWeight: 'bold' }}>Edit this post</DialogTitle>
            <DialogContent style={{ color: '#eee !important' }}>
                <DialogContentText style={{ color: '#eee' }}>
                    <strong>প্রশ্নঃ</strong>{' '} {question}
                </DialogContentText>
                <TextField
                    margin="dense"
                    id="name"
                    label="টপিক"
                    fullWidth
                    name="topic"
                    defaultValue={topic}
                    onChange={e => handleChange(e)}
                />
                <TextField
                    margin="dense"
                    id="name"
                    label="উত্তর"
                    fullWidth
                    multiline
                    name="answer"
                    rows="5"
                    defaultValue={answer}
                    onChange={e => handleChange(e)}
                />
            </DialogContent>
            <DialogActions>
                <Button onClick={handleClose} variant="contained" color="secondary">
                    Cancel
                </Button>
                <Button onClick={handleUpdate} variant="contained" color="primary">
                    Update
                </Button>
            </DialogActions>
        </Dialog>
    </div>
}
