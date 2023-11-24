import { useState } from "react";
import './userlogin.css';

const UserLogin = () => {
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
        <form className='userlogin-form'>
            <label>username:</label>
            <input type="username" name="username" placeholder='Username' onChange={(e) => setUsername(e.target.value)} />
            
            <label>Password:</label>
            <input type="text" name="password" placeholder='Password' onChange={(e) => setPassword(e.target.value)} />

            <input type="login" value="Login" onClick={Login}/>
            </form>
    </div>
)
}


export default UserLogin;
