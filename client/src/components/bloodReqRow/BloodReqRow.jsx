import { useDispatch } from 'react-redux';
import { approveBloodRequest, rejectBloodRequest } from '../../redux/bloodRequests/bloodRequestsSlice';
import './BloodReqRow.css';

const BloodReqRow = ({
    blood_request_id,
    first_name,
    last_name,
    email,
    blood_group,
    location,
    reason,
    status
}) => {
    const dispatch = useDispatch();

    const approve = () => {
        dispatch(approveBloodRequest(blood_request_id));
    }

    const reject = () => {
        dispatch(rejectBloodRequest(blood_request_id));
    }

    return (
        <div className='scheduled-donations-row'>
            <p className='scheduled-donations-name'>{first_name}</p>
            <p className='scheduled-donations-name'>{last_name}</p>
            <p className='scheduled-donations-email'>{email}</p>
            <p className='scheduled-donations-name'>{blood_group}</p>
            <p className='scheduled-donations-email'>{location}</p>
            <p className='scheduled-donations-email'>{reason}</p>
            <p className='scheduled-donations-name'>{status}</p>
            <button onClick={approve}>Approve</button>
            <button onClick={reject}>Reject</button>
        </div>
    )
}

export default BloodReqRow;
