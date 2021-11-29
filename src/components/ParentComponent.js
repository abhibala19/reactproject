import React, { Component } from 'react'
import ChildComponent from './ChildComponent'
class ParentComponent extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             parentName:"parent"
        }
        this.greetParent=this.greetParent.bind(this);
    }
    greetParent(childName){
        alert(`hello ${this.state.parentName} from ${childName}`)
        // alert('hello'+this.state.parentName)
    }
    
    render() {
        return (
            <div>
                {/* calling parent method from child */}
                {/* <ChildComponent greetHandler={this.greetParent}/> */}
                <ChildComponent greetHandler={this.greetParent}/>
                
            </div>
        )
    }
}

export default ParentComponent

