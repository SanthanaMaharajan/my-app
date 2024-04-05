import React from 'react';

class LifecycleB extends React.Component{
    constructor(props){
        super(props)
            this.state={
                count:0
            }
            console.log("LifeCycleB Constructor");
    }

    static getDerivedStateFromProps(state,props){
        console.log("LifecycleB getderived state from props method")
        return(null)
    }
    componentDidMount(){
        console.log("LifecycleB Componentdidmount method");
    }

    render(){
        console.log("LifecycleB Render Method");
        return(
            <div>
                <h1>Life Cycle</h1>
            </div>
        )
    }
}
export default LifecycleB;