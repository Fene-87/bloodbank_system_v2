import Sidebar from '../../components/Sidebar/Sidebar';
import './BloodDonations.css';

const BloodDonations = () => {
    const { donationRequestsList, status } = useSelector((store) => store.donationRequests);

    const approved = donationRequestsList.filter((item) => item.status === 'Approved');
    
    return (
        <div className='admin-container'>
            <Sidebar />
            <div className='overview-container'>
                <h2>Approved Donations</h2>
            </div>
        </div>
    )
}

export default BloodDonations;
