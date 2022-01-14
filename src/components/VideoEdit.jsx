import React from 'react'
import Button from '@material-ui/core/Button'
import TextField from '@material-ui/core/TextField'
import Dialog from '@material-ui/core/Dialog'
import DialogActions from '@material-ui/core/DialogActions'
import DialogContent from '@material-ui/core/DialogContent'
import DialogTitle from '@material-ui/core/DialogTitle'
import CreateIcon from '@material-ui/icons/Create'

export default function VideoEdit({ id, topic, link }) {

    const [open, setOpen] = React.useState(false)
    const [text, setText] = React.useState({
        topic: '',
        link: ''
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
        if (text.topic && text.link) {
            fetch('https://apnardeenijiggasa.com/api/jiggasa/update/video', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ id: id, topic: text.topic, link: text.link })
            })
                .then(res => {
                    if (res.status === 200) {
                        alert('Video Edited Successfully')
                        window.location.reload()
                    } else alert('Failed to edit this Video, please try again later!')
                })
                .catch(err => alert(err.message))
        } else alert('Please edit the fields')
    }

    return <div>
        <Button onClick={handleClickOpen} variant="contained" color="primary">এডিট <CreateIcon fontSize="small" className="ps-1 ms-2" /></Button>

        <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
            <DialogTitle id="form-dialog-title" style={{ color: '#eee', fontWeight: 'bold' }}>Edit this video</DialogTitle>
            <DialogContent style={{ color: '#eee !important' }}>

                <TextField
                    margin="dense"
                    id="name"
                    label="টপিক"
                    fullWidth
                    multiline
                    rows="5"
                    name="topic"
                    defaultValue={topic}
                    onChange={e => handleChange(e)}
                />
                <TextField
                    margin="dense"
                    id="name"
                    label="লিংক"
                    fullWidth
                    multiline
                    name="link"
                    rows="2"
                    defaultValue={link}
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
