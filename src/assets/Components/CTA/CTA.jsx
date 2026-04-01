import React from 'react';

const CTA = () => {
  return (
    <section className="brand-bg py-20 px-6 text-center text-white">
      <div className="max-w-4xl mx-auto flex flex-col items-center gap-6">
        <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
          Ready To Transform Your Workflow?
        </h2>
        <p className="text-base-100/70 max-w-2xl">
          Join thousands of professionals who are already using DigiTools to work smarter. 
          Start your free trial today.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 mt-4">
          <a className="btn bg-white text-[#7c3aed] border-none hover:bg-gray-100 rounded-full normal-case font-semibold" href='#tools'>
            Explore Products
          </a>
          <a className="btn btn-outline text-white border-white hover:bg-white/10 hover:border-white rounded-full normal-case font-semibold" href='#pricing'>
            View Pricing
          </a>
        </div>
        <p className="text-sm text-base-100/70 mt-2">
          14-day free trial • No credit card required • Cancel anytime
        </p>
      </div>
    </section>
  );
};

export default CTA;