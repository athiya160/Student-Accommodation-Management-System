import React, { useState } from "react";
import './Landing.css';

function AdminAddMess() {
    const [mname, setMessName] = useState("");
    const [mtype, setMessType] = useState("North Indian");
    const [price, setPrice] = useState("");
    const [numofstudents, setNumberOfStudents] = useState("");
    const [details, setDetails] = useState("");
    const [msg, setMsg] = useState("");
    const [isSuccess, setIsSuccess] = useState(false);
    
    const messtypes = ["North Indian", "South Indian", "Punjabi", "Only Veg", "Veg-NonVeg"];

    const onOptionChangeHandler = (event) => {
        setMessType(event.target.value);
    };

    const handleOnSubmit = async (e) => {
        e.preventDefault();
        setMsg("");
        setIsSuccess(false);
        try {
            let result = await fetch('http://localhost:5000/api/mess/add', {
                method: "post",
                body: JSON.stringify({ mname, mtype, numofstudents, details, price }),
                headers: {
                    'Content-Type': 'application/json'
                }
            });
            result = await result.json();
            if (result) {
                setIsSuccess(true);
                setMsg("Mess saved successfully!");
                setMessName("");
                setPrice("");
                setNumberOfStudents("");
                setDetails("");
            }
        } catch (err) {
            setMsg("Server error while saving mess.");
        }
    };

    return (
        <div className="landing-wrapper">
            <div className="dashboard-container">
                <div className="dashboard-card" style={{ maxWidth: '600px', margin: '0 auto' }}>
                    <h1 style={{ color: '#333', marginBottom: '20px' }}>Add New Mess</h1>
                    {msg && <div className={isSuccess ? "success-message" : "error-message"}>{msg}</div>}
                    
                    <form onSubmit={handleOnSubmit}>
                        <div className="form-group">
                            <label>Mess Name</label>
                            <input 
                                onChange={ev => setMessName(ev.target.value)} 
                                value={mname} 
                                required type="text" 
                                placeholder="Mess Name" 
                            />
                        </div>

                        <div className="form-group">
                            <label>Mess Type</label>
                            <select onChange={onOptionChangeHandler} value={mtype} required>
                                {messtypes.map((option, index) => (
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
                                placeholder="Any specific mess features..."
                                required
                            />
                        </div>

                        <button type="submit" className="btn-premium btn-primary-gradient" style={{ width: '100%', marginTop: '10px' }}>
                            Save Mess
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default AdminAddMess;
