import React from 'react';

const JobFeaturePage = ({ singleJob }) => {
    console.log(singleJob);
    const { logo, job_title, remote_or_onsite, job_type, location, salary, company_name } = singleJob

    return (
        <div className='border-2 p-8 rounded flex flex-col items-start'>
            <img className='mb-3' src={logo} alt="" />
            <p className='my-1 text-xl font-bold'>{job_title}</p>
            <p className='mb-3 text-gray-400'>{company_name}</p>
            <div className='flex items-center gap-5'>
                <button className='border-2 border-lime-500 text-lime-500 hover:bg-lime-700 hover:text-white px-6 py-1 rounded'>{remote_or_onsite}</button>
                <button className='border-2 border-lime-500 text-lime-500 hover:bg-lime-700 hover:text-white px-6 py-1 rounded'>{job_type}</button>
            </div>
            <div className='flex items-center gap-5 my-3 text-gray-400'>
                <p>{location}</p>
                <p>{salary}</p>
            </div>
            <button className='primary-btn'>View Details</button>
        </div>
    );
};

export default JobFeaturePage;