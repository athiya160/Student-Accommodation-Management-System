import React, { useState, useEffect } from "react";
import './Landing.css';

function AdminViewStaffs() {
    const [data, setData] = useState([]);
    useEffect(() => { 
        fetch('http://localhost:5000/api/staff/get')
          .then(response => response.json()) 
          .then(data => setData(data)) 
          .catch(err => console.error("Error fetching data: ", err)); 
    }, []); 

    return (
        <div className="landing-wrapper">
            <div className="dashboard-container">
                <div className="dashboard-card wide">
                    <h1 style={{ color: '#333', marginBottom: '20px', textAlign: 'center' }}>Registered Staff Members</h1>
                    
                    <div className="table-responsive">
                        <table className="modern-table">
                            <thead>
                                <tr>
                                    <th>First Name</th>
                                    <th>Last Name</th>
                                    <th>Email</th>
                                    <th>Phone Num</th>
                                    <th>Username</th>
                                    <th>Address</th>
                                </tr>
                            </thead>
                            <tbody>
                                {data.map((x, index) => ( 
                                    <tr key={index}>
                                        <td>{x.fname}</td>
                                        <td>{x.lname}</td>
                                        <td>{x.email}</td>
                                        <td>{x.phnum}</td>
                                        <td>{x.username}</td>
                                        <td>{x.address}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default AdminViewStaffs;