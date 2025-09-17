// Dream.jsx

import React, { useState } from "react";
import HeroImage from "../../public/images/Rectangle 511 (1).png";  
import WhyLoveUs from "./WhyLoveUs";
import DialogForm from "./DialogForm"; // import your dialog form

const Dream = () => {
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const openDialog = () => setIsDialogOpen(true);
  const closeDialog = () => setIsDialogOpen(false);

  return (
    <>
      <section className="bg-white py-16">
        <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center gap-8 lg:gap-16 px-4 lg:px-0">
          
          {/* Left side: text content */}
          <div className="lg:w-1/2">
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              Your Dream College Awaits
            </h1>
            <p className="text-lg text-gray-700 mb-6">
              Harvard, Stanford, NYU, or any dream colleges of your choice, your journey starts here.  
              Don’t just prepare. <span className="text-orange-600 font-semibold">ACE it.</span>
            </p>
            <p className="text-sm text-gray-500 mb-6">
              Limited Spots for Free Demo Classes
            </p>
            <button
              onClick={openDialog} // open dialog on click
              className="bg-orange-600 text-white px-6 py-3 rounded-md hover:bg-orange-700 transition"
            >
              Book Your Free Consultation
            </button>
          </div>
          
          {/* Right side: image */}
          <div className="lg:w-1/2">
            <img
              src={HeroImage}
              alt="Students celebrating in front of college building"
              className="w-full h-auto rounded-md shadow-lg object-cover"
            />
          </div>

        </div>
      </section>

      <WhyLoveUs/>

      {/* Conditionally render DialogForm */}
      {isDialogOpen && <DialogForm open={isDialogOpen} onClose={closeDialog} />}
    </>
  );
};

export default Dream;
