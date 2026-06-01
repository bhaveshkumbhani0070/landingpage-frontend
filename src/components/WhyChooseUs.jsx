import React from 'react';

const features = [
  {
    title: 'Senior Engineers',
    desc: 'Top 5% vetted developers with real production experience',
  },
  {
    title: 'Fast Delivery',
    desc: 'Rapid execution with optimized workflows',
  },
  {
    title: 'Scalable Teams',
    desc: 'Easily scale teams based on project needs',
  },
  {
    title: 'Secure by Design',
    desc: 'Security-first architecture and implementation',
  },
];

const WhyChooseUs = () => {
  return (
    <section id='why-choose-us' className='container mx-auto px-4 lg:px-20 py-20'>
      <div className='max-w-3xl mx-auto text-center text-white mb-12'>
        <h2 className='text-3xl sm:text-4xl font-semibold'>Why Choose Us</h2>
        <p className='mt-4 text-gray-400'>We deliver high-quality engineering, fast execution, flexible scaling, and secure solutions to help your product succeed in competitive markets.</p>
      </div>

      <div className='grid gap-6 sm:grid-cols-1 md:grid-cols-2 xl:grid-cols-4'>
        {features.map((feature, index) => (
          <article
            key={index}
            className='rounded-3xl border border-white/10 bg-white/5 p-6 shadow-xl shadow-black/10 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-purple-400/40'
          >
            <div className='inline-flex items-center rounded-full bg-[#6318F1]/10 px-4 py-3 font-semibold text-[#D2B8FF] text-sm'>
              {feature.title}
            </div>
            <p className='mt-5 text-gray-300'>{feature.desc}</p>
          </article>
        ))}
      </div>
    </section>
  );
};

export default WhyChooseUs;
