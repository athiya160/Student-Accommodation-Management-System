import React, { Component } from "react";
import './Landing.css';

class Services extends Component {
    render() {
        return (
            <div className="landing-wrapper">
                <section className="services-section">
                    <div className="container" style={{maxWidth: '1200px', margin: '0 auto'}}>
                        <div style={{textAlign: 'center', marginBottom: '60px'}}>
                            <h2 className="section-title">Our Premium Services</h2>
                            <p style={{color: '#666', maxWidth: '800px', margin: '0 auto', fontSize: '1.1rem'}}>
                                NextGen Hostel Management offers a comprehensive set of features, ranging from multi-property management with a centralized guest profile to automated daily operations.
                            </p>
                        </div>
                        
                        <div className="features-grid">
                            <div className="feature-card">
                                <div className="feature-icon">🌐</div>
                                <h3>Channel Manager</h3>
                                <p>Manage all channels digitally. Reduce discrepancy with centralized reservation and guest information management.</p>
                            </div>
                            
                            <div className="feature-card">
                                <div className="feature-icon">📈</div>
                                <h3>Yield Management</h3>
                                <p>Easily adjust your room rates based on room type, group occupancy or current market demands.</p>
                            </div>
                            
                            <div className="feature-card">
                                <div className="feature-icon">📅</div>
                                <h3>Reservation Software</h3>
                                <p>Oversees room availability, rates, guest information, and secure payment processing in real-time.</p>
                            </div>
                            
                            <div className="feature-card">
                                <div className="feature-icon">📊</div>
                                <h3>Booking Data</h3>
                                <p>Helps you understand your guests better to create personalized experiences and improve retention.</p>
                            </div>
                            
                            <div className="feature-card">
                                <div className="feature-icon">🛏️</div>
                                <h3>Smart Room Allocation</h3>
                                <p>Assign rooms tailored precisely to guest preferences and budget all before they arrive.</p>
                            </div>
                            
                            <div className="feature-card">
                                <div className="feature-icon">🧹</div>
                                <h3>Housekeeping Software</h3>
                                <p>Guests can make housekeeping requests via the app and receive real-time updates on their request.</p>
                            </div>
                            
                            <div className="feature-card">
                                <div className="feature-icon">🔒</div>
                                <h3>Security Management</h3>
                                <p>Access restrictions with whitelisted IPs for front line staff, and remote access for admins.</p>
                            </div>
                            
                            <div className="feature-card">
                                <div className="feature-icon">📑</div>
                                <h3>Performance Reports</h3>
                                <p>Comprehensive summary of hostel fees, mess bills, inventory management, and other essential aspects.</p>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        )
    }
}

export default Services;