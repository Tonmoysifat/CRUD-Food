import React from 'react';
import {NavLink} from "react-router-dom";
import Logo from "../assets/images/Logo2.png";
import buy from "../assets/images/buy.svg";
import document from "../assets/images/document.svg";

const SideNavbar = () => {

    return (
        <div>
            <nav className="navbar sideNav navbar-expand-lg bg-body-tertiary fixed-top ">
                <hr/>
                <div className="container">
                    <NavLink to="/" className="navbar-brand">
                        <img src={Logo} alt=""/>
                        <h3 className="ms-2 mt-2">CRUD Food
                        </h3>
                    </NavLink>
                    <button
                        className="navbar-toggler"
                        type="button"
                        data-bs-toggle="offcanvas"
                        data-bs-target="#offcanvasNavbar"
                        aria-controls="offcanvasNavbar"
                        aria-label="Toggle navigation"
                    >
                        <span className="navbar-toggler-icon"/>
                    </button>
                    <div
                        className="offcanvas offcanvas-end offCW"
                        tabIndex={-1}
                        id="offcanvasNavbar"
                        aria-labelledby="offcanvasNavbarLabel"
                    >
                        <div className="offcanvas-header">
                            <NavLink to="/" className="navbar-brand">
                                <img src={Logo} alt=""/>
                                <h3 className="ms-2 mt-2">CRUD Food</h3>
                            </NavLink>
                            <button
                                type="button"
                                className="btn-close"
                                data-bs-dismiss="offcanvas"
                                aria-label="Close"
                            />
                        </div>
                        <div className="offcanvas-body">

                            <ul className="mt-5 nav flex-column">
                                <p>MENU</p>
                                <li className="nav-item mb-3">
                                    <NavLink className={({isActive}) =>
                                        (isActive ? "nav-link isActive" : "nav-link")}
                                             to="/">
                                        <img className="me-2" src={buy} alt=""/>
                                        Create Food
                                    </NavLink>

                                </li>

                                <li className="nav-item mb-3">
                                    <NavLink className={({isActive}) =>
                                        (isActive ? "nav-link isActive" : "nav-link")}
                                             to="/allFood">
                                        <img className="me-2" src={document} alt=""/>
                                        All Food
                                    </NavLink>

                                </li>

                            </ul>

                        </div>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default SideNavbar;