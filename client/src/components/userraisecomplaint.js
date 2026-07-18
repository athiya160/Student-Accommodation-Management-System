import React from "react";
import { useEffect } from 'react';
import { useState } from "react";
import axios from 'axios';
function UserRaiseComplaint() {
    const [dbdata, setDbdata] = useState('');
    const [complaint, setComplaint] = useState('');    
    let userid = sessionStorage.getItem('userid').toString()
    console.log("User Id : ", userid)
    useEffect(() => {
        axios.get('http://localhost:5000/api/user/get/' + userid)
            .then(res => {
                setDbdata(res.data);
                console.log("Response : ", res.data)
            })
    }, []);
    const handleOnSubmit = async (e) => {
		e.preventDefault();
		let fname = dbdata['fname']
		let lname = dbdata['lname']
        let email = dbdata['email']
        let phnum = dbdata['phnum']

		let result = await fetch(
			'http://localhost:5000/api/complaint/add', {
			method: "post",
			body: JSON.stringify({
				fname, lname, email, phnum, complaint, userid
			}),
			headers: {
				'Content-Type': 'application/json'
			}
		})
		result = await result.json();
		console.warn(result);
		if (result) {
			alert("Data saved succesfully");
		}
	}
    return (
        <div>
            <center>
                <h2>User Raise Complaint Page</h2>
            </center>
            <p>
            <form encType="multipart/form-data" method="post">
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
                    <tr><th><br></br>
							<label className="label" style={{ color: "black" }}>Complaint</label> </th>
							<td><br></br>
								<textarea rows={5} cols={30} value={complaint} placeholder="Enter Ur Complaint"
									onChange={ev => setComplaint(ev.target.value)}>
								</textarea>
							</td>
						</tr>
                    <tr><th colSpan={2}>
							<br></br>
							<center>
								<button onClick={handleOnSubmit} type="submit">
									Raise Complaint
								</button>
							</center>
						</th>
						</tr>
                </table>
            </form>
            </p>
        </div>
    )
}
export default UserRaiseComplaint;