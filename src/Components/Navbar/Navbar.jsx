import React from 'react';
import logo from '../../images/Logo.svg';

const Navbar = () => {
    return (
        <div  className='bg-slate-900'>
           <div className='py-3 w-[80%] mx-auto flex justify-between items-center'>
            <img src={logo} alt="" />
            <div className='text-white space-x-4'>
            <a href="">Order</a>
            <a href="">Order Review</a>
            <a href="">Manage Inventory</a>
            <a href="">Login</a>
            </div>
            </div> 
        </div>
    );
};

export default Navbar;

