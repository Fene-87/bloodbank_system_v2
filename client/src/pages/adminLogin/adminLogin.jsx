import { useState } from "react";

import './adminlogin.css';


const AdminLogin = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
     const login = () => {
       Axios.post("http://localhost:3001/create", {
           username:username,
            password: password,
        }).then(() => {
         console.log('login');
     });
    }
    return (
        <div>
            <h1>Enter your details</h1>
            {/* Your logic */}
            <form className='adminlogin-form'>
                <label>username:</label>
                <input type="username" name="username" placeholder='Username' onChange={(e) => setUsername(e.target.value)} />
                
                <label>Password:</label>
                <input type="text" name="password" placeholder='Password' onChange={(e) => setPassword(e.target.value)} />

                <input type="submit" value="Login" onClick={AdminLogin}/>
                </form>
        </div>
    )
}

export default AdminLogin;
