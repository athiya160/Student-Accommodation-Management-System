import React, { useState } from "react";

function AdminAddMess() {
    const [mname, setMessName] = useState("");
    const [mtype, setMessType] = useState("North Indian");
    const [price, setPrice] = useState("");
    const [numofstudents, setNumberOfStudents] = useState("");
    const [details, setDetails] = useState("");
    const messtypes = ["North Indian", "South Indian", "Punjabi", "Only Veg", "Veg-NonVeg"];

    const onOptionChangeHandler = (event) => {
        setMessType(event.target.value);
        console.log("User Selected Value - ", event.target.value);
    };

    const handleOnSubmit = async (e) => {
        e.preventDefault();
        let result = await fetch('http://localhost:5000/api/mess/add', {
            method: "post",
            body: JSON.stringify({ mname, mtype, numofstudents, details, price }),
            headers: {
                'Content-Type': 'application/json'
            }
        });
        result = await result.json();
        console.warn(result);
        if (result) {
            alert("Data saved successfully");
        }
    };

    return (
        <div style={styles.container}>
            <div style={styles.formContainer}>
                <h1 style={styles.header}>Add New Mess</h1>
                <form encType="multipart/form-data" method="post" onSubmit={handleOnSubmit}>
                    <table style={styles.table}>
                        <tbody>
                            <tr>
                                <th><label style={styles.label}>Mess Name</label></th>
                                <td><input onChange={ev => setMessName(ev.target.value)} style={styles.input} value={mname} type="text" required placeholder="Mess Name" /></td>
                            </tr>
                            <tr>
                                <th><label style={styles.label}>Mess Type</label></th>
                                <td>
                                    <select onChange={onOptionChangeHandler} style={styles.input} required title="Choose an option">
                                        {messtypes.map((option, index) => (
                                            <option key={index}>{option}</option>
                                        ))}
                                    </select>
                                </td>
                            </tr>
                            <tr>
                                <th><label style={styles.label}>Number Of Students</label></th>
                                <td><input onChange={ev => setNumberOfStudents(ev.target.value)} style={styles.input} value={numofstudents} required type="text" maxLength={3} pattern="[0-9]{1,3}" title="Students number should be 1 to 3" placeholder="Number Of Students" /></td>
                            </tr>
                            <tr>
                                <th><label style={styles.label}>Price</label></th>
                                <td><input onChange={ev => setPrice(ev.target.value)} style={styles.input} value={price} required type="text" maxLength={6} pattern="[0-9]{1,3}" title="Price should be 1 to 3" placeholder="Price" /></td>
                            </tr>
                            <tr>
                                <th><label style={styles.label}>Details</label></th>
                                <td><textarea rows={5} cols={30} value={details} style={styles.textarea} required onChange={ev => setDetails(ev.target.value)} /></td>
                            </tr>
                            <tr>
                                <th colSpan={2}>
                                    <center>
                                        <button type="submit" style={styles.button}>Add New Mess</button>
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
        backgroundImage: "url('https://images.unsplash.com/photo-1561043433-aaf687c4cf4b')", // Replace with your preferred image URL
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

export default AdminAddMess;
