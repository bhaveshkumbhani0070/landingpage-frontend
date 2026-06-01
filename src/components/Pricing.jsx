import React, { useEffect, useState } from 'react';

const pricingPlans = [
  {
    name: 'Starter',
    description: 'Perfect for early-stage projects',
    monthly: 29,
    yearly: 290,
    savings: 'Save $58',
    features: ['1 project', 'Basic analytics', 'Email support'],
  },
  {
    name: 'Growth',
    description: 'For growing teams and scalable builds',
    monthly: 59,
    yearly: 590,
    savings: 'Save $118',
    features: ['5 projects', 'Advanced analytics', 'Priority support'],
    recommended: true,
  },
  {
    name: 'Enterprise',
    description: 'Full service for enterprise-level delivery',
    monthly: 99,
    yearly: 990,
    savings: 'Save $198',
    features: ['Unlimited projects', 'Custom integrations', 'Dedicated support'],
  },
];

const Pricing = () => {
  const [billingCycle, setBillingCycle] = useState('Monthly');

  useEffect(() => {
    const persisted = window.localStorage.getItem('pricingBillingCycle');
    if (persisted === 'Monthly' || persisted === 'Yearly') {
      setBillingCycle(persisted);
    }
  }, []);

  const handleToggle = (cycle) => {
    setBillingCycle(cycle);
    window.localStorage.setItem('pricingBillingCycle', cycle);
  };

  return (
    <section id='pricing' className='container mx-auto px-4 lg:px-20 py-20'>
      <div className='max-w-3xl mx-auto text-center text-white mb-12'>
        <h2 className='text-3xl sm:text-4xl font-semibold'>Pricing Plans</h2>
        <p className='mt-4 text-gray-400'>Choose the right plan for your business, with flexible monthly or yearly billing and savings built in.</p>
      </div>

      <div className='flex justify-center mb-12'>
        <div className='inline-flex rounded-full border border-white/10 bg-white/5 p-1'>
          {['Monthly', 'Yearly'].map((option) => (
            <button
              key={option}
              type='button'
              onClick={() => handleToggle(option)}
              className={`px-6 py-2 rounded-full text-sm font-semibold transition-all duration-200 ${
                billingCycle === option
                  ? 'bg-gradient-to-r from-[#FC466B] to-[#3F5EFB] text-white shadow-lg shadow-[#3F5EFB]/25'
                  : 'text-gray-200 hover:bg-white/10'
              }`}
            >
              {option}
            </button>
          ))}
        </div>
      </div>

      <div className='grid gap-6 md:grid-cols-2 xl:grid-cols-3'>
        {pricingPlans.map((plan) => {
          const price = billingCycle === 'Monthly' ? plan.monthly : plan.yearly;
          return (
            <article
              key={plan.name}
              className={`relative rounded-3xl border border-white/10 bg-white/5 p-8 shadow-xl shadow-black/10 transition-transform duration-300 hover:-translate-y-2 hover:border-purple-400/40 ${
                plan.recommended ? 'ring-1 ring-[#6318F1]/30' : ''
              }`}
            >
              {billingCycle === 'Yearly' ? (
                <span className='absolute right-5 top-5 rounded-full bg-[#3F5EFB] px-4 py-2 text-xs font-semibold uppercase text-white tracking-wider'>
                  {plan.savings}
                </span>
              ) : null}

              <div className='mb-6'>
                <h3 className='text-2xl font-semibold text-white'>{plan.name}</h3>
                <p className='mt-2 text-gray-400'>{plan.description}</p>
              </div>

              <div className='mb-8'>
                <div className='flex items-end gap-2'>
                  <span className='text-4xl font-bold text-white transition-all duration-300'>${price}</span>
                  <span className='text-sm text-gray-400'>/ {billingCycle === 'Monthly' ? 'month' : 'year'}</span>
                </div>
                <p className='mt-2 text-sm text-gray-400'>Billed {billingCycle === 'Monthly' ? 'monthly' : 'annually'}.</p>
              </div>

              <ul className='mb-8 space-y-3 text-gray-300'>
                {plan.features.map((feature) => (
                  <li key={feature} className='flex items-start gap-3'>
                    <span className='mt-1 h-2.5 w-2.5 rounded-full bg-[#6318F1]'></span>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              <button className='w-full rounded-full bg-[#6318F1] px-6 py-3 text-sm font-semibold text-white transition-transform duration-200 hover:scale-[1.02] hover:bg-gradient-to-r hover:from-[#FC466B]/80 hover:to-[#3F5EFB]/80'>
                Choose {plan.name}
              </button>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default Pricing;
