const Table=((props)=>{
    const {user}=props;
    const store=user.map((ele,index)=>{
      return(
        <tr key={index}>
            <td>{index+1}</td>
            <td>{ele.name}</td>
            <td>{ele.age}</td>
        </tr>        
      )
    })
    return(
        <div>
            <h1>Functional Component</h1>
          <table>
            <thead>
              <th>Id</th>
              <th>Name</th>
              <th>Age</th>
            </thead>
            <tbody>
              {store}
            </tbody>
          </table>
        </div>
    )
})

export default Table;