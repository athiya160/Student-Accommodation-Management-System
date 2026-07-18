import React, { useEffect, useState } from "react";
import axios from 'axios';
import './Landing.css';

function StaffViewProfile() {
    const [dbdata, setDbdata] = useState('');
    let staffid = sessionStorage.getItem('staffid').toString()
    
    useEffect(() => {
        axios.get('http://localhost:5000/api/staff/get/' + staffid)
            .then(res => {
                setDbdata(res.data);
            })
    }, [staffid]);

    return (
        <div className="landing-wrapper">
            <div className="dashboard-container">
                <div className="dashboard-card" style={{ maxWidth: '600px', margin: '0 auto' }}>
                    <h1 style={{ color: '#333', marginBottom: '20px', textAlign: 'center' }}>Staff Profile Details</h1>
                    
                    <div className="table-responsive">
                        <table className="modern-table profile-table">
                            <tbody>
                                <tr>
                                    <th style={{ width: '40%' }}>User Id</th>
                                    <td>{dbdata['_id']}</td>
                                </tr>
                                <tr>
                                    <th>First Name</th>
                                    <td>{dbdata['fname']}</td>
                                </tr>
                                <tr>
                                    <th>Last Name</th>
                                    <td>{dbdata['lname']}</td>
                                </tr>
                                <tr>
                                    <th>Email Id</th>
                                    <td>{dbdata['email']}</td>
                                </tr>
                                <tr>
                                    <th>Phone Number</th>
                                    <td>{dbdata['phnum']}</td>
                                </tr>
                                <tr>
                                    <th>Address</th>
                                    <td>{dbdata['address']}</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default StaffViewProfile;