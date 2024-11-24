import React from 'react';

const Button = () => {
    return (
        <button className=" flex items-center">
          <p className="text-[19px] font-normal bg-purple-600 hover:bg-purple-700 text-white  py-2 px-6 rounded-full">
            Shop Now
          </p>
          <span className=" rounded-full text-[19px]  font-normal bg-purple-600 hover:bg-purple-700 text-white  py-2.5 px-2.5">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
            >
              <path
                d="M17 7L6 18"
                stroke="white"
                strokeWidth="1.5"
                strokeLinecap="round"
              />
              <path
                d="M11 6.13153C11 6.13153 16.6335 5.65664 17.4885 6.51155C18.3434 7.36647 17.8684 13 17.8684 13"
                stroke="white"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </span>
        </button>
    );
};

export default Button ;