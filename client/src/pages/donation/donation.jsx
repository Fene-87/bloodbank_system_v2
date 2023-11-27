import Navbar from "../../components/Navbar/navbar"
import Axios from 'axios';
import './donation.css'

const Donation = () => {

    return (
        <div className="donation-page">
            <Navbar type='home' />
            <div className="donate-form-container">
              <form className="donate-form">
                <div className="donate-blood-grp">
                  <label>Select your blood group</label>
                  <input type="text" placeholder="Choose the appropriate one" />
                </div>

                <div className="donate-details">
                  <h2>Details</h2>

                  <div>
                    <label>First name</label>
                    <input type="text" placeholder="First Name" />
                    
                    <label>Last name</label>
                    <input type="text" placeholder="Last Name" />
                  </div>

                  <div>
                    <label>Email</label>
                    <input type="email" placeholder="Email" />

                    <label>Address</label>
                    <input type="text" placeholder="Address" />
                  </div>
                  <div></div>
                </div>
              </form>
            </div>
            {/* <div className="form-container">
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
           </div> */}
        </div>
    )
}

export default Donation