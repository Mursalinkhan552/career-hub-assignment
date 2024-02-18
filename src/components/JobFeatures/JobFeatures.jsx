import React, { useEffect, useState } from 'react';
import JobFeaturePage from '../JobFeaturePage/JobFeaturePage';

const JobFeatures = () => {
    const [job, setJob] = useState([]);

    useEffect(() => {
        const loadJobData = async () => {
            const res = await fetch('jobs.json');
            const data = await res.json();
            setJob(data);
        }
        loadJobData();
    }, [])
    return (
        <section className='text-center my-6'>
            <h1 className='text-4xl font-bold'>Featured Jobs</h1>
            <p>Explore thousands of job opportunities with all the information you need. Its your future</p>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-6 w-11/12 md:w-8/12 mx-auto my-8'>
                {
                    job.map(singleJob => <JobFeaturePage
                        key={singleJob.id}
                        singleJob={singleJob}
                    ></JobFeaturePage>)
                }
            </div>
            <div>
                <button className='primary-btn'>See All Jobs</button>
                
            </div>
        </section>
    );
};

export default JobFeatures;