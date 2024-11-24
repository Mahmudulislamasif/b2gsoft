import React from "react";
import Button from "../Buttton/button";

const HeroSection = () => {
  return (
    <section className="relative bg-cover bg-center h-[500px] lg:h-[600px] bg-banner mt-12 md:mt-16">
      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white px-4">
        <h1 className="text-[23px] lg:text-5xl font-bold mb-2">
          Elevate Your Everyday Style
        </h1>
        <p className="text-[13px] lg:text-[19px] mb-6">
          Discover the Latest Trends in Sustainable Fashion
        </p>
       <Button/>
      </div>
    </section>
  );
};

export default HeroSection;
