import React from "react";
import image1 from "../../../public/arrivals/06.png";
import Image from "next/image";
const MenCollection = () => {
  return (
    <div className="bg-[#F6F5FD] pt-10">
      <div className="container mx-auto ">
        <div className="grid md:grid-cols-12 items-center justify-center">
        <div className="col-span-6">
            {" "}
           <div className="bg-[#EEECFB]">
           <div className="relative w-full overflow-hidden mt-5 mx-auto md:mx-0 ">
              <Image
                src={image1}
                alt=""
                width={280}
                height={280}
                className="w-full object-cover transform  mx-auto md:mx-0"
              />
            </div>
           </div>
          </div>
          <div className="col-span-6">
            <div className="flex flex-col gap-4 mx-auto pl-10 md:mt-0 mt-4 items-center justify-center md:items-start md:justify-center">
              
              <h1 className="text-[28px]  md:text-[48px]">
                MEN'S Collection
              </h1>
              <button className="bg-purple-600  hover:bg-purple-700 text-white font-medium py-2 px-6 rounded-full flex w-44">
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
          </div>
       
        </div>
      </div>
    </div>
  );
};

export default MenCollection;
