import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Quiz = ({ quiz }) => {
    return (
        <div className='col align-self-stretch'>
            <div className="border rounded h-100">
                <h3 className="h4 mb-5 mt-3 text-center" dangerouslySetInnerHTML={{ __html: quiz.question }}></h3><FontAwesomeIcon icon="fa-solid fa-eye" />
                <div className='row row-cols-1 row-cols-lg-2 g-3 px-5 mb-3'>
                    {quiz.options.map((op, index) => {
                        return <div className="form-check border py-3 ps-0 rounded">
                            <input className="form-check-input mx-3" type="radio" name={`ans${quiz.id}`} id={`${quiz.id}${index}`} />
                            <label className="form-check-label" for={`${quiz.id}${index}`}>
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