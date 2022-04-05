import React from 'react';

const About = () => {
    return (
        <div className='border-2 bg-sky-200 m-20 p-10'>
            <h1 className='text-4xl font-bold p-5'>### Project Description ###</h1>
            <p className='text-2xl p-5'>1. There is a navigation bar which navigates to different routes such as Home, Reviews, Dashboard, Blogs and About</p>
            <p className='text-2xl p-5'>2. In Home, there are two sections. One is a quick overview and the other is customer reviews which shows only first three reviews from 'review.json'</p>
            <p className='text-2xl p-5'>3. In Reviews, all customer reviews are shown from 'review.json'</p>
            <p className='text-2xl p-5'>4. In Dashboard, four type of charts are shown from 'data.json'</p>
            <p className='text-2xl p-5'>5. In Blogs, three questions are answered from blogs.json</p>
            <p className='text-2xl p-5'>6. In About, projects description is added</p>
            <p className='text-2xl p-5'>7. If random path names are given which does not match any route, then it will route to Not Found</p>
        </div>
    );
};

export default About;