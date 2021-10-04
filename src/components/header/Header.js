import React from 'react';
import { Col, Container, Nav, Navbar, Row } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import './Header.css';

const Header = () => {
    return (
        <header>
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                <Container className="w-100 bg-dark d-block">
                    <Row md={12}>
                        <Col md={3}>
                            <Navbar.Brand>
                                <NavLink to="/" className="logo">{'{'}Codev.{'}'}</NavLink>    
                            </Navbar.Brand>
                        </Col>
                        <Col md={9}>
                            <Navbar.Toggle aria-controls="responsive-navbar-nav" className="h-100" />
                                <Navbar.Collapse id="responsive-navbar-nav" className="h-100">
                                    <Nav className="justify-content-end w-100 h-100 align-items-center">
                                        <NavLink exact to="/" activeStyle={{
                                                fontWeight: "bold",
                                                color: "skyblue"
                                            }} className="ms-5 header_link">Home</NavLink>
                                        <NavLink exact to="/course" activeStyle={{
                                                fontWeight: "bold",
                                                color: "skyblue"
                                            }} className="ms-5 header_link">Courses</NavLink>
                                        <NavLink exact to="/about" activeStyle={{
                                                fontWeight: "bold",
                                                color: "skyblue"
                                            }} className="ms-5 header_link">About Us</NavLink>
                                        <NavLink exact to="/contact" activeStyle={{
                                                fontWeight: "bold",
                                                color: "skyblue"
                                            }} className="ms-5 header_link">Contact Us</NavLink>
                                    </Nav>
                                </Navbar.Collapse>
                        </Col>
                    </Row>
                
                
                </Container>
            </Navbar>
        </header>
    );
};

export default Header;