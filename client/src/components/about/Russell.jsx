import React from 'react'
import Student from '../../data/components/Student';
import students from "./data/rStudents";

const Russell = () => {
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

export default Russell