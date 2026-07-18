import {Redirect} from 'react-router-dom';
import React, { useEffect } from "react";
import { redirect, useNavigate } from "react-router-dom";
const LogoutPage = () => {	
    const navigate = useNavigate();
	sessionStorage.clear();
    return (
		useEffect(() => {
			console.log("Logout Page");			
			 navigate("/");
			 window.location.reload(false);
		},[])        
    );
};
export default LogoutPage;
