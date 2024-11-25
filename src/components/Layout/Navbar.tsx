"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation"; // Import the useRouter hook
import Link from "next/link";

import Image1 from "../../../public/arrivals/logo2.png";
import Image2 from "../../../public/arrivals/logo.png";
import Image3 from "../../../public/arrivals/logo3.png";
import Image4 from "../../../public/arrivals/shopping.png";
import Image5 from "../../../public/arrivals/logo4.png";
import Image6 from "../../../public/arrivals/user.png";
export default function Navbar() {
  const [isDrawerOpen, setDrawerOpen] = useState(false);
  const [isSearchOpen, setSearchOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname(); 
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true); // Add scrolled class
      } else {
        setIsScrolled(false); // Remove scrolled class
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  // Menu items as an array
  const menu = [
    { name: "Home", path: "/" },
    { name: "Shop", path: "/shop" },
    { name: "Deals", path: "/deals" },
    { name: "What's New", path: "/new" },
  ];

  // Helper function to check if a link is active
  const isActive = (path: string): boolean => pathname === path;


  return (
    <header   className={`w-full fixed top-0 z-50 transition-all duration-300 px-3 ${
      isScrolled ? "bg-white shadow-md py-1" : "bg-[#F4F8FF] py-2"
    }`}>
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

        {/* Search and Cart Buttons */}
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
          <Image src={Image6} alt="" width={24} height={23} />
        </div>
      </div>

      {/* Search Dropdown */}
      {isSearchOpen && (
        <div className="absolute top-12 left-0 w-full bg-gray-100 shadow-md px-4 py-2 transition-all duration-300">
          <input
            type="text"
            placeholder="Search"
            className="w-full px-4 py-2 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-500"
          />
        </div>
      )}

      {/* Drawer Menu for Mobile */}
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
        {/* Drawer Links */}
        <nav className="flex flex-col p-4 space-y-4">
          {menu.map((item) => (
            <Link
              key={item.name}
              href={item.path}
              className={`text-gray-700 hover:text-purple-600 ${
                isActive(item.path) && "text-purple-600 font-bold"
              }`}
            >
              {item.name}
            </Link>
          ))}
        </nav>
      </div>

      {/* Desktop View */}
      <div className="hidden md:flex items-center justify-between px-8 py-4">
        {/* Logo */}
        <div className="flex gap-2">
          <Image src={Image1} alt="" width={42} height={24} />
          <Image src={Image2} alt="" width={83} height={19} />
        </div>

        {/* Navigation Links */}
        <nav className="flex space-x-6">
          {menu.map((item) => (
            <Link
              key={item.name}
              href={item.path}
              className={`text-gray-700 hover:text-purple-600 ${
                isActive(item.path) && "text-purple-600 font-bold"
              }`}
            >
              {item.name}
            </Link>
          ))}
        </nav>

        {/* Search and Cart */}
        <div className="flex space-x-4 items-center">
          <div className="relative bg-white rounded-full">
             <div className="absolute top-2 left-2">
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
             </div>
            <input
              type="text"
              placeholder="Search"
              className="border rounded-full outline-none pl-10 pr-4 py-2 w-full"
            />
          </div>
          <Image src={Image4} alt="" width={24} height={23} />
          <Image src={Image6} alt="" width={24} height={23} />
        </div>
      </div>
    </header>
  );
}
