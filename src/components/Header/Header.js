import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { MenuIcon, XIcon } from '@heroicons/react/solid';
const Header = () => {
    const [open, setOpen] = useState(false);
    return (
        <div>
            <nav className='md:mb-10 md:py-10 bg-white'>
            <div onClick={() => setOpen(!open)} className='w-full h-6 md:hidden duration-300 ease-in'>
                {open ? <XIcon className='w-6 h-6'></XIcon> : <MenuIcon className='w-6 h-6'></MenuIcon>}
            </div>
                <ul className={`md:flex justify-center absolute md:static py-2 w-full ${open ? 'bg-white' : 'top-[-500px]'}`}>
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
        </div>
    );
};

export default Header;