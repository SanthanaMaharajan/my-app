import React from "react";

class ObjDestructure extends React.Component{
    constructor(){
        super()
        this.state={
          employees:[
              {
                name:"Alex",
                skills:[
                  {name:"ReactJS", type:"Frontend"},
                  {name:"nodeJS", type:"Backend"}
                ]
              
                },
              {name:"Anna",
              skills:[
                  {name:"Angular", type:"Frontend"},
                  {name:"Python", type:"Backend"}
                ]
              }                
          ]
        }
    }

    render(){
      const store=this.state.employees.map((e,index)=>{
        return(
          <tr key={index}>
            <td>{e.name}</td>
            <td>{e.skills.map((ele,index)=>{
              return(
                <ul key={index}>
                  <li>Skill Name: {ele.name} | Skill Type: {ele.type}</li>
                </ul>
              )
            })}</td>
          </tr>
        )
      })
        return(
            <table>
              <thead>
                <th>Employee Name</th>
                <th>Skills</th>
              </thead>
              <tbody>
                  {store}
              </tbody>
            </table>
        )
    }
}

export default ObjDestructure;