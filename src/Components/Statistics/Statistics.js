import React from 'react';
import { useLoaderData } from 'react-router-dom';
import { BarChart, Bar, XAxis, YAxis, Tooltip } from 'recharts';

const Statistics = () => {
    const topics = useLoaderData();
    return (
        <div className='container'>
            <h1 className='text-center my-3 mb-5'>Statistics</h1>
            <BarChart width={400} height={300} data={topics.data} className='m-auto'>
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Bar dataKey="total" fill="#8884d8" />
            </BarChart>
        </div>
    );
};

export default Statistics;