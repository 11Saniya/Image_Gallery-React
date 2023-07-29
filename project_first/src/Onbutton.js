// import React, { useEffect, useState } from "react";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

function On() {
    const [onstate, closestate] = useState("on");



    function click() {
        closestate(!onstate);
    }

    return (
        <div class="p-3 mb-2 bg-warning text-dark text-white-50 bg-dark my-5 mx-5">
            <center bg-color="lightgreen">
                <h1>{onstate ? 'on' : 'off'}</h1>
                <button type="button" class="btn btn-success" onClick={click}>Success</button>
            </center>
        </div>
    )
}

export default On;