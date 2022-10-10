import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Link } from 'react-router-dom';

const Topic = ({ topic }) => {
    return (
        <div className='col align-self-stretch'><div className="border rounded h-100">
            <img src={topic.logo} alt="" className="rounded w-100 mh-100 bg-dark" />
            <div className="p-3 d-grid text-center">
                <h3 className="h4 mb-3">{topic.name}</h3>
                <Link to={`/quiz/${topic.id}`}><button type="button" className="btn btn-primary">Start Practice <FontAwesomeIcon icon={faArrowRight} /></button></Link>
            </div>
        </div>
        </div>
    );
};

export default Topic;