import React, { Component, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from 'axios';
const AdminAllocateRoom1 = (props) => {
    const [roomdata, setRoomdata] = useState('');
    const [dbdata, setDbdata] = useState('');
    const [data, setData] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/api/room/get')
            .then(response => response.json())
            .then(data => setData(data))
            .catch(err => console.error("Error fetching data: ", err));
    }, []);


    let userid = sessionStorage.getItem('userid').toString()
    console.log("User Id : ", userid)
    useEffect(() => {
        axios.get('http://localhost:5000/api/user/get/' + userid)
            .then(res => {
                setDbdata(res.data);
                console.log("Response : ", res.data)
            })
    }, []);
    /*
    function getStudentDetails() {
        useEffect(() => {
            axios.get('http://localhost:5000/userviewprofile/' + userid)
                .then(res => {
                    setStudentdata(res.data);
                    console.log("Student Response : ", res.data)
                })
        }, []);
    }
    function getRoomDetails(id) {
        useEffect(() => {
            axios.get('http://localhost:5000/getroomdetails/' + id)
                .then(res => {
                    setRoomdata(res.data);
                    console.log("Room Response : ", res.data)
                })
        }, []);
    }
    */    
    const navigate = useNavigate();
    const handleClick = (id) => async (e) => {        
        sessionStorage.setItem("roomid", id)
        console.log("Selected Room")
        //alert("Update Function")
        let path = '/adminallocateroom2';
        navigate(path);
        window.location.reload(false);
        //getStudentDetails();
        //getRoomDetails(id)
        /*
        let result = await fetch(
            'http://localhost:5000/allocatenewroom', {
                method: "post",
                body: JSON.stringify({ fname, lname, email, phnum, username, 
                    password, address }),
                headers: {
                    'Content-Type': 'application/json'
                }
            })
            result = await result.json();
            console.warn(result);
            if (result) {
                alert("Data saved succesfully");
                setEmail("");
                setFirstName("");
            }
            */
    };

    return (
        <div>
            <br></br><br></br><br></br><br></br><br></br>
            
                <h2>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    User Details</h2>
            
            <p><br></br><br></br>
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

            
            <p>
            
                <table style={{ width: '90%', left: '10px',  top: '550px', position: 'absolute', border: '1px solid black' }}>
                    <tr>
                        <th colSpan={7}>
                        <h2>
                <center> Admin Select Room for Student Page </center>
            </h2>
                        </th>
                    </tr>
                    <tr style={{ width: '800px', border: '1px solid black', fontSize: '20px' }}>
                        <th style={{ width: '200px', textAlign: 'center', border: '1px solid black', fontSize: '20px' }}>Room ID</th>
                        <th style={{ width: '200px', textAlign: 'center', border: '1px solid black', fontSize: '20px' }}>Room Type</th>
                        <th style={{ width: '200px', textAlign: 'center', border: '1px solid black', fontSize: '20px' }}>Number of Students</th>
                        <th style={{ width: '200px', textAlign: 'center', border: '1px solid black', fontSize: '20px' }}>Details</th>
                        <th style={{ width: '200px', textAlign: 'center', border: '1px solid black', fontSize: '20px' }}>Price</th>
                        <th style={{ width: '200px', textAlign: 'center', border: '1px solid black', fontSize: '20px' }}>Date</th>
                        <th style={{ width: '200px', textAlign: 'center', border: '1px solid black', fontSize: '20px' }}>Select Room</th>
                    </tr>
                    {data.map(x => (
                        <tr style={{ width: '800px', fontSize: '20px' }}>
                            <td style={{ width: '200px', textAlign: 'center', border: '1px solid black' }}>{x.rname}</td>
                            <td style={{ width: '200px', textAlign: 'center', border: '1px solid black' }}>{x.rtype}</td>
                            <td style={{ width: '200px', textAlign: 'center', border: '1px solid black' }}>{x.numofstudents}</td>
                            <td style={{ width: '200px', textAlign: 'center', border: '1px solid black' }}>{x.details}</td>
                            <td style={{ width: '200px', textAlign: 'center', border: '1px solid black' }}>{x.price}</td>
                            <td style={{ width: '200px', textAlign: 'center', border: '1px solid black' }}>{x.date}</td>
                            <td style={{ width: '250px', textAlign: 'center', border: '1px solid black' }}>
                                <button style={{ height: '50px', width: '200px' }}
                                    onClick={handleClick(x._id)}>Select Room</button>
                            </td>
                        </tr>
                    ))}
                </table>
            </p>
        </div>
    );
}
export default AdminAllocateRoom1;