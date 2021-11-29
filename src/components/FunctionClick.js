import React from 'react'

function FunctionClick() {
    function clickHandler() {
        console.log("buttons clicked")
    }
    return (
        <div>
            <button onclick={clickHandler}>click</button>
        </div>
    )
}

export default FunctionClick
