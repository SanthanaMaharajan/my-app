import React from 'react';

class Mounting extends React.Component{
    constructor(props){
        super(props)
            this.state={
                favoriteFood:"Biriyani"
            }
    }

    static getDerivedStateFromProps(state,props){
        return(null)
    }
    componentDidMount(){
        setTimeout(()=>this.setState({favoriteFood:"Pizza"}),5000)
    }

    render(){
        return(
            <div>
                <h1>My favorite food is {this.state.favoriteFood}</h1>
            </div>
        )
    }
}
export default Mounting;