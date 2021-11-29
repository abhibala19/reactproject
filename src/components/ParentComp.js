import React, { Component, PureComponent } from 'react'
import RegularComp from './RegularComp'
import  PureComponents from './PureComponents'
import MemoComp from './MemoComp'

 class ParentComp extends Component {
     constructor(props) {
         super(props)
     
         this.state = {
              name:"abhinaya"
         }
     }
     componentDidMount(){
         setInterval(()=>{
             this.setState({
                 name:"abhinaya"
             })
         },2000)
     }
     
    render() {
        console.log("parent comp render")
        return (
            <div>
                parent component
                <MemoComp name={this.state.name} ></MemoComp>
                {/* <RegularComp name={this.state.name}></RegularComp>
                <PureComponents name={this.state.name}></PureComponents> */}

            </div>
        )
    }
}

export default ParentComp
