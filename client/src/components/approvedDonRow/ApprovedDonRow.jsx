import './ApprovedDonRow.css';

const ApprovedDonRow = ({
    donation_requests_id,
    first_name,
    last_name,
    email,
    contact,
    blood_group,
    location,
}) => {

    return (
        <div className='scheduled-donations-row'>
            <p className='scheduled-donations-name'>{first_name}</p>
            <p className='scheduled-donations-name'>{last_name}</p>
            <p className='scheduled-donations-email'>{email}</p>
            <p className='scheduled-donations-name'>{contact}</p>
            <p className='scheduled-donations-name'>{blood_group}</p>
            <p className='scheduled-donations-name'>470</p>
            <p className='scheduled-donations-email'>{location}</p>
        </div>
    )
}

export default ApprovedDonRow;
