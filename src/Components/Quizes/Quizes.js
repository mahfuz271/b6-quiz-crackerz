import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import Quiz from '../Quiz/Quiz';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer, toast } from 'react-toastify';

const Quizes = () => {
    const quizes = useLoaderData();
    const [TotalCorrect, setTotalCorrect] = useState({});
    const showCorrentAns = (ans) => {
        toast(ans);
    }

    const checkCorrectAns = (id, selected, correct) => {
        let txt, els = { ...TotalCorrect };
        if (selected == correct) {
            txt = 'Correct answer.';
            els[id] = true;
            setTotalCorrect(els);
        } else {
            txt = 'Wrong answer.';
            delete els[id];
            setTotalCorrect(els);
        }
        document.getElementById(id).innerHTML = txt;
        document.getElementById(id).classList.remove('d-none');
    }

    return (
        <div className='container'>
            <h1 className='text-center my-3'>Quiz of {quizes.data.name}</h1>
            <p className='alert alert-success text-center'>Correct answers: {Object.keys(TotalCorrect).length}</p>
            <div className='row mt-3 row-cols-1 g-3 mb-5'>
                {quizes.data.questions.map((q) => <Quiz key={q.id} checkCorrectAns={checkCorrectAns} showCorrentAns={showCorrentAns} quiz={q}></Quiz>)}
            </div>
            <ToastContainer />
        </div>
    );
};

export default Quizes;