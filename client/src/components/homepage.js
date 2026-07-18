import React, { Component } from "react";
import "./Landing.css";

class HomePage extends Component {
    render() {
        return (
            <div className="landing-wrapper">
                {/* Hero Section */}
                <section className="hero-section" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1555854877-bab0e564b8d5?auto=format&fit=crop&q=80&w=2069&ixlib=rb-4.0.3')" }}>
                    <div className="hero-overlay"></div>
                    <div className="hero-content">
                        <h1 className="hero-title">Welcome to <span>NextGen Hostel</span> Management</h1>
                        <p className="hero-subtitle">Experience the future of student accommodation. Smart, secure, and seamless management for modern living.</p>
                        <div className="hero-buttons">
                            <a href="/newuser" className="btn-premium btn-primary-gradient">Get Started Today</a>
                            <a href="/userlogin" className="btn-premium btn-glass">Student Login</a>
                        </div>
                    </div>
                </section>

                {/* Features Section */}
                <section className="features-section">
                    <h2 className="section-title">Why Choose Us?</h2>
                    <div className="features-grid">
                        <div className="feature-card">
                            <div className="feature-icon">🏠</div>
                            <h3>Smart Room Allocation</h3>
                            <p>Automated, hassle-free room assignments ensuring the best fit for every student based on preferences and availability.</p>
                        </div>
                        <div className="feature-card">
                            <div className="feature-icon">🍽️</div>
                            <h3>Mess Management</h3>
                            <p>Track daily meals, manage menus, and handle mess fees smoothly with our integrated dining management tools.</p>
                        </div>
                        <div className="feature-card">
                            <div className="feature-icon">🛡️</div>
                            <h3>24/7 Support & Security</h3>
                            <p>Raise maintenance complaints instantly. We prioritize your comfort and ensure issues are resolved lightning-fast.</p>
                        </div>
                    </div>
                </section>
            </div>
        );
    }
}

export default HomePage;
