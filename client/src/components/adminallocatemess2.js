import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from 'axios';
import './Landing.css';

const AdminAllocateMess2 = (props) => {
    const [studentdata, setStudentdata] = useState('');
    const [messdata, setMessdata] = useState('');
    let userid = sessionStorage.getItem('userid').toString();
    let messid = sessionStorage.getItem('messid').toString();

    useEffect(() => {
        axios.get('http://localhost:5000/api/user/get/' + userid)
            .then(res => {
                setStudentdata(res.data);
            })
    }, [userid]);

    useEffect(() => {
        axios.get('http://localhost:5000/api/mess/get/' + messid)
            .then(res => {
                setMessdata(res.data);
            })
    }, [messid]);
    
    const navigate = useNavigate();
    
    const handleOnSubmit = async (e) => {
        e.preventDefault();
        let fname = studentdata['fname']
        let lname = studentdata['lname']
        let email = studentdata['email']
        let phnum = studentdata['phnum']
        let mname = messdata['mname']
        let mtype = messdata['mtype']
        let details = messdata['details']
        let price = messdata['price']
        
        let result = await fetch('http://localhost:5000/api/newmessallocate/add', {
            method: "post",
            body: JSON.stringify({ userid, messid, fname, lname, email, phnum, mname, mtype, details, price }),
            headers: {
                'Content-Type': 'application/json'
            }
        });
        result = await result.json();
        
        if (result) {
            alert("Mess Successfully Allocated!");
            let path = '/staffviewreports';
            navigate(path);
            window.location.reload(false);
        }
    }

    return (
        <div className="landing-wrapper">
            <div className="dashboard-container">
                <div className="dashboard-card wide">
                    <h1 style={{ color: '#333', marginBottom: '20px', textAlign: 'center' }}>Step 3: Confirm Mess Allocation</h1>
                    <p style={{ textAlign: 'center', color: '#666', marginBottom: '30px' }}>Please review the student and mess details before confirming the allocation.</p>
                    
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

                        {/* Mess Details Card */}
                        <div className="dashboard-card" style={{ padding: '20px', boxShadow: 'none', border: '1px solid #eee' }}>
                            <h3 style={{ borderBottom: '2px solid #2196F3', paddingBottom: '10px', marginBottom: '15px' }}>Mess Details</h3>
                            <table className="modern-table profile-table">
                                <tbody>
                                    <tr>
                                        <th style={{ width: '40%' }}>Mess Id</th>
                                        <td>{messdata['_id']}</td>
                                    </tr>
                                    <tr>
                                        <th>Mess Name</th>
                                        <td>{messdata['mname']}</td>
                                    </tr>
                                    <tr>
                                        <th>Mess Type</th>
                                        <td>{messdata['mtype']}</td>
                                    </tr>
                                    <tr>
                                        <th>Capacity</th>
                                        <td>{messdata['numofstudents']}</td>
                                    </tr>
                                    <tr>
                                        <th>Price</th>
                                        <td><span style={{ color: '#4CAF50', fontWeight: 'bold' }}>₹{messdata['price']}</span></td>
                                    </tr>
                                    <tr>
                                        <th>Details</th>
                                        <td>{messdata['details']}</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>

                    <form onSubmit={handleOnSubmit} style={{ textAlign: 'center' }}>
                        <button type="submit" className="btn-submit" style={{ padding: '15px 40px', fontSize: '18px', width: 'auto' }}>
                            Confirm & Allocate Mess
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default AdminAllocateMess2;