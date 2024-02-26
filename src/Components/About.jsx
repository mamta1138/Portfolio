import React from 'react';

export default function About(){
  return (
    <div name='about' className='w-full h-screen bg-[#0a192f] text-gray-300'>
      <div className='flex flex-col justify-center items-center w-full h-full'>
        <div className='max-w-[1000px] w-full grid grid-cols-2 gap-8'>
          <div className='sm:text-right pb-8 pl-4'>
            <p className='text-4xl font-bold inline border-b-4 border-pink-600'>
              About
            </p>
          </div>
          <div></div>
          </div>
          <div className='max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4'>
            <div className='sm:text-right text-4xl font-bold'>
              <p>Hi. I'm Mamta Ghimire, nice to meet you. Please take a look around.</p>
            </div>
            <div>
              <p>"I am driven by the potential of data science to revolutionize industries and enhance societal well-being. Specializing in developing advanced analytical solutions, I cater to diverse clientele, from startups to multinational enterprises. Imagine the transformative impact of having a data scientist at your disposal, empowering informed decisions and driving innovation."</p>  
            </div>
          </div>
      </div>
    </div>
  );
};


