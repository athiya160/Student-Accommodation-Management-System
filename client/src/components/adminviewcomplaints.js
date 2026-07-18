import React, { useState, useEffect } from "react";
import './Landing.css';

function AdminViewComplaints() {
    const [data, setData] = useState([]);
    useEffect(() => { 
        fetch('http://localhost:5000/api/complaint/get') 
          .then(response => response.json())
          .then(data => setData(data)) 
          .catch(err => console.error("Error fetching data: ", err)); 
    }, []); 

    return (
        <div className="landing-wrapper">
            <div className="dashboard-container">
                <div className="dashboard-card wide">
                    <h1 style={{ color: '#333', marginBottom: '20px', textAlign: 'center' }}>Student Complaints</h1>
                    
                    <div className="table-responsive">
                        <table className="modern-table">
                            <thead>
                                <tr>
                                    <th>User Id</th>
                                    <th>First Name</th>
                                    <th>Last Name</th>
                                    <th>Email Id</th>
                                    <th>Phone Num</th>
                                    <th>Complaint</th>
                                </tr>
                            </thead>
                            <tbody>
                                {data.map((x, index) => ( 
                                    <tr key={index}>
                                        <td>{x.userid}</td>
                                        <td>{x.fname}</td>
                                        <td>{x.lname}</td>
                                        <td>{x.email}</td>
                                        <td>{x.phnum}</td>
                                        <td>{x.complaint}</td>
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
export default AdminViewComplaints;