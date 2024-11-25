"use client";

import Image from "next/image";
import React from "react";
import image1 from "../../../public/arrivals/07.png";
import image2 from "../../../public/arrivals/08.png";
import image3 from "../../../public/arrivals/09.png";
import image4 from "../../../public/arrivals/10.png";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import {
  FaRegArrowAltCircleLeft,
  FaRegArrowAltCircleRight,
} from "react-icons/fa";
import Link from "next/link";
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
    title: "Hoodie",
    price: "BDT 3,200",
  },
  {
    id: 3,
    image: image3,
    title: "Plazu",
    price: "BDT 1,800",
  },
  {
    id: 4,
    image: image4,
    title: "Jacket",
    price: "BDT 2,700",
  },
  {
    id: 5,
    image: image1,
    title: "Handloom Saree",
    price: "BDT 2,700",
  },
  {
    id: 6,
    image: image2,
    title: "Handloom Saree",
    price: "BDT 2,700",
  },
];

const Arrivals = () => {
  return (
    <div className="bg-[#F6F5FD]">
      <div className="container mx-auto py-12">
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
            slidesPerView={4}
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
                slidesPerView: 4,
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
              <SwiperSlide key={product.id}>
                <Link href={`/product/1`}>
                <div key={product.id} className="bg-white p-2 rounded-xl" data-aos="flip-left">
                  <div className="bg-[#F6F5FD] rounded-xl">
                    <div>
                      <Image
                        src={product.image}
                        alt={product.title}
                        width={286}
                        height={287}
                        className="w-full object-cover rounded-xl transform group-hover:scale-110 transition-transform duration-500"
                      />
                    </div>
                  </div>
                  <div className="py-5 flex justify-between">
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
                </Link>
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

export default Arrivals;
