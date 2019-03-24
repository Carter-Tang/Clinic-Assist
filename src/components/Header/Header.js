import React from "react";
import {Link} from "react";

export const Header = (props) => {
    return (
        <nav className="navbar navbar-default">
            <div className="container">
                <div className="navbar-header">
                    <ul className="nav navbar-nav">
                        <li><Link to={"../Home/Homescreen"}>Home</Link></li>
                        <li><Link to={"../PatientsList/PatientsList"}>Patients List</Link></li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};
