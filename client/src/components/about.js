import React, { Component } from "react";
import "./Landing.css";

class About extends Component {
    render() {
        return (
            <div className="landing-wrapper">
                <section className="about-hero">
                    <div className="hero-overlay"></div>
                    <div className="hero-content">
                        <h1 className="hero-title">About <span>Us</span></h1>
                        <p className="hero-subtitle">Transforming hostel management through innovation and intelligent design.</p>
                    </div>
                </section>

                <section className="about-content">
                    <div className="about-grid">
                        <div className="about-text">
                            <h2>Elevating the Student Living Experience</h2>
                            <p>
                                Our hostel management system is developed specifically to streamline every aspect of hostel operations. From automated admissions and fee processing to seamless room and mess allotments, we ensure your facility runs without friction.
                            </p>
                            <p>
                                We believe in providing an unparalleled experience for both hostel administrators and students. By eliminating manual paperwork and introducing smart digital workflows, we empower you to focus on what truly matters: creating a welcoming environment.
                            </p>
                            
                            <h3>Our Core Principles</h3>
                            <ul className="principles-list">
                                <li>Intelligent Space Allocation</li>
                                <li>Transparent Fee Management</li>
                                <li>24/7 Security & Support</li>
                                <li>Seamless Communication</li>
                                <li>Sustainable Operations</li>
                                <li>Data-Driven Decisions</li>
                                <li>Exceptional Resident Service</li>
                                <li>Future-Ready Technology</li>
                            </ul>
                        </div>
                        <div className="about-image">
                            <img src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=2070&ixlib=rb-4.0.3" alt="Students collaborating in a modern space" />
                        </div>
                    </div>
                </section>
            </div>
        );
    }
}

export default About;
