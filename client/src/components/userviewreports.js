import React, { Component, useState, useEffect } from "react";

function UserViewReports() {
    const [data, setData] = useState([]);
    const [messdata, setMessData] = useState([]);
    let userid = sessionStorage.getItem('userid').toString()
    useEffect(() => {
        fetch('http://localhost:5000/api/newroomallocate/get/' + userid)
            .then(response => response.json())
            .then(data => setData(data))
            .catch(err => console.error("Error fetching data: ", err));
    }, []);
    useEffect(() => {
        fetch('http://localhost:5000/api/newmessallocate/get/' + userid)
            .then(response => response.json())
            .then(messdata => setMessData(messdata))
            .catch(err => console.error("Error fetching data: ", err));
    }, []);
    console.log('Room Data : ', data)
    console.log('Mess Data : ', messdata)
//setMessPrice(messdata['price'])
//setRoomPrice(data['price'])


const handleOnSubmit = async (e) => {
    e.preventDefault();
window.print()        
    }

    return (
        <div>
            <br></br><br></br><br></br><br></br><br></br><br></br>
            <h2>
                <center> User View Allocated Room Reports Page </center>
            </h2>
            <p>
                <table style={{
                    width: '96%', left: '10px', position: 'absolute', border: '1px solid black', marginLeft: '10px'
                    , marginRight: '10px'
                }}>
                    <tr style={{ width: '800px', border: '1px solid black', fontSize: '20px' }}>                        
                        <th style={{ width: '200px', textAlign: 'center', border: '1px solid black', fontSize: '20px' }}>First Name</th>
                        <th style={{ width: '200px', textAlign: 'center', border: '1px solid black', fontSize: '20px' }}>Last Name</th>
                        <th style={{ width: '200px', textAlign: 'center', border: '1px solid black', fontSize: '20px' }}>Email Id</th>
                        <th style={{ width: '200px', textAlign: 'center', border: '1px solid black', fontSize: '20px' }}>Phone Num</th>                        
                        <th style={{ width: '200px', textAlign: 'center', border: '1px solid black', fontSize: '20px' }}>Room Name</th>
                        <th style={{ width: '200px', textAlign: 'center', border: '1px solid black', fontSize: '20px' }}>Room Type</th>
                        <th style={{ width: '200px', textAlign: 'center', border: '1px solid black', fontSize: '20px' }}>Room Price</th>
                        <th style={{ width: '200px', textAlign: 'center', border: '1px solid black', fontSize: '20px' }}>Details</th>
                    </tr>
                    
                        <tr style={{ width: '800px', fontSize: '20px' }}>
                            {/* <td style={{ width: '200px', textAlign: 'center', border: '1px solid black' }}>{data['userid']}</td> */}
                            <td style={{ width: '200px', textAlign: 'center', border: '1px solid black' }}>{data['fname']}</td>
                            <td style={{ width: '200px', textAlign: 'center', border: '1px solid black' }}>{data['lname']}</td>
                            <td style={{ width: '200px', textAlign: 'center', border: '1px solid black' }}>{data['email']}</td>
                            <td style={{ width: '200px', textAlign: 'center', border: '1px solid black' }}>{data['phnum']}</td>
                            {/* <td style={{ width: '200px', textAlign: 'center', border: '1px solid black' }}>{data['roomid']}</td> */}
                            <td style={{ width: '200px', textAlign: 'center', border: '1px solid black' }}>{data['rname']}</td>
                            <td style={{ width: '200px', textAlign: 'center', border: '1px solid black' }}>{data['rtype']}</td>
                            <td style={{ width: '200px', textAlign: 'center', border: '1px solid black' }}>{data['price']}</td>
                            <td style={{ width: '200px', textAlign: 'center', border: '1px solid black' }}>{data['details']}</td>
                        </tr>                    
                </table>
            </p>

            <br></br><br></br><br></br><br></br><br></br><br></br>
            <h2>
                <center> User View Allocated Mess Reports Page </center>
            </h2>
            <p>
                <table style={{
                    width: '96%', left: '10px', position: 'relative', border: '1px solid black', marginLeft: '10px'
                    , marginRight: '10px'
                }}>
                    <tr style={{ width: '800px', border: '1px solid black', fontSize: '20px' }}>
                        {/* <th style={{ width: '200px', textAlign: 'center', border: '1px solid black', fontSize: '20px' }}>Student Id</th> */}
                        <th style={{ width: '200px', textAlign: 'center', border: '1px solid black', fontSize: '20px' }}>First Name</th>
                        <th style={{ width: '200px', textAlign: 'center', border: '1px solid black', fontSize: '20px' }}>Last Name</th>
                        <th style={{ width: '200px', textAlign: 'center', border: '1px solid black', fontSize: '20px' }}>Email Id</th>
                        <th style={{ width: '200px', textAlign: 'center', border: '1px solid black', fontSize: '20px' }}>Phone Num</th>
                        {/* <th style={{ width: '200px', textAlign: 'center', border: '1px solid black', fontSize: '20px' }}>Mess Id</th> */}
                        <th style={{ width: '200px', textAlign: 'center', border: '1px solid black', fontSize: '20px' }}>Mess Name</th>
                        <th style={{ width: '200px', textAlign: 'center', border: '1px solid black', fontSize: '20px' }}>Mess Type</th>
                        <th style={{ width: '200px', textAlign: 'center', border: '1px solid black', fontSize: '20px' }}>Mess Price</th>
                        <th style={{ width: '200px', textAlign: 'center', border: '1px solid black', fontSize: '20px' }}>Details</th>
                    </tr>                    
                        <tr style={{ width: '800px', fontSize: '20px' }}>
                            {/* <td style={{ width: '200px', textAlign: 'center', border: '1px solid black' }}>{messdata['userid']}</td> */}
                            <td style={{ width: '200px', textAlign: 'center', border: '1px solid black' }}>{messdata['fname']}</td>
                            <td style={{ width: '200px', textAlign: 'center', border: '1px solid black' }}>{messdata['lname']}</td>
                            <td style={{ width: '200px', textAlign: 'center', border: '1px solid black' }}>{messdata['email']}</td>
                            <td style={{ width: '200px', textAlign: 'center', border: '1px solid black' }}>{messdata['phnum']}</td>
                            {/* <td style={{ width: '200px', textAlign: 'center', border: '1px solid black' }}>{messdata['messid']}</td> */}
                            <td style={{ width: '200px', textAlign: 'center', border: '1px solid black' }}>{messdata['mname']}</td>
                            <td style={{ width: '200px', textAlign: 'center', border: '1px solid black' }}>{messdata['mtype']}</td>
                            <td style={{ width: '200px', textAlign: 'center', border: '1px solid black' }}>{messdata['price']}</td>
                            <td style={{ width: '200px', textAlign: 'center', border: '1px solid black' }}>{messdata['details']}</td>
                        </tr>                    
                </table>

                <table style={{
                    width: '30%', left: '10px', position: 'relative', border: '1px solid black', marginLeft: '10px'
                    , marginRight: '10px', marginTop: '10px'
                }}>
                    <tr style={{ width: '800px', border: '1px solid black', fontSize: '20px' }}>
                        <th colSpan={2} style={{textAlign:'center'}}>                            
                            <h4>Invoice</h4>
                        </th>
                    </tr>
                    <tr style={{ width: '800px', border: '1px solid black', fontSize: '20px' }}>
                    <th style={{ width: '200px', textAlign: 'center', border: '1px solid black', fontSize: '20px' }}>Mess Price</th>
                    <td style={{ width: '200px', textAlign: 'center', border: '1px solid black' }}>{messdata['price']}</td>
                    </tr>
                    <tr style={{ width: '800px', border: '1px solid black', fontSize: '20px' }}>
                    <th style={{ width: '200px', textAlign: 'center', border: '1px solid black', fontSize: '20px' }}>Room Price</th>
                    <td style={{ width: '200px', textAlign: 'center', border: '1px solid black' }}>{data['price']}</td>
                    </tr>
                    <tr style={{ width: '800px', border: '1px solid black', fontSize: '20px' }}>
                    <th style={{ width: '200px', textAlign: 'center', border: '1px solid black', fontSize: '20px' }}>Total Amount</th>
                    <td style={{ width: '200px', textAlign: 'center', border: '1px solid black' }}>{parseInt(data['price']) + parseInt(messdata['price'])}</td>
                    </tr>
                    </table>

                    <table style={{
                    width: '30%', left: '10px', position: 'relative', border: '0px solid black', marginLeft: '10px'
                    , marginRight: '10px', marginTop: '10px'
                }}>
                    <tr>
                        <th>
                            <input type="button" value="Print Invoice" onClick={handleOnSubmit}/>
                        </th>
                    </tr>
                    </table>
            </p>
        </div>
    );
}
export default UserViewReports;