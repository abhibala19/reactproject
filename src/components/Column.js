import React, { Fragment } from 'react'

function Column() {
    const items=[]
    return (

<React.Fragment>{
    items.map(item => (

<React.Fragment key={items.id}>
<h1>Title</h1>
<p>{items.title}</p>
</React.Fragment>
    ))
         }     <td>name</td>   
         <td>abhinaya</td>
         </React.Fragment>
    )
}

export default Column