import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.js';
import Sdata from './Sdata.jsx';

function ncard(val){
    return(
    <App 
    imgsrc={val.imgsrc}
    info={val.info}
    sname={val.sname}
    link={val.link} 
    />
    );
}

ReactDOM.render(
    <>
    {Sdata.map(ncard)}
    </> ,
    document.getElementById("root")
);
