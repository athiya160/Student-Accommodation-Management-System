import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import './AdminLogin.css'; // Import the CSS file

const myStyle = {
    backgroundImage: "url('https://t4.ftcdn.net/jpg/02/10/45/95/360_F_210459536_XmLDEcKq2DpeNLVmheuWeu9NM9aGKnih.jpg')",
    height: "100vh",  // Adjusted to fit the viewport height
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundAttachment: "fixed",
    backgroundPosition: "center",
    display: "flex",
    justifyContent: "center",
    alignItems: "center"
};

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
        <div style={myStyle}>
            <div className="form">
                <h1>Admin Login Form</h1>
                <form onSubmit={handleSubmit}>
                    <table>
                        <tbody>
                            <tr>
                                <th colSpan={2} className="message">{msg}</th>
                            </tr>
                            <tr>
                                <th>
                                    <label className="label">User Name</label>
                                </th>
                                <td>
                                    <input
                                        className="input"
                                        value={username}
                                        type="text"
                                        onChange={ev => setUserName(ev.target.value)}
                                        placeholder="User Name"
                                        required
                                    />
                                </td>
                            </tr>
                            <tr>
                                <th>
                                    <label className="label">Password</label>
                                </th>
                                <td>
                                    <input
                                        className="input"
                                        value={password}
                                        type="password"
                                        onChange={ev => setPassword(ev.target.value)}
                                        placeholder="Password"
                                        required
                                    />
                                </td>
                            </tr>
                            <tr>
                                <th colSpan={2}>
                                    <center>
                                        <button type="submit">Admin Login</button>
                                        &nbsp;&nbsp;&nbsp;&nbsp;
                                        <a href="/newuser">New Student</a>
                                        &nbsp;&nbsp;&nbsp;&nbsp;
                                        <a href="/userlogin">User Login</a>
                                    </center>
                                </th>
                            </tr>
                        </tbody>
                    </table>
                </form>
            </div>
        </div>
    );
}

export default AdminLogin;
