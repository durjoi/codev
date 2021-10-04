import React, { useEffect, useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import CourseItem from '../courseItem/CourseItem';
import './CourseSection.css';

const CourseSection = () => {

    const [courses, setCourses] = useState([]);

    useEffect(() => {
        fetch('./courses.json')
        .then(response => response.json())
        .then(data => setCourses(data));
    },[]);


    return (
        <section className="p-5">
            <Container >
                <Row>
                {
                    courses.slice(0, 6).map(item => <CourseItem key={item.id} course={item}></CourseItem>)
                }
                </Row>
            </Container>
            
        </section>
    );
};

export default CourseSection;