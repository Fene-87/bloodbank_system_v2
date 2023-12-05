import { useDispatch } from 'react-redux';
import { approveDonationRequest, rejectDonationRequest } from '../../redux/donationRequests/donationRequestsSlice';
import './DonationReqRow.css';

const DonationReqRow = ({
    donation_requests_id,
    first_name,
    last_name,
    email,
    contact,
    blood_group,
    scheduled_date,
    location,
    status
}) => {
    const isoDateString = scheduled_date;
    const dateObject = new Date(isoDateString);
    const formattedDate = dateObject.toLocaleDateString('en-US');

    const dispatch = useDispatch();

    const approve = () => {
        dispatch(approveDonationRequest(donation_requests_id));
    }

    const reject = () => {
        dispatch(rejectDonationRequest(donation_requests_id));
    }

    return (
        <div className='scheduled-donations-row'>
            <p className='scheduled-donations-name'>{first_name}</p>
            <p className='scheduled-donations-name'>{last_name}</p>
            <p className='scheduled-donations-email'>{email}</p>
            <p className='scheduled-donations-name'>{contact}</p>
            <p className='scheduled-donations-name'>{blood_group}</p>
            <p className='scheduled-donations-name'>{formattedDate}</p>
            <p className='scheduled-donations-email'>{location}</p>
            <p className='scheduled-donations-name'>{status}</p>
            <button onClick={approve}>Approve</button>
            <button onClick={reject}>Reject</button>
        </div>
    )
}

export default DonationReqRow;
