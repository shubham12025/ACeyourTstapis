import React from "react";
import FAQ from "./Faq";

const WhyLoveUs = () => {
  const items = [
    {
      title: "No cookie-cutter lessons",
      subtitle: "Every student gets a custom prep plan",
      bgColor: "bg-[#081F3D]",
      cornerClasses: "rounded-tr-[70px] rounded-bl-[70px]",
    },
    {
      title: "Engaging teaching style",
      subtitle: "Memes + stories > boring formulas",
      bgColor: "bg-[#E77813]",
      cornerClasses: "rounded-tl-[70px] rounded-br-[70px]",
    },
    {
      title: "Proven strategies",
      subtitle: "Tested shortcuts that save time on test day",
      bgColor: "bg-[#E77813]",
      cornerClasses: "rounded-tl-[70px] rounded-br-[70px]",
    },
    {
      title: "Affordable & Transparent",
      subtitle: "No hidden costs, no overpriced bundles",
      bgColor: "bg-[#081F3D]",
      cornerClasses: "rounded-tr-[70px] rounded-bl-[70px]",
    },
  ];

  return (
    <>
    <section className="py-12">
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-center  mb-8">
          Why Students & Parents Love Us
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 sm:grid-rows-2 gap-6 text-white">
          {items.map((item, idx) => (
            <div
              key={idx}
              className={`${item.bgColor} ${item.cornerClasses} p-12 min-h-[250px] flex flex-col justify-center items-center text-center`}
            >
              <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
              <p className="text-base opacity-90">{item.subtitle}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
    <FAQ/>
    </>
  );
};

export default WhyLoveUs;
