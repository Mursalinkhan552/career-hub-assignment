import React from 'react';
import { Link } from 'react-router-dom';
import heroImg from '../../../public/images/user.png'
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
                                <li className='text-lime-500'><a>Statistics</a></li>
                                <li>
                                    <a>Applied Jobs</a>
                                    <ul className="p-2">
                                        <li><a>Submenu 1</a></li>
                                        <li><a>Submenu 2</a></li>
                                    </ul>
                                </li>
                                <li><a>Blog</a></li>
                            </ul>
                        </div>
                        <Link to='/' className="btn btn-ghost text-lime-500 font-bold text-xl">MRK HUB</Link>
                    </div>
                    <div className="navbar-center hidden lg:flex">
                        <ul className="menu menu-horizontal px-1">
                            <li className='text-lime-500 font-semibold'><a>Statistics</a></li>
                            <li>
                                <details>
                                    <summary>Applied Jobs</summary>
                                    <ul className="p-2">
                                        <li><a>Submenu 1</a></li>
                                        <li><a>Submenu 2</a></li>
                                    </ul>
                                </details>
                            </li>
                            <li><a>Blog</a></li>
                        </ul>
                    </div>
                    <div className="navbar-end">
                        <a className="primary-btn">Star Applying</a>
                    </div>
                </div>
                <div className=' flex flex-col-reverse md:flex-row items-center justify-between gap-8'>
                    <div className='ml-5 mb-10 space-y-5'>
                        <h1 className='text-5xl  md:text-6xl font-bold'>
                            One Step Closer To Your
                            <span className='text-lime-500'> Dream Job</span>
                        </h1>
                        <p className=''>Explore thousands of job opportunities with all the information you need. Its your future. Come find it. Manage all your job application from start to finish.</p>
                        <div className='text-center md:text-left'>
                            <button className='primary-btn'>Get Started</button>
                        </div>
                    </div>
                    <div className=''>
                        <img className='w-screen max-h-screen' src={heroImg} alt="" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;