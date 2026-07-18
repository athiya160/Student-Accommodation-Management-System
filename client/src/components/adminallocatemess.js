import React, { useState, useEffect } from "react";

function UserViewReports() {
    const [data, setData] = useState([]);
    const [messdata, setMessData] = useState([]);
    let userid = sessionStorage.getItem('userid').toString();
    
    useEffect(() => {
        fetch('http://localhost:5000/api/newroomallocate/get/' + userid)
            .then(response => response.json())
            .then(data => setData(data))
            .catch(err => console.error("Error fetching data: ", err));
    }, [userid]);

    useEffect(() => {
        fetch('http://localhost:5000/api/newmessallocate/get/' + userid)
            .then(response => response.json())
            .then(messdata => setMessData(messdata))
            .catch(err => console.error("Error fetching data: ", err));
    }, [userid]);

    const handleOnSubmit = async (e) => {
        e.preventDefault();
        window.print();
    };

    const styles = {
        container: {
            backgroundImage: "url('https://images.unsplash.com/photo-1564959130733-8cf51d0f4a0e')", // Background image related to hostel or dormitory
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
            minHeight: "100vh",
            padding: "50px 0",
        },
        content: {
            backgroundColor: "rgba(255, 255, 255, 0.8)",
            margin: "0 auto",
            padding: "20px",
            borderRadius: "10px",
            boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
            width: "80%",
        },
        heading: {
            textAlign: "center",
            color: "#333",
            marginBottom: "20px",
        },
        table: {
            width: "100%",
            borderCollapse: "collapse",
            marginBottom: "30px",
        },
        th: {
            textAlign: "center",
            padding: "10px",
            border: "1px solid black",
            backgroundColor: "#f2f2f2",
            fontSize: "18px",
        },
        td: {
            textAlign: "center",
            padding: "10px",
            border: "1px solid black",
            fontSize: "16px",
        },
        invoiceTable: {
            width: "30%",
            margin: "20px auto",
            borderCollapse: "collapse",
            border: "1px solid black",
        },
        invoiceTh: {
            padding: "10px",
            textAlign: "center",
            border: "1px solid black",
            backgroundColor: "#f2f2f2",
            fontSize: "18px",
        },
        invoiceTd: {
            padding: "10px",
            textAlign: "center",
            border: "1px solid black",
            fontSize: "16px",
        },
        buttonContainer: {
            textAlign: "center",
            marginTop: "20px",
        },
        button: {
            padding: "10px 20px",
            backgroundColor: "#4CAF50",
            color: "white",
            border: "none",
            borderRadius: "5px",
            cursor: "pointer",
            fontSize: "16px",
        }
    };

    return (
        <div style={styles.container}>
            <div style={styles.content}>
                <h2 style={styles.heading}>User View Allocated Room Reports Page</h2>
                <table style={styles.table}>
                    <tr>
                        <th style={styles.th}>First Name</th>
                        <th style={styles.th}>Last Name</th>
                        <th style={styles.th}>Email Id</th>
                        <th style={styles.th}>Phone Num</th>
                        <th style={styles.th}>Room ID</th>
                        <th style={styles.th}>Room Type</th>
                        <th style={styles.th}>Room Price</th>
                        <th style={styles.th}>Details</th>
                    </tr>
                    <tr>
                        <td style={styles.td}>{data['fname']}</td>
                        <td style={styles.td}>{data['lname']}</td>
                        <td style={styles.td}>{data['email']}</td>
                        <td style={styles.td}>{data['phnum']}</td>
                        <td style={styles.td}>{data['rname']}</td>
                        <td style={styles.td}>{data['rtype']}</td>
                        <td style={styles.td}>{data['price']}</td>
                        <td style={styles.td}>{data['details']}</td>
                    </tr>
                </table>

                <h2 style={styles.heading}>User View Allocated Mess Reports Page</h2>
                <table style={styles.table}>
                    <tr>
                        <th style={styles.th}>First Name</th>
                        <th style={styles.th}>Last Name</th>
                        <th style={styles.th}>Email Id</th>
                        <th style={styles.th}>Phone Num</th>
                        <th style={styles.th}>Mess Name</th>
                        <th style={styles.th}>Mess Type</th>
                        <th style={styles.th}>Mess Price</th>
                        <th style={styles.th}>Details</th>
                    </tr>
                    <tr>
                        <td style={styles.td}>{messdata['fname']}</td>
                        <td style={styles.td}>{messdata['lname']}</td>
                        <td style={styles.td}>{messdata['email']}</td>
                        <td style={styles.td}>{messdata['phnum']}</td>
                        <td style={styles.td}>{messdata['mname']}</td>
                        <td style={styles.td}>{messdata['mtype']}</td>
                        <td style={styles.td}>{messdata['price']}</td>
                        <td style={styles.td}>{messdata['details']}</td>
                    </tr>
                </table>

                <table style={styles.invoiceTable}>
                    <tr>
                        <th colSpan={2} style={styles.invoiceTh}>
                            <h4>Invoice</h4>
                        </th>
                    </tr>
                    <tr>
                        <th style={styles.invoiceTh}>Mess Price</th>
                        <td style={styles.invoiceTd}>{messdata['price']}</td>
                    </tr>
                    <tr>
                        <th style={styles.invoiceTh}>Room Price</th>
                        <td style={styles.invoiceTd}>{data['price']}</td>
                    </tr>
                    <tr>
                        <th style={styles.invoiceTh}>Total Amount</th>
                        <td style={styles.invoiceTd}>{parseInt(data['price']) + parseInt(messdata['price'])}</td>
                    </tr>
                </table>

                <div style={styles.buttonContainer}>
                    <button style={styles.button} onClick={handleOnSubmit}>Print Invoice</button>
                </div>
            </div>
        </div>
    );
}

export default UserViewReports;
