import './ApprovedReqRow.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPrint } from '@fortawesome/free-solid-svg-icons'

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
            <button><FontAwesomeIcon icon={faPrint} /></button>
        </div>
    )
}

export default ApprovedReqRow;
