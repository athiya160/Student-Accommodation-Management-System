import { validate as validateEmail } from 'email-validator';
import React, { useState } from "react";
import axios from 'axios';
import validator from 'validator';
import { useNavigate } from "react-router-dom";
import './Contact.css'; // Import the CSS file

function Contact() {
	const [cname, setCname] = useState("");
	const [email, setEmail] = useState("");
	const [subject, setSubject] = useState("");
	const [message, setMessage] = useState("");

	// Handling the form submission 
	const handleSubmit = async (e) => {
		e.preventDefault();
		if (cname == null || cname.length == 0) {
			alert("Contact Name is Empty")
		}
		else if (!(cname.match("^[A-Za-z\\s]+$"))) {
			alert('Please provide a valid Contact Name. It should only contain letters and spaces.');
		} else if (email == null || email.length == 0) {
			alert("Email is Empty");
		} else if (!validateEmail(email)) {
			alert("Invalid Email");
		} else if (subject == null || subject.length == 0) {
			alert("Subject is Empty");
		} else if (message == null || message.length == 0) {
			alert("Message is Empty");
		} else {
			let result = await fetch(
				'http://localhost:5000/api/contact/addcontact', {
				method: "post",
				body: JSON.stringify({ cname, email, subject, message }),
				headers: {
					'Content-Type': 'application/json'
				}
			});
			result = await result.json();
			console.warn(result);
			if (result) {
				alert("Data saved successfully");
			}
		}
	};

	return (
		<div className="form-container">
			<center>
				<div className="form-box">
					<h1>Contact Form</h1>
					<form onSubmit={handleSubmit}>
						<table>
							<tbody>
								<tr>
									<th><label className="label">Contact Name</label></th>
									<td>
										<input
											onChange={ev => setCname(ev.target.value)}
											className="input"
											value={cname}
											type="text" maxLength={15}
											placeholder="Contact Name"
											required
										/>
									</td>
								</tr>
								<tr>
									<th><label className="label">Email</label></th>
									<td>
										<input
											onChange={ev => setEmail(ev.target.value)}
											className="input"
											value={email}
											type="email"
											placeholder="Email Id"
											required title="Invalid Email Id"
										/>
									</td>
								</tr>
								<tr>
									<th><label className="label">Subject</label></th>
									<td>
										<input
											onChange={ev => setSubject(ev.target.value)}
											className="input"
											value={subject}
											type="text"
											placeholder="Subject"
											required
										/>
									</td>
								</tr>
								<tr>
									<th><label className="label">Message</label></th>
									<td>
										<textarea rows={5} cols={30} value={message} required
											onChange={ev => setMessage(ev.target.value)}>
										</textarea>
									</td>
								</tr>
								<tr>
									<th colSpan={2}>
										<center>
											<button type="submit" className="submit-button">
												Submit
											</button>
										</center>
									</th>
								</tr>
							</tbody>
						</table>
					</form>
				</div>
			</center>
		</div>
	);
}

export default Contact;