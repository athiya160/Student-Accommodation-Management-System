import React from "react";
import { useEffect } from 'react';
import { useState } from "react";
import axios from 'axios';
function UserViewProfile() {
    const [dbdata, setDbdata] = useState('');
    let userid = sessionStorage.getItem('userid').toString()
    console.log("User Id : ", userid)
    useEffect(() => {
        axios.get('http://localhost:5000/api/user/get/' + userid)
            .then(res => {
                setDbdata(res.data);
                console.log("Response : ", res.data)
            })
    }, []);

    return (
        <div>
            <center>
                <h2>User View Profile</h2>
            </center>
            <p>
                <table style={{
                    width: '40%', left: '150px', top: '150px', height: '350px', position: 'absolute',
                    border: '1px solid black', textAlign: 'center', fontSize: '20px'
                }}>
                    <tr style={{ width: '800px', border: '1px solid black' }}>
                        <th style={{ border: '1px solid black' }}>User Id</th>
                        <td style={{ border: '1px solid black' }}>{dbdata['_id']}</td>
                    </tr>
                    <tr style={{ width: '800px', border: '1px solid black' }}>
                        <th style={{ border: '1px solid black' }}>First Name</th>
                        <td style={{ border: '1px solid black' }}>{dbdata['fname']}</td>
                    </tr>
                    <tr style={{ width: '800px', border: '1px solid black' }}>
                        <th style={{ border: '1px solid black' }}>Last Name</th>
                        <td style={{ border: '1px solid black' }}>{dbdata['lname']}</td>
                    </tr>
                    <tr style={{ width: '800px', border: '1px solid black' }}>
                        <th style={{ border: '1px solid black' }}>Email Id</th>
                        <td style={{ border: '1px solid black' }}>{dbdata['email']}</td>
                    </tr>
                    <tr style={{ width: '800px', border: '1px solid black' }}>
                        <th style={{ border: '1px solid black' }}>Phone Number</th>
                        <td style={{ border: '1px solid black' }}>{dbdata['phnum']}</td>
                    </tr>
                    <tr style={{ width: '800px', border: '1px solid black' }}>
                        <th style={{ border: '1px solid black' }}>Address</th>
                        <td style={{ border: '1px solid black' }}>{dbdata['address']}</td>
                    </tr>
                </table>
            </p>
        </div>
    )
}
export default UserViewProfile;