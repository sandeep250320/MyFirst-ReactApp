import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.js';

ReactDOM.render(
    <>

<div className="parent">
    <App   imgsrc="./mg.jpg"
        info="South Indian Movie in Hindi"
        sname="Maghadheera"
        link="https://www.youtube.com/watch?v=js4HJnv4Zu4" 
    />
    <App   imgsrc="./phantom.jpg"
        info="Bollywood movies"
        sname="Phantom"
        link="https://www.youtube.com/watch?v=U7vBj2AGG3c" 
    />
    <App   imgsrc="./mg.jpg"
        info="South Indian Movie in Hindi"
        sname="Maghadheera"
        link="https://www.youtube.com/watch?v=js4HJnv4Zu4" 
    />
    </div>
    <div className="parent">
    <App   imgsrc="./mg.jpg"
        info="South Indian Movie in Hindi"
        sname="Maghadheera"
        link="https://www.youtube.com/watch?v=js4HJnv4Zu4" 
    />
    <App   imgsrc="./phantom.jpg"
        info="Bollywood movies"
        sname="Phantom"
        link="https://www.youtube.com/watch?v=U7vBj2AGG3c" 
    />
    <App   imgsrc="./mg.jpg"
        info="South Indian Movie in Hindi"
        sname="Maghadheera"
        link="https://www.youtube.com/watch?v=js4HJnv4Zu4" 
    />
    </div>
    
    </> ,
    document.getElementById("root")
);
