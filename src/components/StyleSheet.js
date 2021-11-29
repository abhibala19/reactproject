import React from 'react'
import './myStyle.css'
function StyleSheet(props) {
    const className=props.primary?"primary":""
    return (
        <div>
            <h1 class={`${className} font-xl`} >  StyleSheets</h1>
        </div>
    )
}

export default StyleSheet
