import React from 'react';
import { HiArrowNarrowRight } from 'react-icons/hi';
import { Link } from 'react-scroll';

const Home = () => {
  return (
    <div name='home' className='w-full h-screen bg-[#0a192f]'>
      {/* Container */}
      <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full'>
        <p className='text-pink-700 text-2xl'>Hi, my name is</p>
        <h1 className='text-3xl sm:text-6xl font-bold text-[#ccd6f6]'>
          Mohamed Hassan Eldoma
        </h1>
        <h2 className='text-2xl sm:text-5xl font-bold text-[#8892b0]'>
          I'm a Front-end Web Developer.
        </h2>
        <p className='text-[#8892b0] py-4 max-w-[700px]'>
        I am a self-motivated person who is willing to go above and beyond on any project, learn valuable skills on
        my own time, also work with multi-tasking, deal with new tools, techniques, and systems efficiently.

        </p>
        <div>
        <Link to='work' smooth={true} duration={500}>
          <button className='text-white group border-2 px-6 py-3 my-2 flex items-center hover:bg-pink-700 hover:border-pink-700'>
          
           View Work
          
            <span className='group-hover:rotate-90 duration-300'>
              <HiArrowNarrowRight className='ml-3 ' />
            </span>
          </button>
        </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
