import React, { useState, useEffect } from "react";
function AdminViewContacts() {
    const [data, setData] = useState([]);
    useEffect(() => { 
        fetch('http://localhost:5000/api/contact/getcontacts') 
          .then(response => response.json()) 
          .then(data => setData(data)) 
          .catch(err => console.error("Error fetching data: ", err)); 
      }, []); 
        return (
            <div>
                <br></br><br></br><br></br><br></br><br></br><br></br>
                <h2>
                <center>Admin View Contacts Page</center>
                </h2>
                <p>
                <table style={{ width: '90%', left: '10px', position: 'absolute', border: '1px solid black',
        textAlign:"center"}}>
        <tr style={{ width: '800px', border: '1px solid black', fontSize:'20px' }}>
            <th style={{ width: '200px', textAlign: 'center', border: '1px solid black', fontSize:'20px' }}>Contact Name</th>            
            <th style={{ width: '200px', textAlign: 'center', border: '1px solid black', fontSize:'20px' }}>Email Id</th>
            <th style={{ width: '200px', textAlign: 'center', border: '1px solid black', fontSize:'20px' }}>Subject</th>
            <th style={{ width: '200px', textAlign: 'center', border: '1px solid black', fontSize:'20px' }}>Message</th>
        </tr>
        {data.map(x => ( 
            <tr style={{ width: '800px', fontSize:'20px' }}>
                <td style={{ width: '200px', textAlign: 'center', border: '1px solid black' }}>{x.cname}</td>                
                <td style={{ width: '200px', textAlign: 'center', border: '1px solid black' }}>{x.email}</td>
                <td style={{ width: '200px', textAlign: 'center', border: '1px solid black' }}>{x.subject}</td>
                <td style={{ width: '200px', textAlign: 'center', border: '1px solid black' }}>{x.message}</td>
            </tr>
        ))} 
      </table>
                </p>
            </div>    
    );
}
export default AdminViewContacts;