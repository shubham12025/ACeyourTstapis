import React from 'react';
import CountUp from 'react-countup';
import MeetMentor from './MeetMentor';

const GlobalImpactCounter = () => {
  return (
    <>
      {/* Global Impact Counter Section */}
      <section className="bg-[#061C3D] text-white py-14 px-4 sm:px-6 md:px-16 relative z-10">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6 md:gap-10">

          {/* Left Title */}
          <div className="w-full md:w-1/4 text-center md:text-left md:border-r-2 border-white md:pr-6">
            <h2 className="text-2xl font-bold mb-2">Our Global Impact</h2>
            <p className="text-sm text-gray-300">
              You're not alone in this. We're building a global legacy.
            </p>
          </div>

          {/* Right Stats */}
          <div className="w-full md:w-3/4 grid grid-cols-1 sm:grid-cols-3 gap-6 text-center">
            {/* Stat 1 */}
            <div className="relative">
              <h3 className="text-2xl font-bold">
                <CountUp end={10000} duration={2} separator="," />+
              </h3>
              <p className="text-sm text-gray-300 mt-1">Students trained</p>
              <div className="hidden sm:block absolute right-0 top-1/2 transform -translate-y-1/2 h-10 border-r-2 border-white"></div>
            </div>

            {/* Stat 2 */}
            <div className="relative">
              <h3 className="text-2xl font-bold">
                <CountUp end={10} duration={2} />+
              </h3>
              <p className="text-sm text-gray-300 mt-1">Countries Learners from</p>
              <div className="hidden sm:block absolute right-0 top-1/2 transform -translate-y-1/2 h-10 border-r-2 border-white"></div>
            </div>

            {/* Stat 3 */}
            <div>
              <h3 className="text-2xl font-bold">
                <CountUp end={50000} duration={2} separator="," />+
              </h3>
              <p className="text-sm text-gray-300 mt-1">Hours Of Tutoring</p>
            </div>
          </div>
        </div>
      </section>

      {/* Overlapping Image Section (like your mockup) */}
     {/* ExamStruggleSection  */}

      {/* MeetMentor Section */}
      <MeetMentor />
    </>
  );
};

export default GlobalImpactCounter;
