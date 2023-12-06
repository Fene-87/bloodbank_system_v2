import './ApprovedReqRow.css';

const ApprovedReqRow = ({
    blood_request_id,
    first_name,
    last_name,
    email,
    blood_group,
    location,
}) => {

    return (
        <div className='scheduled-donations-row'>
            <p className='scheduled-donations-email'>{first_name}</p>
            <p className='scheduled-donations-email'>{last_name}</p>
            <p className='scheduled-donations-email'>{email}</p>
            <p className='scheduled-donations-email'>{blood_group}</p>
            <p className='scheduled-donations-email'>{location}</p>
        </div>
    )
}

export default ApprovedReqRow;
