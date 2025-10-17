import React from 'react';
import logo from "../assets/logo.png"
import { format } from 'date-fns';

const Header = () => {
    return (
        <div className='flex justify-center flex-col items-center gap-3'>
            <figure className='w-[400px]'><img className=' w-full bg-cover' src={logo} alt='Site logo'/></figure>
            <p className='text-accent'>Journalism Without Fear or Favour</p>
            <p className='text-semebold text-accent'>{format(new Date(), "EEEE, MMMM dd, yyyy")}</p>
        </div>
    );
};

export default Header;