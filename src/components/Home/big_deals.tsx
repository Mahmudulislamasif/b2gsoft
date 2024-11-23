"use client";
import Image from "next/image";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { FaRegArrowAltCircleLeft, FaRegArrowAltCircleRight } from "react-icons/fa";

const products = [
  {
    id: 1,
    image: "/arrivals/16.png",
    title: "Woman wearing sari",
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
          <h2 className="text-2xl font-bold text-custom-darkGray">Big Deal</h2>
        </div>
        <div className="flex -mt-2 gap-2">
              <div className="button-prev-slide right-0   grid place-items-center text-white rounded-full">
                <FaRegArrowAltCircleLeft className="text-custom-violet  opacity-60 text-3xl cursor-pointer" />
              </div>
              <div className="button-next-slide  grid place-items-center text-white rounded-full">
                <FaRegArrowAltCircleRight className="text-custom-violet opacity-60 text-3xl cursor-pointer" />
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
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                  {products.slice(0, 8).map((product) => (
                    <div
                      key={product.id}
                      className="bg-white rounded-lg shadow p-4 relative"
                    >
                      {/* Discount Tag */}
                      <div className="absolute bg-purple-100 text-custom-violet text-xs font-bold rounded-full px-3 py-1 top-2 left-2">
                        {product.discount}
                      </div>
                      {/* Product Image */}
                      <div className="relative h-40 mb-4">
                        <Image
                          src={product.image}
                          alt={product.title}
                          layout="fill"
                          objectFit="cover"
                          className="rounded-lg"
                        />
                      </div>
                      {/* Product Info */}
                      <div className="text-center">
                        <h4 className="text-lg font-semibold text-custom-darkGray">
                          {product.title}
                        </h4>
                        <p className="text-lg font-bold text-custom-darkGray">
                          {product.price}
                        </p>
                        {/* Ratings */}
                        <div className="flex justify-center items-center gap-1 text-yellow-400 my-2">
                          {"★".repeat(Math.floor(product.rating))}
                          {"☆".repeat(5 - Math.floor(product.rating))}
                        </div>
                        {/* Add to Cart Button */}
                        <button className="border border-custom-violet text-custom-violet rounded-lg py-2 w-full">
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
