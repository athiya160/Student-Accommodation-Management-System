import React, { useState, useEffect } from "react";
import './Landing.css';

function AdminViewContacts() {
    const [data, setData] = useState([]);
    useEffect(() => { 
        fetch('http://localhost:5000/api/contact/getcontacts') 
          .then(response => response.json()) 
          .then(data => setData(data)) 
          .catch(err => console.error("Error fetching data: ", err)); 
    }, []); 

    return (
        <div className="landing-wrapper">
            <div className="dashboard-container">
                <div className="dashboard-card wide">
                    <h1 style={{ color: '#333', marginBottom: '20px', textAlign: 'center' }}>Contact Messages</h1>
                    
                    <div className="table-responsive">
                        <table className="modern-table">
                            <thead>
                                <tr>
                                    <th>Contact Name</th>
                                    <th>Email Id</th>
                                    <th>Subject</th>
                                    <th>Message</th>
                                </tr>
                            </thead>
                            <tbody>
                                {data.map((x, index) => ( 
                                    <tr key={index}>
                                        <td>{x.cname}</td>
                                        <td>{x.email}</td>
                                        <td>{x.subject}</td>
                                        <td>{x.message}</td>
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
export default AdminViewContacts;