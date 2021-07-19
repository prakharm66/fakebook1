import React from 'react';
import Field from './Fields';
import './Signup.css';


const goToDashboard=()=>{
    document.getElementById("Signup").style.visibility="hidden";
    document.getElementById("Signin").style.visibility="hidden"; 
    alert("Sign In Successfull"); 
}
const goToSignup=()=>{
    document.getElementById("Signup").style.visibility="visible";
    document.getElementById("Signin").style.visibility="hidden"; 
  }

const signin = (props) =>{
    return(<div id="Signin">
       <h1 className="heading">SIGN IN / LOGIN</h1>
      <p>You may login with your credentials. Please enter your email ID and password</p>
      <Field type="email">Email ID</Field>
      <Field type="password">Password</Field>
        <br/>
      <button onClick={goToDashboard}>Sign In / Login in</button>
      OR 
      <button onClick={goToSignup}>SIGN UP</button> 
    </div>
       
    );
}

export default signin;