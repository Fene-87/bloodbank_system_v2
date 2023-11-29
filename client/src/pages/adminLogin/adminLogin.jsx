import { useState } from "react";
import Axios from 'axios';
import { useForm } from 'react-hook-form';
import { DevTool } from '@hookform/devtools';
import { NavLink, useNavigate } from 'react-router-dom';

import './adminlogin.css';


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
        <div>
            <h1>Enter your details</h1>
            {/* Your logic */}
            <form onSubmit={handleSubmit(onSubmit)} className='adminlogin-form'>
                <label>Email</label>
                <input
                  type="email"
                  id="email"
                  {...register("email")}
                  placeholder='Admin Email'
                />
                
                <label>Password:</label>
                <input
                  type="password"
                  id="password"
                  {...register("password")}
                  placeholder='Password'
                />

                <button type="submit">Admin login</button>
            </form>
            <DevTool control={control} />
        </div>
    )
}

export default AdminLogin;
