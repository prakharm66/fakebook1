import React from 'react';


const input = (props) =>{
    return(<div id="input">
       <input 
       type="text"
       placeholder="Type your Post"
       id="inpbox"
       />
       <button onClick={props.funct} id="inpbtn" >Share</button>
    </div>
       
    );
}

export default input;