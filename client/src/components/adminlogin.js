import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import './Landing.css'; // Use unified Landing.css

function AdminLogin() {
    const [msg, setMsg] = useState("");
    const [username, setUserName] = useState("");
    const [password, setPassword] = useState("");

    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        setMsg("");
        
        if (username === "" || password === "") {
            setMsg("UserName/Password is Empty");
        } else {
            try {
                let result = await fetch(
                    'http://localhost:5000/api/admin/checkadminlogin', {
                    method: "post",
                    body: JSON.stringify({ username, password }),
                    headers: {
                        'Content-Type': 'application/json'
                    }
                });
                result = await result.json();
                
                if (result != undefined && Object.keys(result).length > 0) {
                    sessionStorage.setItem("usertype", "admin");
                    sessionStorage.setItem("adminid", result['_id']);
                    let path = '/'; // Goes back to home but as admin
                    navigate(path);
                    window.location.reload(false);
                } else {
                    setMsg("Invalid UserName/Password");
                }
            } catch (err) {
                // Fallback for hardcoded admin if DB is empty or fails
                if (username === "admin" && password === "admin") {
                    sessionStorage.setItem("usertype", "admin");
                    let path = '/';
                    navigate(path);
                    window.location.reload(false);
                } else {
                    setMsg("Invalid UserName/Password");
                }
            }
        }
    };

    return (
        <div className="landing-wrapper">
            <div className="auth-page admin-theme">
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
                        <a href="/newadminregister">New Admin Registration</a>
                        <a href="/userlogin">Student Login</a>
                        <a href="/stafflogin">Staff Login</a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AdminLogin;
