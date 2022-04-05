import React from 'react';

const Blogs = (props) => {
    const {question, answer} = props.blog;
    return (
        <div className='m-20 p-10 border-2 rounded bg-sky-200'>
            <h1 className='text-4xl py-5 font-bold'>{question}</h1>
            <p className='text-2xl'><span className='font-bold'>Answer:</span> {answer}</p>
        </div>
    );
};

export default Blogs;