import React from 'react';
import ExamStruggleSection from './ExamStruggleSection';
import EnterAceSection from './EnterAceSection';

const RoadmapSection = () => {
  return (
    <>
      <section className="bg-[#EBE9E9] py-16 px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Heading */}
          <h2 className="text-3xl md:text-4xl font-bold text-center text-[#2D2D2D] mb-16">
            Why Roadmap Matters More Than Coaching
          </h2>

          {/* Row 1 */}
          <div className="flex flex-col md:flex-row items-center gap-10 mb-16 relative">
            {/* Left: Text Box */}
            <div className="bg-[#061C3D] text-white p-6 md:p-8 rounded-2xl shadow-lg
                            w-full md:w-1/2 relative md:-translate-x-10 z-10">
              <p className="mb-5 text-base sm:text-lg leading-relaxed">
                Yes, you can prepare for GMAT, GRE, or SAT on your own.
                <br />
                But here’s the truth:
              </p>
              <ul className="space-y-4 text-sm md:text-base">
                <li className="flex items-start">
                  <img src="/images/letter-x 1.png" alt="cross" className="w-5 h-5 mr-2 mt-0.5" />
                  <span>
                    <strong>Without <span className='text-orange-400'>direction</span></strong> → Months wasted chasing random resources.
                  </span>
                </li>
                <li className="flex items-start">
                  <img src="/images/letter-x 1.png" alt="cross" className="w-5 h-5 mr-2 mt-0.5" />
                  <span>
                    <strong>Without a <span className='text-orange-400'>roadmap</span></strong> → You prepare harder, not smarter.
                  </span>
                </li>
                <li className="flex items-start">
                  <img src="/images/letter-x 1.png" alt="cross" className="w-5 h-5 mr-2 mt-0.5" />
                  <span>
                    <strong>Without expert <span className='text-orange-400'>feedback</span></strong> → Too late to spot weaknesses.
                  </span>
                </li>
              </ul>
            </div>

            {/* Right: Image */}
            <div className="w-full md:w-1/2 relative">
              <img
                src="/images/educational-conept-tired-student-library 1.png"
                alt="Frustrated student"
                className="w-full h-64 sm:h-80 md:h-[350px] object-cover rounded-2xl shadow-lg"
              />
            </div>
          </div>

          {/* Row 2 */}
          <div className="flex flex-col md:flex-row items-center gap-10 relative">
            {/* Left: Image */}
            <div className="w-full md:w-1/2 relative">
              <img
                src="/images/educational-conept-tired-student-library 1 (1).png"
                alt="Happy student"
                className="w-full h-64 sm:h-80 md:h-[350px] object-cover rounded-2xl shadow-lg"
              />
            </div>

            {/* Right: Text Box */}
            <div className="bg-[#061C3D] text-white p-6 md:p-8 rounded-2xl shadow-lg ml-10
                            w-full md:w-1/2 relative md:-translate-x-10 z-10">
              <h3 className="text-lg md:text-xl font-semibold mb-5">With ACE Your Test</h3>
              <ul className="space-y-4 text-sm md:text-base">
                <li className="flex items-start">
                  <img src="/images/Mask group (8).png" alt="check" className="w-5 h-5 mr-2 mt-0.5" />
                  <span>
                    You save <strong>time</strong> (shortest prep path)
                  </span>
                </li>
                <li className="flex items-start">
                  <img src="/images/Mask group (8).png" alt="check" className="w-5 h-5 mr-2 mt-0.5" />
                  <span>
                    You save <strong>effort</strong> (focus only on what works)
                  </span>
                </li>
                <li className="flex items-start">
                  <img src="/images/Mask group (8).png" alt="check" className="w-5 h-5 mr-2 mt-0.5" />
                  <span>
                    You get <strong>results faster</strong> (score boost guaranteed)
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <ExamStruggleSection />
      <EnterAceSection />
    </>
  );
};

export default RoadmapSection;
