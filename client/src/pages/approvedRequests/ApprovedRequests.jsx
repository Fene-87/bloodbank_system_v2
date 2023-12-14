import { useSelector } from 'react-redux';
import Sidebar from '../../components/Sidebar/Sidebar';
import './ApprovedRequests.css';
import ApprovedReqRow from '../../components/approvedReqRow/ApprovedReqRow';

const ApprovedRequests = () => {
    const { bloodRequestsList, status } = useSelector((store) => store.bloodRequests);

    const approvedRequests = bloodRequestsList.filter((item) => item.status === 'Approved');

    return (
        <div className='admin-container'>
            <Sidebar />
            <div className='overview-container'>
                <h2 className="dashboard-overview">Approved Requests</h2>
                <div className='scheduled-donations-header'>
                  <p className='scheduled-donations-email'>First Name</p>
                  <p className='scheduled-donations-email'>Last Name</p>
                  <p className='scheduled-donations-email'>Email</p>
                  <p className='scheduled-donations-email'>Blood Group</p>
                  <p className='scheduled-donations-email'>Location</p>
                </div>
                {approvedRequests.map((item) => (
                    <ApprovedReqRow key={item.blood_request_id} {...item} />
                ))}
            </div>
        </div>
    )
}

export default ApprovedRequests;
