import React, { useState } from "react";
import './Landing.css';

function AdminAddRoom() {
    const [rname, setRoomName] = useState("");
    const [rtype, setRoomType] = useState("One Student");
    const [price, setPrice] = useState("");
    const [numofstudents, setNumberOfStudents] = useState("");
    const [details, setDetails] = useState("");
    const [msg, setMsg] = useState("");
    const [isSuccess, setIsSuccess] = useState(false);
    
    const roomtypes = ["One Student", "Two Students", "Three Students", "More"];

    const onOptionChangeHandler = (event) => {
        setRoomType(event.target.value);
    };

    const handleOnSubmit = async (e) => {
        e.preventDefault();
        setMsg("");
        setIsSuccess(false);
        try {
            let result = await fetch('http://localhost:5000/api/room/add', {
                method: "post",
                body: JSON.stringify({ rname, rtype, numofstudents, details, price }),
                headers: {
                    'Content-Type': 'application/json'
                }
            });
            result = await result.json();
            if (result) {
                setIsSuccess(true);
                setMsg("Room saved successfully!");
                setRoomName("");
                setPrice("");
                setNumberOfStudents("");
                setDetails("");
            }
        } catch (err) {
            setMsg("Server error while saving room.");
        }
    };

    return (
        <div className="landing-wrapper">
            <div className="dashboard-container">
                <div className="dashboard-card" style={{ maxWidth: '600px', margin: '0 auto' }}>
                    <h1 style={{ color: '#333', marginBottom: '20px' }}>Add New Room</h1>
                    {msg && <div className={isSuccess ? "success-message" : "error-message"}>{msg}</div>}
                    
                    <form onSubmit={handleOnSubmit}>
                        <div className="form-group">
                            <label>Room ID</label>
                            <input 
                                onChange={ev => setRoomName(ev.target.value)} 
                                value={rname} 
                                required type="text" maxLength={15} 
                                placeholder="Room ID" 
                            />
                        </div>

                        <div className="form-group">
                            <label>Room Type</label>
                            <select onChange={onOptionChangeHandler} value={rtype} required>
                                {roomtypes.map((option, index) => (
                                    <option key={index} value={option}>{option}</option>
                                ))}
                            </select>
                        </div>

                        <div className="grid-form">
                            <div className="form-group">
                                <label>Number Of Students</label>
                                <input 
                                    onChange={ev => setNumberOfStudents(ev.target.value)} 
                                    value={numofstudents} 
                                    required type="text" maxLength={3} pattern="[0-9]{1,3}" 
                                    placeholder="Capacity" 
                                />
                            </div>

                            <div className="form-group">
                                <label>Price</label>
                                <input 
                                    onChange={ev => setPrice(ev.target.value)} 
                                    value={price} 
                                    required type="text" maxLength={6} pattern="[0-9]{1,6}" 
                                    placeholder="Price per head" 
                                />
                            </div>
                        </div>

                        <div className="form-group">
                            <label>Details</label>
                            <textarea 
                                rows={4} 
                                value={details} 
                                onChange={ev => setDetails(ev.target.value)} 
                                placeholder="Any specific room features..."
                            />
                        </div>

                        <button type="submit" className="btn-premium btn-primary-gradient" style={{ width: '100%', marginTop: '10px' }}>
                            Save Room
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default AdminAddRoom;
