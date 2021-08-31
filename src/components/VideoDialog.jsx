import React from 'react'
import PlayCircleOutlineIcon from '@material-ui/icons/PlayCircleOutline';
import { makeStyles } from '@material-ui/core/styles'
import Button from '@material-ui/core/Button'
import Dialog from '@material-ui/core/Dialog'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import IconButton from '@material-ui/core/IconButton'
import Slide from '@material-ui/core/Slide'
import CloseIcon from '@material-ui/icons/Close'
import { useHistory } from 'react-router-dom'

const useStyles = makeStyles((theme) => ({
    appBar: {
        position: 'relative',
    },
    toolbar: {
        justifyContent: 'space-between'
    }
}))

const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />
});

export default function VideoDialog(props) {

    const history = useHistory()
    const classes = useStyles()
    const [open, setOpen] = React.useState(false)

    const handleClickOpen = () => {
        setOpen(true)
    };

    const handleClose = () => {
        setOpen(false)
    };

    const handleHome = () => {
        history.push('/')
        setOpen(false)
    }

    return (
        <>
            <Button onClick={handleClickOpen}>
                <PlayCircleOutlineIcon fontSize="large" className="me-1" /> {props.topic}
            </Button>
            <Dialog fullScreen open={open} onClose={handleClose} TransitionComponent={Transition}>
                <AppBar className={classes.appBar} id="qAppbar">
                    <Toolbar className={classes.toolbar}>
                        <IconButton edge="start" color="inherit" onClick={handleClose} aria-label="close">
                            <Button variant="outlined" autoFocus color="inherit" className="bangla fw-light"><CloseIcon /></Button>
                        </IconButton>
                        <span>{' '}</span>
                        <Button className="bangla fw-light" variant="outlined" autoFocus color="inherit" onClick={handleHome}>
                            হোম
                        </Button>
                    </Toolbar>
                </AppBar>
                <div className="container py-5 mt-5">
                    <div className="videoMain">
                        <iframe width="100%"
                            src={props.link}
                            title="YouTube video player"
                            frameborder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                        />
                    </div>
                    <h1 className="text-center text-light my-3 border py-3 rounded">{props.topic}</h1>
                </div>

            </Dialog>
        </>
    )
}
