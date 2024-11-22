import React from "react";

const HeroSection = () => {
  return (
    <section className="relative bg-cover bg-center h-[500px] lg:h-[600px] bg-banner" >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white px-4">
        <h1 className="text-3xl lg:text-5xl font-bold mb-4">
          Elevate Your Everyday Style
        </h1>
        <p className="text-lg lg:text-xl mb-6">
          Discover the Latest Trends in Sustainable Fashion
        </p>
        <button className="bg-purple-600 hover:bg-purple-700 text-white font-medium py-2 px-6 rounded-full flex items-center">
          Shop Now
          <span className="ml-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="w-4 h-4"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M17.25 8.75L21 12m0 0-3.75 3.25M21 12H3"
              />
            </svg>
          </span>
        </button>
      </div>
    </section>
  );
};

export default HeroSection;
