import React from 'react'
import { Link } from "react-router-dom";
import russell from "../../assets/images/RussellS-150x150.jpg";
import Russell from './RussellTableData';

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
                    <Russell />
                </tbody>
            </table>
        </div>
    )
}

export default RussellTable