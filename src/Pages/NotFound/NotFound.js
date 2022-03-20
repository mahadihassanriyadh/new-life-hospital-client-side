import React from 'react';
import Navbar from '../Shared/Navbar/Navbar';

const NotFound = () => {
    return (
        <div>
            <Navbar></Navbar>
            <h1 className="text-5xl font-bold text-rose-500 py-16">Not Found! 404</h1>
        </div>
    );
};

export default NotFound;