import React from 'react';

const ExamStruggleSection = () => {
  return (
    <section className="bg-white py-8 sm:py-12">
      {/* Container */}
      <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        
        {/* Left: Image */}
        <div className="w-full">
          <img
            src="/images/Rectangle 511.png"
            alt="Student struggling with books"
            className="w-full h-56 sm:h-72 md:h-[400px] object-cover shadow-lg rounded-md"
          />
        </div>

        {/* Right: Text */}
        <div className="flex flex-col gap-4 text-center md:text-left">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-[#061C3D] leading-snug">
            The Exam Prep Struggle <br className="hidden sm:block" /> is Real
          </h2>
          <p className="text-gray-600 font-medium text-sm sm:text-base">Let’s be honest…</p>

          <ul className="space-y-3 text-sm sm:text-base">
            <li className="flex items-start justify-center md:justify-start">
              <img src="/images/Mask group (8).png" alt="youtube" className="w-5 h-5 mr-2 mt-0.5" />
              <span>
                <span className="font-semibold text-gray-800">YouTube rabbit holes?</span>{' '}
                <span className="text-orange-500 font-medium">Confusing.</span>
              </span>
            </li>

            <li className="flex items-start justify-center md:justify-start">
              <img src="/images/Mask group (8).png" alt="book" className="w-5 h-5 mr-2 mt-0.5" />
              <span>
                <span className="font-semibold text-gray-800">Thick prep books?</span>{' '}
                <span className="text-orange-500 font-medium">Boring.</span>
              </span>
            </li>

            <li className="flex items-start justify-center md:justify-start">
              <img src="/images/Mask group (8).png" alt="money" className="w-5 h-5 mr-2 mt-0.5" />
              <span>
                <span className="font-semibold text-gray-800">Overpriced coaching?</span>{' '}
                <span className="text-orange-500 font-medium">Not worth it.</span>
              </span>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default ExamStruggleSection;
