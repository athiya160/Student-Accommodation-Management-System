import Header from "./header";
import React, { Component, useState } from "react";
import { useNavigate } from "react-router-dom";

function Home() {
	const [msg, setMsg] = useState("");
	const [username, setUserName] = useState("");
	const [password, setPassword] = useState("");

	// States for checking the errors 
	const [submitted, setSubmitted] = useState(false);
	const [error, setError] = useState(false);

	// Handling the name change 
	const handleName = (e) => {
		setUserName(e.target.value);
		setSubmitted(false);
	};


	const navigate = useNavigate();
	// Handling the form submission 
	const handleSubmit = (e) => {
		e.preventDefault();
		sessionStorage.setItem("usertype", "admin")
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
	const myStyle = {
		backgroundImage:
			"url('C:\Users\Athiya\Pictures\hoste\new')",
		height: "120vh",
		marginTop: "-70px",
		backgroundSize: "cover",
		backgroundRepeat: "no-repeat",
	};
	return (
		<div className="form" style={myStyle}>
			<br></br><br></br><br></br><br></br><br></br>
			<br></br><br></br>
			<center>
				<div>
					<h1>Login Form</h1>
				</div>

				<form>
					<table>
						<tr>
							<th colSpan={2}>{msg}</th>
						</tr>
						<tr><th><br></br>
							<label className="label" style={{ color: "black" }}>User Name</label> </th>
							<td><br></br>
								<input
									className="input"
									value={username}
									type="text" onChange={ev => setUserName(ev.target.value)}
									placeholder="User Name"
								/>
							</td>
						</tr>
						<tr><th><br></br>
							<label className="label" style={{ color: "black" }}>Password</label> </th>
							<td><br></br>
								<input
									className="input"
									value={password}
									type="password" onChange={ev => setPassword(ev.target.value)}
									placeholder="Password"
								/>
							</td>
						</tr>

						<tr><th colSpan={2}>
							<center>
								<br></br>
								<button onClick={handleSubmit} type="button">
									AdminLogin
								</button>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
								<a href="/newuser">NewUser</a>
								&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
								<a href="/userlogin">UserLogin</a>
							</center>
						</th>
						</tr>
					</table>
				</form>
			</center>
		</div>
	);
}

export default Home;