import React from 'react'
import { Link } from "react-router-dom";

import Student from '../../data/components/Student';
import { carpenterStudents } from '../../data/about/students/data';

import carpenter from "../../assets/images/CarpenterS-150x150.jpg";

const CarpenterTable = () => {
    return (
        <div className="carpenter inst">
            <Link className="teacher" to="/info/carpenter/teacher">
                <div className="hover">
                    Mr. Carpenter
                </div>
                <img src={carpenter} alt="" />
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
                {carpenterStudents.map((data, key)=>{
                    return(
                        <Student key={key} firstName={data.firstName} lastName={data.lastName} age={data.age} grade={data.grade}/>
                    );
                })}
                </tbody>
            </table>
        </div>
    )
}

export default CarpenterTable