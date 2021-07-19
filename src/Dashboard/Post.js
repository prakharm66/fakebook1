import React from 'react';

const post = (props) =>{
    return(
    <div className="post">
       <h2> {props.user}</h2>
       <div className="buttons">
       <div className="btn">Edit</div>
       <div className="btn">Delete</div>
       </div>
       <p> {props.children}</p>
       <div>
       <div id="like"></div>  
       <div id="dislike"></div>
       </div>
      
    </div>
       
    );
}

export default post;