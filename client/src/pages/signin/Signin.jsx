import Axios from 'axios';
import { NavLink, useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { DevTool } from '@hookform/devtools';
import './signin.css';

const Signin = () => {
    const { register, control, handleSubmit, formState } = useForm();
    const { errors } = formState;

    const navigate = useNavigate()

    const onSubmit = (data) => {
      try {
        Axios.post("http://localhost:3001/signin", {
          email: data.email,
          password: data.password,
        }).then((response) => {
          console.log(response)
          if(response.data.message) {
            alert('Invalid email/password')
          } else {
            navigate('/home');
          }
        });
      } catch (error) {
        throw(error);
      }
    };

    return (
        <div className='signin-container'>
            <form onSubmit={handleSubmit(onSubmit)} noValidate className='signin-form-bg'>
                <div className='signin-form'>
                  <div className='signin-signup'>
                    <h1 className='signin-header'>Sign In</h1>
                    <NavLink to='/signup' className="signup-navlink">
                      <h1 className='signup-header-dark'>Sign Up</h1>
                    </NavLink>
                  </div>

                  <div className='input-container'>
                    <label className='label'>EMAIL</label>
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
                      required
                      // onChange={(e) => setEmail(e.target.value)} 
                      className='input' />
                      <p>{errors.email?.message}</p>
                  </div>
                
                  <div className='input-container'>
                    <label className='label'>PASSWORD</label>
                    <input 
                      type="password"
                      id="password"
                      {...register("password")}
                      placeholder='Password' 
                      required
                      // onChange={(e) => setPassword(e.target.value)} 
                      className='input' />
                  </div>

                  <button className='signin-btn' >Sign in</button>
                
                  {/* <input type="submit" value="Sign in" onClick={login} className='signin-btn' /> */}
                </div>
                </form>
                <DevTool control={control} />
        </div>
    )   
};

export default Signin;
