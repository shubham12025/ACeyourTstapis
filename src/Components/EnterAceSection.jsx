import React from 'react';
import StudentTestimonials from './StudentTestimonials';

const EnterAceSection = () => {
  return (
    <>
    <section className="relative py-10">
      {/* Split Background */}
      <div className="absolute inset-0 flex">
        {/* <div className="w-1/2 bg-white"></div> */}
        <div className="w-1/1 bg-[#061C3D]"></div>
      </div>

      {/* Content */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5">
        {/* Heading */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-2xl sm:text-3xl font-bold text-white">
            Enter ACE Your Test
          </h2>
          <p className="text-sm sm:text-base text-white mt-3">
            We don’t just “teach” we make you fall in love with learning.
            Think of us as that one smart friend who explains concepts with memes,
            shortcuts, and hacks that stick forever.          
           Here’s how we make test prep fun + effective
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white rounded-xl shadow-md p-5 text-center">
            <h4 className="text-orange-500 font-semibold mb-2">Personalized Mentoring</h4>
            <p className="text-sm text-gray-700">Your plan, your pace, your success.</p>
          </div>
          <div className="bg-white rounded-xl shadow-md p-5 text-center">
            <h4 className="text-orange-500 font-semibold mb-2">Practice-Heavy Approach</h4>
            <p className="text-sm text-gray-700">Less theory, more “aha!” moments.</p>
          </div>
          <div className="bg-white rounded-xl shadow-md p-5 text-center">
            <h4 className="text-orange-500 font-semibold mb-2">Memes & Analogies</h4>
            <p className="text-sm text-gray-700">Because nobody remembers boring definitions.</p>
          </div>
        </div>
      </div>
    </section>
    <StudentTestimonials/>
    </>
  );
};

export default EnterAceSection;
