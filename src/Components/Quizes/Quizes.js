import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Quiz from '../Quiz/Quiz';

const Quizes = () => {
    const quizes = useLoaderData();
    return (
        <div className='container'>
            <h1 className='text-center my-3'>Quiz of {quizes.data.name}</h1>
            <div className='row mt-3 row-cols-1 g-3 mb-5'>
                {quizes.data.questions.map((q) => <Quiz key={q.id} quiz={q}></Quiz>)}
            </div>
        </div>
    );
};

export default Quizes;