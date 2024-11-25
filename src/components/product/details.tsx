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

          {/* Available Sizes and Colors */}
          <div className="mt-6 flex flex-col md:flex-row items-center justify-between">
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
                    className={`px-4 py-2 border rounded-full ${
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
            <div className="flex-1">
              <h3 className="text-sm font-semibold text-gray-600">
                Available Color
              </h3>
              <div className="flex space-x-4 mt-2">
                {["Off White", "Black"].map((color) => (
                  <button
                    key={color}
                    onClick={() => setSelectedColor(color)}
                    className={`flex items-center px-4 py-2 border rounded-full ${
                      selectedColor === color
                        ? "border-purple-600 text-purple-600 bg-purple-50"
                        : "border-gray-300 text-gray-800 hover:border-purple-400"
                    }`}
                  >
                    <span
                      className={`block w-4 h-4 rounded-full mr-2 ${
                        color === "Off White" ? "bg-gray-200" : "bg-black"
                      }`}
                    ></span>
                    {color}
                  </button>
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

            <div className="mt-6 flex space-x-4">
              <button className="flex-1 bg-purple-600 text-white py-3 rounded-full shadow-md hover:bg-purple-700 transition text-center">
                Buy Now
              </button>
              <button className="flex-1 border border-purple-600 text-purple-600 py-3 rounded-full shadow-md hover:bg-purple-100 transition text-center">
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
