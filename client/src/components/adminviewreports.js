import React, { useState, useEffect } from "react";
import './Landing.css';

function AdminViewReports() {
    const [data, setData] = useState([]);
    const [messdata, setMessData] = useState([]);
    
    useEffect(() => {
        fetch('http://localhost:5000/api/newroomallocate/get') 
          .then(response => response.json()) 
          .then(data => setData(data)) 
          .catch(err => console.error("Error fetching data: ", err)); 
    }, []);
    
    useEffect(() => {
        fetch('http://localhost:5000/api/newmessallocate/get') 
          .then(response => response.json()) 
          .then(data => setMessData(data)) 
          .catch(err => console.error("Error fetching data: ", err)); 
    }, []);

    return (
        <div className="landing-wrapper">
            <div className="dashboard-container" style={{ gap: '30px', display: 'flex', flexDirection: 'column' }}>
                <div className="dashboard-card wide">
                    <h1 style={{ color: '#333', marginBottom: '20px', textAlign: 'center' }}>Room Allocations Report</h1>
                    
                    <div className="table-responsive">
                        <table className="modern-table">
                            <thead>
                                <tr>
                                    <th>Student Id</th>
                                    <th>First Name</th>
                                    <th>Last Name</th>
                                    <th>Email Id</th>
                                    <th>Phone Num</th>
                                    <th>Room Id</th>
                                    <th>Room Name</th>
                                    <th>Room Type</th>
                                    <th>Details</th>
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
                                        <td>{x.roomid}</td>
                                        <td>{x.rname}</td>
                                        <td>{x.rtype}</td>
                                        <td>{x.details}</td>
                                    </tr>
                                ))} 
                            </tbody>
                        </table>
                    </div>
                </div>

                <div className="dashboard-card wide">
                    <h1 style={{ color: '#333', marginBottom: '20px', textAlign: 'center' }}>Mess Allocations Report</h1>
                    
                    <div className="table-responsive">
                        <table className="modern-table">
                            <thead>
                                <tr>
                                    <th>Student Id</th>
                                    <th>First Name</th>
                                    <th>Last Name</th>
                                    <th>Email Id</th>
                                    <th>Phone Num</th>
                                    <th>Mess Id</th>
                                    <th>Mess Name</th>
                                    <th>Mess Type</th>
                                    <th>Details</th>
                                </tr>
                            </thead>
                            <tbody>
                                {messdata.map((x, index) => ( 
                                    <tr key={index}>
                                        <td>{x.userid}</td>
                                        <td>{x.fname}</td>
                                        <td>{x.lname}</td>
                                        <td>{x.email}</td>
                                        <td>{x.phnum}</td>
                                        <td>{x.messid}</td>
                                        <td>{x.mname}</td>
                                        <td>{x.mtype}</td>
                                        <td>{x.details}</td>
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
export default AdminViewReports;