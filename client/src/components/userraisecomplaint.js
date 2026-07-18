import React from "react";
import { useEffect, useState } from 'react';
import axios from 'axios';
import './Landing.css'; // Make sure the new styles are loaded

function UserRaiseComplaint() {
    const [dbdata, setDbdata] = useState('');
    const [complaint, setComplaint] = useState('');    
    const [msg, setMsg] = useState('');
    const [isSuccess, setIsSuccess] = useState(false);

    let userid = sessionStorage.getItem('userid').toString();
    console.log("User Id : ", userid);

    useEffect(() => {
        axios.get('http://localhost:5000/api/user/get/' + userid)
            .then(res => {
                setDbdata(res.data);
                console.log("Response : ", res.data);
            })
    }, [userid]);

    const handleOnSubmit = async (e) => {
		e.preventDefault();
        setMsg('');
        setIsSuccess(false);

        if (!complaint || complaint.trim().length === 0) {
            setMsg('Please enter your complaint before submitting.');
            return;
        }

		let fname = dbdata['fname']
		let lname = dbdata['lname']
        let email = dbdata['email']
        let phnum = dbdata['phnum']

		try {
            let result = await fetch(
                'http://localhost:5000/api/complaint/add', {
                method: "post",
                body: JSON.stringify({
                    fname, lname, email, phnum, complaint, userid
                }),
                headers: {
                    'Content-Type': 'application/json'
                }
            })
            result = await result.json();
            console.warn(result);
            if (result) {
                setIsSuccess(true);
                setMsg("Your complaint has been successfully registered.");
                setComplaint("");
            }
        } catch (err) {
            setMsg("Failed to submit complaint. Please try again later.");
        }
	}

    return (
        <div className="dashboard-container">
            <div className="dashboard-header">
                <h2>Raise a Complaint</h2>
                <p style={{color: '#666', fontSize: '1.1rem'}}>Log maintenance issues or administrative concerns</p>
            </div>

            <div className="dashboard-card" style={{maxWidth: '700px', margin: '0 auto'}}>
                {msg && <div className={isSuccess ? "success-message" : "error-message"}>{msg}</div>}
                
                <form encType="multipart/form-data" method="post" onSubmit={handleOnSubmit}>
                    
                    {/* Read Only Details for context */}
                    <div style={{background: '#f8f9fa', padding: '20px', borderRadius: '12px', marginBottom: '30px'}}>
                        <h4 style={{marginTop: 0, marginBottom: '15px', color: '#1a1a1a', fontSize: '1rem'}}>Your Details</h4>
                        <div style={{display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '15px', fontSize: '0.9rem', color: '#555'}}>
                            <div><strong>Name:</strong> {dbdata['fname']} {dbdata['lname']}</div>
                            <div><strong>User ID:</strong> {dbdata['_id']}</div>
                            <div><strong>Email:</strong> {dbdata['email']}</div>
                            <div><strong>Phone:</strong> {dbdata['phnum']}</div>
                        </div>
                    </div>

                    <div className="form-group">
                        <label>Describe your complaint in detail</label>
                        <textarea 
                            rows={6} 
                            value={complaint} 
                            placeholder="Example: The AC in room 204 is not cooling properly."
                            onChange={ev => setComplaint(ev.target.value)}
                            required>
                        </textarea>
                    </div>

                    <div style={{ marginTop: '30px' }}>
                        <button type="submit" className="btn-premium btn-primary-gradient" style={{ width: '100%' }}>
                            Submit Complaint
                        </button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default UserRaiseComplaint;