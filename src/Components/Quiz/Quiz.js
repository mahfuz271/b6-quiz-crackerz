import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faEye } from "@fortawesome/free-solid-svg-icons";

library.add(faEye);

const Quiz = ({ quiz, showCorrentAns, checkCorrectAns }) => {
    return (
        <div className='col align-self-stretch'>
            <div className="border rounded h-100">
                <h3 className="h4 mb-3 mt-3 text-center position-relative"><p dangerouslySetInnerHTML={{ __html: quiz.question }}></p><FontAwesomeIcon onClick={() => showCorrentAns(quiz.correctAnswer)} className='position-absolute faIconEye' icon={faEye} /></h3>
                <p id={quiz.id} className="m-0 p-0 text-center alert alert-info d-none"></p>
                <div className='row row-cols-1 row-cols-lg-2 g-3 px-5 mb-3 mt-3'>
                    {quiz.options.map((op, index) => {
                        return <div key={quiz.id + index} className="form-check border py-3 ps-0 rounded">
                            <input onChange={() => checkCorrectAns(quiz.id, op, quiz.correctAnswer)} className="form-check-input mx-3" type="radio" name={`ans${quiz.id}`} id={`${quiz.id}${index}`} />
                            <label className="form-check-label" htmlFor={`${quiz.id}${index}`}>
                                {op}
                            </label>
                        </div>
                    })}
                </div>
            </div>
        </div>
    );
};

export default Quiz;