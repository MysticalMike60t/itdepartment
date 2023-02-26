import React from 'react'
import Student from '../../data/components/Student';
import students from "./data/cStudents";

const Carpenter = () => {
  return (
    <>
      {students.map((data, key)=>{
            return(
              <Student key={key} firstName={data.fName} lastName={data.lName} age={data.age} grade={data.grade}/>
            );
        })}
    </>
  )
}

export default Carpenter