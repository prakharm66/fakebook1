import React from 'react';
import Field from './Fields';
import './Signup.css';


const goToSignin=()=>{
  document.getElementById("Signin").style.visibility="visible";
  document.getElementById("Signup").style.visibility="hidden";
  alert("Account has been created successfully"); 
}

const signup = (props) =>{
    return(<div id="Signup">
       <h1 className="heading">SIGN UP</h1>
      <p>You can create your new profile here . Please enter your details so that we can create your new profile</p>
      <Field type="text">Name</Field>
      <Field type="text">Nick Name</Field>
      <Field type="email">Email ID</Field>
      <Field type="phone">Phone Number</Field>
      <Field type="password">Set your password</Field>
      <Field type="password">Confirm your password</Field>
      <br/>
      <button onClick={goToSignin}>Confirm and Go to Login</button> 
    </div>
       
    );
}

export default signup;