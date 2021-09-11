import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Button from '@material-ui/core/Button'
import Dialog from '@material-ui/core/Dialog'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import IconButton from '@material-ui/core/IconButton'
import Typography from '@material-ui/core/Typography'
import Slide from '@material-ui/core/Slide'
import { useHistory } from 'react-router-dom'

const useStyles = makeStyles((theme) => ({
    appBar: {
        position: 'relative',
    },
    toolbar: {
        justifyContent: 'space-between'
    },
    title: {
        marginLeft: theme.spacing(2),
        flex: 1,
        fontFamily: `'Hind Siliguri', sans-serif !important;`
    },
}));

const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});

export default function FullScreenDialog(props) {

    const history = useHistory()
    const [size, setSize] = React.useState(16)
    const classes = useStyles();
    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const handleHome = () => {
        history.push('/')
        setOpen(false);
    }

    return (
        <>
            <Button onClick={handleClickOpen}>
                {props.topic}
            </Button>
            <Dialog fullScreen open={open} onClose={handleClose} TransitionComponent={Transition}>
                <AppBar className={classes.appBar} id="qAppbar">
                    <Toolbar className={classes.toolbar}>
                        <IconButton edge="start" color="inherit" onClick={handleClose} aria-label="close">
                            <Button variant="outlined" autoFocus color="inherit" className="bangla fw-light">বন্ধ করুন</Button>
                        </IconButton>
                        <span> {' '} </span>
                        <Button className="bangla fw-light" variant="outlined" autoFocus color="inherit" onClick={handleHome}>
                            হোম
                        </Button>
                    </Toolbar>
                </AppBar>
                <div className="container bg-light py-5 mt-4">
                    <div className="qHeader mt-t">
                        <div className="qButton">
                            <span className="text-danger bangla pe-2">ফন্ট সাইজ :</span>
                            <Button onClick={() => setSize(prev => prev + 1)} variant="contained"> + </Button>
                            <span className="size">{size}</span>
                            <Button onClick={() => setSize(prev => prev - 1)} variant="contained"> - </Button>
                        </div>
                        <h4>প্রশ্ন : </h4>
                    </div>
                    <hr style={{ height: '1px', color: '#ddd' }} />
                    <Typography style={{ whiteSpace: "pre-line", fontSize: `${size}px` }} className="question">{props.question}</Typography>
                    <h4>উত্তর : </h4> <hr style={{ height: '1px', color: '#ddd' }} />
                    <Typography style={{ whiteSpace: "pre-line", fontSize: `${size}px` }} className="answer">{props.answer}</Typography> <br />
                    <Typography style={{ borderLeft: '5px solid #26676c', backgroundColor: '#4ea6ad5c', padding: '10px', fontSize: `${size}px` }} className="reference">{props.refs && props.refs}</Typography>
                </div>

            </Dialog>
        </>
    );
}
