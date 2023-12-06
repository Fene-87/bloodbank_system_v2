import Sidebar from '../../components/Sidebar/Sidebar';
import { useSelector } from 'react-redux';
import './BloodRequests.css';
import BloodReqRow from '../../components/bloodReqRow/BloodReqRow';

const BloodRequests = () => {
    const { bloodRequestsList, status } = useSelector((store) => store.bloodRequests);

    const list = bloodRequestsList.filter((item) => item.status === 'Pending');

    return (
        <div className='admin-container'>
            <Sidebar />
            <div className='overview-container'>
                <h2 className="dashboard-overview">Blood Requests</h2>
                <div className='scheduled-donations-header'>
                  <p className='scheduled-donations-name'>First Name</p>
                  <p className='scheduled-donations-name'>Last Name</p>
                  <p className='scheduled-donations-email'>Email</p>
                  <p className='scheduled-donations-name'>Blood Grp</p>
                  <p className='scheduled-donations-email'>Location</p>
                  <p className='scheduled-donations-email'>Reason</p>
                  <p className='scheduled-donations-name'>Status</p>
            </div>
                {list.map((requestRow) => (
                    <BloodReqRow key={requestRow.blood_request_id} {...requestRow} />
                ))}
            </div>
        </div>
    )
}

export default BloodRequests;
