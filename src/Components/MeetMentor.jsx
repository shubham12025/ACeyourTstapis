import React, { useState } from "react";
import PrepStyleSelector from "./PrepStyleSelector";
import DialogForm from "./DialogForm";

const MeetMentor = () => {
  const [openDialog, setOpenDialog] = useState(false);

  return (
    <>
      <section className="relative bg-white py-16 px-6 md:px-16">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-10 md:gap-16">
          {/* Left Image Section */}
          <div className="w-full md:w-2/5 flex justify-center">
            <div className="relative">
              {/* Background Shape */}
              <div className="absolute -z-10 -inset-4 bg-gradient-to-br from-orange-100 to-orange-200 rounded-tl-[80px] rounded-br-[80px] transform rotate-2"></div>

              {/* Mentor Image */}
              <div className="relative">
                <img
                  src="/images/Mentor.png"
                  alt="Mentor Tarun Kaushik"
                  className="w-full max-w-[320px] md:max-w-[460px] rounded-tl-[70px] rounded-br-[70px]"
                />
              </div>
            </div>
          </div>

          {/* Right Content */}
          <div className="w-full md:w-3/5">
            <h2 className="text-3xl sm:text-4xl font-bold text-[#061C3D] mb-4 leading-tight">
              Meet Your Mentor <br />
              <span className="text-[#E77813]">Tarun Kaushik</span>
            </h2>

            <p className="text-lg mb-8 leading-relaxed font-bold">
              Founder of <strong className="text-[#061C3D]">ACE Your Test</strong>, Tarun has guided
              thousands of students to top scores and prestigious global universities.
            </p>

            <div className="mb-8">
              <h3 className="text-xl font-semibold text-[#061C3D] mb-6 border-l-4 border-[#E77813] pl-3">
                What makes him special
              </h3>

              {/* Bullet Points */}
              <ul className="space-y-5">
                <li className="flex items-start">
                  <div className="mr-4 mt-0.5 flex-shrink-0">
                    <img
                      src="/images/Mask group (8).png"
                      alt="Memes and Hacks"
                      className="h-5 w-5"
                    />
                  </div>
                  <span className="text-gray-800 font-medium block">
                    Turns complex concepts into memes, hacks, and shortcuts
                  </span>
                </li>

                <li className="flex items-start">
                  <div className="mr-4 mt-0.5 flex-shrink-0">
                    <img
                      src="/images/Mask group (8).png"
                      alt="Personalized Mentoring"
                      className="h-5 w-5"
                    />
                  </div>
                  <span className="text-gray-800 font-medium block">
                    Offers personalized mentoring that adapts to your style
                  </span>
                </li>

                <li className="flex items-start">
                  <div className="mr-4 mt-0.5 flex-shrink-0">
                    <img
                      src="/images/Mask group (8).png"
                      alt="Results Driven"
                      className="h-5 w-5"
                    />
                  </div>
                  <span className="text-gray-800 font-medium block">
                    Known for being approachable, invested, and results-driven
                  </span>
                </li>
              </ul>
            </div>

            {/* CTA Button */}
            <button
              onClick={() => setOpenDialog(true)}
              className="bg-[#E77813] hover:bg-[#d96b0a] text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-md"
            >
              Book a Session with Tarun
            </button>
          </div>
        </div>
      </section>

      {/* Dialog Form */}
      <DialogForm open={openDialog} onClose={() => setOpenDialog(false)} />

      <PrepStyleSelector />
    </>
  );
};

export default MeetMentor;
