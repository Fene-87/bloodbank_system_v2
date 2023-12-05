import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchDonationRequests } from "../../redux/donationRequests/donationRequestsSlice";
import Sidebar from "../../components/Sidebar/Sidebar";
import './admin.css';
import { fetchBloodRequests } from "../../redux/bloodRequests/bloodRequestsSlice";

const Admin = () => {
  const { donationRequestsList, status } = useSelector((store) => store.donationRequests);
  const { bloodRequestsList } = useSelector((store) => store.bloodRequests);
  const dispatch = useDispatch();

  useEffect(() => {
    if(status === 'idle') {
      dispatch(fetchDonationRequests);
      dispatch(fetchBloodRequests);
      console.log(donationRequestsList)
    }
  }, [status, dispatch]);

  const bloodData = [
    {
      bloodGrp: "A+",
    },
    {
      bloodGrp: "A-",
    },
    {
      bloodGrp: "B+",
    },
    {
      bloodGrp: "B-",
    },
    {
      bloodGrp: "AB+",
    },
    {
      bloodGrp: "AB-",
    },
    {
      bloodGrp: "O+",
    },
    {
      bloodGrp: "O-",
    },
  ];

  // const getDonationRequests

  return (
    <div className="admin-container">
      <Sidebar />

      <div className="overview-container">
        <h2>Dashboard</h2>

        <div className="blood-groups">
          {bloodData.map((blood, index) => (
            <div key={index} className="bloodgrp-stats">
              <h2>{blood.bloodGrp}</h2>
            </div>
          ))}
        </div>

        <div>
          <h3>Scheduled donations:{donationRequestsList.length}</h3>
        </div>
        
        <div>
          <h3>Blood requests:{bloodRequestsList.length}</h3>
        </div>

        <div>
          <h3>Completed transactions:</h3>
        </div>

      </div>
    </div>
  )
}

export default Admin;

// const [donors, setDonors] = useState([]);
//   const [newDonor, setNewDonor] = useState({ name: '', bloodType: '', contact: '' });

//   const handleAddDonor = () => {
//     // Add new donor to the list of donors
//     setDonors([...donors, newDonor]);

//     // Clear the input fields
//     setNewDonor({ name: '', bloodType: '', contact: '' });
//   };

//     return (
//         <div className="admin-container">
//             <Sidebar />
//             <div>
//       <h2>Admin Panel</h2>

//       <h3>Add a New Donor</h3>
//       <input
//         type="text"
//         placeholder="Name"
//         value={newDonor.name}
//         onChange={(e) => setNewDonor({ ...newDonor, name: e.target.value })}
//       />
//       <input
//         type="text"
//         placeholder="Blood Type"
//         value={newDonor.bloodType}
//         onChange={(e) => setNewDonor({ ...newDonor, bloodType: e.target.value })}
//       />
//       <input
//         type="text"
//         placeholder="Contact Information"
//         value={newDonor.contact}
//         onChange={(e) => setNewDonor({ ...newDonor, contact: e.target.value })}
//       />
//       <button onClick={handleAddDonor}>Add Donor</button>

//       <h3>Donor List</h3>
//       <ul>
//         {donors.map((donor, index) => (
//           <li key={index}>
//             <strong>Name:</strong> {donor.name}, <strong>Blood Type:</strong> {donor.bloodType}, <strong>Contact:</strong> {donor.contact}
//           </li>
//         ))}
//       </ul>
//     </div>
//         </div>
//     )