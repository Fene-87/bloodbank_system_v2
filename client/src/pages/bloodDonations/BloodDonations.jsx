import Sidebar from '../../components/Sidebar/Sidebar';
import './BloodDonations.css';

const BloodDonations = () => {
    return (
        <div className='admin-container'>
            <Sidebar />
            <div className='overview-container'>
                <h2>Blood Donations</h2>
            </div>
        </div>
    )
}

export default BloodDonations;
