import React, { Component } from "react";
import './Landing.css';

class Gallery extends Component {
    render() {
        return (
            <div className="landing-wrapper">
                <section className="gallery-section">
                    <div className="container" style={{maxWidth: '1200px', margin: '0 auto'}}>
                        <div style={{textAlign: 'center', marginBottom: '50px'}}>
                            <h2 className="section-title">Hostel Gallery</h2>
                            <p style={{color: '#666', fontSize: '1.1rem'}}>Take a glimpse into the vibrant life and modern facilities at our hostels.</p>
                        </div>

                        <div className="masonry-grid">
                            <img src="https://images.unsplash.com/photo-1555854877-bab0e564b8d5?auto=format&fit=crop&q=80&w=2069" alt="Hostel Room" />
                            <img src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=2070" alt="Students studying" />
                            <img src="https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&q=80&w=2070" alt="University campus" />
                            <img src="https://images.unsplash.com/photo-1527891751199-7225231a68dd?auto=format&fit=crop&q=80&w=2070" alt="Student collaboration" />
                            <img src="https://images.unsplash.com/photo-1517673132405-a56a62b18caf?auto=format&fit=crop&q=80&w=2076" alt="Hostel lounge area" />
                            <img src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&q=80&w=2070" alt="Tech workspace" />
                            <img src="https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&q=80&w=2070" alt="Cafeteria" />
                            <img src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&q=80&w=2070" alt="Library and common room" />
                            <img src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&q=80&w=2072" alt="Coding space" />
                        </div>
                    </div>
                </section>
            </div>
        )
    }
}

export default Gallery;