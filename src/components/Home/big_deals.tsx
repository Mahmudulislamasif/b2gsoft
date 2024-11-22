"use client";
import Image from "next/image";
import React from "react";
import image1 from "../../../public/arrivals/16.png";
import image2 from "../../../public/arrivals/17.svg";
import image3 from "../../../public/arrivals/18.svg";
import image4 from "../../../public/arrivals/19.svg";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import {
  FaRegArrowAltCircleLeft,
  FaRegArrowAltCircleRight,
} from "react-icons/fa";
const products = [
  {
    id: 1,
    image: image1,
    title: "Indian Sharee",
    price: "BDT 2,300",
  },
  {
    id: 2,
    image: image2,
    title: "Silk Saree",
    price: "BDT 3,200",
  },
  {
    id: 3,
    image: image3,
    title: "Cotton Saree",
    price: "BDT 1,800",
  },
  {
    id: 4,
    image: image4,
    title: "Handloom Saree",
    price: "BDT 2,700",
  },
  {
    id: 5,
    image: image1,
    title: "Indian Sharee",
    price: "BDT 2,300",
  },
  {
    id: 6,
    image: image2,
    title: "Silk Saree",
    price: "BDT 3,200",
  },
  {
    id: 7,
    image: image3,
    title: "Cotton Saree",
    price: "BDT 1,800",
  },
  {
    id: 8,
    image: image4,
    title: "Handloom Saree",
    price: "BDT 2,700",
  },
  {
    id: 9,
    image: image1,
    title: "Indian Sharee",
    price: "BDT 2,300",
  },
  {
    id: 10,
    image: image2,
    title: "Silk Saree",
    price: "BDT 3,200",
  },
  {
    id: 11,
    image: image3,
    title: "Cotton Saree",
    price: "BDT 1,800",
  },
  {
    id: 12,
    image: image4,
    title: "Handloom Saree",
    price: "BDT 2,700",
  },
  {
    id: 13,
    image: image1,
    title: "Indian Sharee",
    price: "BDT 2,300",
  },
  {
    id: 14,
    image: image2,
    title: "Silk Saree",
    price: "BDT 3,200",
  },
  {
    id: 15,
    image: image3,
    title: "Cotton Saree",
    price: "BDT 1,800",
  },
  {
    id: 16,
    image: image4,
    title: "Handloom Saree",
    price: "BDT 2,700",
  },
];

const BigDeals = () => {
  return (
    <div className="bg-[#F6F5FD]">
      <div className="container mx-auto py-10">
        <div className="px-2">
          <div className="flex justify-between">
            <div className="mb-6">
              <p className="text-[19px] font-normal text-custom-violet">
                FEATURED PRODUCT
              </p>
              <p className="text-custom-darkGray text-[28px] font-bold">
                New Arrivals
              </p>
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
          <Swiper
            slidesPerView={1}
            spaceBetween={20}
            breakpoints={{
              280: {
                slidesPerView: 1,
              },
              640: {
                slidesPerView: 2,
              },
              768: {
                slidesPerView: 3,
              },
              1024: {
                slidesPerView: 1,
              },
            }}
            navigation={{
              nextEl: ".button-next-slide",
              prevEl: ".button-prev-slide",
            }}
            modules={[Pagination, Autoplay, Navigation]}
            className="relative"
          >
            {products.map((product) => (
              <SwiperSlide>
                <div className="grid grid-cols-12">
                  <div className="md:col-span-3">
                    <div key={product.id} className="bg-white p-2 rounded-xl">
                      <div className="bg-[#F6F5FD] rounded-xl">
                        <div className="relative w-full h-[280px] group overflow-hidden rounded-xl">
                          <Image
                            src={product.image}
                            alt={product.title}
                            width={280}
                            height={280}
                            className="w-full object-cover rounded-xl transform group-hover:scale-110 transition-transform duration-500"
                          />
                        </div>
                      </div>
                      <div className="py-4 flex justify-between">
                        <p className="text-base font-normal text-custom-darkGray">
                          {product.title}
                        </p>
                        <p className="text-[19px] font-semibold text-custom-darkGray">
                          {product.price}
                        </p>
                      </div>
                      <div>
                        <button className="border-[1px] border-custom-violet w-full rounded-xl py-1 text-custom-violet">
                          Add to Cart
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
      <div className="bg-custom-violet text-white w-[120px]  mx-auto text-center rounded-xl py-2">
        <span> See more</span>
      </div>
    </div>
  );
};

export default BigDeals;
