import React from 'react';
import logo from '../assets/img/logo.svg'
import { Navbar, Nav } from 'react-bootstrap';
import {
    Link, NavLink
} from "react-router-dom";
const Sidebar = ({ routes }) => {
    return (
        <Navbar bg="dark" variant="dark">
            <Navbar.Brand href="/">
                <img
                    alt=""
                    src={logo}
                    width="30"
                    height="30"
                    className="d-inline-block align-top"
                />{' '}
                React Bootstrap
            </Navbar.Brand>
            <Nav className="mr-auto">
                {routes.map((route, i) => (
                    <div>
                        {route.menu ?
                            <NavLink key={i} to={route.path} className="nav-link" > {route.name}</NavLink>
                            : ''}
                    </div>
                ))}
            </Nav>
        </Navbar >
    );
}

export default Sidebar;