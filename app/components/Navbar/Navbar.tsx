"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="fixed top-0 left-0 w-full z-50 backdrop-blur-[1px] dark:backdrop-blur-md shadow-md">
      <nav aria-label="Main Navigation">
        <div className="max-w-screen-xl px-6 py-4 mx-auto flex items-center justify-between">
        <Link href="/" className="text-xl font-bold">
          <span className="text-blue-500">My</span>{' '}
          <span className="text-white">Portfolio</span>
        </Link>
          <button
            className="block md:hidden text-white focus:outline-none"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
          <ul
            className={`absolute md:static top-16 left-0 w-full md:w-auto bg-[#100948] md:bg-transparent md:flex flex-col md:flex-row font-medium space-y-4 md:space-y-0 md:space-x-8 text-lg p-4 md:p-0 transition-all duration-300 ${
              isOpen ? "block" : "hidden md:flex"
            }`}
          >
            <li>
              <Link href="/" className="relative text-white px-4 py-2 rounded-lg transition duration-300 ease-in-out 
                                        before:absolute before:inset-0 before:bg-blue-700 before:scale-x-0 before:origin-left 
                                        before:transition-transform before:duration-300 hover:before:scale-x-100 before:rounded-full">
                <span className="relative z-10">Home</span>
              </Link>
            </li>
            <li>
              <Link href="/about" className="relative text-white px-4 py-2 rounded-lg transition duration-300 ease-in-out 
                                            before:absolute before:inset-0 before:bg-blue-700 before:scale-x-0 before:origin-left 
                                            before:transition-transform before:duration-300 hover:before:scale-x-100 before:rounded-full">
                <span className="relative z-10">About me</span>
              </Link>
            </li>
            <li>
              <Link href="/project" className="relative text-white px-4 py-2 rounded-lg transition duration-300 ease-in-out 
                                              before:absolute before:inset-0 before:bg-blue-700 before:scale-x-0 before:origin-left 
                                              before:transition-transform before:duration-300 hover:before:scale-x-100 before:rounded-full">
                <span className="relative z-10">Projects</span>
              </Link>
            </li>
            <li>
              <Link href="/skill" className="relative text-white px-4 py-2 rounded-lg transition duration-300 ease-in-out 
                                              before:absolute before:inset-0 before:bg-blue-700 before:scale-x-0 before:origin-left 
                                              before:transition-transform before:duration-300 hover:before:scale-x-100 before:rounded-full">
                <span className="relative z-10">Skills</span>
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}
