import React from 'react';


const post = (props) =>{
    return(
    <div className="post">
       <h2> {props.user}</h2>
       <div className="buttons">
       <div className="btn" onClick={props.editfunc}>Edit</div>
       <div className="btn" onClick={props.delfunc}>Delete</div>
       </div>
       <p> {props.children}</p>
       <div>
       <div id="like" onClick={props.likefunc}>{props.like}</div>  
       <div id="dislike" onClick={props.dislikefunc}>{props.dislike}</div>
       </div>
      
    </div>
       
    );
}

export default post;