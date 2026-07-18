import React, { Component, useState, useEffect } from "react";

function AdminViewReports() {
    const [data, setData] = useState([]);
    const [messdata, setMessData] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000//api/newroomallocate/get') 
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
            <div>
                <br></br><br></br><br></br><br></br><br></br><br></br>
                <h2>
                <center> Admin View Room Allocated Page </center>
                </h2>
                <p>
      <table style={{ width: '96%', left: '10px', position: 'absolute', border: '1px solid black', marginLeft:'10px'
        , marginRight:'10px'}}>
        <tr style={{ width: '800px', border: '1px solid black', fontSize:'20px' }}>
            <th style={{ width: '200px', textAlign: 'center', border: '1px solid black', fontSize:'20px' }}>Student Id</th>
            <th style={{ width: '200px', textAlign: 'center', border: '1px solid black', fontSize:'20px' }}>First Name</th>
            <th style={{ width: '200px', textAlign: 'center', border: '1px solid black', fontSize:'20px' }}>Last Name</th>
            <th style={{ width: '200px', textAlign: 'center', border: '1px solid black', fontSize:'20px' }}>Email Id</th>
            <th style={{ width: '200px', textAlign: 'center', border: '1px solid black', fontSize:'20px' }}>Phone Num</th>
            <th style={{ width: '200px', textAlign: 'center', border: '1px solid black', fontSize:'20px' }}>Room Id</th>
            <th style={{ width: '200px', textAlign: 'center', border: '1px solid black', fontSize:'20px' }}>Room ID</th>
            <th style={{ width: '200px', textAlign: 'center', border: '1px solid black', fontSize:'20px' }}>Room Type</th>
            <th style={{ width: '200px', textAlign: 'center', border: '1px solid black', fontSize:'20px' }}>Details</th>
        </tr>
        {data.map(x => ( 
            <tr style={{ width: '800px', fontSize:'20px' }}>
                <td style={{ width: '200px', textAlign: 'center', border: '1px solid black' }}>{x.userid}</td>
                <td style={{ width: '200px', textAlign: 'center', border: '1px solid black' }}>{x.fname}</td>
                <td style={{ width: '200px', textAlign: 'center', border: '1px solid black' }}>{x.lname}</td>
                <td style={{ width: '200px', textAlign: 'center', border: '1px solid black' }}>{x.email}</td>
                <td style={{ width: '200px', textAlign: 'center', border: '1px solid black' }}>{x.phnum}</td>
                <td style={{ width: '200px', textAlign: 'center', border: '1px solid black' }}>{x.roomid}</td>
                <td style={{ width: '200px', textAlign: 'center', border: '1px solid black' }}>{x.rname}</td>
                <td style={{ width: '200px', textAlign: 'center', border: '1px solid black' }}>{x.rtype}</td>
                <td style={{ width: '200px', textAlign: 'center', border: '1px solid black' }}>{x.details}</td>
            </tr>
        ))} 
      </table>
                </p>
                <br></br><br></br><br></br><br></br><br></br><br></br>
                <h2>
                <center> Admin View Mess Allocated Page </center>
                </h2>
                <p>
      <table style={{ width: '96%', left: '10px', position: 'absolute', border: '1px solid black', marginLeft:'10px'
        , marginRight:'10px'}}>
        <tr style={{ width: '800px', border: '1px solid black', fontSize:'20px' }}>
            <th style={{ width: '200px', textAlign: 'center', border: '1px solid black', fontSize:'20px' }}>Student Id</th>
            <th style={{ width: '200px', textAlign: 'center', border: '1px solid black', fontSize:'20px' }}>First Name</th>
            <th style={{ width: '200px', textAlign: 'center', border: '1px solid black', fontSize:'20px' }}>Last Name</th>
            <th style={{ width: '200px', textAlign: 'center', border: '1px solid black', fontSize:'20px' }}>Email Id</th>
            <th style={{ width: '200px', textAlign: 'center', border: '1px solid black', fontSize:'20px' }}>Phone Num</th>
            <th style={{ width: '200px', textAlign: 'center', border: '1px solid black', fontSize:'20px' }}>Mess Id</th>
            <th style={{ width: '200px', textAlign: 'center', border: '1px solid black', fontSize:'20px' }}>Mess Name</th>
            <th style={{ width: '200px', textAlign: 'center', border: '1px solid black', fontSize:'20px' }}>Mess Type</th>
            <th style={{ width: '200px', textAlign: 'center', border: '1px solid black', fontSize:'20px' }}>Details</th>
        </tr>
        {messdata.map(x => ( 
            <tr style={{ width: '800px', fontSize:'20px' }}>
                <td style={{ width: '200px', textAlign: 'center', border: '1px solid black' }}>{x.userid}</td>
                <td style={{ width: '200px', textAlign: 'center', border: '1px solid black' }}>{x.fname}</td>
                <td style={{ width: '200px', textAlign: 'center', border: '1px solid black' }}>{x.lname}</td>
                <td style={{ width: '200px', textAlign: 'center', border: '1px solid black' }}>{x.email}</td>
                <td style={{ width: '200px', textAlign: 'center', border: '1px solid black' }}>{x.phnum}</td>
                <td style={{ width: '200px', textAlign: 'center', border: '1px solid black' }}>{x.messid}</td>
                <td style={{ width: '200px', textAlign: 'center', border: '1px solid black' }}>{x.mname}</td>
                <td style={{ width: '200px', textAlign: 'center', border: '1px solid black' }}>{x.mtype}</td>
                <td style={{ width: '200px', textAlign: 'center', border: '1px solid black' }}>{x.details}</td>
            </tr>
        ))} 
      </table>
                </p>
            </div>    
    );
}
export default AdminViewReports;