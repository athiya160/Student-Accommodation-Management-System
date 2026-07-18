import React, { Component } from "react";

class About extends Component {
    render() {
        // Inline style for background image
        const backgroundStyle = {
            backgroundImage: "url('https://example.com/your-background-image.jpg')", // Replace with your image URL
            backgroundSize: "cover",
            backgroundPosition: "center",
            minHeight: "100vh",
            padding: "20px",
            color: "#fff", // Adjust text color to contrast with the background
            display: 'block', // Ensure the component is visible
        };

        return (
            <div style={backgroundStyle}>
                <h2>About Online Hostel Management System</h2>
                <p>
                    The hostel management system is designed to manage all hostel activities like hostel admissions, fees, room, mess allotment, hostel stores, and generates related reports for smooth transactions.
                </p>
                <ol>
                    <li>Develop a Business Plan</li>
                    <li>Hire the Right Staff</li>
                    <li>Keep the Hostel Clean and Well-Maintained</li>
                    <li>Create a Welcoming Environment</li>
                    <li>Offer Excellent Customer Service</li>
                    <li>Use Technology</li>
                    <li>Embrace Sustainability</li>
                    <li>Manage Your Finances</li>
                </ol>
                <p>
                    The hostel management system is developed specifically for hostel owners to manage different activities in the hostel. From promotions, receiving bookings through multiple OTAs, managing and selling beds and dorms, to enhancing guests’ experience, hostel software streamlines all aspects of your hostel while also helping you grow your revenue.
                </p>
                <p>
                    Regardless of your hostel’s size and the type of beds or rooms you are selling, our best hostel management software will help you simplify all complex operations with no interruptions.
                </p>
                <p>
                    Hostels like yours are occupied year-round. With eZee’s hostel booking software, you can sell your beds at dynamic pricing depending on occupancy and seasonal rush, earning you maximum revenue.
                </p>
                <p>
                    Even if your hostels are scattered across multiple locations, miles away from each other, our hostel management system will let you manage all your hostel operations from a single place.
                </p>
                <p>
                    Our hostel channel manager, connected with OTAs like Hostelworld, Hostelsclub, and Hostelbookers, gets you more potential bookings from all across the world.
                </p>
            </div>
        );
    }
}

export default About;
