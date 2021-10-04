import React from 'react';
import CourseSection from '../courseSection/CourseSection';
import TopBanner from '../topBanner/TopBanner';
import './Home.css';

const Home = () => {
    return (
        <main>
            <TopBanner></TopBanner>
            <CourseSection></CourseSection>
        </main>
    );
};

export default Home;