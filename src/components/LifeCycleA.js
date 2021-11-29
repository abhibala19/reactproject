import React, { Component } from 'react'
import LifeCycleB from './LifeCycleB'

class LifeCycle extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             name:"abhinaya"
        }
        console.log("lifecycleA constr")
    }
    static getDerivedStateFromProps(props,state){
        console.log("lifecycleA getDerivedStateFromprops")
        return null;
    }
    componentDidMount(){
        console.log("lifeCycleA componentDid");
        
    }
    shouldComponentUpdate(){
        console.log("LifecylceA update")
        return true;
    }
    getSnapshotBeforeUpdate(prevProps,prevState){
        console.log("lifecycleA snapshot")
        return null;
    }
    componentDidUpdate(){
        console.log("lifecycleA did update")
    }
    changeState=() => {
        this.setState({
            name:"cosdd"
        })
    }

    
    render() {
        console.log("lifeCycleA render");

        return (
        <div>
            <div>LifeCycleA </div>
            <button onCange={this.changeState}>ChangeState</button>
            <LifeCycleB/>
            </div>
        )
    }
}

export default LifeCycle
