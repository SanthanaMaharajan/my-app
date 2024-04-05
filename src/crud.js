
import { Button } from 'react-bootstrap';
import React, { useState } from 'react';




function Crud(){

    const list=[
        {
            id:1,
            name:"Anna",
            profession:"Designer"
        },
        {
            id:2,
            name:"Alex",
            profession:"Tester"
        },
        {
            id:3,
            name:"Arun",
            profession:"Developer"
        }
    ]
    const [lists,setlist]=useState(list)
    const [editId,setEditId]=useState(null)
    

    const store=lists.map((ele,index)=>{
        ele.id=index+1
       return(
        <tr key={index}>
            <td>{index+1}</td>
            <td>
                {
                    editId === ele.id ? (<input defaultValue={ele.name} onChange={(e) => ele.name = e.target.value} />) : (ele.name)
                }
            </td>
            <td>
                {
                    editId === ele.id ? (<input defaultValue={ele.profession} onChange={(e) => ele.profession = e.target.value} />) : (ele.profession)
                }
            </td>
            <td>
                {
                    editId === ele.id ? (<Button variant="success" onClick={() => handleSave()}>Save</Button>) : (<Button variant="success" onClick={() => handleEdit(ele.id)}>Edit</Button>)
                }
                &nbsp;
                <Button variant="danger" onClick={()=>handleDelete(ele.id)}>Delete</Button>
            </td>
        </tr>
       )
    })
    

    function handleDelete(id){
        const newList=lists.filter((li)=>li.id!== id)
        setlist(newList)
    }


    function handleEdit(id){
        setEditId(id)
    }

    function handleSave(){
        setEditId(null)
    }


    function handleSubmit(e){
        e.preventDefault();
        const name=e.target.elements.name.value;
        const profession=e.target.elements.profession.value;
        const newlist={
            name,
            profession
        }
        setlist((prevlist)=>{
           return prevlist.concat(newlist)
        })
        e.target.elements.name.value="";
        e.target.elements.profession.value="";
    }


    return(
        <div>
            <form onSubmit={handleSubmit}>
                <input type='text' placeholder='Name' name='name' required/>
                <input type='text' placeholder='Profession' name='profession' required/>
                <Button type='submit'>Add List</Button>
            </form>
            <table>
                <thead>
                    <th>Id</th>
                    <th>Name</th>
                    <th>Profession</th>
                    <th>Update</th>
                </thead>
                <tbody>
                    {store}
                </tbody>
            </table>
        </div>
    )
}

export default Crud;