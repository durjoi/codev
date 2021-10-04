import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link, NavLink } from 'react-router-dom';
import './Header.css';

const Header = () => {
    return (
        <header>
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                <Container>
                <Navbar.Brand>
                    <NavLink to="/home">{'{'}Codev{'}'}</NavLink>    
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                        <NavLink to="/home">Home</NavLink>
                        <NavLink to="/course">Course</NavLink>
                        <NavLink to="/about">About Us</NavLink>
                    </Nav>
                </Navbar.Collapse>
                </Container>
            </Navbar>
        </header>
    );
};

export default Header;