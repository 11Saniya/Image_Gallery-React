import React, { useState } from "react";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

function ShowDate() {
    const date = new Date().toLocaleDateString();
    let time = new Date().toLocaleTimeString();

    const[currenttime, setTime] = useState(time);

    const RefreshTime = () => {
        time = new Date().toLocaleTimeString();
        setTime(time);
    }
    setInterval(RefreshTime, 1000);
    return (

        <>
            <center class="mt-5" >
            <div class="p-3 mb-2 bg-primary text-white">
                <h1>{date}</h1>
                <h1>{time}</h1>
                </div>
            </center>
            
        </>
    );
}
export default ShowDate;