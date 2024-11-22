"use client";
import Link from "next/link";
import React, { useState } from "react";
import { AiOutlineShoppingCart, AiOutlineUser } from "react-icons/ai";
import { FaDribbble, FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import { FiSearch } from "react-icons/fi";
import { HiMenu, HiX } from "react-icons/hi";

const Navbar = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number): void => {
    setActiveIndex(activeIndex === index ? null : index);
  };
  const [isOpen, setIsOpen] = useState(false);

  const toggleDrawer = () => {
    setIsOpen(!isOpen);
  };

  const closeDrawer = () => {
    setIsOpen(false);
  };
  return (
    <nav className="bg-custom-lightPurple py-2">
      <div className="container mx-auto">
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 mx-2 md:mx-0   items-center">
          {/* Logo Section */}
          <div className="flex items-center space-x-3">
            <div className="text-purple-600 text-3xl font-bold">G</div>
          </div>

          {/* Hamburger Menu for Small Devices */}
          <div className="lg:hidden flex justify-end">
            <button
              onClick={toggleDrawer}
              className="relative text-2xl text-purple-600 hover:text-purple-800 transition-all duration-500 ease-in-out"
            >
              <span
                className={`inline-block transform transition-all duration-500 ease-in-out ${
                  isOpen
                    ? "rotate-90 scale-125 text-purple-800"
                    : "rotate-0 scale-100 text-purple-600"
                }`}
              >
                {isOpen ? <HiX /> : <HiMenu />}
              </span>
            </button>
          </div>

          {/* Navigation Links (Desktop) */}
          <div className="hidden lg:flex flex-1 justify-center">
            <ul className="flex space-x-6 rounded-full px-6 py-2">
              <li>
                <Link
                  href="#"
                  className="text-custom-deepGray text-base font-medium hover:text-purple-600 transition"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-custom-deepGray text-base font-medium hover:text-purple-600 transition"
                >
                  Shop
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-custom-deepGray text-base font-medium hover:text-purple-600 transition"
                >
                  Deals
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-custom-deepGray text-base font-medium hover:text-purple-600 transition"
                >
                  What's New
                </Link>
              </li>
            </ul>
          </div>

          {/* Social Icons */}
          <div className="flex flex-1 items-center gap-6 bg-[#F5F3FF] p-4 rounded-full ">
            {/* Search Bar */}
            <div className="flex items-center bg-white px-4 py-2 rounded-full w-full">
              <FiSearch className="text-gray-500 mr-2" size={18} />
              <input
                type="text"
                placeholder="Search"
                className="w-full border-none outline-none text-gray-700 placeholder-gray-400 bg-transparent"
              />
            </div>

            {/* Icons Section */}
            <div className="flex items-center gap-6">
              {/* Cart Icon */}
              <div className="relative">
                <AiOutlineShoppingCart className="text-black" size={22} />
                <span className="absolute -top-2 -right-2 bg-black text-white text-xs font-semibold rounded-full h-4 w-4 flex items-center justify-center">
                  0
                </span>
              </div>

              {/* User Icon */}
              <AiOutlineUser className="text-black" size={22} />
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      <div
        className={`fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 z-40 ${
          isOpen ? "block" : "hidden"
        }`}
        onClick={closeDrawer}
      ></div>

      <div
        className={`fixed top-0 left-0 w-64 h-full bg-white z-50 shadow-lg transform transition-transform duration-500 ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="p-6">
          <div className="flex justify-between items-start">
            <ul className="space-y-4 ">
              <li>
                <a
                  href="#"
                  className="text-purple-800 font-medium hover:text-purple-600 transition block"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-purple-800 font-medium hover:text-purple-600 transition block"
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-purple-800 font-medium hover:text-purple-600 transition block"
                >
                  Services
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-purple-800 font-medium hover:text-purple-600 transition block"
                >
                  Portfolios
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-purple-800 font-medium hover:text-purple-600 transition block"
                >
                  Blog
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-purple-800 font-medium hover:text-purple-600 transition block"
                >
                  Contact
                </a>
              </li>
            </ul>
            <button
              onClick={toggleDrawer}
              className="text-purple-600 hover:text-purple-800 text-2xl mb-4"
            >
              <HiX />
            </button>
          </div>
          <div className="mt-6 flex space-x-4">
            <a
              href="#"
              className="text-purple-600 hover:text-purple-800 transition text-xl"
            >
              <FaTwitter />
            </a>
            <a
              href="#"
              className="text-purple-600 hover:text-purple-800 transition text-xl"
            >
              <FaDribbble />
            </a>
            <a
              href="#"
              className="text-purple-600 hover:text-purple-800 transition text-xl"
            >
              <FaLinkedin />
            </a>
            <a
              href="#"
              className="text-purple-600 hover:text-purple-800 transition text-xl"
            >
              <FaGithub />
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
