import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './TopBanner.css';

const TopBanner = () => {
    return (
        <section className="top_banner">
            <Container className="h-100">
                <Row md='12' className="h-100">
                    <Col className="text-center d-flex align-items-center justify-content-start">
                        <div className="top_banner_content">
                            <h1>Welcome to <span>Codev.</span></h1>
                            {/* <p>Learn coding with interactive tutorial</p> */}
                            <Link to="/course">
                            <button>
                                View our Courses
                            </button>
                            </Link>
                            
                        </div>
                        
                    </Col>
                </Row>
            </Container>
        </section>
    );
};

export default TopBanner;