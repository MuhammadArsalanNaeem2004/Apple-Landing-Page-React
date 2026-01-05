import React, { useState } from "react";
import { MdOutlineShoppingBag } from "react-icons/md";
import { FiSearch, FiMenu, FiX } from "react-icons/fi";
import { FaApple } from "react-icons/fa";

export default function Navbar({ activePage = "home" }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { name: "Store", href: "#" },
    { name: "Mac", href: "#" },
    { name: "iPad", href: "#" },
    { name: "iPhone", href: "#" },
    { name: "Watch", href: "#" },
    { name: "Vision", href: "#" },
    { name: "AirPods", href: "#" },
    { name: "TV & Home", href: "#" },
    { name: "Entertainment", href: "#" },
    { name: "Accessories", href: "#" },
    { name: "Support", href: "#" },
  ];

  return (
    <nav
      className="glass-nav w-full"
      data-name="navbar"
      data-file="components/Navbar.js"
    >
      <div className="max-w-5xl mx-auto px-4 h-12 flex items-center justify-between">
        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <div className={`icon-${isMenuOpen ? "x" : "menu"} text-xl`}></div>
        </button>

        {/* Logo */}
        <a
          href="index.html"
          className="text-white hover:opacity-80 transition-opacity"
        >
          <div className="icon-apple text-xl"></div>
        </a>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8 flex-1 justify-center">
          {navLinks.map((link) => (
            <a key={link.name} href={link.href} className="btn-nav">
              {link.name}
            </a>
          ))}
        </div>

        {/* Action Buttons */}
        <div className="flex items-center gap-4">
          <div className="hidden md:flex items-center gap-4">
            <a
              href="index.html"
              className="text-white hover:opacity-80 transition-opacity"
            >
              <div className="icon-search text-sm"></div>
            </a>
            <a
              href="index.html"
              className="text-white hover:opacity-80 transition-opacity"
            >
              <div className="icon-shopping-bag text-sm">
                {" "}
                <MdOutlineShoppingBag />
              </div>
            </a>
          </div>

          <div className="flex items-center gap-2 pl-4 border-l border-gray-700 ml-2">
            <a
              href="login.html"
              className={`px-3 py-1 rounded-full text-xs font-medium transition-colors ${
                activePage === "login"
                  ? "bg-white text-white"
                  : "text-black hover:bg-white/10"
              }`}
            >
              Log In
            </a>
            <a
              href="signup.html"
              className={`px-3 py-1 rounded-full text-xs font-medium transition-colors ${
                activePage === "signup"
                  ? "bg-[#0071e3] text-white"
                  : "bg-white text-black hover:bg-gray-100"
              }`}
            >
              Sign Up
            </a>
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
        <div className="md:hidden bg-[#161617] absolute top-12 left-0 w-full h-screen p-8 flex flex-col gap-4 animate-in fade-in slide-in-from-top-4 duration-300">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-2xl text-[#f5f5f7] font-semibold py-2 border-b border-gray-800"
            >
              {link.name}
            </a>
          ))}
          <div className="mt-4 flex flex-col gap-3">
            <a
              href="login.html"
              className="btn bg-gray-800 text-white text-center py-3 rounded-lg"
            >
              Log In
            </a>
            <a
              href="signup.html"
              className="btn bg-[#0071e3] text-white text-center py-3 rounded-lg"
            >
              Sign Up
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
