import React from 'react'

function Person({person,key}) {
    return (
        <div>
            <h2>
               {key} I am person {person.name}.i am { person.age} old. i know {person.skill}

            </h2>
        </div>
    )
}

export default Person
