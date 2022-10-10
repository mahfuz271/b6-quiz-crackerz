import React from 'react';
import { Link, NavLink } from 'react-router-dom';

const Header = () => {
    return (
        <header className="p-3 border-bottom">
            <div className="container">
                <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
                    <Link to="/" className="d-flex align-items-center mb-2 mb-lg-0 text-dark text-decoration-none">
                        <h3>QuizHub</h3>
                    </Link>
                    <ul className="nav col-12 col-lg-auto ms-lg-auto me-lg-3 mb-2 justify-content-center mb-md-0 main_menu">
                        <li><NavLink to='/' className='nav-link px-2 link-dark'>Topics</NavLink></li>
                        <li><NavLink className='nav-link px-2 link-dark' to='/statistics'>Statistics</NavLink></li>
                        <li><NavLink className='nav-link px-2 link-dark' to='/blog'>Blog</NavLink></li>
                    </ul>

                </div>
            </div>
        </header>
    );
};

export default Header;