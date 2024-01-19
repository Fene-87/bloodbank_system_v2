import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchDonationRequests } from "../../redux/donationRequests/donationRequestsSlice";
import Sidebar from "../../components/Sidebar/Sidebar";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart } from '@fortawesome/free-solid-svg-icons'
import './admin.css';
import { fetchBloodRequests } from "../../redux/bloodRequests/bloodRequestsSlice";

const Admin = () => {
  const { donationRequestsList, status } = useSelector((store) => store.donationRequests);
  const { bloodRequestsList } = useSelector((store) => store.bloodRequests);
  const dispatch = useDispatch();

  useEffect(() => {
    if(status === 'idle') {
      dispatch(fetchDonationRequests());
      dispatch(fetchBloodRequests());
    }
  }, [status, dispatch]);

  const aPosCount = donationRequestsList
    .filter((item) => item.blood_group === 'A+')
    .reduce((total, item) => total + parseFloat(item.amount), 0);

  const aNegCount = donationRequestsList
    .filter((item) => item.blood_group === 'A-')
    .reduce((total, item) => total + item.amount, 0);

  const bPosCount = donationRequestsList
    .filter((item) => item.blood_group === 'B+')
    .reduce((total, item) => total + item.amount, 0);

  const bNegCount = donationRequestsList
    .filter((item) => item.blood_group === 'B-')
    .reduce((total, item) => total + item.amount, 0);

  const abPosCount = donationRequestsList
    .filter((item) => item.blood_group === 'AB+')
    .reduce((total, item) => total + item.amount, 0);
  
  const abNegCount = donationRequestsList
    .filter((item) => item.blood_group === 'AB-')
    .reduce((total, item) => total + item.amount, 0);

  const oPosCount = donationRequestsList
    .filter((item) => item.blood_group === 'O+')
    .reduce((total, item) => total + item.amount, 0);
  
  const oNegCount = donationRequestsList
    .filter((item) => item.blood_group === 'O-')
    .reduce((total, item) => total + item.amount, 0);

  const bloodData = [
    {
      bloodGrp: "A+",
      quantity: aPosCount,
    },
    {
      bloodGrp: "A-",
      quantity: aNegCount,
    },
    {
      bloodGrp: "B+",
      quantity: bPosCount,
    },
    {
      bloodGrp: "B-",
      quantity: bNegCount,
    },
    {
      bloodGrp: "AB+",
      quantity: abPosCount,
    },
    {
      bloodGrp: "AB-",
      quantity: abNegCount,
    },
    {
      bloodGrp: "O+",
      quantity: oPosCount,
    },
    {
      bloodGrp: "O-",
      quantity: oNegCount,
    },
  ];

  const pendingList = donationRequestsList.filter((item) => item.status === 'Pending');

  return (
    <div className="admin-container">
      <Sidebar />

      <div className="overview-container">
        <h2 className="dashboard-overview">Dashboard Overview</h2>

        <div className="blood-groups">
          {bloodData.map((blood, index) => (
            <div key={index} className="bloodgrp-stats">
              <h2>{blood.bloodGrp}</h2>
              <div className="icon-div">
                <FontAwesomeIcon icon={faHeart} className="icon" />
              </div>
              <h3 className="available-qty">Available quantity(ml): {blood.quantity}</h3>
            </div>
          ))}
        </div>

        <div className="scheduled-don-div">
          <h3 className="scheduled-don-text">Scheduled donations:{pendingList.length}</h3>
        </div>
        
        <div className="scheduled-don-div">
          <h3 className="scheduled-don-text">Blood requests:{bloodRequestsList.length}</h3>
        </div>

        {/* <div>
          <h3>Completed transactions:</h3>
        </div> */}

      </div>
    </div>
  )
}

export default Admin;
