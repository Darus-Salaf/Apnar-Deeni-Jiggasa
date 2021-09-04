import { Button, Typography } from '@material-ui/core'
import AccountCircleIcon from '@material-ui/icons/AccountCircle'
import ReportComment from './ReportComment'

export default function Comment({ id, comment }) {

    return <div className="ms-3 p-3 my-3" style={{ border: '1px solid #25494c', borderRadius: '10px' }}>
        <div className="d-flex align-items-center justify-content-between">
            <div className="d-flex align-items-center justify-content-start">
                <AccountCircleIcon fontSize="large" style={{ color: '#eee', marginRight: '0.6rem' }} />
                <p className="text-light mb-0 fw-bold">{'USER'}</p>
            </div>
            <Button><ReportComment id={id} comment={comment} /></Button>
        </div>
        <div className={`my-4 bg-light p-3 text-dark question `} style={{ borderRadius: '10px' }}>
            <Typography style={{ whiteSpace: "pre-line" }}>{comment}</Typography>
        </div>
    </div>
}
