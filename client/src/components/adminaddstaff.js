import React, { useState } from "react";
import './Landing.css';
import { validate as validateEmail } from 'email-validator';

function AdminAddStaff() {
    const [fname, setFirstName] = useState("");
    const [lname, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [phnum, setPhoneNum] = useState("");
    const [address, setAddress] = useState("");
    const [username, setUserName] = useState("");
    const [password, setPassword] = useState("");
    const [msg, setMsg] = useState("");
    const [isSuccess, setIsSuccess] = useState(false);

    const handleOnSubmit = async (e) => {
        e.preventDefault();
        setMsg("");
        setIsSuccess(false);

        if (fname === "" || !fname.match("^[A-Za-z\\s]+$")) {
            setMsg("Please provide a valid First Name");
        } else if (lname === "" || !lname.match("^[A-Za-z\\s]+$")) {
            setMsg("Please provide a valid Last Name");
        } else if (email === "" || !validateEmail(email)) {
            setMsg("Invalid Email");
        } else if (phnum === "" || !phnum.match('^\\+?[0-9\\s\\-()]{10,20}$')) {
            setMsg("Please provide a valid phone number (10-20 digits)");
        } else {
            try {
                let result = await fetch('http://localhost:5000/api/staff/add', {
                    method: "post",
                    body: JSON.stringify({ fname, lname, email, phnum, username, password, address }),
                    headers: {
                        'Content-Type': 'application/json'
                    }
                });
                result = await result.json();
                if (result) {
                    setIsSuccess(true);
                    setMsg("Staff saved successfully!");
                    setEmail("");
                    setFirstName("");
                    setLastName("");
                    setPhoneNum("");
                    setAddress("");
                    setUserName("");
                    setPassword("");
                }
            } catch (err) {
                setMsg("Server error while saving staff.");
            }
        }
    };

    return (
        <div className="landing-wrapper">
            <div className="dashboard-container">
                <div className="dashboard-card wide">
                    <h1 style={{ color: '#333', marginBottom: '20px' }}>Add New Staff</h1>
                    {msg && <div className={isSuccess ? "success-message" : "error-message"}>{msg}</div>}
                    
                    <form onSubmit={handleOnSubmit}>
                        <div className="grid-form">
                            <div>
                                <div className="form-group">
                                    <label>First Name</label>
                                    <input 
                                        onChange={ev => setFirstName(ev.target.value)} 
                                        value={fname} 
                                        required type="text" maxLength={50}
                                        placeholder="First Name" 
                                    />
                                </div>
                                <div className="form-group">
                                    <label>Last Name</label>
                                    <input 
                                        onChange={ev => setLastName(ev.target.value)} 
                                        value={lname} 
                                        required type="text" maxLength={50}
                                        placeholder="Last Name" 
                                    />
                                </div>
                                <div className="form-group">
                                    <label>Email</label>
                                    <input 
                                        onChange={ev => setEmail(ev.target.value)} 
                                        value={email} 
                                        required type="email" 
                                        placeholder="Email Address" 
                                    />
                                </div>
                                <div className="form-group">
                                    <label>Phone Number</label>
                                    <input 
                                        onChange={ev => setPhoneNum(ev.target.value)} 
                                        value={phnum} 
                                        required type="text" maxLength={20}
                                        placeholder="Phone Number" 
                                    />
                                </div>
                            </div>
                            
                            <div>
                                <div className="form-group">
                                    <label>Username</label>
                                    <input 
                                        onChange={ev => setUserName(ev.target.value)} 
                                        value={username} 
                                        required type="text" 
                                        placeholder="Username" 
                                    />
                                </div>
                                <div className="form-group">
                                    <label>Password</label>
                                    <input 
                                        onChange={ev => setPassword(ev.target.value)} 
                                        value={password} 
                                        required type="password" 
                                        placeholder="Password" 
                                    />
                                </div>
                                <div className="form-group">
                                    <label>Address</label>
                                    <textarea 
                                        rows={4} 
                                        value={address} 
                                        onChange={ev => setAddress(ev.target.value)} 
                                        placeholder="Full Address"
                                        required
                                    />
                                </div>
                            </div>
                        </div>

                        <button type="submit" className="btn-premium btn-primary-gradient" style={{ width: '100%', marginTop: '20px' }}>
                            Save Staff
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default AdminAddStaff;
