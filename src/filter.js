import React, { useState } from 'react';
import { data } from './data';
import Table from 'react-bootstrap/Table';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';

function Filter(){

 const [search,setsearch]=useState("")
    return(
        <div>
            <h1>Search Filter</h1>
            <Form className='w-50'
                onChange={(e)=>{
                    setsearch(e.target.value)
                }}
            >
                <InputGroup className="mx-3 w-100 m-auto">
                    <Form.Control
                        placeholder="Search"
                    />
                </InputGroup>
            </Form>
            

            <Table striped bordered hover className='w-75'>
                <thead>
                    <tr >
                        <th>Id</th>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Email</th>
                        <th>Gender</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        data.filter((item)=>{
                           return search.toLowerCase()===""?item:item.first_name.toLowerCase().includes(search)
                        }).map((item)=>{
                           return(
                            <tr key={item.id}>
                                <td>{item.id}</td>
                                <td>{item.first_name}</td>
                                <td>{item.last_name}</td>
                                <td>{item.email}</td>
                                <td>{item.gender}</td>
                            </tr>
                           ) 
                        })
                    }                    
                </tbody>
            </Table>
        </div>
    )
}

export default Filter;