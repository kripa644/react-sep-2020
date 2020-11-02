import React, {useState} from 'react';
import './Login.css';

const Login = () => {
    let [username, setUsername] = useState();
    let [password, setPassword] = useState();
    let getData = () => {
        document.getElementById("user").innerHTML = "Username:" + username;
        document.getElementById("pwd").innerHTML = "Password:" + password;
    }
    return (
        <div>
            <div>
                <label htmlFor="username">Username</label>
                <input
                    onChange={(event) => {
                        setUsername(event.target.value);
                    }}
                    type="text"
                    id="username"
                    name="username"
                />
            </div>
            <div className="Password">
                <label htmlFor="password">Password</label>
                <input
                    onChange={(event) => {
                        setPassword(event.target.value);
                    }}
                    type="password"
                    id="password"
                    name="password"
                />
            </div>
            <div className="Btn">
            <button onClick={() => getData()}> 
                Login
            </button>
            </div>

            <div id="user" name="user"></div>
            <div id="pwd"></div>
        </div>
    );
};

export default Login;