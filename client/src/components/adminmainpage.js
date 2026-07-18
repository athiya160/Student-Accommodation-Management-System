import React from "react";
import './Landing.css'; // Use unified Landing.css

function AdminMainPage() {
    return (
        <div className="landing-wrapper">
            <div className="dashboard-container">
                <div className="welcome-banner" style={{ background: 'linear-gradient(135deg, #FF6B6B 0%, #FF8E53 100%)', color: 'white', padding: '40px', borderRadius: '15px', marginBottom: '30px', boxShadow: '0 10px 30px rgba(255, 107, 107, 0.3)' }}>
                    <h1 style={{ margin: 0, fontSize: '2.5rem', fontWeight: 700 }}>Admin Dashboard</h1>
                    <p style={{ margin: '10px 0 0 0', fontSize: '1.2rem', opacity: 0.9 }}>
                        Welcome to the central control panel. Manage all operations from here.
                    </p>
                </div>
                
                <div className="feature-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '20px' }}>
                    <div className="dashboard-card" style={{ background: 'rgba(255, 255, 255, 0.9)', backdropFilter: 'blur(10px)', padding: '25px', borderRadius: '15px', border: '1px solid rgba(255, 255, 255, 0.5)', boxShadow: '0 8px 32px rgba(0, 0, 0, 0.1)' }}>
                        <h3 style={{ color: '#FF6B6B', marginBottom: '15px', display: 'flex', alignItems: 'center', gap: '10px' }}>
                            <span style={{ fontSize: '1.5rem' }}>👥</span> Manage Users & Staff
                        </h3>
                        <p style={{ color: '#666', lineHeight: 1.6 }}>
                            Register new staff members, view all registered students, and manage the personnel associated with the hostel. Keep contact information up to date.
                        </p>
                    </div>

                    <div className="dashboard-card" style={{ background: 'rgba(255, 255, 255, 0.9)', backdropFilter: 'blur(10px)', padding: '25px', borderRadius: '15px', border: '1px solid rgba(255, 255, 255, 0.5)', boxShadow: '0 8px 32px rgba(0, 0, 0, 0.1)' }}>
                        <h3 style={{ color: '#4facfe', marginBottom: '15px', display: 'flex', alignItems: 'center', gap: '10px' }}>
                            <span style={{ fontSize: '1.5rem' }}>🏢</span> Rooms & Mess
                        </h3>
                        <p style={{ color: '#666', lineHeight: 1.6 }}>
                            Add new rooms and mess facilities. Monitor available capacities and oversee the infrastructure of the hostel seamlessly.
                        </p>
                    </div>

                    <div className="dashboard-card" style={{ background: 'rgba(255, 255, 255, 0.9)', backdropFilter: 'blur(10px)', padding: '25px', borderRadius: '15px', border: '1px solid rgba(255, 255, 255, 0.5)', boxShadow: '0 8px 32px rgba(0, 0, 0, 0.1)' }}>
                        <h3 style={{ color: '#43e97b', marginBottom: '15px', display: 'flex', alignItems: 'center', gap: '10px' }}>
                            <span style={{ fontSize: '1.5rem' }}>📊</span> Reports & Complaints
                        </h3>
                        <p style={{ color: '#666', lineHeight: 1.6 }}>
                            View financial reports, track allocations, and respond to complaints raised by students to maintain a healthy environment.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AdminMainPage;