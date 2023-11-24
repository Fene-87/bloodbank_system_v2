import { useState } from 'react'
import './request.css';
import './admin';

function RequestForm() {
    const [requesterid, setRequesterid] = useState('');
    const [requesterName, setRequesterName] = useState('');
    const [requesterContact, setRequesterContact] = useState('');
    const [bloodGroup, setBloodGroup] = useState('');
    const [quantity, setQuantity] = useState('');
    const [requesterDate, setRequesterDate] = useState('');
    const [status, setStatus] = useState('');
    const [comments, setComments] = useState('');

    const submitBloodRequest = () => {
        if ( requesterid==='' || requesterName === '' || requesterContact === '' || bloodGroup === '' || quantity === '' || requestDate==='' || Status==='' || Comments==='') {
            alert('Please fill in all fields.');
            return;
        }

        const request = {
            requesterName,
            requesterContact,
            bloodGroup,
            quantity,
            requestDate,
            Status,
            Comments
        };

        console.log('Blood Request Submitted:', request);

        setRequesterName('');
        setRequesterContact('');
        setBloodGroup('');
        setQuantity('');
        setRequestDate('');
        setStatus('');
        setComments('');
    };

    return (
        <div>
            <h1>Blood Bank System - Blood Request Form</h1>
            <label >Requester Name:</label>
            <input type="text" id="requesterName" value={requesterName} onChange={(e) => setRequesterName(e.target.value)} required /><br />

            <label>Requester Contact:</label>
            <input type="text" id="requesterContact" value={requesterContact} onChange={(e) => setRequesterContact(e.target.value)} required /><br />

            <label>Blood Group:</label>
            <input type="text" id="bloodGroup" value={bloodGroup} onChange={(e) => setBloodGroup(e.target.value)} required /><br />

            <label>Quantity:</label>
            <input type="text" id="quantity" value={quantity} onChange={(e) => setQuantity(e.target.value)} required /><br />

            <button type="button" onClick={submitBloodRequest}>Submit Request</button>
        </div>
    );
}

export default BloodRequestForm;
