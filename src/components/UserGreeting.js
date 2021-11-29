import React, { Component } from 'react'

class UserGreeting extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             isLockedIn:false
        }
    }
    
    render() {
        return this.state.isLockedIn && <div>welcome abhinaya</div>








        // return (
        //     this.state.isLockedIn?
        //     <div>Hello abhinaya</div>:
        //     <div>welcome guest</div>
        // )




        // let message;
        // if(this.state.isLockedIn){
        //     message= <div>Hello Abhinaya</div>;
        // }
        // else{
        //     message= <div>Welcome guest</div>
        // }
        // return <div>{message}</div>




        // if(this.state.isLockedIn){
        //     return (
        //         <div>
        //             <div>Hello Abhinaya</div>
        //         </div>
        //     )
        // }
        // else{

        //     return (
        //         <div>
        //             <div>welcome Guest</div>
        //         </div>
        //     )
        // }

        // return (
        //     <div>
        //         <div>Hello Abhinaya</div>
        //         <div>Welocome Guest</div>
        //     </div>
        // )
    }
}

export default UserGreeting
