import React from "react";
import Button from "../Buttton/button";

const HeroSection = () => {
  return (
    <section className="relative bg-cover bg-center h-[500px] lg:h-[600px] bg-banner mt-12 md:mt-16">
      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white px-4">
        <h1
          className="text-[23px] lg:text-5xl font-bold mb-2"
          data-aos="fade-right"
          data-aos-offset="300"
          data-aos-easing="ease-in-sine"
        >
          Elevate Your Everyday Style
        </h1>
        <p
          className="text-[13px] lg:text-[19px] mb-6"
          data-aos="fade-up"
     data-aos-anchor-placement="top-bottom"
        >
          Discover the Latest Trends in Sustainable Fashion
        </p>
        <Button />
      </div>
    </section>
  );
};

export default HeroSection;
