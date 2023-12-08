import './PrintDonations.css';
import { useReactToPrint } from 'react-to-print';
import { useDispatch } from 'react-redux';
import { cancelPrint } from '../../redux/donationRequests/donationRequestsSlice';
import { useRef } from 'react';

const PrintDonations = ({
    details,
}) => {
    const dispatch = useDispatch();

    const cancelPrinting = () => {
        dispatch(cancelPrint())
    }

    const printDonRef = useRef();

    const printBloodDonation = useReactToPrint({
        content: () => printDonRef.current,
        documentTitle: 'Donation Details',
        onAfterPrint: () => alert(`Donation details by ${details.first_name} ${details.last_name} successfully printed`)
    })

    return (
        <div className='print-overall'>
        <div ref={printDonRef} className="print-container">
            <h2 className="print-header">Save Lives Blood Bank System</h2>
            <div className="print-section">
                <p className="print-text">First Name: {details.first_name}</p>
                <p className="print-text">Last Name: {details.last_name}</p>
            </div>

            <div className="print-section">
                <p className="print-text">Email: {details.email}</p>
                <p className="print-text">Contact: {details.contact}</p>
            </div>

            <div className="print-section">
                <p className="print-text">Blood Group: {details.blood_group}</p>
                <p className="print-text">Amount: 470ml</p>
            </div>

            <div className="print-section print-location">
                <p className="print-text">{details.location}</p>
            </div>
        </div>
            <div className="print-section">
              <button onClick={printBloodDonation} className='print-btn'>Print</button>
              <button onClick={cancelPrinting} className='cancel-btn'>Cancel</button>
            </div>
        </div>
    )
}

export default PrintDonations;
