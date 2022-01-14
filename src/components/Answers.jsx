import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import { useState } from 'react';
import { useParams } from 'react-router';
import useFetch from '../utils/Hooks/useFetch';
import Spinner from './Spinner';

export default function Answers() {

    const { quId } = useParams()
    const [size, setSize] = useState(16)

    let data = useFetch(`https://apnardeenijiggasa.com/api/jiggasa/post/${quId}`)
    console.log(data);

    return data.length > 0 ? <div className="container bg-light py-5 mt-4">
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
        <Typography style={{ whiteSpace: "pre-line", fontSize: `${size}px` }} className="question">{data[0].question}</Typography>
        <h4>উত্তর : </h4> <hr style={{ height: '1px', color: '#ddd' }} />
        <Typography style={{ whiteSpace: "pre-line", fontSize: `${size}px` }} className="data[0]">{data[0].answer}</Typography> <br />
        <Typography style={{ borderLeft: '5px solid #26676c', backgroundColor: '#4ea6ad5c', padding: '10px', fontSize: `${size}px` }} className="reference">{data[0].ref && data[0].ref}</Typography>
    </div> : <div className="d-flex align-items-center justify-content-center" style={{minHeight: '80vh'}}><Spinner /></div>
}
