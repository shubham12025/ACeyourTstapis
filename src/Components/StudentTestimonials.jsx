import React from "react";
import Slider from "react-slick";
import { FaQuoteLeft, FaStar } from "react-icons/fa"; 
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import StatsBar from "./StatsBar";

const testimonials = [
  {
    name: "Raghav Chopra",
    role: "Product Manager",
    text: "Tarun Sir is a great teacher, mentor, guide and an amazing person... helped me get 700 in my GMAT exam. Would recommend Tarun Sir without any fail.",
    img: "/images/1643645706525.jpg",
    rating: 5,
  },
  {
    name: "Darsh Chadha",
    role: "Investment Analyst",
    text: "His expertise, patience, and dedication were crucial to my success... I achieved my target score... I highly recommend Tarun Sir to anyone aiming for a 700+ GMAT score.",
    img: "/images/1626151045950.jpg",
    rating: 4,
  },
  {
    name: "Anant Kapoor",
    role: "Co-founder at punya",
    text: "Never thought learning could be this fun and effective. Tarun Sir’s strategies worked wonders. Scored 710 on my first attempt!",
    img: "/images/1542252749957.jpg",
    rating: 5,
  },
  {
    name: "Aarav Mehta",
    role: "Tech Consultant",
    text: "Clear explanations, effective techniques, and a truly student-centric approach. Tarun Sir is a game changer!",
    img: "/images/1698789318764.jpg",
    rating: 4,
  },
];

const PrevArrow = ({ onClick }) => (
  <div
    className="absolute left-0 top-1/2 transform -translate-y-1/2 z-10 sm:-left-8 cursor-pointer"
    onClick={onClick}
  >
    <button className="bg-white border border-orange-500 text-orange-500 rounded-full p-2 hover:bg-orange-100 transition">
      &lt;
    </button>
  </div>
);

const NextArrow = ({ onClick }) => (
  <div
    className="absolute right-0 top-1/2 transform -translate-y-1/2 z-10 sm:-right-8 cursor-pointer"
    onClick={onClick}
  >
    <button className="bg-white border border-orange-500 text-orange-500 rounded-full p-2 hover:bg-orange-100 transition">
      &gt;
    </button>
  </div>
);

// ⭐ Rating stars generator
const StarRating = ({ rating }) => {
  return (
    <div className="flex items-center gap-1 mb-2">
      {[...Array(5)].map((_, i) => (
        <FaStar
          key={i}
          className={`${
            i < rating ? "text-yellow-400" : "text-gray-500"
          } text-sm sm:text-base`}
        />
      ))}
    </div>
  );
};

const StudentTestimonials = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    arrows: true,
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: { slidesToShow: 2 },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          arrows: false,
          dots: true,
        },
      },
    ],
  };

  return (
    <>
      <section className="bg-white py-12 px-4 sm:py-16 sm:px-6">
        <div className="max-w-6xl mx-auto relative">
          <h2 className="text-2xl sm:text-3xl font-bold text-center mb-8 text-[#2D2D2D]">
            Students Testimonials
          </h2>

          <Slider {...settings} className="relative">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="px-2 sm:px-3">
                <div className="bg-[#061C3D] rounded-xl border-2 border-[#061C3D] shadow-md p-4 sm:p-6 min-h-[250px] relative flex flex-col sm:flex-row gap-4">
                  <div className="flex-shrink-0 flex justify-center sm:justify-start">
                    <img
                      src={testimonial.img}
                      alt={testimonial.name}
                      className="w-16 h-16 sm:w-20 sm:h-20 rounded-full border-2 border-orange-500 object-cover"
                    />
                  </div>
                  <div className="flex-1 relative pt-10">
                    <FaQuoteLeft className="absolute text-white text-3xl sm:text-4xl opacity-10 top-0 left-0" />
                    <h4 className="font-semibold text-white text-sm sm:text-base pt-6 sm:pt-2">
                      {testimonial.name}
                    </h4>
                    <p className="text-xs sm:text-sm text-gray-300 mb-1">
                      ({testimonial.role})
                    </p>

                    {/* ⭐ Stars */}
                    <StarRating rating={testimonial.rating} />

                    <p className="text-xs sm:text-sm text-gray-200 leading-relaxed">
                      {testimonial.text}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </section>
      <StatsBar />
    </>
  );
};

export default StudentTestimonials;
