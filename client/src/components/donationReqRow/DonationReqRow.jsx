import { useDispatch } from 'react-redux';
import Axios from 'axios';
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
        const amount = 470;
        const approvedStatus = "Approved";

        dispatch(approveDonationRequest(donation_requests_id));

        Axios.put("http://localhost:3001/approvedonrequest", {
            status: approvedStatus,
            amount: amount,
            id: donation_requests_id,
        }).then(() => {
            console.log("successfully approved")
        })
        .catch((error) => {
            console.log(error)
        })
        
    }

    const reject = () => {
        const rejectedStatus = "Rejected";

        dispatch(rejectDonationRequest(donation_requests_id));
        Axios.put("http://localhost:3001/rejectdonrequest", {
            status: rejectedStatus,
            id: donation_requests_id,
        }).then(() => {
            console.log("Donation Rejected")
        })
        .catch((error) => {
            console.log(error)
        })
    }

    return (
        <div className='scheduled-donations-row'>
            <p className='scheduled-donations-name'>{first_name}</p>
            <p className='scheduled-donations-name'>{last_name}</p>
            <p className='scheduled-donations-email'>{email}</p>
            <p className='scheduled-donations-name'>{contact}</p>
            <p className='scheduled-donations-name'>{blood_group}</p>
            <p className='scheduled-donations-name'>{formattedDate}</p>
            <p className='scheduled-donations-location'>{location}</p>
            <p className='scheduled-donations-name'>{status}</p>
            <button onClick={approve} className='approve-btn'>Approve</button>
            <button onClick={reject} className='reject-btn'>Reject</button>
        </div>
    )
}

export default DonationReqRow;
