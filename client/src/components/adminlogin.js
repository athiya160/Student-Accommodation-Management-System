import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import './Landing.css'; // Use unified Landing.css

function AdminLogin() {
    const [msg, setMsg] = useState("");
    const [username, setUserName] = useState("");
    const [password, setPassword] = useState("");

    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        sessionStorage.setItem("usertype", "admin");
        if (username === "" || password === "") {
            setMsg("UserName/Password is Empty");
        } else {
            if (username === "admin" && password === "admin") {
                let path = '/';
                navigate(path);
                window.location.reload(false);
            } else {
                setMsg("Invalid UserName/Password");
            }
        }
    };

    return (
        <div className="landing-wrapper">
            <div className="auth-page">
                <div className="auth-card">
                    <h1>Admin Login</h1>
                    {msg && <div className="error-message">{msg}</div>}
                    
                    <form onSubmit={handleSubmit}>
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
                            Login as Admin
                        </button>
                    </form>

                    <div className="auth-links">
                        <a href="/newuser">New Student Registration</a>
                        <a href="/userlogin">Student Login</a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AdminLogin;
