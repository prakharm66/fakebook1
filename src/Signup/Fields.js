import React from 'react';
import './Signup.css'


const field = (props) =>{
    return(
    <div className="field">
       {props.children} ---
       <input type={props.type}></input>
    </div>
       
    );
}

export default field;