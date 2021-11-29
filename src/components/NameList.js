import React from 'react'
import Person from './Person'

function NameList() {
    // const names=["abhi","abirami","sandhiya"]
    // const nameList=names.map(name => <h2>{name}</h2>)
    // return (
    //     <div>
    //         {/* <h2>{names[0]}</h2>
    //         <h2>{names[1]}</h2>
    //         <h2>{names[2]}</h2> */}

    //         {
    //             // names.map(name => <h2>{name}</h2>)
    //             nameList
    //         }
    //     </div>
    // )



// const names=[
//     {
//         id:1,
//         name:"abhi",
//         age:26,
//         skill:"java"

//     },
//     {
//         id:2,
//         name:"abirami",
//         age:23,
//         skill:"modeling"

//     },{
//         id:3,
//         name:"sandhiya",
//         age:22,
//         skill:"java react"

//     }];
//     const personList=names.map(person => <Person key={person.id} person={person}/>)
//     return (
//         <div>
//            {personList}
// {
//         //    names.map(person => (<h2>i am {person.name}.I am {person.age}.I am {person.skill}</h2>))

// }    
//         </div>
//     )







const names=["abhinaya","abirami","sandhiya","abhinaya"]
const nameList=names.map((name,index) => <h2 key={index}> {index}{name}</h2>)
return (
    <div>
        {
            nameList
        }

    </div>
)

}

export default NameList
