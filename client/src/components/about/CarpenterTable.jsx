import React from 'react'
import { Link } from "react-router-dom";
import carpenter from "../../assets/images/CarpenterS-150x150.jpg";
import Carpenter from './CarpenterTableData';

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
                        <th>Grade<sup>[<Link to="/" className="i">i</Link>]</sup></th>
                    </tr>
                </thead>
                <tbody>
                    <Carpenter />
                </tbody>
            </table>
        </div>
    )
}

export default CarpenterTable