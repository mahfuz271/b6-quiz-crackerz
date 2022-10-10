import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Statistics = () => {
    const topics = useLoaderData();
    return (
        <div className='container'>
            <h1 className='text-center my-3 mb-5'>Statistics</h1>
            
        </div>
    );
};

export default Statistics;