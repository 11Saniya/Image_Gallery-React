import React, { useEffect, useState } from "react";
import './Imagegallery.css';


function Header() {
    const [initialval, updatedval] = useState(0);

    useEffect(() => {
        // document.write("useEffect");
        // console.log("useEffect does't known where to print and can be also written without usestate");
        if (initialval === 0) {
            document.title = `title`
        } else {
            document.title = `message ${initialval}`
        }
    });
    function Num() {
        // console.log(useState(100));
        updatedval(initialval + 1);
    }
    return (
        <>
            <center id='stateExample'>
                <h1>{initialval}</h1>
                <button onClick={Num}> Increment </button>
            </center>
        </>
    );

}
export default Header;