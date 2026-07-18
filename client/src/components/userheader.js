/*
import React, { Component } from "react";

class UserHeader extends Component {

  render() {

    return (
      <header id="header" className="header d-flex align-items-center position-relative">
        <div className="container-fluid container-xl position-relative d-flex align-items-center justify-content-between">
          <a href="index.html" className="logo d-flex align-items-center">
            <h1>Online News Portal</h1>
          </a>
          <nav id="navmenu" className="navmenu">
            <ul>
              <ul>
                <li><a href="/usermainpage" className="active">Home</a></li>
                <li><a href="/userviewprofile">View Profile</a></li>
                <li><a href="/userviewnews">View News</a></li>
                <li><a href="/logout">Logout</a></li>
              </ul>
            </ul>
            <i className="mobile-nav-toggle d-xl-none bi bi-list" />
          </nav>
        </div>
      </header>
    )
  }
}

export default UserHeader;
*/
import React, { Component } from "react";

class UserHeader extends Component {
  render() {
    return (
      <header id="header" class="fixed-top d-flex align-items-center">
    <div class="container d-flex align-items-center">
      <h1 class="logo me-auto"><a href="index.html">Online Hostel Management System</a></h1>
      <nav id="navbar" class="navbar">
        <ul>
          {/* <li><a href="/adminmainpage">Home</a></li>
          <li><a href="/adminaddroom">Add Room</a></li>
          <li><a href="/adminaddstaff">Add Staff</a></li>          
          <li><a href="/adminviewstaffs">View Staffs</a></li>
          <li><a href="/adminviewstudents">View Students</a></li>
          <li><a href="/adminviewrooms">View Rooms</a></li>
          <li><a href="/adminallocateroom">Allocate Room</a></li>
          <li><a href="/adminviewreports">View Reports</a></li>
          <li><a href="/logout">Logout</a></li> */}
          <li><a href="/usermainpage" className="active">Home</a></li>
                <li><a href="/userviewprofile">View Profile</a></li>
                <li><a href="/userviewreports">View Reports</a></li>
                <li><a href="/userraisecomplaint">Raise Complaint</a></li>
                <li><a href="/logout">Logout</a></li>
        </ul>
        <i class="bi bi-list mobile-nav-toggle"></i>
      </nav>

    </div>
  </header>
    )
  }
}

export default UserHeader;