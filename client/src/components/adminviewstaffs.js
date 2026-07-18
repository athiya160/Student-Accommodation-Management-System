import React, { Component, useState, useEffect } from "react";

function AdminViewStaffs() {
    const [data, setData] = useState([]);
    useEffect(() => { 
        fetch('http://localhost:5000/api/staff/get')
          .then(response => response.json()) 
          .then(data => setData(data)) 
          .catch(err => console.error("Error fetching data: ", err)); 
      }, []); 
        return (
            <div>
                <br></br><br></br><br></br><br></br><br></br><br></br>
                <h2>
                <center> Admin View Staffs Page </center>
                </h2>
                <p>
      <table style={{ width: '90%', left: '10px', position: 'absolute', border: '1px solid black'}}>
        <tr style={{ width: '800px', border: '1px solid black', fontSize:'20px' }}>
            <th style={{ width: '200px', textAlign: 'center', border: '1px solid black', fontSize:'20px' }}>First Name</th>
            <th style={{ width: '200px', textAlign: 'center', border: '1px solid black', fontSize:'20px' }}>Last Name</th>
            <th style={{ width: '200px', textAlign: 'center', border: '1px solid black', fontSize:'20px' }}>Email Id</th>
            <th style={{ width: '200px', textAlign: 'center', border: '1px solid black', fontSize:'20px' }}>Phone Num</th>
            <th style={{ width: '200px', textAlign: 'center', border: '1px solid black', fontSize:'20px' }}>User Name</th>
            <th style={{ width: '200px', textAlign: 'center', border: '1px solid black', fontSize:'20px' }}>Address</th>
        </tr>
        {data.map(x => ( 
            <tr style={{ width: '800px', fontSize:'20px' }}>
                <td style={{ width: '200px', textAlign: 'center', border: '1px solid black' }}>{x.fname}</td>
                <td style={{ width: '200px', textAlign: 'center', border: '1px solid black' }}>{x.lname}</td>
                <td style={{ width: '200px', textAlign: 'center', border: '1px solid black' }}>{x.email}</td>
                <td style={{ width: '200px', textAlign: 'center', border: '1px solid black' }}>{x.phnum}</td>
                <td style={{ width: '200px', textAlign: 'center', border: '1px solid black' }}>{x.username}</td>
                <td style={{ width: '200px', textAlign: 'center', border: '1px solid black' }}>{x.address}</td>
            </tr>
        ))}
      </table>
                </p>
            </div>    
    );
}
export default AdminViewStaffs;