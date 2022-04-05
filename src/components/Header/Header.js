import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {
    return (
        <nav className='py-5 mb-20'>
            <NavLink
                style={({ isActive }) => {
                    return {
                        textDecoration: isActive ? "underline" : "",
                        color: isActive ? "blue" : "",
                    };
                }}
                className='text-3xl mx-10 hover:text-sky-600'
                to="/home"
            >Home</NavLink>
            <NavLink
                style={({ isActive }) => {
                    return {
                        textDecoration: isActive ? "underline" : "",
                        color: isActive ? "blue" : "",
                    };
                }}
                className='text-3xl mx-10 hover:text-sky-600'
                to="/reviews"
            >Reviews</NavLink>
            <NavLink
                style={({ isActive }) => {
                    return {
                        textDecoration: isActive ? "underline" : "",
                        color: isActive ? "blue" : "",
                    };
                }}
                className='text-3xl mx-10 hover:text-sky-600'
                to="/dashboard"
            >Dashboard</NavLink>
            <NavLink
                style={({ isActive }) => {
                    return {
                        textDecoration: isActive ? "underline" : "",
                        color: isActive ? "blue" : "",
                    };
                }}
                className='text-3xl mx-10 hover:text-sky-600'
                to="/blogs"
            >Blogs</NavLink>
            <NavLink
                style={({ isActive }) => {
                    return {
                        textDecoration: isActive ? "underline" : "",
                        color: isActive ? "blue" : "",
                    };
                }}
                className='text-3xl mx-10 hover:text-sky-600'
                to="/about"
            >About</NavLink>
        </nav>
    );
};

export default Header;