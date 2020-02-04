   import React from "react"
   import Person from "./Person"


   function PeopleData(props) {
        const mappedNames = props.people.map((person, i) => <Person key={i + person.firstName} firstName={person.firstName} lastName={person.lastName}/>)
            
    return (
        <ol>
         {mappedNames}
        </ol>
    )
   }
   
   export default PeopleData


     