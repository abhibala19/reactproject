import React, { PureComponent } from 'react'

 class PureComponents extends PureComponent {
    render() {
    console.log("pure comp render")

        return (
            <div>
                pure component{this.props.name}
                
            </div>
        )
    }
}

export default PureComponents
