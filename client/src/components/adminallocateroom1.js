import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from 'axios';
import './Landing.css';

const AdminAllocateRoom1 = (props) => {
    let userid = sessionStorage.getItem('userid').toString();
    const [dbdata, setDbdata] = useState('');
    const [data, setData] = useState([]);
    
    useEffect(() => {
        fetch('http://localhost:5000/api/room/get')
            .then(response => response.json())
            .then(data => setData(data))
            .catch(err => console.error("Error fetching data: ", err));
    }, []);

    let userid = sessionStorage.getItem('userid').toString();
    
    useEffect(() => {
        axios.get('http://localhost:5000/api/user/get/' + userid)
            .then(res => {
                setDbdata(res.data);
            })
    }, [userid]);
    
    const navigate = useNavigate();
    
    const handleClick = (id) => async (e) => {        
        sessionStorage.setItem("roomid", id)
        let path = '/adminallocateroom2';
        navigate(path);
        window.location.reload(false);
    };

    return (
        <div className="landing-wrapper">
            <div className="dashboard-container" style={{ gap: '30px', display: 'flex', flexDirection: 'column' }}>
                <div className="dashboard-card" style={{ maxWidth: '600px', margin: '0 auto' }}>
                    <h2 style={{ color: '#333', marginBottom: '20px', textAlign: 'center' }}>Selected User Details</h2>
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

                <div className="dashboard-card wide">
                    <h2 style={{ color: '#333', marginBottom: '20px', textAlign: 'center' }}>Step 2: Select Room for Student</h2>
                    <div className="table-responsive">
                        <table className="modern-table">
                            <thead>
                                <tr>
                                    <th>Room ID</th>
                                    <th>Room Type</th>
                                    <th>Number of Students</th>
                                    <th>Details</th>
                                    <th>Price</th>
                                    <th>Date</th>
                                    <th>Select Room</th>
                                </tr>
                            </thead>
                            <tbody>
                                {data.map((x, index) => (
                                    <tr key={index}>
                                        <td>{x.rname}</td>
                                        <td>{x.rtype}</td>
                                        <td>{x.numofstudents}</td>
                                        <td>{x.details}</td>
                                        <td>{x.price}</td>
                                        <td>{x.date}</td>
                                        <td>
                                            <button 
                                                className="btn-submit"
                                                style={{ padding: '8px 15px', fontSize: '14px', width: 'auto' }}
                                                onClick={handleClick(x._id)}>
                                                Select Room
                                            </button>
                                        </td>
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

export default AdminAllocateRoom1;