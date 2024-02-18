import React, { useState } from 'react';
import bg1 from '../../../public/images/bg1.png'
import bg2 from '../../../public/images/bg2.png'
import { useLoaderData, useParams } from 'react-router-dom';

const JobDetails = () => {
    const jobs = useLoaderData();
    let { id } = useParams();
    const job = jobs.find(singleData => singleData.id == id);
    const { job_description, job_responsibility, educational_requirements, experiences, job_title, salary, contact_information } = job;
    return (
        <div>
            <div className='bg-blue-100 bg-opacity-45 '>
                <div className='hidden md:block '>
                    <img className='w-40  absolute top-0 right-2' src={bg2} alt="" />
                </div>
                <h2 className='text-center text-3xl font-bold pt-8 pb-24'>Job Details Page</h2>

                <div className='relative'>
                    <img className='w-36 md:w-64 absolute bottom-0 left-0' src={bg1} alt="" />
                </div>

            </div>
            <div className='sm:w-full max-w-screen-lg mx-auto my-20 flex  gap-8'>
                <div className='w-9/12'>
                    <div className=''>
                        <h3 className='text-base font-bold mb-4'>
                            Job Description: <span className='text-sm text-gray-400 font-light'>{job_description}</span></h3>
                        <h3 className='text-base  font-bold mb-4'>
                            Job Responsibility: <span className='text-sm text-gray-400 font-light'>{job_responsibility}</span></h3>
                        <h3 className='text-base font-bold mb-3'>
                            Educational Requirements:</h3>
                        <span className='text-sm text-gray-400 font-light '>{educational_requirements}</span>
                        <h3 className='text-base  font-bold my-3'>Experiences:</h3>
                        <span className='text-sm text-gray-400 font-light'>{experiences}</span>

                    </div>
                </div>
                <div className=''>
                    <div className='bg-blue-200 bg-opacity-45 p-6 rounded'>
                        <h3 className='text-xl font-bold mb-3 '>Job Details</h3>
                        <hr className='h-px my-6 bg-gray-400 border-0 dark:bg-gray-700 bg-opacity-35' />
                        <p className='text-base font-semibold'>Salary: <span className='text-gray-600 text-sm font-normal'>{salary}(Per Month)</span></p>
                        <p className='text-base font-semibold mt-1 mb-4'>Job Title: <span className='text-gray-600 text-sm font-normal'>{job_title}</span></p>
                        <h3 className='text-lg font-semibold mb-3'>Contact Information</h3>
                        <hr className='h-px my-6 bg-gray-400 border-0 dark:bg-gray-700 bg-opacity-35' />

                        <p className='text-base font-semibold'>Phone: <span className='text-gray-600 text-sm font-normal'>{contact_information.phone}</span></p>
                        <p className='text-base font-semibold my-2'>Email: <span className='text-gray-600 text-sm font-normal'>{contact_information.email}</span></p>
                        <p className='text-base font-semibold'>Address: <span className='text-gray-600 text-sm font-normal'>{contact_information.address}</span></p>
                    </div>
                    <button className='w-full bg-lime-500 rounded mt-5 text-white py-3'>Apply Now</button>
                </div>

            </div>
        </div>
    );
};

export default JobDetails;