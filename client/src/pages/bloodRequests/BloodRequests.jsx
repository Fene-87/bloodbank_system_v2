import Sidebar from '../../components/Sidebar/Sidebar';
import { useSelector } from 'react-redux';
import './BloodRequests.css';
import BloodReqRow from '../../components/bloodReqRow/BloodReqRow';

const BloodRequests = () => {
    const { bloodRequestsList, status } = useSelector((store) => store.bloodRequests);

    return (
        <div className='admin-container'>
            <Sidebar />
            <div className='overview-container'>
                <h2>Blood Requests</h2>
                {bloodRequestsList.map((requestRow) => (
                    <BloodReqRow key={requestRow.blood_request_id} {...requestRow} />
                ))}
            </div>
        </div>
    )
}

export default BloodRequests;
