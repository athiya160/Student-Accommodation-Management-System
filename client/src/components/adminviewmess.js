import React, { Component, useState, useEffect } from "react";

function AdminViewMess() {
    const [data, setData] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/api/mess/get')
            .then(response => response.json())
            .then(data => setData(data))
            .catch(err => console.error("Error fetching data: ", err));
    }, []);
    return (
        <div>
            <br></br><br></br><br></br><br></br><br></br><br></br>
            <h2>
                <center> Admin View Mess Page </center>
            </h2>
            <p>
                <table style={{ width: '90%', left: '10px', position: 'absolute', border: '1px solid black' }}>
                    <tr style={{ width: '800px', border: '1px solid black', fontSize: '20px' }}>
                        <th style={{ width: '200px', textAlign: 'center', border: '1px solid black', fontSize: '20px' }}>Mess Name</th>
                        <th style={{ width: '200px', textAlign: 'center', border: '1px solid black', fontSize: '20px' }}>Mess Type</th>
                        <th style={{ width: '200px', textAlign: 'center', border: '1px solid black', fontSize: '20px' }}>Number of Students</th>
                        <th style={{ width: '200px', textAlign: 'center', border: '1px solid black', fontSize: '20px' }}>Details</th>
                        <th style={{ width: '200px', textAlign: 'center', border: '1px solid black', fontSize: '20px' }}>Price</th>
                        <th style={{ width: '200px', textAlign: 'center', border: '1px solid black', fontSize: '20px' }}>Date</th>
                    </tr>
                    {data.map(x => (
                        <tr style={{ width: '800px', fontSize: '20px' }}>
                            <td style={{ width: '200px', textAlign: 'center', border: '1px solid black' }}>{x.mname}</td>
                            <td style={{ width: '200px', textAlign: 'center', border: '1px solid black' }}>{x.mtype}</td>
                            <td style={{ width: '200px', textAlign: 'center', border: '1px solid black' }}>{x.numofstudents}</td>
                            <td style={{ width: '200px', textAlign: 'center', border: '1px solid black' }}>{x.details}</td>
                            <td style={{ width: '200px', textAlign: 'center', border: '1px solid black' }}>{x.price}</td>
                            <td style={{ width: '200px', textAlign: 'center', border: '1px solid black' }}>{x.date}</td>
                        </tr>
                    ))}
                </table>
            </p>
        </div>
    );
}
export default AdminViewMess;