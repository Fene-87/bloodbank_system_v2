import { useState, useRef } from 'react';
import Axios from 'axios';
import { NavLink, useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { DevTool } from '@hookform/devtools';
import './signup.css';

const Signup = () => {
    const navigate = useNavigate();

    const { register, control, handleSubmit, formState } = useForm();
    const { errors } = formState;
    
    const onSubmit = (data) => {
        try {
            Axios.post("http://localhost:8000/server/auth/create", {
              firstName: data.firstName,
              lastName: data.lastName,
              userName: data.userName,
              nationalId: data.nationalId,
              email: data.email,
              password: data.password,
              bloodType: data.bloodType,
              age: data.age,
              contactNumber: data.contactNumber,
              gender: data.gender,
            }).then(() => {
              console.log('Successfully registered', data);
              navigate('/')
            });
        } catch (error) {
            console.log(error);
        }  
    }
    
    return (
        <div className='signup-container'>
            <form onSubmit={handleSubmit(onSubmit)} noValidate className='signup-form-bg'>
                <div className='signup-form'>
                  <div className='signup-signin'>
                    <h1 className='signup-header'>Sign Up</h1>
                    <NavLink to='/signin' className="signup-navlink">
                      <h1 className='signin-header-dark'>Sign In</h1>
                    </NavLink>
                  </div>

                  <div className='reg-input-container'>
                    <label className='reg-label'>FIRST NAME:</label>
                    <div className='input-div'>
                      <input
                        type="text"
                        id="firstname"
                        {...register("firstName", {
                          required: {
                            value: true,
                            message: "Field cannot be blank!",
                          }
                        })}
                        placeholder='First Name'
                        className='reg-input'
                      />
                      <p className='error-message'>{errors.firstName?.message}</p>
                    </div>
                  </div>

                  <div className='reg-input-container'>
                    <label className='reg-label'>LAST NAME:</label>
                    <div className='input-div'>
                      <input
                        type="text"
                        id="lastname"
                        {...register("lastName", {
                          required: {
                            value: true,
                            message: "Field cannot be blank!",
                          }
                        })}
                        placeholder='Last Name'
                        className='reg-input'
                      />
                      <p className='error-message'>{errors.lastName?.message}</p>
                    </div>
                  </div>

                  <div className='reg-input-container'>
                    <label className='reg-label'>USER NAME:</label>
                    <div className='input-div'>
                      <input
                        type="text"
                        id="username"
                        {...register("userName", {
                          required: {
                            value: true,
                            message: "Field cannot be blank!",
                          }
                        })}
                        placeholder='User Name'
                        className='reg-input'
                      />
                      <p className='error-message'>{errors.userName?.message}</p>
                    </div>
                  </div>

                  <div className='reg-input-container'>
                    <label className='reg-label'>NATIONAL ID:</label>
                    <div className='input-div'>
                      <input
                        type="text"
                        id="national-id"
                        {...register("nationalId", {
                          required: {
                            value: true,
                            message: "Field cannot be blank!",
                          }
                        })}
                        placeholder='National ID'
                        className='reg-input'
                      />
                      <p className='error-message'>{errors.nationalId?.message}</p>
                    </div>
                  </div>

                  <div className='reg-input-container'>
                    <label className='reg-label'>EMAIL:</label>
                    <div className='input-div'>
                      <input
                        type="email"
                        id="email"
                        {...register("email", {
                          required: {
                            value: true,
                            message: "Field cannot be blank!",
                          }
                        })}
                        placeholder='Email'
                        className='reg-input'
                      />
                      <p className='error-message'>{errors.email?.message}</p>
                    </div>
                  </div>

                  <div className='reg-input-container'>
                    <label className='reg-label'>PASSWORD:</label>
                    <div className='input-div'>
                      <input
                        type="text"
                        id="password"
                        {...register("password", {
                          required: {
                            value: true,
                            message: "Field cannot be blank!",
                          }
                        })}
                        placeholder='Password'
                        className='reg-input'
                      />
                      <p className='error-message'>{errors.password?.message}</p>
                    </div>
                  </div>

                  <div className='reg-input-container'>
                    <label className='reg-label'>BLOOD TYPE:</label>
                    <div className='input-div'>
                      <input
                        type="text"
                        id="bloodtype"
                        {...register("bloodType", {
                          required: {
                            value: true,
                            message: "Field cannot be blank!",
                          }
                        })}
                        placeholder='Blood Type'
                        className='reg-input'
                      />
                      <p className='error-message'>{errors.bloodType?.message}</p>
                    </div>
                  </div>

                  <div className='reg-input-container'>
                    <label className='reg-label'>AGE:</label>
                    <div className='input-div'>
                      <input
                        type="number"
                        id="age"
                        {...register("age", {
                          required: {
                            value: true,
                            message: "Field cannot be blank!",
                          }
                        })}
                        placeholder='Age'
                        className='reg-input'
                      />
                      <p className='error-message'>{errors.age?.message}</p>
                    </div>
                  </div> 

                  <div className='reg-input-container'>
                    <label className='reg-label'>CONTACT NUMBER:</label>
                    <div className='input-div'>
                      <input 
                        type="text"
                        id="contact-number"
                        {...register("contactNumber", {
                          required: {
                            value: true,
                            message: "Field cannot be blank!",
                          }
                        })}
                        placeholder='Contact Number'
                        className='reg-input'
                      />
                      <p className='error-message'>{errors.contactNumber?.message}</p>
                    </div>
                  </div>

                  <div className='reg-input-container'>
                    <label className='reg-label'>GENDER:</label>
                    <div className='input-div'>
                      <input
                        type="text"
                        id="gender"
                        {...register("gender", {
                          required: {
                            value: true,
                            message: "Field cannot be blank!",
                          }
                        })}
                        placeholder='Gender'
                        className='reg-input'
                      />
                      <p className='error-message'>{errors.gender?.message}</p>
                    </div>
                  </div>

                  <button type='submit' className='register-btn'>Register</button>
                </div>
            </form>
        </div>
    )

};

export default Signup;
