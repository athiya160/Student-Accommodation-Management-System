import React from "react";
import { useEffect } from 'react';
import { useState } from "react";
import axios from 'axios';
import './Landing.css'; // Make sure the new styles are loaded

function UserViewProfile() {
    const [dbdata, setDbdata] = useState('');
    let userid = sessionStorage.getItem('userid').toString()
    console.log("User Id : ", userid)
    useEffect(() => {
        axios.get('http://localhost:5000/api/user/get/' + userid)
            .then(res => {
                setDbdata(res.data);
                console.log("Response : ", res.data)
            })
    }, [userid]);

    return (
        <div className="dashboard-container">
            <div className="dashboard-header">
                <h2>My Profile</h2>
                <p style={{color: '#666', fontSize: '1.1rem'}}>View and manage your personal details</p>
            </div>

            <div className="dashboard-card" style={{maxWidth: '900px', margin: '0 auto'}}>
                <div className="profile-grid">
                    {/* Left Column: Avatar */}
                    <div className="profile-avatar">
                        <div style={{fontSize: '5rem', marginBottom: '10px'}}>🧑‍🎓</div>
                        <h3>{dbdata['fname']} {dbdata['lname']}</h3>
                        <p style={{opacity: 0.9, fontSize: '0.9rem', margin: 0}}>Student / Resident</p>
                    </div>

                    {/* Right Column: Details */}
                    <div className="profile-details">
                        <div className="detail-item">
                            <label>User ID</label>
                            <p>{dbdata['_id']}</p>
                        </div>
                        <div className="detail-item">
                            <label>Full Name</label>
                            <p>{dbdata['fname']} {dbdata['lname']}</p>
                        </div>
                        <div className="detail-item">
                            <label>Email Address</label>
                            <p>{dbdata['email']}</p>
                        </div>
                        <div className="detail-item">
                            <label>Phone Number</label>
                            <p>{dbdata['phnum']}</p>
                        </div>
                        <div className="detail-item" style={{gridColumn: '1 / -1'}}>
                            <label>Residential Address</label>
                            <p>{dbdata['address']}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default UserViewProfile;