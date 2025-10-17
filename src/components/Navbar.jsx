import React from 'react';
import { NavLink } from 'react-router';

import user from "../assets/user.png";
const Navbar = () => {
    return (
        <div className='flex justify-between items-center'>
            <div className='bg-amber-200'></div>
            <div className='nav flex gap-5 bg-red-400'>
                <NavLink to={'/'}>Home</NavLink>
                <NavLink to={'/about'}>About</NavLink>
                <NavLink to={'/career'}>Career</NavLink>
            </div>
            <div className='login-btn flex gap-5 bg-green-400'>
                <img src={user} alt="User" />
                <button className='btn btn-primary px-10'>Login</button>
            </div>
        </div>
    );
};

export default Navbar;