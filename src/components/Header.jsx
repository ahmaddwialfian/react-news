import React,{useState} from 'react';
import logo from '../assets/img/logo.svg'
import { Navbar, Nav } from 'react-bootstrap';
import {
    Link, NavLink
} from "react-router-dom";
const Sidebar = ({ routes, isLogedin, login, logout }) => {
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
                <strong>NEWS - Sevima Academy</strong>
            </Navbar.Brand>
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
                {isLogedin?<Nav.Link className="nav-link" onClick={logout}>Logout</Nav.Link>:''}
            </Nav>
        </Navbar >
    );
}

export default Sidebar;