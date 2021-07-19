import React from 'react';

const menu = (props) =>{
    return(<div>
        <h3>
            <a onClick = {props.src}> 
                {props.children}
            </a>
        </h3>
    </div>
       
    );
}

export default menu;