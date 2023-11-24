import Navbar from "../../components/Navbar/navbar"
import Axios from 'axios';
import './donation.css'

const Donation = () => {
  
  

    return (
        <div>
            <Navbar type='home' />
            <div className="form-container">
              <div className="form-gradient">
                <form className="donate-form">
                  Give your donation
                  <label>Name:</label>
                  <input type="text" name="donorsname" /> 
                  <label>Donors Contact:</label>
                  <input type="text" name="contact"   />
                  <label>Blood Group:</label>
                  <input type="text" name="blood group"  />
                  <label>Age:</label>
                  <input type="number" name="age"  />
                  <label>Location:</label>
                  <input type="text" name="location" />
                  <input type="submit" value=" Book Appointment" />
                </form>
              </div>
           </div>
        </div>
    )
}

export default Donation