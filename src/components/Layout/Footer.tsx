import Image from "next/image";
import React from "react";
import Image1 from "../../../public/arrivals/11.png";
import Image2 from "../../../public/arrivals/12.png";
import Image3 from "../../../public/arrivals/13.webp"
import Image4 from "../../../public/arrivals/13.png"
const Footer = () => {
  return (
    <div className="bg-custom-black">
      <div className="container mx-auto px-2">
        <div className="py-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <Image
                src={Image1}
                width={197}
                height={49}
                alt=""
                className="mb-5"
              />
              <div>
                <p className="text-white text-base font-normal">
                  Saepe quo suscipit vitae quia. Repudiandae nobis quis.
                  Laboriosam unde quae qui quasi mollitia tenetur. Dicta
                  explicabo est consectetur maxime quos fugit velit assumenda
                  est.{" "}
                </p>
              </div>
            </div>
            <div>
              <p className="text-white font-bold text-[23px]">
                Sign Up For Our Newsletter!
              </p>
              <div>
                <p className="text-white text-base font-normal">
                  Get notified about updates and be the first to get early
                  access to new Podcast episodes.
                </p>
                <div className="w-full relative mt-5">
                  <input
                    type="text"
                    placeholder="Search..."
                    className="border border-[#e5eaf2] py-3 pl-4 pr-[65px] outline-none w-full rounded-md"
                  />

                  <span className="bg-custom-violet text-white absolute top-0 right-0 h-full px-5 flex items-center justify-center rounded-r-md cursor-pointer hover:bg-gray-400 hover:text-gray-200 ">
                    Subscribe
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className=" mt-10 grid grid-cols-1  sm:grid-cols-2 md:grid-cols-3  lg:grid-cols-4 text-white">
            <div className="flex flex-col gap-3">
              <div className="text-base">
                <p className=" font-bold ">Contact Us</p>
                <p className="font-normal">support@we5ive.com</p>
              </div>
            </div>
             <div className="flex flex-col gap-3">
              <div className="text-base font-normal">
                <p>About Us</p>
                <p>Contact Us</p>
              </div>
            </div>
             <div className="flex flex-col gap-3">
              <div className="text-base font-normal">
                <p>Privacy policy</p>
                <p>Terms & Condition</p>
              </div>
            </div>
             <div className="flex flex-col gap-3">
              <div className="text-base ">
                <p className="font-bold">Social Link</p>
                <div className="flex gap-4">
                   <Image
                   src={Image2}
                   alt=""
                   width={24}
                   height={24}
                   />
                    <Image
                   src={Image3}
                   alt=""
                   width={24}
                   height={24}
                   />
                    <Image
                   src={Image4}
                   alt=""
                   width={24}
                   height={24}
                   />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-custom-violet py-[18px]">
      <p className="text-base font-normal text-white text-center">	© 2024 | We5ive</p>
      </div>
    </div>
  );
};

export default Footer;
