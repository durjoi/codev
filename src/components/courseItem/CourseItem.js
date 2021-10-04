import React from 'react';
import { Card, Col } from 'react-bootstrap';

const CourseItem = (props) => {
    const {title, img, lessons, price} = props.course;

    return (
        <Col md={4}>
            <Card className="mb-3" style={{ height: '400px', textAlign: 'center' }}>
            <Card.Img variant="top" src={img} style={{height: '250px'}}/>
            <Card.Body>
                <Card.Title>{title}</Card.Title>
                <small>{lessons}</small>
                <p>BDT <strong style={{ fontSize: '30px' }}>{price}</strong></p>
            </Card.Body>
            </Card>
        </Col>
    );
};

export default CourseItem;