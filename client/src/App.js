import logo from './logo.svg';
import './App.css';
import './normalize.css'
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Home from './components/home';
import About from './components/about';
import Services from './components/services';
import Gallery from './components/gallery';
import AdminLogin from './components/adminlogin';
import UserLogin from './components/userlogin';
import StaffLogin from './components/stafflogin';
import Contact from './components/contact';
import NewUser from './components/newuser';
import Header from './components/header';
import AdminAddStaff from './components/adminaddstaff';
import LogoutPage from './components/logout';
import UserViewProfile from './components/userviewprofile';
import StaffViewProfile from './components/staffviewprofile';
import UserMainPage from './components/usermainpage';
import StaffHeader from './components/staffheader';
import UserHeader from './components/userheader';
import AdminMainPage from './components/adminmainpage';
import AdminHeader from './components/adminheader';
import StaffMainPage from './components/staffmainpage';
import AdminViewUsers from './components/adminviewusers';
import AdminViewStaffs from './components/adminviewstaffs';
import AdminViewReports from './components/adminviewreports';
import AdminViewContacts from './components/adminviewcontacts';
import AdminViewRooms from './components/adminviewrooms';
import AdminAllocateRoom from './components/adminallocateroom';
import AdminAddRoom from './components/adminaddroom';
import UserViewReports from './components/userviewreports';
import AdminAllocateRoom1 from './components/adminallocateroom1';
import AdminAllocateRoom2 from './components/adminallocateroom2';
import AdminViewMess from './components/adminviewmess';
import AdminAddMess from './components/adminaddmess';
import AdminAllocateMess from './components/adminallocatemess';
import AdminAllocateMess1 from './components/adminallocatemess1';
import AdminAllocateMess2 from './components/adminallocatemess2';
import CommonHeader from './components/commonheader';
import HomePage from './components/homepage';
import StaffViewReports from './components/staffviewreports';
import UserRaiseComplaint from './components/userraisecomplaint';
import AdminViewComplaints from './components/adminviewcomplaints';
import StaffViewUsers from './components/staffviewusers';
function App() {
  /*
  return (
    <div className="wrapper">
      <Home/>
    </div>
  );
  */
 console.log("User Type : ", sessionStorage.getItem('usertype'))
  if(sessionStorage.getItem('usertype')==null){
    return (
      <Router>
        <CommonHeader />  
      <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/home" element={<HomePage />} />
                <Route path="/services" element={<Services />} />
                <Route path="/gallery" element={<Gallery />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/newuser" element={<NewUser />} />
                <Route path="/adminlogin" element={<AdminLogin />} />
                <Route path="/userlogin" element={<UserLogin />} />
                <Route path="/stafflogin" element={<StaffLogin />} />
                </Routes>
      </Router>
        //  <Router>
        //      <Header />
        //      <Routes>
        //          <Route path="/" element={<Home />} />
        //          <Route path="/home" element={<Home />} />
        //          <Route path="/about" element={<About />} />
        //          <Route path="/services" element={<Services />} />
        //          <Route path="/gallery" element={<Gallery />} />
        //          <Route path="/adminlogin" element={<AdminLogin />} />
        //          <Route path="/userlogin" element={<UserLogin />} />
        //          <Route path="/stafflogin" element={<StaffLogin />} />
        //          <Route path="/newuser" element={<NewUser />} />
        //          <Route path="/contact" element={<Contact />} />
        //      </Routes>
        //  </Router>
     );
   }
   else if(sessionStorage.getItem('usertype')=='staff'){
    return (
         <Router>
             <StaffHeader />
             <Routes>
                <Route path="/" element={<StaffMainPage />} />
                <Route path="/staffmainpage" element={<StaffMainPage />} />
                <Route path="/staffviewprofile" element={<StaffViewProfile />} />
                <Route path="/adminallocateroom" element={<AdminAllocateRoom />} />
                <Route path="/adminallocateroom1" element={<AdminAllocateRoom1 />} />
                <Route path="/adminallocateroom2" element={<AdminAllocateRoom2 />} />
                <Route path="/adminallocatemess" element={<AdminAllocateMess />} />
                <Route path="/adminallocatemess1" element={<AdminAllocateMess1 />} />
                <Route path="/adminallocatemess2" element={<AdminAllocateMess2 />} />
                <Route path="/staffviewreports" element={<StaffViewReports />} />
                <Route path="/staffviewusers" element={<StaffViewUsers />} />
                <Route path="/logout" element={<LogoutPage />} />
            </Routes>
         </Router>
     );
   }
  else if(sessionStorage.getItem('usertype')=='admin'){
    return (
         <Router>
             <AdminHeader />
             <Routes>
                <Route path="/" element={<AdminMainPage />} />
                <Route path="/adminmainpage" element={<AdminMainPage />} />
                <Route path="/adminaddroom" element={<AdminAddRoom />} />
                <Route path="/adminaddmess" element={<AdminAddMess />} />
                <Route path="/adminaddstaff" element={<AdminAddStaff />} />
                <Route path="/adminviewstudents" element={<AdminViewUsers />} />
                <Route path="/adminviewstaffs" element={<AdminViewStaffs />} />
                <Route path="/adminviewrooms" element={<AdminViewRooms />} />
                <Route path="/adminviewmess" element={<AdminViewMess />} />                
                <Route path="/adminviewcontacts" element={<AdminViewContacts />} />
                <Route path="/adminviewreports" element={<AdminViewReports />} />
                <Route path="/adminviewcomplaints" element={<AdminViewComplaints />} />
                <Route path="/logout" element={<LogoutPage />} />
            </Routes>
         </Router>
     );
   }
   else if(sessionStorage.getItem('usertype')=='user'){
    return (
         <Router>
             <UserHeader />
             <Routes>
                <Route path="/" element={<UserMainPage />} />
                <Route path="/usermainpage" element={<UserMainPage />} />
                <Route path="/userviewprofile" element={<UserViewProfile />} />
                <Route path="/userviewreports" element={<UserViewReports />} />
                <Route path="/userraisecomplaint" element={<UserRaiseComplaint />} />
                <Route path="/logout" element={<LogoutPage />} />
            </Routes>
         </Router>
     );
   }
}

export default App;
