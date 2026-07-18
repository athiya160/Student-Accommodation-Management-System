import { validate as validateEmail } from 'email-validator';
import React, { useState } from "react";
import './Landing.css'; // Use unified Landing.css

function Contact() {
    const [cname, setCname] = useState("");
    const [email, setEmail] = useState("");
    const [subject, setSubject] = useState("");
    const [message, setMessage] = useState("");

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
                alert("Message sent successfully!");
                setCname(""); setEmail(""); setSubject(""); setMessage("");
            }
        }
    };

    return (
        <div className="landing-wrapper">
            <div className="auth-page">
                <div className="auth-card wide">
                    <h1>Get In Touch</h1>
                    <p style={{marginBottom: '40px', color: '#666'}}>Have questions about our hostel facilities? We'd love to hear from you.</p>
                    
                    <div className="contact-split">
                        <div className="contact-info">
                            <h3>Contact Info</h3>
                            <p><span>📍</span> 123 University Road, Tech Campus, City</p>
                            <p><span>📞</span> +91 98765 43210</p>
                            <p><span>✉️</span> support@nextgenhostel.edu</p>
                            <p><span>🕒</span> Mon - Fri: 9:00 AM - 6:00 PM</p>
                        </div>
                        
                        <div className="contact-form">
                            <form onSubmit={handleSubmit}>
                                <div className="form-group">
                                    <label>Full Name</label>
                                    <input
                                        onChange={ev => setCname(ev.target.value)}
                                        value={cname}
                                        type="text" maxLength={15}
                                        placeholder="Enter your name"
                                        required
                                    />
                                </div>
                                
                                <div className="form-group">
                                    <label>Email Address</label>
                                    <input
                                        onChange={ev => setEmail(ev.target.value)}
                                        value={email}
                                        type="email"
                                        placeholder="Enter your email"
                                        required
                                    />
                                </div>
                                
                                <div className="form-group">
                                    <label>Subject</label>
                                    <input
                                        onChange={ev => setSubject(ev.target.value)}
                                        value={subject}
                                        type="text"
                                        placeholder="Subject of your message"
                                        required
                                    />
                                </div>
                                
                                <div className="form-group">
                                    <label>Message</label>
                                    <textarea 
                                        rows={4} 
                                        value={message} 
                                        required
                                        placeholder="How can we help you?"
                                        onChange={ev => setMessage(ev.target.value)}>
                                    </textarea>
                                </div>
                                
                                <button type="submit" className="btn-premium btn-primary-gradient" style={{width: '100%', marginTop: '10px'}}>
                                    Send Message
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Contact;