import React, { useState } from 'react';
import GlobalImpactCounter from "./GlobalImpactCounter";
import Navbar from './Navbar';
import DialogForm from './DialogForm';

const HeroSection = () => {
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const openDialog = () => setIsDialogOpen(true);
  const closeDialog = () => setIsDialogOpen(false);

  return (
    <>
      <Navbar/>

      <section className="bg-white w-full py-8 px-4 sm:px-6 md:px-16 flex flex-col md:flex-row items-center justify-between border border-blue-200">
        
        {/* Left Content */}
        <div className="md:w-1/2 space-y-4 text-center md:text-left">
          {/* Headline */}
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#E77813] leading-snug">
            ACE Your Test GMAT, GRE & SAT Online Classes
          </h1>

          {/* Subheadline */}
          <p className="text-lg sm:text-xl font-bold text-gray-800">
            Stop Memorizing. Start Mastering.
          </p>

          {/* Description */}
          <p className="text-sm sm:text-base font-semibold">
            Scoring 705+ on GMAT, 330+ on GRE, or 1500+ on SAT isn’t about grinding endless books. <br />
            It’s about learning smarter. That’s where ACE Your Test comes in – your prep partner, not just another coaching class.
          </p>

          {/* Tagline */}
          <p className="font-medium text-blue-800 text-sm sm:text-base">
            Personalized Online Classes | Fun Learning | Proven Results
          </p>

          {/* Call to Action Button */}
          <div className="flex justify-center md:justify-start">
            <button
              onClick={openDialog} // open the dialog on click
              className="bg-orange-500 text-white px-5 sm:px-6 py-2 sm:py-3 rounded hover:bg-orange-600 transition text-sm sm:text-base cursor-pointer"
            >
              Book a free Consultation Today
            </button>
          </div>
        </div>

        {/* Right Content */}
        <div className="md:w-1/2 mt-8 md:mt-0 flex flex-col items-center">
          <div className="w-full flex justify-center">
            <img
              src="/images/Girl.png"
              alt="Student"
              className="w-48 sm:w-80 h-auto object-contain -mb-20 z-10"
            />
          </div>
        </div>
      </section>

      <GlobalImpactCounter/>

      {/* Conditionally render DialogForm only when open */}
      {isDialogOpen && <DialogForm open={isDialogOpen} onClose={closeDialog} />}
    </>
  );
};

export default HeroSection;
