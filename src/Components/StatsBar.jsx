// StatsBar.jsx

import React from "react";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";

// Import the image
// If your image file is in src/assets/Mask-group-11.png, adjust path accordingly
import MaskImage from "../../public/images/Mask group (11).png";
import Dream from "./Dream";

const StatsBar = () => {
  const stats = [
    { value: 10000, suffix: "+", label: "Students Trained" },
    { value: 90, suffix: "%", label: "Hit Target Scores" },
    { value: 100, suffix: "%", label: "Happy Students" },
  ];

  const { ref, inView } = useInView({
    triggerOnce: true, // Only animate once
    threshold: 0.3,     // When 30% of the section is visible
  });

  return (
    <>
    <section className="bg-orange-500 py-10" ref={ref}>
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-center gap-20 md:gap-24 space-y-8 md:space-y-0 text-white">
        {stats.map((item, index) => (
          <div key={index} className="flex items-center gap-4">
            <div className="text-center">
              <h3 className="text-4xl md:text-4xl font-bold">
                {inView ? (
                  <CountUp
                    start={0}
                    end={item.value}
                    duration={2.5}
                    suffix={item.suffix}
                  />
                ) : (
                  "0" + item.suffix
                )}
              </h3>
              <p className="text-lg md:text-xl mt-2">{item.label}</p>
            </div>

            {index !== stats.length - 1 && (
              <div className="hidden md:block">
                <img
                  src={MaskImage}
                  alt="mask group"
                  className="w-22 h-22 object-contain"
                />
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
    <Dream/>
    </>
  );
};

export default StatsBar;
