import React from 'react'
import { Link } from "react-router-dom";
import $ from "jquery";

import Student from '../../data/components/Student';
import { carpenterStudents } from '../../data/about/students/data';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';

import carpenter from "../../assets/images/CarpenterS-150x150.jpg";

const CarpenterTable = () => {
    $(document).ready(function () {
        if ($(".teacher").hover() === true) {
            $(".teacher__notification").css({ opacity: "0", transform: "translateY(50px)" });
        } else {
            setTimeout(function () {
                $(".teacher__notification").css({ opacity: "1", transform: "translateY(0)" });
                setTimeout(function () {
                    $(".teacher__notification").css({ transform: "translateY(-10px)" });
                    $(".notification__arrow").css({ opacity: "1" });
                }, 500);
            }, 2000);
        }
    })
    return (
        <div className="carpenter instance">
            <div className="teacher__notification"><p className='notification__p'>Click Here</p><ArrowDropDownIcon className='notification__arrow' /></div>
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
                    {carpenterStudents.map((data, key) => {
                        return (
                            <Student key={key} firstName={data.firstName} lastName={data.lastName} age={data.age} grade={data.grade} />
                        );
                    })}
                </tbody>
            </table>
        </div>
    )
}

export default CarpenterTable