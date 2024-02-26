import React, { useState, useEffect } from 'react';
import { HiArrowNarrowRight } from 'react-icons/hi';

const Home = () => {
  // State for managing data and loading state
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulating data fetching with a setTimeout
    const fetchData = async () => {
      try {
        // Simulate a delay to mimic asynchronous data fetching
        await new Promise(resolve => setTimeout(resolve, 500));
        
        // Example data to set
        const exampleData = {
          name: 'Mamta Ghimire',
          title: 'Data Scientist',
          description:
            "I'm a data scientist skilled in uncovering insights from complex datasets using statistical analysis and machine learning techniques. Experienced in driving data-driven decision-making and innovation."
        };
        
        // Setting the data and updating loading state
        setData(exampleData);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching data:', error);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <div name='home' className='w-full h-screen bg-[#0a192f]'>
      {/* Container */}
      <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full'>
        {loading ? ( // Display loading message while data is being fetched
          <p className="text-[#8892b0]">Loading...</p>
        ) : (
          <>
            <p className='text-pink-600'>Hi, my name is</p>
            <h1 className='text-4xl sm:text-7xl font-bold text-[#ccd6f6]'>
              {data.name}
            </h1>
            <h2 className='text-4xl sm:text-7xl font-bold text-[#8892b0]'>
              {data.title}
            </h2>
            <p className='text-[#8892b0] py-4 max-w-[700px]'>
              {data.description}
            </p>
            <div>
              <button className='text-white group border-2 px-6 py-3 my-2 flex items-center hover:bg-pink-600 hover:border-pink-600'>
                View Work
                <span className='group-hover:rotate-90 duration-300'>
                  <HiArrowNarrowRight className='ml-3 ' />
                </span>
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Home;
