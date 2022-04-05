import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { MenuIcon, XIcon } from '@heroicons/react/solid';
const Header = () => {
    const [open, setOpen] = useState(false);
    return (
        <nav className='mb-10 py-10'>
            <div onClick={() => setOpen(!open)} className='w-6 h-6 lg:hidden'>
                {open ? <XIcon></XIcon> : <MenuIcon></MenuIcon>}
            </div>
            {/* <ul className={`md:flex justify-center absolute duration-500 easy-in ${open ? 'top-120' : 'top-[-120px]'}`}> */}
            <ul className='md:flex justify-center'>
                <li>
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
                </li>
                <li>
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
                </li>
                <li>
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
                </li>
                <li>
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
                </li>
                <li>
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
                </li>
            </ul>
        </nav>
    );
};

export default Header;