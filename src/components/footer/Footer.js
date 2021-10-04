import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import './Footer.css'

const Footer = () => {
    return (
        <footer>
                <Container className="bg-dark" fluid>
                    <Row md='12'>
                        <Col>
                            <h5 className="text-white">Copyright @ 2021 - Codev</h5>
                        </Col>
                    </Row>
                </Container>
        </footer>
    );
};

export default Footer;