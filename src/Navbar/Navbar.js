import React from 'react';
import Menu from './Menu';
import './Navbar.css'

const goToSignup=()=>{
    document.getElementById("Signup").style.visibility="visible";
    document.getElementById("Signin").style.visibility="hidden"; 
}
const goToSignin=()=>{
    document.getElementById("Signin").style.visibility="visible";
    document.getElementById("Signup").style.visibility="hidden";
}
const goToDashboard=()=>{
    document.getElementById("Signup").style.visibility="hidden";
    document.getElementById("Signin").style.visibility="hidden";  
}
const navbar = (props) =>{
    return(<div className="Navbar">
        <Menu src={goToSignup}>Sign Up</Menu>
        <Menu src={goToSignin}>Sign In</Menu>
        <Menu src={goToDashboard}>Dashboard</Menu>
    </div>
       
    );
}

export default navbar;