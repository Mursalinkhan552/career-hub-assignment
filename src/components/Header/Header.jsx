import React from 'react';
import { Link } from 'react-router-dom';
const Header = () => {
    return (
        <div className='bg-blue-100 bg-opacity-45 py-6'>
            <div className=' flex flex-col justify-between gap-10 items-center  sm:w-full max-w-screen-lg mx-auto '>
                <div className="navbar ">
                    <div className="navbar-start">
                        <div className="dropdown">
                            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                            </div>
                            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                                <li>
                                    <Link to='/'>Home</Link>
                                </li>
                                <li className='text-lime-500'>
                                    <Link to='/chart'>Statistics</Link>
                                </li>
                                <li>
                                    <Link to='/cart'>Applied Jobs</Link>
                                    
                                </li>
                                <li><Link to='/blog'>Blog</Link></li>
                            </ul>
                        </div>
                        <Link to='/' className="btn btn-ghost text-lime-500 font-bold text-xl">MRK HUB</Link>
                    </div>
                    <div className="navbar-center hidden lg:flex">
                        <ul className="menu menu-horizontal px-1">
                            <li>
                                <Link to='/'>Home</Link>
                            </li>
                            <li className='text-lime-500 font-semibold'>
                                <Link to='/chart'>Statistics</Link>
                            </li>
                            <li>
                                <Link to='/cart'>Applied Jobs</Link>
                            </li>
                            <li><Link to='/blog'>Blog</Link></li>
                        </ul>
                    </div>
                    <div className="navbar-end">
                        <Link to='/jobDetails' className="primary-btn">
                            Star Applying
                        </Link>
                    </div>
                </div>
                
            </div>
        </div>
    );
};

export default Header;