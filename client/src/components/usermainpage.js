import React, { Component } from "react";
import './Landing.css'; // Make sure the new styles are loaded

class UserMainPage extends Component {
    render() {
        return (
            <div className="dashboard-container">
                <div className="dashboard-header">
                    <h2>Welcome to the Student Dashboard</h2>
                    <p style={{color: '#666', fontSize: '1.1rem'}}>Manage your hostel activities seamlessly</p>
                </div>

                <div className="dashboard-card">
                    <h3 style={{fontFamily: 'Outfit, sans-serif', marginBottom: '20px', color: '#0072ff'}}>Hostel Management Overview</h3>
                    <p style={{fontSize: '1.1rem', color: '#555', lineHeight: '1.8'}}>
                        The Hostel Management System is designed to streamline all your hostel-related activities, including admissions, fee payments, room and mess allotments, and generating necessary reports for smooth transactions. 
                    </p>
                    <p style={{fontSize: '1.1rem', color: '#555', lineHeight: '1.8'}}>
                        Our platform gives you full control and transparency over your student records, providing quick access to information without the hassle of traditional paperwork.
                    </p>
                </div>

                <div className="features-grid" style={{marginTop: '40px', padding: 0, background: 'transparent'}}>
                    <div className="feature-card">
                        <div className="feature-icon">🏠</div>
                        <h4>Room & Mess Allocation</h4>
                        <p style={{color: '#666', fontSize: '0.95rem'}}>View your currently assigned room and mess preferences in the Reports section.</p>
                    </div>
                    
                    <div className="feature-card">
                        <div className="feature-icon">👤</div>
                        <h4>Profile Management</h4>
                        <p style={{color: '#666', fontSize: '0.95rem'}}>Keep your personal details, contact information, and parent details up to date.</p>
                    </div>

                    <div className="feature-card">
                        <div className="feature-icon">📝</div>
                        <h4>Raise Complaints</h4>
                        <p style={{color: '#666', fontSize: '0.95rem'}}>Quickly log maintenance issues or other complaints directly with hostel administration.</p>
                    </div>
                </div>
            </div>
        )
    }
}

export default UserMainPage;