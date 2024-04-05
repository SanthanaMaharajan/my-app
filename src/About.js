import React from 'react';

class About extends React.Component{
    render(){
        const {user}=this.props;
        const storeData=user.map((e,index)=>{
            return(
                <tr key={index}>
                    <td>{index+1}</td>
                    <td>{e.name}</td>
                    <td>{e.age}</td>
                </tr>
            )
        })
        return(
            <div>
                <h1>Class Component</h1>
                <table>
                    <thead>
                        <th>Id</th>
                        <th>Name</th>
                        <th>Age</th>
                    </thead>
                    <tbody>
                        {storeData}
                    </tbody>
                </table>
            </div>
        )
    }
}

export default About;