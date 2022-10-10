import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Topic from '../Topic/Topic';

const Topics = () => {
    const topics = useLoaderData();
    return (
        <div className='container'>
            <div className='row mt-3 row-cols-1 row-cols-md-2 row-cols-lg-4 g-3 mb-5'>
                {topics.data.map((t) => <Topic topic={t}></Topic>)}
            </div>
        </div>
    );
};

export default Topics;