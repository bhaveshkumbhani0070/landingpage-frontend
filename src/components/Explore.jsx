import React, { useMemo, useState } from 'react';
import Cards from './Cards'
import health from '../assets/CGI/health.png'; 
import robotics from '../assets/CGI/robotics.png'; 
import casino from '../assets/CGI/casino.png'; 
import contruction from '../assets/CGI/contruction.png'; 
import influencer from '../assets/CGI/influencer.png'; 
import NFT from '../assets/CGI/NFT.png'; 
import survey from '../assets/CGI/survey.png'; 
import sports from '../assets/CGI/sports.png'; 
import shoes from '../assets/CGI/shoes.png'; 
import portfolio from '../assets/CGI/portfolio.png'; 

const filters = ['All', 'Web', 'Mobile', 'AI', 'Blockchain'];

const explorecards = [
  {
    heading: 'Health Care',
    img: health,
    category: 'Web',
  },
  {
    heading: 'Robotics',
    img: robotics,
    category: 'AI',
  },
  {
    heading: 'Casino Game',
    img: casino,
    category: 'Web',
  },
  {
    heading: 'Construction',
    img: contruction,
    category: 'Web',
  },
  {
    heading: 'Influencer',
    img: influencer,
    category: 'Mobile',
  },
  {
    heading: 'NFT Platform',
    img: NFT,
    category: 'Blockchain',
  },
  {
    heading: 'Survey',
    img: survey,
    category: 'Mobile',
  },
  {
    heading: 'Sports',
    img: sports,
    category: 'Web',
  },
  {
    heading: 'Shoes',
    img: shoes,
    category: 'Mobile',
  },
  {
    heading: 'Portfolio',
    img: portfolio,
    category: 'Web',
  },
];

const Explore = () => {
  const [activeFilter, setActiveFilter] = useState('All');
  const [isTransitioning, setIsTransitioning] = useState(false);

  const filteredCards = useMemo(
    () =>
      activeFilter === 'All'
        ? explorecards
        : explorecards.filter((card) => card.category === activeFilter),
    [activeFilter]
  );

  const handleFilter = (filter) => {
    if (filter === activeFilter) return;
    setIsTransitioning(true);
    window.setTimeout(() => {
      setActiveFilter(filter);
      setIsTransitioning(false);
    }, 140);
  };

  return (
    <>
      <div id='case-study' className='container mx-auto relative'>
        <div className='flex flex-col lg:flex-row lg:justify-between justify-center flex-wrap gap-5 items-center text-white px-4 lg:px-20 pt-20 lg:pt-44'>
          <h1 className='text-3xl text-white font-semibold text-center lg:text-left'>Case Studies</h1>

          <div className='order-3 lg:order-2'>
            <ul className='flex flex-wrap gap-2 justify-center'>
              {filters.map((filter) => (
                <li key={filter}>
                  <button
                    type='button'
                    onClick={() => handleFilter(filter)}
                    className={`rounded-full py-2 px-4 text-sm font-medium transition-all duration-200 ${
                      activeFilter === filter
                        ? 'bg-gradient-to-r from-[#FC466B] to-[#3F5EFB] text-white shadow-lg shadow-[#3F5EFB]/30'
                        : 'bg-white/10 text-gray-200 hover:bg-white/20'
                    }`}
                  >
                    {filter}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div className='order-2 lg:order-3'>
            <button className='px-6 py-2 bg-[#6318F1] text-white font-bold rounded-full transition-transform transform-gpu hover:shadow-lg hover:bg-gradient-to-r hover:from-[#FC466B]/40 hover:to-[#3F5EFB]/40 hover:scale-105 duration-150'>
              Apply Now
            </button>
          </div>
        </div>

        <div className='lg:block hidden'>
          <div className='absolute inset-0 translate-x-[10px] top-32 -z-10 bg-gradient-to-b w-80 rounded-full h-96 blur-3xl from-purple-600 opacity-30 via-purple-500 to-purple-400'></div>
          <div className={`flex flex-wrap gap-x-10 gap-y-10 mt-10 justify-center px-20 transition-all duration-300 transform ${isTransitioning ? 'opacity-0 -translate-y-6' : 'opacity-100 translate-y-0'}`}>
            {filteredCards.length > 0 ? (
              filteredCards.map((explore, index) => (
                <Cards key={`${explore.heading}-${index}`} img={explore.img} heading={explore.heading} />
              ))
            ) : (
              <div className='col-span-full rounded-3xl border border-white/10 bg-white/5 px-10 py-12 text-center text-gray-300 shadow-xl shadow-black/10'>
                <p className='text-lg font-semibold text-white'>No case studies found for this category.</p>
                <p className='mt-3 text-sm text-gray-400'>Try selecting a different filter or choose All to see every project.</p>
              </div>
            )}
          </div>
        </div>
      </div>

      <div className='lg:hidden flex my-5 overflow-x-scroll no-scrollbar hide-scroll-bar'>
        <div className='flex flex-nowrap gap-x-12 pt-5 px-8 py-10'>
          {filteredCards.length > 0 ? (
            filteredCards.map((explore, index) => (
              <Cards key={`${explore.heading}-mobile-${index}`} img={explore.img} heading={explore.heading} />
            ))
          ) : (
            <div className='min-w-full rounded-3xl border border-white/10 bg-white/5 px-10 py-12 text-center text-gray-300 shadow-xl shadow-black/10'>
              <p className='text-lg font-semibold text-white'>No case studies found for this category.</p>
              <p className='mt-3 text-sm text-gray-400'>Try selecting a different filter or choose All to see every project.</p>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Explore;
