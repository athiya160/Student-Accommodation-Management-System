import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from 'axios';
import './Landing.css';

const AdminAllocateRoom2 = (props) => {
    const [studentdata, setStudentdata] = useState('');
    const [roomdata, setRoomdata] = useState('');
    let userid = sessionStorage.getItem('userid').toString();
    let roomid = sessionStorage.getItem('roomid').toString();

    useEffect(() => {
        axios.get('http://localhost:5000/api/user/get/' + userid)
            .then(res => {
                setStudentdata(res.data);
            })
    }, [userid]);

    useEffect(() => {
        axios.get('http://localhost:5000/api/room/get/' + roomid)
            .then(res => {
                setRoomdata(res.data);
            })
    }, [roomid]);
    
    const navigate = useNavigate();
    
    const handleOnSubmit = async (e) => {
        e.preventDefault();
        let fname = studentdata['fname']
        let lname = studentdata['lname']
        let email = studentdata['email']
        let phnum = studentdata['phnum']
        let rname = roomdata['rname']
        let rtype = roomdata['rtype']
        let details = roomdata['details']
        let price = roomdata['price']
        
        let result = await fetch('http://localhost:5000/api/newroomallocate/add', {
            method: "post",
            body: JSON.stringify({ userid, roomid, fname, lname, email, phnum, rname, rtype, details, price }),
            headers: {
                'Content-Type': 'application/json'
            }
        });
        result = await result.json();
        
        if (result) {
            alert("Room Successfully Allocated!");
            let path = '/staffviewreports';
            navigate(path);
            window.location.reload(false);
        }
    }

    return (
        <div className="landing-wrapper">
            <div className="dashboard-container">
                <div className="dashboard-card wide">
                    <h1 style={{ color: '#333', marginBottom: '20px', textAlign: 'center' }}>Step 3: Confirm Room Allocation</h1>
                    <p style={{ textAlign: 'center', color: '#666', marginBottom: '30px' }}>Please review the student and room details before confirming the allocation.</p>
                    
                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '30px', marginBottom: '30px' }}>
                        {/* Student Details Card */}
                        <div className="dashboard-card" style={{ padding: '20px', boxShadow: 'none', border: '1px solid #eee' }}>
                            <h3 style={{ borderBottom: '2px solid #4CAF50', paddingBottom: '10px', marginBottom: '15px' }}>Student Details</h3>
                            <table className="modern-table profile-table">
                                <tbody>
                                    <tr>
                                        <th style={{ width: '40%' }}>User Id</th>
                                        <td>{studentdata['_id']}</td>
                                    </tr>
                                    <tr>
                                        <th>Name</th>
                                        <td>{studentdata['fname']} {studentdata['lname']}</td>
                                    </tr>
                                    <tr>
                                        <th>Email</th>
                                        <td>{studentdata['email']}</td>
                                    </tr>
                                    <tr>
                                        <th>Phone</th>
                                        <td>{studentdata['phnum']}</td>
                                    </tr>
                                    <tr>
                                        <th>Address</th>
                                        <td>{studentdata['address']}</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>

                        {/* Room Details Card */}
                        <div className="dashboard-card" style={{ padding: '20px', boxShadow: 'none', border: '1px solid #eee' }}>
                            <h3 style={{ borderBottom: '2px solid #2196F3', paddingBottom: '10px', marginBottom: '15px' }}>Room Details</h3>
                            <table className="modern-table profile-table">
                                <tbody>
                                    <tr>
                                        <th style={{ width: '40%' }}>Room Id</th>
                                        <td>{roomdata['_id']}</td>
                                    </tr>
                                    <tr>
                                        <th>Room ID</th>
                                        <td>{roomdata['rname']}</td>
                                    </tr>
                                    <tr>
                                        <th>Room Type</th>
                                        <td>{roomdata['rtype']}</td>
                                    </tr>
                                    <tr>
                                        <th>Capacity</th>
                                        <td>{roomdata['numofstudents']}</td>
                                    </tr>
                                    <tr>
                                        <th>Price</th>
                                        <td><span style={{ color: '#4CAF50', fontWeight: 'bold' }}>₹{roomdata['price']}</span></td>
                                    </tr>
                                    <tr>
                                        <th>Details</th>
                                        <td>{roomdata['details']}</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>

                    <form onSubmit={handleOnSubmit} style={{ textAlign: 'center' }}>
                        <button type="submit" className="btn-submit" style={{ padding: '15px 40px', fontSize: '18px', width: 'auto' }}>
                            Confirm & Allocate Room
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default AdminAllocateRoom2;