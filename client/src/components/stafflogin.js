import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const backgroundStyle = {
    backgroundImage: 'url("your-image-url.jpg")',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    height: '100vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
};

const formStyle = {
    backgroundColor: 'rgba(255, 255, 255, 0.8)',
    padding: '20px',
    borderRadius: '10px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
    width: '400px',
};

const labelStyle = {
    color: '#333',
    fontWeight: 'bold',
};

const inputStyle = {
    width: '100%',
    padding: '8px',
    margin: '8px 0',
    display: 'inline-block',
    border: '1px solid #ccc',
    borderRadius: '4px',
    boxSizing: 'border-box',
};

const buttonStyle = {
    backgroundColor: '#4CAF50',
    color: 'white',
    padding: '10px 15px',
    margin: '10px 0',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
    width: '100%',
};

const buttonHoverStyle = {
    ...buttonStyle,
    backgroundColor: '#45a049',
};

const linkStyle = {
    color: '#4CAF50',
    textDecoration: 'none',
};

const linkHoverStyle = {
    ...linkStyle,
    textDecoration: 'underline',
};

function StaffLogin() {
    const [username, setUserName] = useState("");
    const [password, setPassword] = useState("");
    const [msg, setMsg] = useState("");

    const navigate = useNavigate();
    const handleOnSubmit = async (e) => {
        e.preventDefault();
        if (username === "" || username.length === 0) {
            alert("UserName is Empty");
        } else if (password === "" || password.length === 0) {
            alert("Password is Empty");
        } else {
            let result = await fetch(
                'http://localhost:5000/api/staff/checkstafflogin', {
                method: "post",
                body: JSON.stringify({ username, password }),
                headers: {
                    'Content-Type': 'application/json'
                }
            })
            result = await result.json();
            console.log("Result : ", result, " Length : ", Object.keys(result).length,
                " Id : ", result['_id']);
            if (result != undefined && Object.keys(result).length > 0) {
                sessionStorage.setItem("usertype", "staff")
                sessionStorage.setItem("staffid", result['_id'])
                console.log("Id : ", result['_id'])
                let path = '/staffmainpage';
                navigate(path);
                window.location.reload(false);
            } else {
                alert("Invalid UserName/Password");
            }
        }
    }

    return (
        <div style={backgroundStyle}>
            <div style={formStyle}>
                <center>
                    <div>
                        <h1>Staff Login Form</h1>
                    </div>
                    <form>
                        <table>
                            <tr>
                                <th colSpan={2}>{msg}</th>
                            </tr>
                            <tr>
                                <th><br></br>
                                    <label style={labelStyle}>User Name</label> </th>
                                <td><br></br>
                                    <input
                                        style={inputStyle}
                                        value={username}
                                        type="text" onChange={ev => setUserName(ev.target.value)}
                                        placeholder="User Name"
                                    />
                                </td>
                            </tr>
                            <tr>
                                <th>
                                    <br></br>
                                    <label style={labelStyle}>Password</label> </th>
                                <td>
                                    <br></br>
                                    <input
                                        style={inputStyle}
                                        value={password}
                                        type="password" onChange={ev => setPassword(ev.target.value)}
                                        placeholder="Password"
                                    />
                                </td>
                            </tr>

                            <tr>
                                <th colSpan={2}>
                                    <br></br>
                                    <center>
                                        <button style={buttonStyle} onClick={handleOnSubmit} type="submit">
                                            StaffLogin
                                        </button>
                                        <br />
                                        <a style={linkStyle} href="/newuser">New Student</a>
                                        &nbsp;&nbsp;&nbsp;&nbsp;
                                        <a style={linkStyle} href="/adminlogin">Admin Login</a>
                                    </center>
                                </th>
                            </tr>
                        </table>
                    </form>
                </center>
            </div>
        </div>
    );
}

export default StaffLogin;
