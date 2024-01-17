import Navbar from "../../components/Navbar/navbar"
import Axios from 'axios';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useForm } from 'react-hook-form';
import './donation.css'
import { useState } from "react";
import { useNavigate } from 'react-router-dom';

const Donation = () => {
    const navigate = useNavigate();

    const [selectedDate, setDate] = useState(null);
    const formattedDate = selectedDate?.toISOString().split('T')[0];

    const bloodData = ["A+", "A-", "B+", "B-", "AB+", "AB-", "O+", "O-"];

    const hospitals = [
      "Nairobi Hospital, Nairobi",
      "Aga Khan University Hospital, Parklands",
      "Kenyatta National Hospital, Nairobi",
      "Mombasa Hospital, Mombasa",
      "Avenue Hospital, Kisumu",
      "Mediheal Hospital, Nakuru"
    ];

    const { register, handleSubmit, formState } = useForm();
    const { errors } = formState;

    const onSubmit = (data) => {
      try {
        Axios.post("http://localhost:3001/server/donation/requesttodonate", {
          bloodGroup: data.bloodGroup,
          firstName: data.firstName,
          lastName: data.lastName,
          email: data.email,
          contact: data.contact,
          date: formattedDate,
          location: data.location,
        }).then(() => {
            alert('Your request to donate blood has been received.');
            navigate('/home')
        })
      } catch (error) {
        throw(error);
      }
    }

    return (
        <div className="donation-page">
            <Navbar type='donate' />
            <div className="donate-form-container">
              <form onSubmit={handleSubmit(onSubmit)} className="donate-form">
                <div className="donate-blood-grp">
                  <label className="bloodgrp-label">Select your blood group</label>
                  <input 
                    type="text"
                    id="bloodgroup"
                    list="data"
                    {...register("bloodGroup")}
                    placeholder="Choose the appropriate one"
                    className="donate-input"
                  />
                  <datalist id="data">
                    {bloodData.map((blood, index) => (
                      <option key={index}>{blood}</option>
                    ))}
                  </datalist>
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
                      className="donate-input input-width"
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
                      className="donate-input input-width"
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
                      className="donate-input input-width"
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
                      className="donate-input input-width"
                    />
                  </div>

                  <div className="details-section">
                    <DatePicker
                      id="date"
                      {...register("date")}
                      selected={selectedDate}
                      onChange={date => setDate(date)}
                      placeholderText="Schedule a date"
                      required
                      className="donate-input input-width"
                    />

                    <label className="donate-label">Location</label>
                    <input 
                      type="text"
                      id="location"
                      list="hospitallist"
                      {...register("location", {
                        required: {
                          value: true,
                          message: "Field cannot be blank!",
                        }
                      })}
                      placeholder="Location"
                      className="donate-input input-width"
                    />
                    <datalist id="hospitallist">
                      {hospitals.map((hospital, index) => (
                        <option key={index}>{hospital}</option>
                      ))}
                    </datalist>
                  </div>

                   <button className="donation-request">Request to donate</button>
                </div>
              </form>
            </div>
        </div>
    )
}

export default Donation