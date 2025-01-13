"use client";

import { useState } from "react";

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <nav className="bg-white border-b border-gray-200" style={{ height: "110px" }}>
      <div className="flex justify-between items-center h-full px-8 sm:px-16">
        {/* Logo Section */}
        <div className="flex items-center ">
          <a href="#" className="flex items-center">
            <img
              src="https://girmantech.com/Logo2.svg"
              alt="Girman Technologies Logo"
              className="h-15 w-auto lg:ml-24" 
            />
          </a>
        </div>

        
        <div className="hidden md:flex space-x-8 lg:mr-28">
          <a
            href="#"
            className="text-gray-800 font-medium text-2xl hover:text-blue-500 hover:underline decoration-blue-500 decoration-2"
          >
            Search
          </a>
          <a
            href="https://girmantech.com/"
            className="text-gray-800 font-medium text-2xl hover:text-blue-500 hover:underline decoration-blue-500 decoration-2"
          >
            Website
          </a>
          <a
            href="https://www.linkedin.com/company/girmantech/"
            className="text-gray-800 font-medium text-2xl hover:text-blue-500 hover:underline decoration-blue-500 decoration-2"
          >
            LinkedIn
          </a>
          <a
            href="mailto:contact@girmantech.com"
            className="text-gray-800 font-medium text-2xl hover:text-blue-500 hover:underline decoration-blue-500 decoration-2"
          >
            Contact
          </a>
        </div>

      
        <button
          className="md:hidden flex items-center text-gray-800 hover:text-blue-500"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16m-7 6h7"
            />
          </svg>
        </button>
      </div>

     
      {isMobileMenuOpen && (
        <div
          className="absolute top-16 right-4 bg-white shadow-lg rounded-lg w-40 p-4 z-50"
          style={{ border: "1px solid #ddd" }}
        >
          <div className="flex flex-col space-y-4">
            <a
              href="#"
              className="text-gray-800 font-medium text-xl hover:text-blue-500"
            >
              Search
            </a>
            <a
              href="https://girmantech.com/"
              className="text-gray-800 font-medium text-xl hover:text-blue-500"
            >
              Website
            </a>
            <a
              href="https://www.linkedin.com/company/girmantech/"
              className="text-gray-800 font-medium text-xl hover:text-blue-500"
            >
              LinkedIn
            </a>
            <a
              href="mailto:contact@girmantech.com"
              className="text-gray-800 font-medium text-xl hover:text-blue-500"
            >
              Contact
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
