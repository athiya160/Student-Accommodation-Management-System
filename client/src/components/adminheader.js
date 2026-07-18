import React, { Component } from "react";

class AdminHeader extends Component {
  render() {
    return (
      <header id="header" class="fixed-top d-flex align-items-center">
    <div class="container d-flex align-items-center">
      <h1 class="logo me-auto"><a href="index.html">Online Hostel Management System</a></h1>
      <nav id="navbar" class="navbar">
        <ul>
          <li><a href="/adminmainpage">Home</a></li>
          <li><a href="/adminaddroom">Add Room</a></li>
          <li><a href="/adminaddmess">Add Mess</a></li>
          <li><a href="/adminaddstaff">Add Staff</a></li>
          {/* <li class="dropdown"><a href="#"><span>About</span> <i class="bi bi-chevron-down"></i></a>
            <ul>
              <li><a href="about.html">About</a></li>
              <li><a href="team.html">Team</a></li>
              <li><a href="testimonials.html">Testimonials</a></li>

              <li class="dropdown"><a href="#"><span>Deep Drop Down</span> <i class="bi bi-chevron-right"></i></a>
                <ul>
                  <li><a href="#">Deep Drop Down 1</a></li>
                  <li><a href="#">Deep Drop Down 2</a></li>
                  <li><a href="#">Deep Drop Down 3</a></li>
                  <li><a href="#">Deep Drop Down 4</a></li>
                  <li><a href="#">Deep Drop Down 5</a></li>
                </ul>
              </li>
            </ul>
          </li> */}
          {/* <li><a href="/adminviewstaffs">View Staffs</a></li> */}
          
          <li class="dropdown"><a href="#"><span>View</span> <i class="bi bi-chevron-down"></i></a>
            <ul>
            <li><a href="/adminviewrooms">View Rooms</a></li>
            <li><a href="/adminviewmess">View Mess</a></li>
            <li><a href="/adminviewstudents">View Students</a></li>          
            <li><a href="/adminviewcontacts">View Contacts</a></li>
            <li><a href="/adminviewreports">View Reports</a></li>
            <li><a href="/adminviewstaffs">View Staffs</a></li>
            <li><a href="/adminviewcomplaints">View Complaints</a></li>
            </ul>
          </li>
          {/* <li><a href="/adminallocatemess">Allocate Mess</a></li>
          <li><a href="/adminallocateroom">Allocate Room</a></li> */}
          
          
          <li><a href="/logout">Logout</a></li>          
        </ul>
        <i class="bi bi-list mobile-nav-toggle"></i>
      </nav>

    </div>
  </header>
    )
  }
}

export default AdminHeader;