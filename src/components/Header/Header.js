import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <nav className='my-5'>
            <Link className='text-3xl mx-10' to="/home">Home</Link>
            <Link className='text-3xl mx-10' to="/reviews">Reviews</Link>
            <Link className='text-3xl mx-10' to="/dashboard">Dashboard</Link>
            <Link className='text-3xl mx-10' to="/blogs">Blogs</Link>
            <Link className='text-3xl mx-10' to="/about">About</Link>
        </nav>
    );
};

export default Header;