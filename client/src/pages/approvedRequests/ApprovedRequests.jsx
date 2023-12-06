import Sidebar from '../../components/Sidebar/Sidebar';
import './ApprovedRequests.css';

const ApprovedRequests = () => {
    return (
        <div className='admin-container'>
            <Sidebar />
            <div className='overview-container'>
                <h2>Approved Requests</h2>
            </div>
        </div>
    )
}

export default ApprovedRequests;
