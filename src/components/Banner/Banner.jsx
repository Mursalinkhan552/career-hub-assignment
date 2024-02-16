import React from 'react';
import heroImg from '../../../public/images/user.png'
const Banner = () => {
    return (
        <section className='bg-blue-100 bg-opacity-45'>
            <div className=' flex flex-col-reverse md:flex-row items-center justify-between gap-8 sm:w-full max-w-screen-lg mx-auto'>
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
        </section>
    );
};

export default Banner;