import React from 'react';
import social from '../../../public/icons/social.png'

const Footer = () => {
    return (
        <div className='bg-black bg-opacity-95 text-white text-opacity-85 mt-12 py-12'>
            <div className='grid grid-cols-3 md:grid-cols-5 pt-8 sm:w-full max-w-screen-lg ml-6 md:mx-auto'>
                <div className='space-y-5'>
                    <h3 className='text-3xl font-bold'>CareerHub</h3>
                    <div className='flex flex-col justify-between  gap-7'>
                        <p>There are many variations of passages of Lorem Ipsum , but the majority have suffered alteration in some form.</p>
                        <div className=''>
                            <img className='w-39 h-10' src={social} alt="" />
                        </div>
                    </div>
                </div>
                <div className='ml-12 space-y-6'>
                    <h3 className='text-lg font-semibold'>Company</h3>
                    <div className='space-y-1'>
                        <p>About Us</p>
                        <p>Work</p>
                        <p>Latest News</p>
                        <p>Careers</p>
                    </div>
                </div>
                <div className='space-y-6'>
                    <h3 className='text-lg font-semibold'>Product</h3>
                    <div className='space-y-1'>
                        <p>Prototype</p>
                        <p>Plans & Pricing</p>
                        <p>Customers</p>
                        <p>Integrations</p>
                    </div>
                </div>
                <div className='space-y-6 mt-8 md:mt-0'>
                    <h3 className='text-lg font-semibold'>Support</h3>
                    <div className='space-y-1'>
                        <p>Help Desk</p>
                        <p>Sales</p>
                        <p>Become a Partner</p>
                        <p>Developers</p>
                    </div>
                </div>
                <div className='space-y-6 mt-8 md:mt-0'>
                    <h3 className='text-lg font-semibold'>Contact</h3>
                    <div className='space-y-1'>
                        <p>524 Broadway , NYC</p>
                        <p>+1 777 - 978 - 5570</p>
                    </div>
                </div>

            </div>
            <hr className='sm:w-full max-w-screen-lg mx-6 md:mx-auto my-10 border-gray-800 dark:border-white ' />
            <div className='flex justify-between items-center sm:w-full max-w-screen-lg mx-6 md:mx-auto my-5 text-sm'>
                <p>@2023 CareerHub. All Rights Reserved</p>
                <p>Powered by CareerHub</p>
            </div>
        </div>
    );
};

export default Footer;