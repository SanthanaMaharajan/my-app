import React, { useEffect, useState } from 'react';

function Effecthook(){
    const [count,setcount]=useState(0)
    const [msg, setmsg]=useState("Welcome to React")

    useEffect(()=>{
        console.log("component update");
    },[count,msg])

    const handleUpdate=()=>{
        setcount(count+1)
    }
    return(
        <div>
            <p>Count Value : {count}</p>
            <button onClick={handleUpdate}>Update Count</button>
            <p>Message : {msg}</p>
            <button onClick={()=>setmsg("Welcome to UseEffect Hook")}>Update Message</button>
        </div>
    )
}

export default Effecthook;