import React from 'react'
import { Link } from "react-router-dom";

import Student from '../../data/components/Student';
import { russellStudents } from '../../data/about/students/data';

import russell from "../../assets/images/RussellS-150x150.jpg";

const RussellTable = () => {
    return (
        <div className="russell inst">
            <Link className="teacher" to="/info/russell/teacher">
                <div className="hover">
                    Steve Russell
                </div>
                <img src={russell} alt="" />
            </Link>
            <h2>Students</h2>
            <table>
                <thead>
                    <tr>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Age</th>
                        <th>Grade</th>
                    </tr>
                </thead>
                
                <tbody>
                {russellStudents.map((data, key)=>{
                    return(
                        <Student key={key} firstName={data.firstName} lastName={data.lastName} age={data.age} grade={data.grade}/>
                    );
                })}
                </tbody>
            </table>
        </div>
    )
}

export default RussellTable