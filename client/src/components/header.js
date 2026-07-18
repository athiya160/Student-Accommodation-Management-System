import React, { Component } from "react";

class Header extends Component {
  render() {
    return (
      <header style={{ backgroundColor: '#4CAF50', color: '#fff', padding: '15px 20px', boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)', position: 'relative', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <div style={{ flex: '1' }}>
          <a href="index.html" style={{ fontSize: '1.8em', fontWeight: 'bold', textTransform: 'uppercase', color: '#fff', textDecoration: 'none' }}>
            <h1>Online Hostel Management System</h1>
          </a>
        </div>
        <nav style={{ display: 'flex', alignItems: 'center' }}>
          <ul style={{ listStyle: 'none', display: 'flex', gap: '20px', margin: 0, padding: 0 }}>
            <li><a href="/home" style={{ color: '#fff', textDecoration: 'none', fontSize: '1.1em' }}>Home</a></li>
            <li><a href="/about" style={{ color: '#fff', textDecoration: 'none', fontSize: '1.1em' }}>About Us</a></li>
            <li><a href="/services" style={{ color: '#fff', textDecoration: 'none', fontSize: '1.1em' }}>Our Services</a></li>
            <li><a href="/gallery" style={{ color: '#fff', textDecoration: 'none', fontSize: '1.1em' }}>Gallery</a></li>
            <li><a href="/newuser" style={{ color: '#fff', textDecoration: 'none', fontSize: '1.1em' }}>New User</a></li>
            <li style={{ position: 'relative' }}>
              <a href="#" style={{ color: '#fff', textDecoration: 'none', fontSize: '1.1em' }}>
                <span>Login</span> <i className="bi bi-chevron-down" />
              </a>
              <ul style={{ display: 'none', position: 'absolute', backgroundColor: '#4CAF50', borderRadius: '5px', padding: '10px' }}>
                <li><a href="/adminlogin" style={{ color: '#fff', textDecoration: 'none', display: 'block', padding: '5px 10px' }}>Admin Login</a></li>
                <li><a href="/stafflogin" style={{ color: '#fff', textDecoration: 'none', display: 'block', padding: '5px 10px' }}>Staff Login</a></li>
                <li><a href="/userlogin" style={{ color: '#fff', textDecoration: 'none', display: 'block', padding: '5px 10px' }}>User Login</a></li>
              </ul>
            </li>
            <li><a href="/contact" style={{ color: '#fff', textDecoration: 'none', fontSize: '1.1em' }}>Contact</a></li>
          </ul>
          <i className="mobile-nav-toggle d-xl-none bi bi-list" style={{ fontSize: '1.5em', color: '#fff' }} />
        </nav>
      </header>
    );
  }
}

export default Header;
