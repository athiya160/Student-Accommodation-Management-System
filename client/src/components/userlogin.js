import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import './UserLogin.css'; // Import the CSS file

const myStyle = {
    backgroundImage: "url('https://t4.ftcdn.net/jpg/02/10/45/95/360_F_210459536_XmLDEcKq2DpeNLVmheuWeu9NM9aGKnih.jpg')",
    height: "100vh",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundAttachment: "fixed",
    backgroundPosition: "center",
    display: "flex",
    justifyContent: "center",
    alignItems: "center"
};

function UserLogin() {    
    const [username, setUserName] = useState(""); 
    const [password, setPassword] = useState("");
    const [msg, setMsg] = useState("");
    
    const navigate = useNavigate();
    const handleOnSubmit = async (e) => {
        e.preventDefault();
        if (username === "" || username.length === 0) {
            alert("UserName is Empty");
        }
        else if (password === "" || password.length === 0) {
            alert("Password is Empty");
        }
        else {
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
                alert("Invalid UserName/Password");                
            }
        }
    }

    return (      
        <div style={myStyle}>
            <div className="form">
                <h1>User Login Form</h1>
                <form onSubmit={handleOnSubmit}>
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
                                        <button type="submit">User Login</button>
                                        &nbsp;&nbsp;&nbsp;&nbsp;
                                        <a href="/newuser">New Student</a>
                                        &nbsp;&nbsp;&nbsp;&nbsp;
                                        <a href="/adminlogin">Admin Login</a>
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

export default UserLogin;
