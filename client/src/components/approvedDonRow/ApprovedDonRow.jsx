import './ApprovedDonRow.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPrint } from '@fortawesome/free-solid-svg-icons';
import { useReactToPrint } from 'react-to-print';
import { useDispatch } from 'react-redux';
import { getDonation } from '../../redux/donationRequests/donationRequestsSlice';

const ApprovedDonRow = ({
    donation_requests_id,
    first_name,
    last_name,
    email,
    contact,
    blood_group,
    location,
}) => {
    const dispatch = useDispatch();

    const getPrint = () => {
        dispatch(getDonation(donation_requests_id))
    }

    return (
        <div className='scheduled-donations-row'>
            <p className='scheduled-donations-name'>{first_name}</p>
            <p className='scheduled-donations-name'>{last_name}</p>
            <p className='scheduled-donations-email'>{email}</p>
            <p className='scheduled-donations-name'>{contact}</p>
            <p className='scheduled-donations-name'>{blood_group}</p>
            <p className='scheduled-donations-name'>470</p>
            <p className='scheduled-donations-email'>{location}</p>
            <button onClick={getPrint}><FontAwesomeIcon icon={faPrint} /></button>
        </div>
    )
}

export default ApprovedDonRow;
