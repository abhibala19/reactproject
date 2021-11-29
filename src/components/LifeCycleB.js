import React, { Component } from 'react'

class LifeCycleB extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             name:"abhinaya"
        }
        console.log("lifecycleB constr")
    }
    static getDerivedStateFromProps(props,state){
        console.log("lifecycleB getDerivedStateFromprops")
        return null;
    }
    componentDidMount(){
        console.log("lifeCycleB componentDid");
        
    }
    shouldComponentUpdate(){
        console.log("LifecylceB update")
        return true;
    }
    getSnapshotBeforeUpdate(prevProps,prevState){
        console.log("lifecycleB snapshot")
        return null;
    }
    componentDidUpdate(){
        console.log("lifecycleB did update")
    }
    
    render() {
        console.log("lifeCycleB render");

        return (
            <div>LifeCycleB </div>
        )
    }
}

export default LifeCycleB
