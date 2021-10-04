import React from 'react';
import { Button, Col, Container, Form, Row } from 'react-bootstrap';
import './Contact.css';

const Contact = () => {
    return (
        <section className="contact">
            <div className="section_header d-flex justify-content-center align-items-center mb-5">
                <h2 className="">Contact us</h2>
            </div>
            <div>
                <Container>
                    <Row>
                        <Col className="text-left">
                        <Form>
                            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                <Form.Label>Your Name</Form.Label>
                                <Form.Control type="text"  />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                <Form.Label>Your Email</Form.Label>
                                <Form.Control type="email"  />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                                <Form.Label>Message</Form.Label>
                                <Form.Control as="textarea" rows={3} />
                            </Form.Group>
                            <Button variant="primary" type="submit">
    Send
  </Button>
                            </Form>
                        </Col>
                    </Row>
                </Container>
                
            </div>
        </section>
    );
};

export default Contact;