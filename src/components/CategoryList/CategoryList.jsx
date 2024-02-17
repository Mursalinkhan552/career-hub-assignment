import React, { useEffect, useState } from 'react';

const CategoryList = () => {
    const [data, setData] = useState([]);
    useEffect(() => {
        const loadData = async () => {
            const res = await fetch('categories.json');
            const data = await res.json();
            setData(data);
        }
        loadData();
    }, [])



    return (
        <section className='my-12'>
            <div className='text-center space-y-3'>
                <h1 className='text-4xl font-bold '>
                    Job Category List
                </h1>
                <p className=''>
                    Explore thousands of job opportunities with all the information you need. Its your future
                </p>
            </div>
            <div className='grid grid-cols-2 md:grid-cols-4 mx-2 md:mx-12 px-2  md:px-8 my-8 '>
                {
                    data.map(singleData =>
                        <div className='bg-blue-100 bg-opacity-45  p-6 mx-2 md:mx-8 mt-6 md:mt-0 rounded' key={singleData.id}>
                            <img className='w-10 h-10' src={singleData.logo} alt="" />
                            <h3 className='text-lg font-semibold mt-3'>{singleData.category_name}</h3>
                            <p className='text-sm font-medium text-gray-400 mt-1'>{singleData.availability}</p>
                        </div>)
                }
            </div>
        </section>
    );
};

export default CategoryList;