import React from 'react';
import  './App.css';

function App(props){

    return(
    
<div className="child">
<img src={props.imgsrc} alt="img"/>
    
    
    <div className="internal">
        <span className="info"> {props.info}</span>
        <h2 className="sname">{props.sname}</h2>
        <a href={props.link} target="_blank" rel="noreferrer" title="Watch  Video">
        <button>Watch now</button></a>
    </div>

</div>
    );
}

export default App;