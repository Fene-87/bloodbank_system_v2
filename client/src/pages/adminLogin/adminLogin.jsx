import { useState } from "react";
import Axios from 'axios';
import { useForm } from 'react-hook-form';
import { DevTool } from '@hookform/devtools';
import { NavLink, useNavigate } from 'react-router-dom';

import './adminlogin.css';
import Navbar from "../../components/Navbar/navbar";


const AdminLogin = () => {
    const { register, control, handleSubmit, formState } = useForm();
    const { errors } = formState;

    const navigate = useNavigate();

    const onSubmit = (data) => {
        try {
            Axios.post("http://localhost:3001/adminsignin", {
              email: data.email,
              password: data.password,
            }).then((response) => {
              if(response.data.message) {
                alert(response.data.message)
                console.log(response.data.message)
              } else {
                console.log(response)
                navigate('/admin');
              }
            });
        } catch (error) {
            throw(error);
        }
    };

    return (
        <div className="admin-login-page">
            <Navbar type="admin-login" />
            <div className="admin-login-container">
            
            {/* Your logic */}
            <form onSubmit={handleSubmit(onSubmit)} className='adminlogin-form'>
                <div className="admin-signin-form">
                <h1 className="adminlogin-header">Enter your Credentials</h1>
                <div className="input-container">
                <label htmlFor="email" className='label'>EMAIL</label>
                <input
                  type="email"
                  id="email"
                  {...register("email")}
                  placeholder='Admin Email'
                  className='input'
                />
                </div>
                
                <div className="input-container">
                <label htmlFor="password" className='label'>PASSWORD</label>
                <input
                  type="password"
                  id="password"
                  {...register("password")}
                  placeholder='Password'
                  className='input'
                />
                </div>

                <button type="submit" className="admin-signin-btn">Admin login</button>
                </div>
            </form>
            </div>
        </div>
    )
}

export default AdminLogin;
