import Sidebar from '../../components/Sidebar/Sidebar';
import { useSelector } from 'react-redux';
import store from '../../redux/store/store';
import './scheduledDonations.css';

const ScheduledDonations = () => {
    const getScheduledDonations = () => {
        try {
            Axios.get("http://localhost:3001/scheduled-donations")
            .then((response) => {
                return response;
            })
        } catch (error) {
            throw(error);
        }
    }

    const { donationRequestsList, status } = useSelector((store) => store.donationRequests);

    return (
        <div className='admin-container'>
            <Sidebar />
            <div className='overview-container'>
              <h2>Scheduled Donations</h2>
              <div className='scheduled-donations-header'>
                  <p>First Name</p>
                  <p>Last Name</p>
                  <p>Email</p>
                  <p>Contact</p>
                  <p>Blood Group</p>
                  <p>Date</p>
                  <p>Location</p>
              </div>
              {donationRequestsList.map((donationRow) => (
                <p>{donationRow.first_name}</p>
              ))}
            </div>
        </div>
    )
}

export default ScheduledDonations;
