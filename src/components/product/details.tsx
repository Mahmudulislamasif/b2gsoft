"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Navigation, Thumbs } from "swiper/modules";
import { useState } from "react";
import Layout from "@/components/Layout/Layout";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
const Product = () => {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  const [selectedSize, setSelectedSize] = useState("S");
  const [selectedColor, setSelectedColor] = useState("Off White");
  const [quantity, setQuantity] = useState(1);

  return (
    <div className="min-h-screen bg-gray-50 p-6 md:p-12">
    <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
      {/* Product Image Section */}
      <div>
        {/* Main Image Swiper */}
        <Swiper
          modules={[FreeMode, Navigation, Thumbs]}
          navigation
          loop={true}
          thumbs={{ swiper: thumbsSwiper }}
          className="w-full"
        >
          <SwiperSlide>
            <img
              src="/images/hoodie1.jpg"
              alt="White Hoodie 1"
              className="rounded-lg object-cover w-full"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="/images/hoodie2.jpg"
              alt="White Hoodie 2"
              className="rounded-lg object-cover w-full"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="/images/hoodie3.jpg"
              alt="White Hoodie 3"
              className="rounded-lg object-cover w-full"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="/images/hoodie4.jpg"
              alt="White Hoodie 4"
              className="rounded-lg object-cover w-full"
            />
          </SwiperSlide>
        </Swiper>

        {/* Thumbnail Swiper */}
        <Swiper
          onSwiper={setThumbsSwiper}
          modules={[Thumbs]}
          spaceBetween={10}
          slidesPerView={4}
          watchSlidesProgress
          className="mt-4"
        >
          <SwiperSlide>
            <img
              src="/images/hoodie1.jpg"
              alt="Thumbnail 1"
              className="rounded-lg object-cover cursor-pointer border hover:border-purple-500"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="/images/hoodie2.jpg"
              alt="Thumbnail 2"
              className="rounded-lg object-cover cursor-pointer border hover:border-purple-500"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="/images/hoodie3.jpg"
              alt="Thumbnail 3"
              className="rounded-lg object-cover cursor-pointer border hover:border-purple-500"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="/images/hoodie4.jpg"
              alt="Thumbnail 4"
              className="rounded-lg object-cover cursor-pointer border hover:border-purple-500"
            />
          </SwiperSlide>
        </Swiper>
      </div>

      {/* Product Details Section */}
      <div>
        <h2 className="text-purple-600 font-semibold text-sm uppercase">
          New Arrival
        </h2>
        <h1 className="text-3xl font-bold text-gray-800 mt-2">
          White Hoodie
        </h1>
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
              className="h-5 w-5 text-gray-400"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M12 4.293l1.801 3.646 4.036.586-2.919 2.845.688 4.017L12 13.998l-3.606 1.889.688-4.017-2.919-2.845 4.036-.586L12 4.293z" />
            </svg>
          </div>
          <p className="text-sm text-gray-600">(121 reviews)</p>
        </div>

        <p className="text-2xl font-semibold text-gray-800 mt-4">
          BDT 2500
        </p>

        {/* Available Sizes */}
        <div className="mt-6">
          <h3 className="text-sm font-semibold text-gray-600">
            Available Size
          </h3>
          <div className="flex space-x-4 mt-2">
            {["S", "M", "L", "XL"].map((size) => (
              <button
                key={size}
                onClick={() => setSelectedSize(size)}
                className={`px-4 py-2 border rounded-md ${
                  selectedSize === size
                    ? "bg-purple-600 text-white"
                    : "bg-white text-gray-800 hover:bg-gray-100"
                }`}
              >
                {size}
              </button>
            ))}
          </div>
        </div>

        {/* Available Colors */}
        <div className="mt-6">
          <h3 className="text-sm font-semibold text-gray-600">
            Available Color
          </h3>
          <div className="flex space-x-4 mt-2">
            {["Off White", "Black"].map((color) => (
              <button
                key={color}
                onClick={() => setSelectedColor(color)}
                className={`px-4 py-2 border rounded-md ${
                  selectedColor === color
                    ? "bg-purple-600 text-white"
                    : "bg-white text-gray-800 hover:bg-gray-100"
                }`}
              >
                {color}
              </button>
            ))}
          </div>
        </div>

        {/* Quantity Selector */}
        <div className="mt-6">
          <h3 className="text-sm font-semibold text-gray-600">Quantity</h3>
          <div className="flex items-center space-x-4 mt-2">
            <button
              onClick={() => setQuantity(Math.max(1, quantity - 1))}
              className="px-3 py-2 bg-gray-200 rounded-md hover:bg-gray-300"
            >
              -
            </button>
            <span className="text-lg font-medium">{quantity}</span>
            <button
              onClick={() => setQuantity(quantity + 1)}
              className="px-3 py-2 bg-gray-200 rounded-md hover:bg-gray-300"
            >
              +
            </button>
          </div>
        </div>

        {/* Buttons */}
        <div className="mt-6 flex space-x-4">
          <button className="w-full bg-purple-600 text-white py-2 rounded-md hover:bg-purple-700">
            Buy Now
          </button>
          <button className="w-full border border-purple-600 text-purple-600 py-2 rounded-md hover:bg-purple-100">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  </div>
  );
};

export default Product;
