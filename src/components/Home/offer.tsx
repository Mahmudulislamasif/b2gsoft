"use client";

import React from "react";
import image1 from "../../../public/arrivals/05.png";
import Image from "next/image";

import "swiper/css/thumbs";

import "swiper/swiper-bundle.css";
import "swiper/swiper-bundle.css";

const Offer = () => {
  return (
    <>
      <div className="bg-[#F6F5FD] pt-10">
        <div className="container mx-auto bg-[#EEECFB]">
          <div className="grid md:grid-cols-12 items-center justify-center">
            <div className="col-span-12 md:col-span-8">
              <div className="flex flex-col gap-4 mx-auto md:pl-10 md:mt-0 mt-4 items-center justify-center md:items-start md:justify-center">
                <p className="text-[24px] font-normal text-[#6F42C1] offer">
                  Big Deal
                </p>
                <h1 className="text-[26px]  md:text-[48px] md:text-left text-center">
                  30% Off for New Customers
                </h1>
                <button className=" flex items-center">
                  <p className="text-[19px] font-normal bg-purple-600 hover:bg-purple-700 text-white  py-2 px-6 rounded-full">
                    Shop Now
                  </p>
                  <span className=" rounded-full text-[19px]  font-normal bg-purple-600 hover:bg-purple-700 text-white  py-2.5 px-2.5">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                    >
                      <path
                        d="M17 7L6 18"
                        stroke="white"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                      />
                      <path
                        d="M11 6.13153C11 6.13153 16.6335 5.65664 17.4885 6.51155C18.3434 7.36647 17.8684 13 17.8684 13"
                        stroke="white"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </span>
                </button>
              </div>
            </div>
            <div className=" col-span-12 md:col-span-4">
              {" "}
              <div className="relative w-full h-auto group overflow-hidden mt-5 mx-auto md:mx-0">
                <Image
                  src={image1}
                  alt=""
                  width={280}
                  height={280}
                  className="w-full object-cover transform group-hover:scale-110 transition-transform duration-500 mx-auto md:mx-0"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Offer;
