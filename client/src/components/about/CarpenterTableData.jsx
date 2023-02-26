import React from 'react'
import Student from '../../data/components/Student';
import { carpenterStudents } from '../../data/about/students/data';

const Carpenter = () => {
  return (
    <>
      {carpenterStudents.map((data, key)=>{
            return(
              <Student key={key} firstName={data.firstName} lastName={data.lastName} age={data.age} grade={data.grade}/>
            );
        })}
    </>
  )
}

export default Carpenter