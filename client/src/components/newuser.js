import React, { useState } from "react";
import { validate as validateEmail } from 'email-validator';
import './Landing.css'; // Use unified Landing.css

function NewUser() {
    const [fname, setFirstName] = useState("");
    const [lname, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [phnum, setPhoneNum] = useState("");
    const [address, setAddress] = useState("");
    const [username, setUserName] = useState("");
    const [password, setPassword] = useState("");
    const [fathername, setFatherName] = useState("");
    const [mothername, setMotherName] = useState("");
    const [parentphnum, setParentPhNum] = useState("");
    const [parentaddress, setParentAddress] = useState("");
    const [photo, setPhoto] = useState("");
    const [msg, setMsg] = useState("");
    const [isSuccess, setIsSuccess] = useState(false);

    const handleFileSelect = (event) => {
        setPhoto(event.target.files[0])
    }

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
        } else if (phnum === "" || !phnum.match('^\\+?[0-9\\s-]{10,15}$')) {
            setMsg("Please provide a valid phone number (10-15 digits)");
        } else if (username === "") {
            setMsg("User Name is Empty");
        } else if (password === "") {
            setMsg("Password is Empty");
        } else if (fathername === "") {
            setMsg("Father Name is Empty");
        } else if (mothername === "") {
            setMsg("Mother Name is Empty");
        } else if (parentphnum === "" || !parentphnum.match('^\\+?[0-9\\s-]{10,15}$')) {
            setMsg("Please provide a valid Parent Phone Number (10-15 digits)");
        } else {
            let roomallocated = "No";
            let messallocated = "No";
            try {
                let result = await fetch(
                    'http://localhost:5000/api/user/add', {
                    method: "post",
                    body: JSON.stringify({
                        fname, lname, email, phnum, username,
                        password, address, fathername, mothername, parentphnum, parentaddress,
                        roomallocated, messallocated
                    }),
                    headers: {
                        'Content-Type': 'application/json'
                    }
                })
                result = await result.json();
                console.warn(result);
                if (result) {
                    setIsSuccess(true);
                    setMsg("Registration successful! You can now login.");
                    setEmail("");
                    setFirstName("");
                    setAddress("");
                    setLastName("");
                    setMotherName("");
                    setParentAddress("");
                    setParentPhNum("");
                    setPhoneNum("");
                    setUserName("");
                    setPassword("");
                    setFatherName("");
                }
            } catch (err) {
                setMsg("Server error. Please try again later.");
            }
        }
    }

    return (
        <div className="landing-wrapper">
            <div className="auth-page">
                <div className="auth-card wide">
                    <h1>New Registration</h1>
                    {msg && <div className={isSuccess ? "success-message" : "error-message"}>{msg}</div>}
                    <form encType="multipart/form-data" method="post" onSubmit={handleOnSubmit}>
                        <div className="grid-form">
                            {/* Column 1 */}
                            <div>
                                <div className="form-group">
                                    <label>First Name</label>
                                    <input
                                        value={fname}
                                        onChange={ev => setFirstName(ev.target.value)}
                                        type="text" placeholder="First Name" maxLength={50} required
                                    />
                                </div>
                                <div className="form-group">
                                    <label>Last Name</label>
                                    <input
                                        value={lname}
                                        onChange={ev => setLastName(ev.target.value)}
                                        type="text" placeholder="Last Name" maxLength={50} required
                                    />
                                </div>
                                <div className="form-group">
                                    <label>Email</label>
                                    <input
                                        value={email}
                                        onChange={ev => setEmail(ev.target.value)}
                                        type="email" placeholder="Email Address" required
                                    />
                                </div>
                                <div className="form-group">
                                    <label>Phone Number</label>
                                    <input
                                        value={phnum}
                                        onChange={ev => setPhoneNum(ev.target.value)}
                                        type="text" placeholder="Phone Number" maxLength={15} required
                                    />
                                </div>
                                <div className="form-group">
                                    <label>Username</label>
                                    <input
                                        value={username}
                                        onChange={ev => setUserName(ev.target.value)}
                                        type="text" placeholder="Choose a Username" required
                                    />
                                </div>
                                <div className="form-group">
                                    <label>Password</label>
                                    <input
                                        value={password}
                                        onChange={ev => setPassword(ev.target.value)}
                                        type="password" placeholder="Create a Password" maxLength={50} required
                                    />
                                </div>
                            </div>
                            
                            {/* Column 2 */}
                            <div>
                                <div className="form-group">
                                    <label>Father's Name</label>
                                    <input
                                        value={fathername}
                                        onChange={ev => setFatherName(ev.target.value)}
                                        type="text" placeholder="Father's Name" maxLength={50} required
                                    />
                                </div>
                                <div className="form-group">
                                    <label>Mother's Name</label>
                                    <input
                                        value={mothername}
                                        onChange={ev => setMotherName(ev.target.value)}
                                        type="text" placeholder="Mother's Name" maxLength={50} required
                                    />
                                </div>
                                <div className="form-group">
                                    <label>Parent Phone Number</label>
                                    <input
                                        value={parentphnum}
                                        onChange={ev => setParentPhNum(ev.target.value)}
                                        type="text" placeholder="Parent Phone Number" maxLength={15} required
                                    />
                                </div>
                                <div className="form-group">
                                    <label>Student Address</label>
                                    <textarea
                                        value={address}
                                        onChange={ev => setAddress(ev.target.value)}
                                        rows={3} placeholder="Current Address" required
                                    ></textarea>
                                </div>
                                <div className="form-group">
                                    <label>Parent Address</label>
                                    <textarea
                                        value={parentaddress}
                                        onChange={ev => setParentAddress(ev.target.value)}
                                        rows={3} placeholder="Permanent Address"
                                    ></textarea>
                                </div>
                            </div>
                        </div>

                        <div style={{ marginTop: '20px' }}>
                            <button type="submit" className="btn-premium btn-primary-gradient" style={{ padding: '15px 50px' }}>
                                Register
                            </button>
                        </div>
                    </form>

                    <div className="auth-links" style={{ marginTop: '30px' }}>
                        <a href="/userlogin">Already have an account? Student Login</a>
                        <a href="/adminlogin">Admin Login</a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default NewUser;
