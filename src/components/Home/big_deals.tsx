"use client";
import Image from "next/image";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import {
  FaRegArrowAltCircleLeft,
  FaRegArrowAltCircleRight,
} from "react-icons/fa";
import { IoIosStar } from "react-icons/io";
import { FaRegStar } from "react-icons/fa6";
import { IoArrowBackOutline, IoArrowForwardOutline } from "react-icons/io5";
const products = [
  {
    id: 1,
    image: "/arrivals/16.png",
    title: "Indian Sharee",
    price: "BDT 2,300",
    rating: 4.5,
    discount: "Up to 40%",
  },
  {
    id: 2,
    image: "/arrivals/17.svg",
    title: "Checkered shirt",
    price: "BDT 2,300",
    rating: 3.5,
    discount: "Up to 40%",
  },
  {
    id: 3,
    image: "/arrivals/18.svg",
    title: "Woman wearing sari",
    price: "BDT 2,300",
    rating: 4.5,
    discount: "Up to 40%",
  },
  {
    id: 4,
    image: "/arrivals/19.svg",
    title: "Checkered shirt",
    price: "BDT 2,300",
    rating: 3.5,
    discount: "Up to 40%",
  },
  {
    id: 5,
    image: "/arrivals/16.png",
    title: "Woman wearing sari",
    price: "BDT 2,300",
    rating: 4.5,
    discount: "Up to 40%",
  },
  {
    id: 6,
    image: "/arrivals/17.svg",
    title: "Checkered shirt",
    price: "BDT 2,300",
    rating: 3.5,
    discount: "Up to 40%",
  },
  {
    id: 7,
    image: "/arrivals/18.svg",
    title: "Woman wearing sari",
    price: "BDT 2,300",
    rating: 4.5,
    discount: "Up to 40%",
  },
  {
    id: 8,
    image: "/arrivals/19.svg",
    title: "Checkered shirt",
    price: "BDT 2,300",
    rating: 3.5,
    discount: "Up to 40%",
  },
  {
    id: 9,
    image: "/arrivals/16.png",
    title: "Woman wearing sari",
    price: "BDT 2,300",
    rating: 4.5,
    discount: "Up to 40%",
  },
  {
    id: 10,
    image: "/arrivals/17.svg",
    title: "Checkered shirt",
    price: "BDT 2,300",
    rating: 3.5,
    discount: "Up to 40%",
  },
  {
    id: 11,
    image: "/arrivals/18.svg",
    title: "Woman wearing sari",
    price: "BDT 2,300",
    rating: 4.5,
    discount: "Up to 40%",
  },
  {
    id: 12,
    image: "/arrivals/19.svg",
    title: "Checkered shirt",
    price: "BDT 2,300",
    rating: 3.5,
    discount: "Up to 40%",
  },
  {
    id: 13,
    image: "/arrivals/16.png",
    title: "Woman wearing sari",
    price: "BDT 2,300",
    rating: 4.5,
    discount: "Up to 40%",
  },
  {
    id: 14,
    image: "/arrivals/17.svg",
    title: "Checkered shirt",
    price: "BDT 2,300",
    rating: 3.5,
    discount: "Up to 40%",
  },
  {
    id: 15,
    image: "/arrivals/18.svg",
    title: "Woman wearing sari",
    price: "BDT 2,300",
    rating: 4.5,
    discount: "Up to 40%",
  },
  {
    id: 16,
    image: "/arrivals/19.svg",
    title: "Checkered shirt",
    price: "BDT 2,300",
    rating: 3.5,
    discount: "Up to 40%",
  },
];

const BigDeals = () => {
  // Divide products into chunks of 8

  return (
    <div className="bg-[#F6F5FD] py-10 relative big-deals">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="flex justify-between">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-bold text-custom-darkGray">
              Big Deal
            </h2>
          </div>
          <div className="flex gap-2 mb-2">
              <div className="button-prev-slide border-2 border-custom-violet text-custom-violet rounded-full w-10 h-10 flex items-center justify-center z-10 hover:bg-purple-700 hover:text-white">
                <IoArrowBackOutline size={24} />
              </div>
              <div className="button-next-slide border-2 border-custom-violet text-custom-violet rounded-full w-10 h-10 flex items-center justify-center z-10 hover:bg-purple-700 hover:text-white">
                <IoArrowForwardOutline size={24} />
                
              </div>
            </div>
        </div>
        {/* Swiper */}
        <div className="relative">
          {/* Custom Navigation Arrows */}

          <Swiper
            slidesPerView={1}
            spaceBetween={20}
            navigation={{
              nextEl: ".button-next-slide",
              prevEl: ".button-prev-slide",
            }}
            modules={[Navigation]}
          >
            {products.slice(0, 7).map((product, index) => (
              <SwiperSlide key={index}>
                {/* Grid with 8 Products (4 in the upper row, 4 in the lower row) */}
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6" data-aos="flip-right">
                  {products.slice(0, 8).map((product) => (
                    <div
                      key={product.id}
                      className="bg-white rounded-lg shadow-md p-4 relative"
                    >
                      {/* Discount Tag */}
                      <div className="absolute bg-[#7E53D4] text-white text-xs font-bold px-2 py-1 right-4 top-4 rounded-es-full rounded-ee-full  flex items-center justify-center w-14 h-14 z-10">
                        <span className="leading-tight text-center whitespace-pre-line">
                          {product.discount.replace(/ /g, "\n")}
                        </span>
                      </div>

                      {/* Product Image */}
                      <div className="relative  h-64 mb-4 bg-[#F6F5FD] rounded-lg overflow-hidden">
                        <Image
                          src={product.image}
                          alt={product.title}
                          layout="fill"
                          objectFit="cover"
                          className="rounded-lg"
                        />
                      </div>

                      {/* Ratings */}
                      <div className="flex gap-2 items-center">
                        <div className="flex text-yellow-400">
                          {/* Use Icons for Dynamic Rating */}
                          {[...Array(Math.floor(product.rating))].map(
                            (_, i) => (
                              <IoIosStar key={i} />
                            )
                          )}
                          {[...Array(5 - Math.floor(product.rating))].map(
                            (_, i) => (
                              <FaRegStar key={i} />
                            )
                          )}
                        </div>
                        <p className="text-custom-black text-sm">(50)</p>
                      </div>

                      {/* Product Info */}
                      <div className="text-center">
                        <div className="flex justify-between items-center mb-2">
                          <h4 className="text-base font-medium text-custom-darkGray truncate">
                            {product.title}
                          </h4>
                          <p className="text-lg font-bold text-custom-darkGray my-2">
                            {product.price}
                          </p>
                        </div>

                        {/* Add to Cart Button */}
                        <button className="border border-custom-violet text-custom-violet rounded-lg py-2 w-full hover:bg-custom-violet hover:text-white transition">
                          Add to Cart
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default BigDeals;
