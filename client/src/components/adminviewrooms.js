import React, { useState, useEffect } from "react";
import './Landing.css';

function AdminViewRooms() {
    const [data, setData] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/api/room/get')
            .then(response => response.json())
            .then(data => setData(data))
            .catch(err => console.error("Error fetching data: ", err));
    }, []);
    return (
        <div className="landing-wrapper">
            <div className="dashboard-container">
                <div className="dashboard-card wide">
                    <h1 style={{ color: '#333', marginBottom: '20px', textAlign: 'center' }}>Available Rooms</h1>
                    
                    <div className="table-responsive">
                        <table className="modern-table">
                            <thead>
                                <tr>
                                    <th>Room Id</th>
                                    <th>Room Type</th>
                                    <th>Number of Students</th>
                                    <th>Details</th>
                                    <th>Price</th>
                                    <th>Date</th>
                                </tr>
                            </thead>
                            <tbody>
                                {data.map((x, index) => (
                                    <tr key={index}>
                                        <td>{x.rid}</td>
                                        <td>{x.rtype}</td>
                                        <td>{x.numofstudents}</td>
                                        <td>{x.details}</td>
                                        <td>{x.price}</td>
                                        <td>{x.date}</td>
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
export default AdminViewRooms;