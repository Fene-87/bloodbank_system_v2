import Sidebar from '../../components/Sidebar/Sidebar';
import { useSelector } from 'react-redux';
import ApprovedDonRow from '../../components/approvedDonRow/ApprovedDonRow';
import './BloodDonations.css';
import PrintDonations from '../../components/print/PrintDonations';
import { useState, useEffect } from 'react';

const BloodDonations = () => {
    const { donationRequestsList, status, donation, printDonation } = useSelector((store) => store.donationRequests);

    const approved = donationRequestsList.filter((item) => item.status === 'Approved');

   
    return (
        <div className='admin-container'>
            <Sidebar />
            <div className='overview-container'>
                <h2 className="dashboard-overview">Approved Donations</h2>
                <div className='scheduled-donations-header'>
                  <p className='scheduled-donations-name'>First Name</p>
                  <p className='scheduled-donations-name'>Last Name</p>
                  <p className='scheduled-donations-email'>Email</p>
                  <p className='scheduled-donations-name'>Contact</p>
                  <p className='scheduled-donations-name'>Blood Grp</p>
                  <p className='scheduled-donations-name'>Amount</p>
                  <p className='scheduled-donations-email'>Location</p>
                </div>

                {approved.map((item) => (
                    <ApprovedDonRow key={item.donation_requests_id} {...item} />
                ))}

                {printDonation && <div>
                    <PrintDonations details={donation} />
                </div>
                }
            </div>
        </div>
    )
}

export default BloodDonations;
