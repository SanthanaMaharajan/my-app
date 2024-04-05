import React, { useState } from "react";

const Changehook=()=>{

    const [count,setCount]=useState(0)

    const handleChange1=()=>{
        setCount(count+1)
        // setCount(ps=>ps+1)
        // setCount(ps=>ps+1)
    }
    const handleChange2=()=>{
        setCount(count<=0 ? count : count-1)
    }
    return(
        <div>
                <h1>Hooks Use state</h1>
                <p>Count value: {count}</p>
                <button onClick={handleChange1}>Increment</button>
                <button onClick={handleChange2}>Decrement</button>
        </div>
    )
}




export const Msghook=()=>{
    const [message, setmessage]=useState("Hi, SignIn to become a authorised user.")
    const signInHandle=()=>{
        setmessage("You have signedIn, You are now an authorised user.")
    }
    const signOutHandle=()=>{
        setmessage("You have signed out!..")
    }
    return(
        <div>
                <h1>Hook Task</h1>
                <p>{message}</p>
                <button onClick={signInHandle}>SignIn</button>
                <button onClick={signOutHandle}>SignOut</button>
        </div>
    )
}
export default Changehook;