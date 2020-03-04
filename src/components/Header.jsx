import React, { useState } from 'react';
import logo from '../assets/img/logo.svg'
import { Navbar, Nav } from 'react-bootstrap';
import {
    Link, NavLink
} from "react-router-dom";
const Sidebar = ({ routes, user, isLogedin, login, logout }) => {
    return (
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Navbar.Brand href="/">
                <img
                    alt=""
                    src={logo}
                    width="30"
                    height="30"
                    className="d-inline-block align-top"
                />{' '}
                <strong>NEWS - Sevima Academy</strong>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="mr-auto">
                    {routes.map((route, i) => (
                        <div>
                            {
                                isLogedin ? (
                                    route.menu.afterlogin ?
                                        <NavLink key={i} to={route.path} className="nav-link" > {route.name}</NavLink>
                                        : '')
                                    :
                                    route.menu.beforelogin ?
                                        <NavLink key={i} to={route.path} className="nav-link" > {route.name}</NavLink>
                                        : ''
                            }
                        </div>
                    ))}
                    {isLogedin ? <Nav.Link className="nav-link" onClick={() => window.confirm("Apakah anda yakin akan logout") ? logout() : ''}>Logout</Nav.Link> : ''}
                </Nav>
                {
                    localStorage.getItem('username')
                        ?
                        <Nav>
                            <Nav.Link>
                                <strong>Hai {localStorage.getItem('username')}</strong>
                            </Nav.Link>
                        </Nav>
                        :
                        ''
                }
            </Navbar.Collapse>
        </Navbar >
    );
}

export default Sidebar;