import React, { useState } from "react";
import { validate as validateEmail } from 'email-validator';
import './NewUser.css'; // Import the CSS file

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

    const handleFileSelect = (event) => {
        setPhoto(event.target.files[0])
    }

    const handleOnSubmit = async (e) => {
        e.preventDefault();
        if (fname === "" || !fname.match("^[A-Za-z\\s]+$")) {
            alert("Please provide a valid First Name");
        } else if (lname === "" || !lname.match("^[A-Za-z\\s]+$")) {
            alert("Please provide a valid Last Name");
        } else if (email === "" || !validateEmail(email)) {
            alert("Invalid Email");
        } else if (phnum === "" || !phnum.match('[6789][0-9]{9}')) {
            alert("Please provide a valid phone number");
        } else if (username === "") {
            alert("User Name is Empty");
        } else if (password === "") {
            alert("Password is Empty");
        } else if (fathername === "") {
            alert("Father Name is Empty");
        } else if (mothername === "") {
            alert("Mother Name is Empty");
        } else if (parentphnum === "" || !parentphnum.match('[6789][0-9]{9}')) {
            alert("Please provide a valid Parent Phone Number");
        } else {
            let roomallocated = "No";
            let messallocated = "No";
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
                alert("Data saved successfully");
                setEmail("");
                setFirstName("");
                setAddress("");
                setLastName("");
                setMotherName("");
                setParentAddress("");
                setParentPhNum("");
                setPhoneNum("");
                setUserName("");
            }
        }
    }

    return (
        <div className="background">
            <div className="form-container">
                <center>
                    <div>
                        <h1>New Registration Form</h1>
                    </div>
                    <form encType="multipart/form-data" method="post" onSubmit={handleOnSubmit}>
                        <table>
                            <tbody>
                                <tr>
                                    <th><label className="label">First Name</label></th>
                                    <td><input
                                        className="input"
                                        value={fname}
                                        onChange={ev => setFirstName(ev.target.value)}
                                        type="text"
                                        placeholder="First Name"
                                        maxLength={15}
                                        required
                                    /></td>
                                    <th><label className="label">Father Name</label></th>
                                    <td><input
                                        className="input"
                                        value={fathername}
                                        onChange={ev => setFatherName(ev.target.value)}
                                        type="text"
                                        placeholder="Father Name"
                                        maxLength={10}
                                        required
                                    /></td>
                                </tr>
                                <tr>
                                    <th><label className="label">Last Name</label></th>
                                    <td><input
                                        className="input"
                                        value={lname}
                                        onChange={ev => setLastName(ev.target.value)}
                                        type="text"
                                        placeholder="Last Name"
                                        maxLength={7}
                                        required
                                    /></td>
                                    <th><label className="label">Mother Name</label></th>
                                    <td><input
                                        className="input"
                                        value={mothername}
                                        onChange={ev => setMotherName(ev.target.value)}
                                        type="text"
                                        placeholder="Mother Name"
                                        maxLength={10}
                                        required
                                    /></td>
                                </tr>
                                <tr>
                                    <th><label className="label">Email</label></th>
                                    <td><input
                                        className="input"
                                        value={email}
                                        onChange={ev => setEmail(ev.target.value)}
                                        type="email"
                                        placeholder="Email Id"
                                        required
                                    /></td>
                                </tr>
                                <tr>
                                    <th><label className="label">Phone Num</label></th>
                                    <td><input
                                        className="input"
                                        value={phnum}
                                        onChange={ev => setPhoneNum(ev.target.value)}
                                        type="text"
                                        placeholder="Phone Num"
                                        maxLength={10}
                                        required
                                    /></td>
                                    <th><label className="label">Parent Phone Num</label></th>
                                    <td><input
                                        className="input"
                                        value={parentphnum}
                                        onChange={ev => setParentPhNum(ev.target.value)}
                                        type="text"
                                        placeholder="Parent Phone Num"
                                        maxLength={10}
                                        required
                                    /></td>
                                </tr>
                                <tr>
                                    <th><label className="label">User Name</label></th>
                                    <td><input
                                        className="input"
                                        value={username}
                                        onChange={ev => setUserName(ev.target.value)}
                                        type="text"
                                        placeholder="User Name"
                                        required
                                    /></td>
                                </tr>
                                <tr>
                                    <th><label className="label">Password</label></th>
                                    <td><input
                                        className="input"
                                        value={password}
                                        onChange={ev => setPassword(ev.target.value)}
                                        type="password"
                                        placeholder="Password"
                                        maxLength={15}
                                    /></td>
                                </tr>
                                <tr>
                                    <th><label className="label">Address</label></th>
                                    <td><textarea
                                        className="input"
                                        value={address}
                                        onChange={ev => setAddress(ev.target.value)}
                                        rows={5}
                                        placeholder="Address"
                                        required
                                    ></textarea></td>
                                    <th><label className="label">Parent Address</label></th>
                                    <td><textarea
                                        className="input"
                                        value={parentaddress}
                                        onChange={ev => setParentAddress(ev.target.value)}
                                        rows={5}
                                        placeholder="Parent Address"
                                    ></textarea></td>
                                </tr>
                                <tr>
                                    <th colSpan={2}>
                                        <center>
                                            <button type="submit">
                                                Register
                                            </button>
                                            &nbsp;&nbsp;&nbsp;&nbsp;
                                            <a href="/adminlogin">Admin Login</a>
                                            &nbsp;&nbsp;&nbsp;&nbsp;
                                            <a href="/userlogin">User Login</a>
                                        </center>
                                    </th>
                                </tr>
                            </tbody>
                        </table>
                    </form>
                </center>
            </div>
        </div>
    );
}

export default NewUser;
