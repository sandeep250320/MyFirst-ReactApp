import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.js';

ReactDOM.render(
    <>

<center><h1><code><u>Some Web development courses on youtube</u></code></h1></center>
<div className="parent">
    <App   imgsrc="./htmlcss.png"
        info="Learn HTML & CSS in Hindi - Thapa Technical"
        sname="HTML & CSS "
        link="https://www.youtube.com/watch?v=5p8e2ZkbOFU" 
    />
    <App   imgsrc="./javascript_logo.png"
        info="Learn JavaScript in Hindi - Thapa Technical"
        sname="JavaScript in Hindi"
        link="https://www.youtube.com/watch?v=KGkiIBTq0y0&t=2604s" 
    />
    <App   imgsrc="./logo512.png"
        info="Learn Reactjs in Hindi - Thapa Technical"
        sname="React-JS in Hindi"
        link="https://www.youtube.com/watch?v=tiLWCNFzThE&list=PLwGdqUZWnOp3aROg4wypcRhZqJG3ajZWJ" 
    />
    </div>

<center><h1><code><u>Some Famous movies</u></code></h1></center>
<div className="parent">
    <App   imgsrc="./mg.jpg"
        info="South Indian Movie in Hindi"
        sname="Magadheera"
        link="https://www.youtube.com/watch?v=js4HJnv4Zu4" 
    />
    <App   imgsrc="./phantom.jpg"
        info="Bollywood movies"
        sname="Phantom"
        link="https://www.youtube.com/watch?v=U7vBj2AGG3c" 
    />
    <App   imgsrc="./baahubali.jpg"
        info="South Indian Movie in Hindi"
        sname="Baahubali"
        link="https://www.youtube.com/watch?v=KcxaB3FwGqY" 
    />
    </div>
    <div className="parent">
    <App   imgsrc="./baahubali2.jpg"
        info="South Indian Movie in Hindi"
        sname="Baahubali 2"
        link="https://www.youtube.com/watch?v=-CSxe5srf20" 
    />
    <App   imgsrc="./wantedbhai.jpg"
        info="Mahesh babu movies"
        sname="Wanted Bhai"
        link="https://www.youtube.com/watch?v=MSvLchT6Gqg" 
    />
    <App   imgsrc="./fighterking.jpg"
        info="Hollywood Movie in Hindi"
        sname="Fighter king"
        link="https://www.youtube.com/watch?v=4BOiAeRECyk" 
    />
    </div>
    
    </> ,
    document.getElementById("root")
);
