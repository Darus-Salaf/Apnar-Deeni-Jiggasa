import { Typography } from '@material-ui/core'
import AccountCircleIcon from '@material-ui/icons/AccountCircle'
import moment from 'moment'

export default function Comment({ name, comment, date }) {

    // let time = moment(date)

    return <div className="row p-2 my-3 border rounded">
        <div className="col-1"><AccountCircleIcon fontSize="large" style={{ color: '#eee' }} /></div>
        <div className="col-11">
            <p className="text-light mb-0 fw-bold">{'USER'}</p>
            {/* <p className="text-light mb-0" style={{ fontSize: '0.7rem' }}>{time.format("DD . MM . YY , HH:mm")}</p> */}
            <div className={`my-4 bg-light p-3 text-dark question `} style={{ borderRadius: '10px' }}>
                <Typography style={{ whiteSpace: "pre-line" }}>{comment}</Typography>
            </div>
        </div>
    </div>
}
