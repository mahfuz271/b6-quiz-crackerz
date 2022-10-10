import React from 'react';

const Blog = () => {
    return (
        <div className='container'>
            <h1 className='text-center my-3 mb-5'>Blog</h1>
            <h2>What is the purpose of react router?</h2>
            <p>React Router is a standard library for routing in React. It enables the navigation among views of various components in a React Application, allows changing the browser URL, and keeps the UI in sync with the URL.</p>
            <h2>How does context api works?</h2>
            <p>The React Context API is a way for a React app to effectively produce global variables that can be passed around. This is the alternative to "prop drilling" or moving props from grandparent to child to parent, and so on. Context is also touted as an easier, lighter approach to state management using Redux.</p>
            <h2>React useRef Hook</h2>
            <p>
                The useRef Hook allows you to persist values between renders.
                <br />
                It can be used to store a mutable value that does not cause a re-render when updated.
                <br />
                It can be used to access a DOM element directly.
            </p>
        </div>
    );
};

export default Blog;