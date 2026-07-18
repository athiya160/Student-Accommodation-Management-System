import React, { Component } from "react";

class CommonHeader extends Component {
  render() {
    return (
      <header id="header" class="fixed-top d-flex align-items-center">
    <div class="container d-flex align-items-center">
      <h1 class="logo me-auto"><a href="index.html">Online Hostel Management System</a></h1>
      <nav id="navmenu" className="navbar">
            <ul>
              <li><a href="/home" className="active">Home</a></li>
              <li><a href="/about">About Us</a></li>
              <li><a href="/services">Our Services</a></li>
              <li><a href="/gallery">Gallery</a></li>
              <li><a href="/newuser">NewUser</a></li>
              <li className="dropdown"><a href="#"><span>Login</span> <i className="bi bi-chevron-down toggle-dropdown" /></a>
                <ul>
                  <li><a href="/adminlogin">AdminLogin</a></li>
                  <li><a href="/stafflogin">StaffLogin</a></li>
                  <li><a href="/userlogin">UserLogin</a></li>
                </ul>
              </li>
              <li><a href="/contact">Contact</a></li>
            </ul>
            <i className="mobile-nav-toggle d-xl-none bi bi-list" />
          </nav>
    </div>
  </header>
    )
  }
}

export default CommonHeader;