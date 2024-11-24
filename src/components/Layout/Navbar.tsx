"use client";
import Image from "next/image";
import { useState } from "react";
import Image1 from "../../../public/arrivals/logo2.png";
import Image2 from "../../../public/arrivals/logo.png";
import Image3 from "../../../public/arrivals/logo3.png";
import Image5 from "../../../public/arrivals/logo4.png";

import Image4 from "../../../public/arrivals/shopping.png";
import Link from "next/link";

export default function Navbar() {
  const [isDrawerOpen, setDrawerOpen] = useState(false);
  const [isSearchOpen, setSearchOpen] = useState(false);

  return (
    <header className="w-full shadow-md bg-[#F4F8FF] fixed top-0 z-50 px-2">
      {/* Mobile View */}
      <div className="md:hidden flex items-center justify-between px-4 py-3">
        {/* Drawer Toggle Button */}
        <div className="flex gap-2">
          <button
            onClick={() => setDrawerOpen(true)}
            className="text-gray-600 focus:outline-none"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
            >
              <path
                d="M4 5H16"
                stroke="#141B34"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M4 12H20"
                stroke="#141B34"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M4 19H12"
                stroke="#141B34"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
          <div className="flex gap-2">
            <Image src={Image3} alt="" width={31} height={18} />
            <Image src={Image5} alt="" width={62} height={14} />
          </div>
        </div>
        {/* Logo */}

        {/* Search Toggle Button */}
        <div className="flex gap-4 items-center">
          <button onClick={() => setSearchOpen(!isSearchOpen)}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
            >
              <path
                d="M17.5 17.5L22 22"
                stroke="#1D1D1D"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M20 11C20 6.02944 15.9706 2 11 2C6.02944 2 2 6.02944 2 11C2 15.9706 6.02944 20 11 20C15.9706 20 20 15.9706 20 11Z"
                stroke="#1D1D1D"
                strokeWidth="1.5"
                strokeLinejoin="round"
              />
            </svg>
          </button>
          <Image src={Image4} alt="" width={24} height={23} />
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="23"
            viewBox="0 0 21 20"
            fill="none"
          >
            <path
              d="M6.18256 12.7734C5.03798 13.4549 2.03694 14.8465 3.86477 16.5879C4.75766 17.4386 5.7521 18.0469 7.00235 18.0469H14.1365C15.3868 18.0469 16.3813 17.4386 17.2741 16.5879C19.102 14.8465 16.1009 13.4549 14.9563 12.7734C12.2723 11.1751 8.86661 11.1751 6.18256 12.7734Z"
              stroke="#1D1D1D"
              strokeWidth="1.21354"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M14.2095 5.50696C14.2095 7.51762 12.5796 9.14758 10.5689 9.14758C8.55825 9.14758 6.92828 7.51762 6.92828 5.50696C6.92828 3.4963 8.55825 1.86633 10.5689 1.86633C12.5796 1.86633 14.2095 3.4963 14.2095 5.50696Z"
              stroke="#1D1D1D"
              strokeWidth="1.21354"
            />
          </svg>
        </div>
      </div>

      {/* Search Dropdown Animation */}
      {isSearchOpen && (
        <div className="absolute top-12 left-0 w-full bg-gray-100 shadow-md px-4 py-2 transition-all duration-300">
          <input
            type="text"
            placeholder="Search"
            className="w-full px-4 py-2 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-500"
          />
        </div>
      )}

      {/* Drawer and Overlay */}
      <div
        className={`fixed inset-0 z-40 bg-black transition-opacity duration-300 ease-in-out ${
          isDrawerOpen ? "bg-opacity-50" : "bg-opacity-0 pointer-events-none"
        }`}
        onClick={() => setDrawerOpen(false)}
      ></div>

      <div
        className={`fixed inset-y-0 left-0 w-3/4 max-w-sm bg-white shadow-md z-50 transform transition-transform duration-300 ease-in-out ${
          isDrawerOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        {/* Close Button */}
        <button
          onClick={() => setDrawerOpen(false)}
          className="text-gray-600 p-4 focus:outline-none"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M6 18L18 6M6 6l12 12"
            ></path>
          </svg>
        </button>

        {/* Drawer Menu Items */}
        <nav className="flex flex-col p-4 space-y-4">
          <Link href="#" className="text-gray-700 hover:text-purple-600">
            Home
          </Link>
          <Link href="#" className="text-gray-700 hover:text-purple-600">
            Shop
          </Link>
          <Link href="#" className="text-gray-700 hover:text-purple-600">
            Deals
          </Link>
          <Link href="#" className="text-gray-700 hover:text-purple-600">
            What&#39;s New
          </Link>
        </nav>
      </div>

      {/* Desktop View */}
      <div className="hidden md:flex items-center justify-between px-8 py-4">
        <div className="text-xl font-bold text-gray-800">
          <div className="text-xl font-bold text-gray-800">
            <div className="flex gap-2">
              <Image src={Image1} alt="" width={42} height={24} />
              <Image src={Image2} alt="" width={83} height={19} />
            </div>
          </div>
        </div>

        <nav className="flex space-x-6">
          <Link href="#" className="text-gray-700 hover:text-purple-600">
            Home
          </Link>
          <Link href="#" className="text-gray-700 hover:text-purple-600">
            Shop
          </Link>
          <Link href="#" className="text-gray-700 hover:text-purple-600">
            Deals
          </Link>
          <Link href="#" className="text-gray-700 hover:text-purple-600">
            What&#39;s New
          </Link>
        </nav>

        <div className="flex space-x-4 items-center">
          <div className="w-[100%] relative bg-white rounded-full">
            <div className=" absolute top-3.5 left-4 text-[1.5rem] text-[#777777]">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="14"
                height="14"
                viewBox="0 0 14 14"
                fill="none"
              >
                <path
                  d="M9.68192 9.92328L12.109 12.3504"
                  stroke="#1D1D1D"
                  strokeWidth="1.21354"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M11.0291 6.41716C11.0291 3.73627 8.85584 1.56299 6.17494 1.56299C3.49406 1.56299 1.32077 3.73627 1.32077 6.41716C1.32077 9.09806 3.49406 11.2713 6.17494 11.2713C8.85584 11.2713 11.0291 9.09806 11.0291 6.41716Z"
                  stroke="#1D1D1D"
                  strokeWidth="1.21354"
                  strokeLinejoin="round"
                />
              </svg>
            </div>

            <input
              type="text"
              name="text"
              id="text"
              placeholder="Search"
              className="peer  border rounded-full outline-none pl-9 pr-4 py-2 w-full transition-colors duration-300"
            />
          </div>
          <Image src={Image4} alt="" width={24} height={23} />
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="23"
            viewBox="0 0 21 20"
            fill="none"
          >
            <path
              d="M6.18256 12.7734C5.03798 13.4549 2.03694 14.8465 3.86477 16.5879C4.75766 17.4386 5.7521 18.0469 7.00235 18.0469H14.1365C15.3868 18.0469 16.3813 17.4386 17.2741 16.5879C19.102 14.8465 16.1009 13.4549 14.9563 12.7734C12.2723 11.1751 8.86661 11.1751 6.18256 12.7734Z"
              stroke="#1D1D1D"
              strokeWidth="1.21354"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M14.2095 5.50696C14.2095 7.51762 12.5796 9.14758 10.5689 9.14758C8.55825 9.14758 6.92828 7.51762 6.92828 5.50696C6.92828 3.4963 8.55825 1.86633 10.5689 1.86633C12.5796 1.86633 14.2095 3.4963 14.2095 5.50696Z"
              stroke="#1D1D1D"
              strokeWidth="1.21354"
            />
          </svg>
        </div>
      </div>
    </header>
  );
}
