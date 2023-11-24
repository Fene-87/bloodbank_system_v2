import Navbar from "../../components/Navbar/navbar"
import './recipient.css'

const Recipient = () => {
    return (
        <div>
            {/* {<form className="donate-form">
                  Check Availability
                  <label>Name:</label>
                  <input type="text" name="name" />
                  <label>Blood Type:</label>
                  <input type="text" name="blood" />
                  <label>Location:</label>
                  <input type="text" name="location" />
                  <input type="submit" value="Submit" />
                </form> } */}
            <form className='recipient-form'>
                Request
                <label>patient id:</label>
                <input type="varchar" name="patient-id" placeholder='Patient id' onChange={(e) => setPatientId(e.target.value)} />

                <label>Blood Type:</label>
                <input type="text" name="blood-type" placeholder='Blood Type' onChange={(e) => setBloodType(e.target.value)} />

                <label>Age:</label>
                <input type="number" name="age" placeholder='Age' onChange={(e) => setAge(e.target.value)} />

                <label>hospital id:</label>
                <input type="varchar" name="hospital-id" placeholder='Hospital id' onChange={(e) => setHospitalId(e.target.value)} />

                <input type="submit" value="Submit" />
                </form>
        </div>
    )
}

export default Recipient