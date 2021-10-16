import React from 'react';
import  ReactDOM  from 'react-dom';
import style from './App.css';

function App(props){

    return(
    <div className="parent">
        <div className="child">
            <img src={props.imgsrc} alt="img"/>
            
            </div>
            <div className="internal">
               <span className="info"> {props.info}</span>
                <h2 className="sname">{props.sname}</h2>
                <a href={props.link} target="_blank">
                <button>Watch now</button></a>
            </div>
        
    </div>
    );
}

export default App;