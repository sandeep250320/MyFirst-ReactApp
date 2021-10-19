import react ,{useState} from 'react';


function Timer(){
    let newTime = new Date().toLocaleTimeString();
    const [ctime , setTime] = useState(newTime);
    const UpdateTime = () => {
    newTime= new Date().toLocaleTimeString();
    setTime(newTime)
        };
       setInterval(UpdateTime,1000);

       return(
       <>
       
       <center><h1 >{ctime} </h1>
        </center>
        </>
        );

}

export default Timer