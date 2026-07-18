import React, { Component } from "react";

class StaffHeader extends Component {

  render() {

    return (
      <header id="header" className="header d-flex align-items-center position-relative">
        <div className="container-fluid container-xl position-relative d-flex align-items-center justify-content-between">
          <a href="index.html" className="logo d-flex align-items-center">
            {/* <img src="assets/img/logo.png" alt="AgriCulture" /> */}
            <h1>Student Accommodation System Hostels</h1>
          </a>
          <nav id="navmenu" className="navbar">
            <ul>
              <li><a href="/staffmainpage" className="active">Home</a></li>
              <li><a href="/staffviewprofile">View Profile</a></li>
              <li><a href="/staffviewusers">View Users</a></li>              
              <li><a href="/adminallocatemess">Allocate Mess</a></li>
              <li><a href="/adminallocateroom">Allocate Room</a></li>
              <li><a href="/staffviewreports">View Reports</a></li>
              <li><a href="/logout">Logout</a></li>
            </ul>
            <i className="mobile-nav-toggle d-xl-none bi bi-list" />
          </nav>
        </div>
      </header>




    )

  }

}

export default StaffHeader;