import React from "react";
import './Landing.css'; // Use unified Landing.css

function StaffMainPage() {
    return (
        <div className="landing-wrapper">
            <div className="dashboard-container">
                <div className="dashboard-card wide text-center">
                    <h1 style={{ color: '#333', marginBottom: '15px' }}>Staff Dashboard</h1>
                    <p style={{ fontSize: '18px', color: '#666', marginBottom: '30px' }}>
                        Welcome to the Staff Administration Panel. Select an action below to manage hostel operations.
                    </p>
                    
                    <div className="dashboard-grid">
                        <div className="dashboard-card hover-effect">
                            <h3 style={{ color: '#4CAF50', marginBottom: '15px' }}>Student Management</h3>
                            <p style={{ color: '#666', lineHeight: '1.6' }}>
                                View student details and profiles. Allocate students to available rooms and mess facilities to ensure smooth hostel operations.
                            </p>
                        </div>
                        
                        <div className="dashboard-card hover-effect">
                            <h3 style={{ color: '#2196F3', marginBottom: '15px' }}>Allocation Reports</h3>
                            <p style={{ color: '#666', lineHeight: '1.6' }}>
                                Generate and view comprehensive reports detailing current room occupancy and active mess facility subscriptions.
                            </p>
                        </div>
                        
                        <div className="dashboard-card hover-effect">
                            <h3 style={{ color: '#9C27B0', marginBottom: '15px' }}>Staff Profile</h3>
                            <p style={{ color: '#666', lineHeight: '1.6' }}>
                                Access your personal staff profile and keep your contact details and administrative information up to date.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default StaffMainPage;