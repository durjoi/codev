import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import './About.css';
import img from '../../banner.png';

const About = () => {
    return (
        <section className="about">
            <div className="section_header d-flex justify-content-center align-items-center mb-5">
                <h2 className="">About us</h2>
            </div>
            <div>
                <Container>
                    <Row>
                        <Col className="d-flex align-items-center">
                        <p>
                My name is Mehedi Hassan Durjoi and I’m the founder of Codev. In 2021, I published my first online course. 
                My goal was to make complex DevOps technologies simple and easy to understand. In July 2021, 
                I launched Codev with the goal of providing an immersive learning experience to students all over the world.
                </p>
                        </Col>
                        <Col>
                            <img src={img} alt="" />
                        </Col>
                    </Row>
                </Container>
                
            </div>
        </section>
    );
};

export default About;