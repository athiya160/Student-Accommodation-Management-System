import React, { Component, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from 'axios';
const AdminAllocateMess2 = (props) => {
    const [studentdata, setStudentdata] = useState('');
    const [messdata, setMessdata] = useState('');
    let userid = sessionStorage.getItem('userid').toString()
    let messid = sessionStorage.getItem('messid').toString()

    useEffect(() => {
        axios.get('http://localhost:5000/api/user/get/' + userid)
            .then(res => {
                setStudentdata(res.data);
                console.log("Student Response : ", res.data)
                //console.log("First Name : ", studentdata['fname'])
            })
    }, []);

    useEffect(() => {
        axios.get('http://localhost:5000/api/mess/get/' + messid)
            .then(res => {
                setMessdata(res.data);
                console.log("Mess Response : ", res.data)
            })
    }, []);
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
        let result = await fetch(
        'http://localhost:5000/api/newmessallocate/add', {
            method: "post",
            body: JSON.stringify({ userid, messid, fname, lname, email, phnum, mname, 
				mtype, details, price }),
            headers: {
                'Content-Type': 'application/json'
            }
        })
        result = await result.json();
        console.warn(result);
        if (result) {
            alert("Data saved succesfully");
            let path = '/staffviewreports';
			navigate(path);
			window.location.reload(false);
        }
    }
    //handleOnSubmit();
    return (
        <div>
            <br></br><br></br><br></br><br></br><br></br>
            <center>
    <h3>Staff Confirm Mess For the Student</h3></center>    
    <div style={{width:'300px', height:'200px', border:'1px solid black;'}}>
    <br></br>
    <table style={{
                    width: '40%', left: '150px', top: '250px', height: '350px', position: 'absolute',
                    border: '1px solid black', textAlign: 'center', fontSize: '20px'
                }}>
                    <tr style={{ width: '800px', border: '1px solid black' }}>
                        <th style={{ border: '1px solid black' }}>User Id</th>
                        <td style={{ border: '1px solid black' }}>{studentdata['_id']}</td>
                    </tr>
                    <tr style={{ width: '800px', border: '1px solid black' }}>
                        <th style={{ border: '1px solid black' }}>First Name</th>
                        <td style={{ border: '1px solid black' }}>{studentdata['fname']}</td>
                    </tr>
                    <tr style={{ width: '800px', border: '1px solid black' }}>
                        <th style={{ border: '1px solid black' }}>Last Name</th>
                        <td style={{ border: '1px solid black' }}>{studentdata['lname']}</td>
                    </tr>
                    <tr style={{ width: '800px', border: '1px solid black' }}>
                        <th style={{ border: '1px solid black' }}>Email Id</th>
                        <td style={{ border: '1px solid black' }}>{studentdata['email']}</td>
                    </tr>
                    <tr style={{ width: '800px', border: '1px solid black' }}>
                        <th style={{ border: '1px solid black' }}>Phone Number</th>
                        <td style={{ border: '1px solid black' }}>{studentdata['phnum']}</td>
                    </tr>
                    <tr style={{ width: '800px', border: '1px solid black' }}>
                        <th style={{ border: '1px solid black' }}>Address</th>
                        <td style={{ border: '1px solid black' }}>{studentdata['address']}</td>
                    </tr>
                </table>
    </div>
    <div style={{width:'300px', height:'200px', border:'1px solid black;'}}>
    <table style={{
                    width: '40%', left: '850px', top: '250px', height: '350px', position: 'absolute',
                    border: '1px solid black', textAlign: 'center', fontSize: '20px'
                }}>
                    <tr style={{ width: '800px', border: '1px solid black' }}>
                        <th style={{ border: '1px solid black' }}>Mess Id</th>
                        <td style={{ border: '1px solid black' }}>{messdata['_id']}</td>
                    </tr>
                    <tr style={{ width: '800px', border: '1px solid black' }}>
                        <th style={{ border: '1px solid black' }}>Mess Name</th>
                        <td style={{ border: '1px solid black' }}>{messdata['mname']}</td>
                    </tr>
                    <tr style={{ width: '800px', border: '1px solid black' }}>
                        <th style={{ border: '1px solid black' }}>Mess Type</th>
                        <td style={{ border: '1px solid black' }}>{messdata['mtype']}</td>
                    </tr>
                    <tr style={{ width: '800px', border: '1px solid black' }}>
                        <th style={{ border: '1px solid black' }}>Number Of Students</th>
                        <td style={{ border: '1px solid black' }}>{messdata['numofstudents']}</td>
                    </tr>
                    <tr style={{ width: '800px', border: '1px solid black' }}>
                        <th style={{ border: '1px solid black' }}>Mess Price</th>
                        <td style={{ border: '1px solid black' }}>{messdata['price']}</td>
                    </tr>
                    <tr style={{ width: '800px', border: '1px solid black' }}>
                        <th style={{ border: '1px solid black' }}>Details</th>
                        <td style={{ border: '1px solid black' }}>{messdata['details']}</td>
                    </tr>                   
                </table>
    </div>
    <form encType="multipart/form-data" method="post">
    <center>
                <button onClick={handleOnSubmit} type="submit" 
                style={{width:'400px', height:'75px', fontSize:'20px'}}>
                  Apply Mess To Student
                </button>				
              </center>
    </form>
        </div>
    );
}
export default AdminAllocateMess2;