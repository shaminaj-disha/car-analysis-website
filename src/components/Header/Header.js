import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <nav className='py-5 mb-20'>
            <Link className='text-3xl mx-10 hover:text-sky-600' to="/home">Home</Link>
            <Link className='text-3xl mx-10 hover:text-sky-600' to="/reviews">Reviews</Link>
            <Link className='text-3xl mx-10 hover:text-sky-600' to="/dashboard">Dashboard</Link>
            <Link className='text-3xl mx-10 hover:text-sky-600' to="/blogs">Blogs</Link>
            <Link className='text-3xl mx-10 hover:text-sky-600' to="/about">About</Link>
        </nav>
    );
};

export default Header;