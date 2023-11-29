import Navbar from "../../components/Navbar/navbar"
import Axios from 'axios';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useForm } from 'react-hook-form';
import { DevTool } from '@hookform/devtools';
import './donation.css'
import { useState } from "react";

const Donation = () => {
    const [selectedDate, setDate] = useState(null);
    const [selectedTime, setTime] = useState(null);

    const { register, control, handleSubmit, formState } = useForm();
    const { errors } = formState;

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
                  <h2 className="details-header">Details</h2>

                  <div className="details-section">
                    <label className="donate-label">First name</label>
                    <input
                      type="text"
                      id="firstname"
                      {...register("firstName", {
                        required: {
                          value: true,
                          message: "Field cannot be blank!",
                        }
                      })}
                      placeholder="First Name"
                    />
                    
                    <label className="donate-label">Last name</label>
                    <input
                      type="text"
                      id="lastname"
                      {...register("lastName", {
                        required: {
                          value: true,
                          message: "Field cannot be blank!",
                        }
                      })}
                      placeholder="Last Name"
                    />
                  </div>

                  <div className="details-section">
                    <label className="donate-label">Email</label>
                    <input
                      type="email"
                      id="email"
                      {...register("email", {
                        required: {
                          value: true,
                          message: "Field cannot be blank!",
                        }
                      })}
                      placeholder="Email"
                    />

                    <label className="donate-label">Contact</label>
                    <input
                      type="text"
                      id="contact"
                      {...register("contact", {
                        required: {
                          value: true,
                          message: "Field cannot be blank!",
                        }
                      })}
                      placeholder="Contact"
                    />
                  </div>

                  <div className="details-section">
                    <DatePicker selected={selectedDate} onChange={date => setDate(date)} placeholderText="Schedule a date"/>

                    <label className="donate-label">Location</label>
                    <input 
                      type="text"
                      id="location"
                      {...register("location", {
                        required: {
                          value: true,
                          message: "Field cannot be blank!",
                        }
                      })}
                      placeholder="Location"
                    />
                  </div>

                   <button className="donation-request">Request to donate</button>
                </div>
              </form>
              <DevTool control={control} />
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