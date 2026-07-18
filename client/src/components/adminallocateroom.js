import React, { Component, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
function AdminAllocateRoom() {
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
        console.log("Select Student")
        //alert("Update Function")
        let path = '/adminallocateroom1';
        navigate(path);
        window.location.reload(false);
    };

    return (
        <div>
            <br></br><br></br><br></br><br></br><br></br><br></br><br></br>
            <h2>
                <center> Staff Allocate Room to Students Page </center>
            </h2>
            <p>
                <table style={{ width: '90%', left: '10px', position: 'absolute', border: '1px solid black' }}>
                    <tr style={{ width: '800px', border: '1px solid black', fontSize: '20px' }}>
                        <th style={{ width: '200px', textAlign: 'center', border: '1px solid black', fontSize: '20px' }}>First Name</th>
                        <th style={{ width: '200px', textAlign: 'center', border: '1px solid black', fontSize: '20px' }}>Last Name</th>
                        <th style={{ width: '200px', textAlign: 'center', border: '1px solid black', fontSize: '20px' }}>Email Id</th>
                        <th style={{ width: '200px', textAlign: 'center', border: '1px solid black', fontSize: '20px' }}>Phone Num</th>
                        <th style={{ width: '200px', textAlign: 'center', border: '1px solid black', fontSize: '20px' }}>User Name</th>
                        <th style={{ width: '200px', textAlign: 'center', border: '1px solid black', fontSize: '20px' }}>Address</th>
                        <th style={{ width: '200px', textAlign: 'center', border: '1px solid black', fontSize: '20px' }}>Select Student</th>
                    </tr>
                    {data.map(x => (
                        <tr style={{ width: '800px', fontSize: '20px' }}>
                            <td style={{ width: '200px', textAlign: 'center', border: '1px solid black' }}>{x.fname}</td>
                            <td style={{ width: '200px', textAlign: 'center', border: '1px solid black' }}>{x.lname}</td>
                            <td style={{ width: '200px', textAlign: 'center', border: '1px solid black' }}>{x.email}</td>
                            <td style={{ width: '200px', textAlign: 'center', border: '1px solid black' }}>{x.phnum}</td>
                            <td style={{ width: '200px', textAlign: 'center', border: '1px solid black' }}>{x.username}</td>
                            <td style={{ width: '200px', textAlign: 'center', border: '1px solid black' }}>{x.address}</td>
                            {/* <td style={{ width: '250px', textAlign: 'center', border: '1px solid black' }}>
                                <button style={{ height: '50px', width: '200px' }}
                                    onClick={handleClick(x._id)}>Select Student</button>
                            </td> */}
                            <td style={{ width: '200px', textAlign: 'center', border: '1px solid black' }}>
                                {
                                    x.roomallocated === 'No' ? <p>
                                        <br></br>
                                        <button style={{ height: '75px', width: '125px' }}
                                            onClick={handleClick(x._id)}>Select Student</button>
                                    </p> : <p>Allocated</p>
                                } </td>
                        </tr>
                    ))}
                </table>
            </p>
        </div>
    );
}
export default AdminAllocateRoom;