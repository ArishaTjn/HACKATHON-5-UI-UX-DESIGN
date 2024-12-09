
import Link from 'next/link';

"use client";

import React, { useState } from "react";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="relative bg-gray-100">
      {/* Top Bar */}
      <div className="bg-black text-white text-sm py-2 text-center">
        <span>
          Sign up and get 20% off your first order.
          <a href="/" className="underline hover:no-underline">
            Sign Up Now
          </a>
        </span>
      </div>

      {/* Main Header */}
      <div className="flex items-center justify-between px-6 py-4">
        {/* Hamburger Button (Mobile) */}
        <button
          className="lg:hidden text-gray-700 text-2xl order-first"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          ☰
        </button>

        {/* Logo */}
        <div className="text-4xl font-bold">SHOP.CO</div>

        {/* Navigation Links */}
        <nav
          className={`${
            menuOpen ? "block" : "hidden"
          } lg:flex lg:items-center lg:space-x-6 absolute lg:static top-full left-0 w-full lg:w-auto bg-gray-100 z-20 lg:z-auto p-4 lg:p-0`}
        >
          <a href="/" className="block py-2 lg:py-0 px-4 hover:text-gray-900">
            Shop
          </a>
          <a
            href="/OnSale"
            className="block py-2 lg:py-0 px-4 hover:text-gray-900"
          >
            On Sale
          </a>
          <a
            href="/NewArrivals"
            className="block py-2 lg:py-0 px-4 hover:text-gray-900"
          >
            New Arrivals
          </a>
          <a
            href="/"
            className="block py-2 lg:py-0 px-4 hover:text-gray-900"
          >
            Brands
          </a>
        </nav>

        {/* Search Bar (Desktop Only) */}
        <div className="hidden lg:flex items-center flex-grow max-w-md mx-6">
          <input
            type="text"
            placeholder="Search for products..."
            className="w-full px-4 py-2 border border-gray-300 rounded-l-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button className="px-4 py-2 bg-gray-500 text-white rounded-r-md hover:bg-blue-600">
            🔍
          </button>
        </div>

        {/* Cart Icon */}
        <div className="flex items-center space-x-4">
          <a href="/" className="hover:text-gray-900">
            🛒
          </a>
        </div>
        
      </div>

      {/* Search Bar (Mobile Only) */}
      <div className="block lg:hidden px-6 py-2 bg-gray-100">
        <input
          type="text"
          placeholder="Search for products..."
          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>
    </header>
  );
}

