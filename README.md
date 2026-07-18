# Online Hostel Management System

A full-stack MERN (MongoDB, Express, React, Node.js) web application for managing a hostel.

## Features
- **Admin Dashboard**: Manage rooms, messes, staff, users, view reports, and allocate resources.
- **Staff Dashboard**: View profile, assigned duties, and reports.
- **User Dashboard**: View profile, reports, and raise complaints.
- **Authentication**: Role-based access control (Admin, Staff, User).

## Tech Stack
- **Frontend**: React.js, React Router, Axios, CSS
- **Backend**: Node.js, Express.js
- **Database**: MongoDB (Mongoose)

## How to Run Locally

### Prerequisites
- Node.js installed on your machine
- MongoDB running locally on port `27017`

### 1. Start the Backend Server
```bash
cd server
npm install
npm run server
```
The server will start on `http://localhost:5000`.

### 2. Start the Frontend Client
Open a new terminal window:
```bash
cd client
npm install
npm start
```
The client will start on `http://localhost:3000`.
