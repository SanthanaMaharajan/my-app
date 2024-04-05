import React, { useState } from 'react';

function ChangeForm(){

    const [change,setchange]=useState(" ")
    const [submit,setsubmit]=useState("")

    const handleInput=(event)=>{
        setchange(event.target.value);
    }
    const handleSubmit=()=>{
        setsubmit(change)
    }

    return(
        <div>
            <p>{change}</p>
            <p>{submit}</p>
            <input onChange={handleInput} type='text' placeholder='Enter your Name'/>
            <button onClick={handleSubmit}>Click Me</button>
        </div>
    )
}

export default ChangeForm;