import Sidebar from '../../components/Sidebar/Sidebar';
import { useSelector } from 'react-redux';
import store from '../../redux/store/store';
import './scheduledDonations.css';
import DonationReqRow from '../../components/donationReqRow/DonationReqRow';

const ScheduledDonations = () => {
    const { donationRequestsList, status } = useSelector((store) => store.donationRequests);

    const pendingList = donationRequestsList.filter((item) => item.status === 'Pending')

    return (
        <div className='admin-container'>
            <Sidebar />
            <div className='overview-container'>
              <h2 className="dashboard-overview">Scheduled Donations</h2>
              <div className='scheduled-donations-header'>
                  <p className='scheduled-donations-name'>First Name</p>
                  <p className='scheduled-donations-name'>Last Name</p>
                  <p className='scheduled-donations-email'>Email</p>
                  <p className='scheduled-donations-name'>Contact</p>
                  <p className='scheduled-donations-name'>Blood Grp</p>
                  <p className='scheduled-donations-name'>Date</p>
                  <p className='scheduled-donations-email'>Location</p>
                  <p className='scheduled-donations-name'>Status</p>
              </div>
              {pendingList.map((donationRow) => (
                <DonationReqRow key={donationRow.donation_requests_id} {...donationRow} />
              ))}
            </div>
        </div>
    )
}

export default ScheduledDonations;
