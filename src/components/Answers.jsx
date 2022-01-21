import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import Spinner from './Spinner';
import { Dialog, DialogContent } from '@material-ui/core';

export default function Answers() {

    const { quId, qtype } = useParams()
    const [size, setSize] = useState(16)
    const [data, setData] = useState(null)
    const [loading, setLoading] = useState(false)
    const [open, setOpen] = useState(false)

    useEffect(() => {
        setLoading(true)
        fetch(`http://localhost:5000/datacenter/api/${qtype}/${quId}`)
            .then(res => res.json())
            .then(data => {
                setData(data)
                setLoading(false)
            })
            .catch(err => {
                setLoading(false)
                console.log(err)
            })
    }, [qtype, quId])

    return !loading ? <div div className="container bg-light py-5 mt-4" >
        <div className="qHeader mt-t">
            <div style={{ minWidth: '30px' }}>
                <Dialog
                    open={open}
                    onClose={() => setOpen(false)}
                >
                    <DialogContent style={{padding: '20px'}}>
                        <Button style={{fontSize: '1.2rem'}} onClick={() => setSize(prev => prev + 1)} variant="contained"> + </Button>
                        <span style={{padding: '0 20px', color: 'aqua', fontWeight: 'bold', fontSize: '1.2rem'}}>{size}</span>
                        <Button style={{fontSize: '1.2rem'}} onClick={() => setSize(prev => prev - 1)} variant="contained"> - </Button>
                    </DialogContent>
                </Dialog>
            </div>
            <div className="d-flex justify-content-between align-items-center">
                <h4 style={{ marginBottom: '0px' }}>প্রশ্ন : </h4>
                <Button onClick={() => setOpen(!open)}>ফন্ট সাইজ</Button>
            </div>
        </div>
        <hr style={{ height: '1px', color: '#ddd' }} />
        <Typography style={{ whiteSpace: "pre-line", fontSize: `${size}px` }} className="question">{data?.post[0]?.question}</Typography>
        <h4>উত্তর : </h4> <hr style={{ height: '1px', color: '#ddd' }} />
        <Typography style={{ whiteSpace: "pre-line", fontSize: `${size}px` }}>{data?.post[0]?.answer}</Typography> <br />
        <Typography style={{ borderLeft: '5px solid #26676c', backgroundColor: '#4ea6ad5c', padding: '10px', fontSize: `${size}px` }} className="reference">{data?.post[0]?.reference && data?.post[0]?.reference}</Typography>
    </div > : <div className="d-flex align-items-center justify-content-center" style={{ minHeight: '80vh' }}><Spinner /></div>
}