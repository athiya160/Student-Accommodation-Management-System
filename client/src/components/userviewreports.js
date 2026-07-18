import React, { useState, useEffect } from "react";
import './Landing.css'; // Make sure the new styles are loaded

function UserViewReports() {
    const [data, setData] = useState({});
    const [messdata, setMessData] = useState({});
    let userid = sessionStorage.getItem('userid').toString();

    useEffect(() => {
        fetch('http://localhost:5000/api/newroomallocate/get/' + userid)
            .then(response => response.json())
            .then(data => setData(data))
            .catch(err => console.error("Error fetching data: ", err));
    }, [userid]);

    useEffect(() => {
        fetch('http://localhost:5000/api/newmessallocate/get/' + userid)
            .then(response => response.json())
            .then(messdata => setMessData(messdata))
            .catch(err => console.error("Error fetching data: ", err));
    }, [userid]);

    console.log('Room Data : ', data);
    console.log('Mess Data : ', messdata);

    const handleOnSubmit = async (e) => {
        e.preventDefault();
        window.print();
    }

    return (
        <div className="dashboard-container">
            <div className="dashboard-header">
                <h2>Allocation Reports</h2>
                <p style={{color: '#666', fontSize: '1.1rem'}}>View your room and mess allocations</p>
            </div>

            {/* Room Allocation Report */}
            <div className="dashboard-card">
                <h3 style={{fontFamily: 'Outfit, sans-serif', marginBottom: '20px', color: '#1a1a1a'}}>Room Allocation Details</h3>
                <div className="table-responsive">
                    <table className="modern-table">
                        <thead>
                            <tr>
                                <th>First Name</th>
                                <th>Last Name</th>
                                <th>Email</th>
                                <th>Phone Num</th>
                                <th>Room Name</th>
                                <th>Room Type</th>
                                <th>Price (₹)</th>
                                <th>Details</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>{data['fname']}</td>
                                <td>{data['lname']}</td>
                                <td>{data['email']}</td>
                                <td>{data['phnum']}</td>
                                <td>{data['rname']}</td>
                                <td>{data['rtype']}</td>
                                <td>{data['price']}</td>
                                <td>{data['details']}</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>

            {/* Mess Allocation Report */}
            <div className="dashboard-card">
                <h3 style={{fontFamily: 'Outfit, sans-serif', marginBottom: '20px', color: '#1a1a1a'}}>Mess Allocation Details</h3>
                <div className="table-responsive">
                    <table className="modern-table">
                        <thead>
                            <tr>
                                <th>First Name</th>
                                <th>Last Name</th>
                                <th>Email</th>
                                <th>Phone Num</th>
                                <th>Mess Name</th>
                                <th>Mess Type</th>
                                <th>Price (₹)</th>
                                <th>Details</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>{messdata['fname']}</td>
                                <td>{messdata['lname']}</td>
                                <td>{messdata['email']}</td>
                                <td>{messdata['phnum']}</td>
                                <td>{messdata['mname']}</td>
                                <td>{messdata['mtype']}</td>
                                <td>{messdata['price']}</td>
                                <td>{messdata['details']}</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>

            {/* Invoice Section */}
            <div className="invoice-card">
                <div className="invoice-header">
                    <h4>Monthly Invoice</h4>
                    <p style={{fontSize: '0.9rem', color: '#888', margin: '5px 0 0 0'}}>Hostel Management System</p>
                </div>
                
                <div className="invoice-row">
                    <span>Room Charges</span>
                    <span>₹{data['price'] || 0}</span>
                </div>
                
                <div className="invoice-row">
                    <span>Mess Charges</span>
                    <span>₹{messdata['price'] || 0}</span>
                </div>
                
                <div className="invoice-total">
                    <span>Total Amount</span>
                    <span style={{color: '#0072ff'}}>₹{(parseInt(data['price']) || 0) + (parseInt(messdata['price']) || 0)}</span>
                </div>

                <div style={{marginTop: '30px', textAlign: 'center'}}>
                    <button onClick={handleOnSubmit} className="btn-premium btn-primary-gradient" style={{width: '100%', padding: '12px'}}>
                        🖨️ Print Invoice
                    </button>
                </div>
            </div>
        </div>
    );
}

export default UserViewReports;