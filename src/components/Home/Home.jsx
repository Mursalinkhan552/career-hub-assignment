import React from 'react';
import Banner from '../Banner/Banner';
import CategoryList from '../CategoryList/CategoryList';
import JobFeatures from '../JobFeatures/JobFeatures';
const Home = () => {
    return (
        <div className=''>
            <Banner></Banner>
            <CategoryList></CategoryList>
            <JobFeatures></JobFeatures>
        </div>
    );
};

export default Home;