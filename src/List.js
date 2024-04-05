
const List=(props)=>{

    const {user}=props
    
    const store=user.map((e,index)=>{
        return(
            <div key={index}>
                <li><strong>Id:</strong>{index+1}, <strong>Name:</strong> {e.name}, <strong>Age:</strong>{e.age} </li>
            </div>
        )
    })

    return(
        <ul className="list">
            {store}
        </ul>
    )
}

export default List;