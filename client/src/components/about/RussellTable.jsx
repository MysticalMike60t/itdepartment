import React from 'react'
import { Link } from "react-router-dom";
import $ from 'jquery';

import Student from '../../data/components/Student';
import { russellStudents } from '../../data/about/students/data';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';

import russell from "../../assets/images/RussellS-150x150.jpg";

const RussellTable = () => {
    $(document).ready(function(){
        setTimeout(function(){
            $(".teacher__notification").css({opacity:"1",transform: "translateY(0)"});
            setTimeout(function(){
                $(".teacher__notification").css({transform: "translateY(-10px)"});
                $(".notification__arrow").css({opacity: "1"});
            }, 500);
        }, 2000);
    })
    return (
        <div className="russell instance">
            <div className="teacher__notification"><p className='notification__p'>Click Here</p><ArrowDropDownIcon className='notification__arrow'/></div>
            <Link className="teacher" to="/info/russell/teacher">
                <div className="hover">
                    Steve Russell
                </div>
                <img src={russell} alt="" loading="lazy"/>
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