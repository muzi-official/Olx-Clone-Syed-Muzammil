import React from 'react';
import { NavLink } from "react-router-dom";

const Navbar = () => {
    return (
        <>
            <nav className="navbar navbar-expand-lg  navbar-light">
                <NavLink className="navbar-brand" to="/">  ALL CATEGORIES <i className="fas fa-check"></i></NavLink>
                <ul class="nav">
                    <li className="nav-item"><NavLink activeClassName="menu_active" className="nav-link " to="/Mobilephone">Mobile And Phones</NavLink>
                    </li>
                    <li className="nav-item"><NavLink activeClassName="menu_active" className="nav-link" to="/Cars">Cars</NavLink>
                    </li>
                    <li className="nav-item"><NavLink activeClassName="menu_active" className="nav-link" to="/Motorcycle">Motorcycles</NavLink>
                    </li>
                    <li className="nav-item"><NavLink activeClassName="menu_active" className="nav-link" to="/Houses">Houses</NavLink>
                    </li>
                    <li className="nav-item"><NavLink activeClassName="menu_active" className="nav-link" to="/Tvvideoaudio">TV-Video-Audio</NavLink>
                    </li>
                    <li className="nav-item"><NavLink activeClassName="menu_active" className="nav-link" to="/LandPlots">Land & Plots</NavLink>
                    </li>
                </ul>
            </nav>

























        </>
    );
};

export default Navbar;