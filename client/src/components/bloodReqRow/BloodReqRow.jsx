import { useDispatch } from 'react-redux';
import { approveBloodRequest, rejectBloodRequest } from '../../redux/bloodRequests/bloodRequestsSlice';
import './BloodReqRow.css';
import Axios from 'axios';

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
        const approvedStatus = 'Approved';

        dispatch(approveBloodRequest(blood_request_id));

        Axios.put("http://localhost:3001/server/admin/approvebloodrequest", {
            status: approvedStatus,
            id: blood_request_id,
        }).then(() => {
            console.log("Successfully approved");
        }).catch((error) => {
            throw(error);
        })

    }

    const reject = () => {
        const rejectedStatus = 'Rejected';

        dispatch(rejectBloodRequest(blood_request_id));

        Axios.put("http://localhost:3001/server/admin/rejectbloodrequest", {
            status: rejectedStatus,
            id: blood_request_id,
        }).then(() => {
            console.log("Successfully rejected");
        }).catch((error) => {
            throw(error);
        })
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
            <button onClick={approve} className='approve-btn'>Approve</button>
            <button onClick={reject} className='reject-btn'>Reject</button>
        </div>
    )
}

export default BloodReqRow;
