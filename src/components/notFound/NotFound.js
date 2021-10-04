import React from 'react';
import img from '../../404-img.svg';
const NotFound = () => {
    return (
        <div className="d-flex justify-content-center align-items-center" style={{ height: '100vh' }}>
            <img src={img} alt="" />
        </div>
    );
};

export default NotFound;