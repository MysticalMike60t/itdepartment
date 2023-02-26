import React from 'react'
import Student from '../../data/components/Student';
import { russellStudents } from '../../data/about/students/data';

const Russell = () => {
  return (
    <>
        {russellStudents.map((data, key)=>{
            return(
              <Student key={key} firstName={data.firstName} lastName={data.lastName} age={data.age} grade={data.grade}/>
            );
        })}
    </>
  )
}

export default Russell