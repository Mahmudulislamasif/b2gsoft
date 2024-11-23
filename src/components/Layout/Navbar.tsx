"use client";
import { useState } from "react";

export default function Navbar() {
  const [isDrawerOpen, setDrawerOpen] = useState(false);
  const [isSearchOpen, setSearchOpen] = useState(false);

  return (
    <header className="w-full shadow-md bg-white fixed top-0 z-50">
      {/* Mobile View */}
      <div className="md:hidden flex items-center justify-between px-4 py-3">
        {/* Drawer Toggle Button */}
        <button
          onClick={() => setDrawerOpen(true)}
          className="text-gray-600 focus:outline-none"
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
              d="M4 6h16M4 12h16m-7 6h7"
            ></path>
          </svg>
        </button>

        {/* Logo */}
        <div className="text-xl font-bold text-gray-800">
          <span className="text-purple-600">We</span>5ive
        </div>

        {/* Search Toggle Button */}
        <button onClick={() => setSearchOpen(!isSearchOpen)}>
          <svg
            className="w-6 h-6 text-gray-600"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M8 16l-4-4m0 0l4-4m-4 4h16"
            ></path>
          </svg>
        </button>
      </div>

      {/* Search Dropdown Animation */}
      {isSearchOpen && (
        <div className="absolute top-12 left-0 w-full bg-gray-100 shadow-md px-4 py-2 transition-all duration-300">
          <input
            type="text"
            placeholder="Search"
            className="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-500"
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
          <a href="#" className="text-gray-700 hover:text-purple-600">
            Home
          </a>
          <a href="#" className="text-gray-700 hover:text-purple-600">
            Shop
          </a>
          <a href="#" className="text-gray-700 hover:text-purple-600">
            Deals
          </a>
          <a href="#" className="text-gray-700 hover:text-purple-600">
            What's New
          </a>
        </nav>
      </div>

      {/* Desktop View */}
      <div className="hidden md:flex items-center justify-between px-8 py-4">
        <div className="text-xl font-bold text-gray-800">
          <span className="text-purple-600">We</span>5ive
        </div>

        <nav className="flex space-x-6">
          <a href="#" className="text-gray-700 hover:text-purple-600">
            Home
          </a>
          <a href="#" className="text-gray-700 hover:text-purple-600">
            Shop
          </a>
          <a href="#" className="text-gray-700 hover:text-purple-600">
            Deals
          </a>
          <a href="#" className="text-gray-700 hover:text-purple-600">
            What's New
          </a>
        </nav>

        <div className="flex space-x-4 items-center">
          <div className="relative">
            <input
              type="text"
              placeholder="Search"
              className="hidden md:block px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
          </div>
          <button>
            <svg
              className="w-6 h-6 text-gray-600"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              ></path>
            </svg>
          </button>
        </div>
      </div>
    </header>
  );
}

