import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import './Landing.css';

function AdminAllocateMess() {
    const [data, setData] = useState([]);
    
    useEffect(() => {
        fetch('http://localhost:5000/api/user/get')
            .then(response => response.json())
            .then(data => setData(data))
            .catch(err => console.error("Error fetching data: ", err));
    }, []);
    
    const navigate = useNavigate();
    
    const handleClick = (id) => () => {
        sessionStorage.setItem("userid", id)
        console.log("Select Student for Mess")
        let path = '/adminallocatemess1';
        navigate(path);
        window.location.reload(false);
    };

    return (
        <div className="landing-wrapper">
            <div className="dashboard-container">
                <div className="dashboard-card wide">
                    <h1 style={{ color: '#333', marginBottom: '20px', textAlign: 'center' }}>Step 1: Select Student for Mess Allocation</h1>
                    
                    <div className="table-responsive">
                        <table className="modern-table">
                            <thead>
                                <tr>
                                    <th>First Name</th>
                                    <th>Last Name</th>
                                    <th>Email Id</th>
                                    <th>Phone Num</th>
                                    <th>User Name</th>
                                    <th>Address</th>
                                    <th>Select Student</th>
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
                                        <td>
                                            {
                                                x.messallocated === 'No' ? (
                                                    <button 
                                                        className="btn-submit" 
                                                        style={{ padding: '8px 15px', fontSize: '14px', width: 'auto' }}
                                                        onClick={handleClick(x._id)}>
                                                        Select Student
                                                    </button>
                                                ) : (
                                                    <span style={{ color: '#4CAF50', fontWeight: 'bold' }}>Allocated</span>
                                                )
                                            } 
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

export default AdminAllocateMess;
