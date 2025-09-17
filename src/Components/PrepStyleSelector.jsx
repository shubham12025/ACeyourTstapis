import React from 'react';
import RoadmapSection from './RoadmapSection';

const prepOptions = [
  {
    title: "Individual Classes",
    description: "One-on-one sessions customized to your pace",
    image: "/images/Mask group(9).png", // Replace with actual image path
    color: "text-orange-600"
  },
  {
    title: "Group Classes",
    description: "Peer-led, interactive learning in small batches",
    image: "/images/learners-classroom 1.png",
    color: "text-orange-600"
  },
  {
    title: "Self-Study Plans",
    description: "Structured programs for independent learners with mentor support",
    image: "/images/Mask group(10).png ",
    color: "text-orange-600"
  },
];

const PrepStyleSelector = () => {
  return (
    <>
    <section className="bg-white py-12">
      {/* Heading Section */}
      <div className="bg-[#061C3D] text-white py-18 text-center -mb-10">
        <h2 className="text-3xl sm:text-4xl font-bold">Choose Your Prep Style</h2>
      </div>

      {/* Cards */}
      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-15">
        {prepOptions.map((option, index) => (
          <div
            key={index}
            className="bg-white rounded-xl shadow-lg overflow-hidden text-center transition duration-300 hover:shadow-2xl"
          >
            <img
              src={option.image}
              alt={option.title}
              className="w-full h-48 object-contain"
            />
            <div className="p-6">
              <h3 className={`text-lg font-bold ${option.color}`}>{option.title}</h3>
              <p className="mt-2 text-gray-600 text-sm">{option.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
    <RoadmapSection/>
    </>
  );
};

export default PrepStyleSelector;
