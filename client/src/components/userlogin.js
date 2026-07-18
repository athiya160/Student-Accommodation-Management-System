import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import './Landing.css'; // Use unified Landing.css

function UserLogin() {    
    const [username, setUserName] = useState(""); 
    const [password, setPassword] = useState("");
    const [msg, setMsg] = useState("");
    
    const navigate = useNavigate();
    const handleOnSubmit = async (e) => {
        e.preventDefault();
        setMsg("");
        
        if (username === "" || username.trim().length === 0) {
            setMsg("UserName is Empty");
        }
        else if (password === "" || password.length === 0) {
            setMsg("Password is Empty");
        }
        else {
            try {
                let result = await fetch(
                    'http://localhost:5000/api/user/checkuserlogin', {
                    method: "post",
                    body: JSON.stringify({
                        username, password
                    }),
                    headers: {
                        'Content-Type': 'application/json'
                    }
                })
                result = await result.json();
                console.log("Result : ", result, " Length : ", Object.keys(result).length, 
                " Id : ", result['_id']);
                if (result !== undefined && Object.keys(result).length > 0) {
                    sessionStorage.setItem("usertype", "user")
                    sessionStorage.setItem("userid", result['_id'])
                    console.log("Id : ", result['_id'])
                    let path = '/usermainpage';
                    navigate(path);
                    window.location.reload(false);
                } else {
                    setMsg("Invalid UserName/Password");              
                }
            } catch (err) {
                setMsg("Server error. Please try again later.");
            }
        }
    }

    return (      
        <div className="landing-wrapper">
            <div className="auth-page">
                <div className="auth-card">
                    <h1>Student Login</h1>
                    {msg && <div className="error-message">{msg}</div>}
                    
                    <form onSubmit={handleOnSubmit}>
                        <div className="form-group">
                            <label>Username</label>
                            <input
                                value={username}
                                type="text"
                                onChange={ev => setUserName(ev.target.value)}
                                placeholder="Enter your username"
                                required
                            />
                        </div>
                        
                        <div className="form-group">
                            <label>Password</label>
                            <input
                                value={password}
                                type="password"
                                onChange={ev => setPassword(ev.target.value)}
                                placeholder="Enter your password"
                                required
                            />
                        </div>
                        
                        <button type="submit" className="btn-premium btn-primary-gradient" style={{width: '100%', marginTop: '10px'}}>
                            Login
                        </button>
                    </form>

                    <div className="auth-links">
                        <a href="/newuser">New Student Registration</a>
                        <a href="/stafflogin">Staff Login</a>
                        <a href="/adminlogin">Admin Login</a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default UserLogin;
