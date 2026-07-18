import React, { useState } from "react";

function AdminAddStaff() {
    const [fname, setFirstName] = useState("");
    const [lname, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [phnum, setPhoneNum] = useState("");
    const [address, setAddress] = useState("");
    const [username, setUserName] = useState("");
    const [password, setPassword] = useState("");
    const [photo, setPhoto] = useState("");

    const handleFileSelect = (event) => {
        setPhoto(event.target.files[0]);
    };

    const handleOnSubmit = async (e) => {
        e.preventDefault();
        let result = await fetch('http://localhost:5000/api/staff/add', {
            method: "post",
            body: JSON.stringify({ fname, lname, email, phnum, username, password, address }),
            headers: {
                'Content-Type': 'application/json'
            }
        });
        result = await result.json();
        console.warn(result);
        if (result) {
            alert("Data saved successfully");
            setEmail("");
            setFirstName("");
            setLastName("");
            setPhoneNum("");
            setAddress("");
            setUserName("");
            setPassword("");
            setPhoto("");
        }
    };

    return (
        <div style={styles.container}>
            <div style={styles.formContainer}>
                <h1 style={styles.header}>New Staff Form</h1>
                <form encType="multipart/form-data" method="post" onSubmit={handleOnSubmit}>
                    <table style={styles.table}>
                        <tbody>
                            <tr>
                                <th><label style={styles.label}>First Name</label></th>
                                <td><input onChange={ev => setFirstName(ev.target.value)} style={styles.input} value={fname} required type="text" placeholder="First Name" /></td>
                            </tr>
                            <tr>
                                <th><label style={styles.label}>Last Name</label></th>
                                <td><input onChange={ev => setLastName(ev.target.value)} style={styles.input} value={lname} required type="text" placeholder="Last Name" /></td>
                            </tr>
                            <tr>
                                <th><label style={styles.label}>Email</label></th>
                                <td><input onChange={ev => setEmail(ev.target.value)} style={styles.input} value={email} required type="email" placeholder="Email Id" /></td>
                            </tr>
                            <tr>
                                <th><label style={styles.label}>Phone Num</label></th>
                                <td><input onChange={ev => setPhoneNum(ev.target.value)} style={styles.input} value={phnum} required type="text" placeholder="Phone Num" /></td>
                            </tr>
                            <tr>
                                <th><label style={styles.label}>User Name</label></th>
                                <td><input onChange={ev => setUserName(ev.target.value)} style={styles.input} value={username} required type="text" placeholder="User Name" /></td>
                            </tr>
                            <tr>
                                <th><label style={styles.label}>Password</label></th>
                                <td><input onChange={ev => setPassword(ev.target.value)} style={styles.input} value={password} required type="password" placeholder="Password" /></td>
                            </tr>
                            <tr>
                                <th><label style={styles.label}>Address</label></th>
                                <td><textarea rows={5} cols={30} value={address} style={styles.textarea} onChange={ev => setAddress(ev.target.value)} /></td>
                            </tr>
                            <tr>
                                <th colSpan={2}>
                                    <center>
                                        <button type="submit" style={styles.button}>Add New Staff</button>
                                    </center>
                                </th>
                            </tr>
                        </tbody>
                    </table>
                </form>
            </div>
        </div>
    );
}

const styles = {
    container: {
        backgroundImage: "url('https://images.unsplash.com/photo-1554936323-44722f1e990d')", // Image of a hostel dormitory
        height: "100vh",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
    },
    formContainer: {
        backgroundColor: "rgba(255, 255, 255, 0.9)",
        padding: "30px",
        borderRadius: "10px",
        boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
        width: "400px",
    },
    header: {
        color: "#333",
        marginBottom: "20px",
    },
    table: {
        width: "100%",
    },
    label: {
        color: "#333",
        fontSize: "14px",
    },
    input: {
        width: "100%",
        padding: "10px",
        margin: "5px 0",
        boxSizing: "border-box",
        borderRadius: "5px",
        border: "1px solid #ccc",
    },
    textarea: {
        width: "100%",
        padding: "10px",
        margin: "5px 0",
        boxSizing: "border-box",
        borderRadius: "5px",
        border: "1px solid #ccc",
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


export default AdminAddStaff;
