"use client";
import { Swiper as SwiperInstance } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Thumbs } from "swiper/modules";
import { useState, useEffect } from "react";
import { IoArrowForwardOutline, IoArrowBackOutline } from "react-icons/io5";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Image20 from "../../../public/arrivals/20.png";
import Image21 from "../../../public/arrivals/21.png";
import Image22 from "../../../public/arrivals/22.png";
import Image23 from "../../../public/arrivals/23.png";
import Image from "next/image";

const Product = () => {
  const [thumbsSwiper, setThumbsSwiper] = useState<SwiperInstance | null>(null);
  const [isSmallDevice, setIsSmallDevice] = useState(false);
  const [selectedSize, setSelectedSize] = useState("S");
  const [selectedColor, setSelectedColor] = useState("Off White");
  const [quantity, setQuantity] = useState(1);
  const images = [Image20, Image21, Image22, Image23];

  // Detect small devices
  useEffect(() => {
    const handleResize = () => {
      setIsSmallDevice(window.innerWidth < 768); // Tailwind's `md` breakpoint
    };
    handleResize(); // Run on initial render
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 p-6 md:p-12 mt-16">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Product Image Section */}
        <div className="relative">
          {/* Main Swiper */}
          <Swiper
            modules={isSmallDevice ? [Navigation] : [Navigation, Thumbs]} // Remove Thumbs for small devices
            spaceBetween={10}
            navigation={{
              nextEl: ".custom-next", // Custom navigation buttons
              prevEl: ".custom-prev",
            }}
            thumbs={!isSmallDevice ? { swiper: thumbsSwiper } : undefined} // Conditionally apply Thumbs
            className="mb-4"
          >
            {images.map((src, index) => (
              <SwiperSlide key={index}>
                <div className="relative w-full h-96">
                  <Image
                    src={src}
                    alt={`Product ${index}`}
                    layout="fill"
                    objectFit="cover"
                    className="rounded-lg"
                    priority={index === 0}
                  />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Custom Navigation Buttons with Icons */}
          <button className="custom-prev absolute left-2 top-1/2 transform -translate-y-1/2 border-2 border-custom-violet text-custom-violet rounded-full w-10 h-10 flex items-center justify-center z-10 hover:bg-purple-700 hover:text-white">
            <IoArrowBackOutline size={24} />
          </button>
          <button className="custom-next absolute right-2 top-1/2 transform -translate-y-1/2 border-2 border-custom-violet text-custom-violet rounded-full w-10 h-10 flex items-center justify-center z-10 hover:bg-purple-700 hover:text-white">
            <IoArrowForwardOutline size={24} />
          </button>

          {/* Thumbnails Swiper */}
          {!isSmallDevice && (
            <Swiper
              modules={[Thumbs]}
              spaceBetween={10}
              slidesPerView={4}
              onSwiper={setThumbsSwiper}
              className="mt-2"
            >
              {images.map((src, index) => (
                <SwiperSlide key={index}>
                  <div className="relative w-full h-28 cursor-pointer border border-gray-300 hover:border-purple-600 rounded-lg">
                    <Image
                      src={src}
                      alt={`Thumbnail ${index}`}
                      layout="fill"
                      objectFit="cover"
                      className="rounded-lg"
                    />
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          )}
        </div>

        {/* Product Details Section */}
        <div>
          <div className="inline-block bg-purple-600 text-white text-xs font-semibold uppercase py-1 px-4 rounded-tl-lg rounded-tr-lg">
            New Arrival
          </div>

          <h1 className="text-3xl font-bold text-gray-800 mt-4">
            White Hoodie
          </h1>

          {/* Star Ratings and Reviews */}
          <div className="flex items-center mt-2 space-x-2">
            <div className="flex items-center space-x-1 text-yellow-500">
              {[...Array(4)].map((_, i) => (
                <svg
                  key={i}
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M12 4.293l1.801 3.646 4.036.586-2.919 2.845.688 4.017L12 13.998l-3.606 1.889.688-4.017-2.919-2.845 4.036-.586L12 4.293z" />
                </svg>
              ))}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 text-gray-300"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M12 4.293l1.801 3.646 4.036.586-2.919 2.845.688 4.017L12 13.998l-3.606 1.889.688-4.017-2.919-2.845 4.036-.586L12 4.293z" />
              </svg>
            </div>

            <span className="text-gray-800 font-medium">(4.0)</span>
            <span className="text-purple-600 font-medium cursor-pointer hover:underline">
              121 reviews
            </span>
          </div>

          {/* Price */}
          <p className="text-2xl font-semibold text-gray-800 mt-4">BDT 2500</p>
          <div className="relative mt-5">
            {/* Dashed Line */}
            {/* <div className="w-full">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-full"
                height="2"
                viewBox="0 0 624 2"
                fill="none"
              >
                <path d="M0 1H624" stroke="#CECECE" stroke-dasharray="2 2" />
              </svg>
            </div> */}

            {/* Your Bag Floating Button */}
            <div className="bg-purple-600 absolute right-0 -bottom-11 hidden md:flex items-center justify-center flex-col w-24 h-24 rounded-xl shadow-lg text-white">
              {/* Bag Icon */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="32"
                height="32"
                viewBox="0 0 32 32"
                fill="none"
              >
                <path
                  d="M5.16402 22.6925L3.55927 13.1197C3.31663 11.6724 3.19532 10.9487 3.5838 10.4743C3.9723 10 4.68631 10 6.11435 10H25.886C27.314 10 28.028 10 28.4166 10.4743C28.805 10.9487 28.6836 11.6724 28.4411 13.1197L26.8363 22.6925C26.3044 25.8655 26.0384 27.4519 24.9526 28.3927C23.8668 29.3333 22.3015 29.3333 19.1711 29.3333H12.8293C9.69878 29.3333 8.13354 29.3333 7.0477 28.3927C5.96186 27.4519 5.69591 25.8655 5.16402 22.6925Z"
                  stroke="#F6F5FD"
                  strokeWidth="2.5"
                />
                <path
                  d="M23.3332 10C23.3332 5.94993 20.05 2.66669 15.9998 2.66669C11.9497 2.66669 8.6665 5.94993 8.6665 10"
                  stroke="#F6F5FD"
                  strokeWidth="2.5"
                />
              </svg>

              {/* Text */}
              <div className="mt-2 text-center">
                <p className="text-sm font-medium">Your bag</p>
                <p className="text-lg font-bold">0</p>
              </div>
            </div>
          </div>

          {/* Available Sizes and Colors */}
          <div className="mt-6 flex flex-col md:flex-row items-start md:items-center justify-between">
            {/* Available Size */}
            <div className="flex-1">
              <h3 className="text-sm font-semibold text-gray-600">
                Available Size
              </h3>
              <div className="flex space-x-4 mt-2">
                {["S", "M", "L", "XL"].map((size) => (
                  <button
                    key={size}
                    onClick={() => setSelectedSize(size)}
                    className={`px-4 py-2 border rounded-lg ${
                      selectedSize === size
                        ? "border-purple-600 text-purple-600 bg-purple-50"
                        : "border-gray-300 text-gray-800 hover:border-purple-400"
                    }`}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>

            {/* Spacer for small screens */}
            <div className="w-full h-4 md:hidden"></div>

            {/* Available Color */}
            <div className="flex-1 md:block hidden">
              <h3 className="text-sm font-semibold text-gray-600">
                Available Color
              </h3>
              <div className="flex space-x-4 mt-2">
                {["Off White", "Black"].map((color) => (
                  <label
                    key={color}
                    className="flex items-center space-x-2 cursor-pointer"
                  >
                    <input
                      type="radio"
                      name="color"
                      value={color}
                      checked={selectedColor === color}
                      onChange={() => setSelectedColor(color)}
                      className="hidden"
                    />
                    <span
                      className={`w-6 h-6 rounded-full border-2 ${
                        selectedColor === color
                          ? "border-purple-600"
                          : "border-gray-300"
                      } flex items-center justify-center`}
                    >
                      {selectedColor === color && (
                        <span className="w-3 h-3 rounded-full bg-purple-600"></span>
                      )}
                    </span>
                    <span
                      className={`text-sm font-medium ${
                        selectedColor === color
                          ? "text-purple-600"
                          : "text-gray-800"
                      }`}
                    >
                      {color}
                    </span>
                  </label>
                ))}
              </div>
            </div>
          </div>

          {/* Quantity Selector and Buttons */}
          <div className="mt-6">
            <h3 className="text-sm font-semibold text-gray-600">Quantity</h3>
            <div className="flex items-center mt-2 bg-purple-50 rounded-full w-max px-4 py-2">
              <button
                onClick={() => setQuantity(Math.max(1, quantity - 1))}
                className="text-lg font-bold text-purple-600 px-4 focus:outline-none hover:text-purple-700"
              >
                −
              </button>
              <span className="text-lg font-semibold text-gray-800 px-6">
                {quantity}
              </span>
              <button
                onClick={() => setQuantity(quantity + 1)}
                className="text-lg font-bold text-purple-600 px-4 focus:outline-none hover:text-purple-700"
              >
                +
              </button>
            </div>

            <div className="mt-6 grid md:grid-cols-2 gap-4">
              <button
                className=" bg-purple-600 text-white py-3 rounded-lg
               shadow-md hover:bg-purple-700 transition text-center"
              >
                Buy Now
              </button>
              <button className=" border border-purple-600 text-purple-600 py-3 rounded-lg shadow-md hover:bg-purple-100 transition text-center">
                Add to Cart
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
