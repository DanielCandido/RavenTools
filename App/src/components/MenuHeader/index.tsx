"use client";
import Link from "next/link";
import ImageIcon from "@/components/ImageIcon";
import { usePathname } from "next/navigation";
import React from "react";

const Divisor = () => {
  return (
    <li className="text-gray-300">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        stroke="currentColor"
        className="w-4 h-4 current-fill"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M12 5v0m0 7v0m0 7v0m0-13a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z"
        />
      </svg>
    </li>
  );
};

const Menu = () => {
  const path = usePathname();

  const currentPath = (value: string) => {
    return value === path;
  };

  return (
    <nav className="relative px-4 py-4 flex justify-between items-center bg-gray-950">
      <a className="text-3xl font-bold leading-none" href="#">
        <ImageIcon name="logo-slim" type="images" height={30} width={200} />
      </a>
      <div className="lg:hidden">
        <button className="navbar-burger flex items-center text-blue-600 p-3">
          <svg
            className="block h-4 w-4 fill-current"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <title>Mobile menu</title>
            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"></path>
          </svg>
        </button>
      </div>
      <ul className="hidden absolute top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2 lg:flex lg:mx-auto lg:items-center lg:w-auto lg:space-x-6">
        <li>
          <Link
            className={`text-sm hover:text-gray-500 ${
              currentPath("/") ? "text-blue-600" : "text-gray-400"
            }`}
            href="/"
          >
            Tradepack Calc
          </Link>
        </li>
        <Divisor />
        <li>
          <Link
            className={`text-sm hover:text-gray-500 ${
              currentPath("/outfits") ? "text-blue-600" : "text-gray-400"
            }`}
            href="/outfits"
          >
            Outfits
          </Link>
        </li>
        <Divisor />
        <li>
          <Link
            className={`text-sm hover:text-gray-500 ${
              currentPath("/market") ? "text-blue-600" : "text-gray-400"
            }`}
            href="/market"
          >
            Market
          </Link>
        </li>
      </ul>
      {/* <a
        className="hidden lg:inline-block lg:ml-auto lg:mr-3 py-2 px-6 bg-gray-50 hover:bg-gray-100 text-sm text-gray-900 font-bold  rounded-xl transition duration-200"
        href="#"
      >
        Sign In
      </a>
      <a
        className="hidden lg:inline-block py-2 px-6 bg-blue-500 hover:bg-blue-600 text-sm text-white font-bold rounded-xl transition duration-200"
        href="#"
      >
        Sign up
      </a> */}
    </nav>
  );
};

export default Menu;
