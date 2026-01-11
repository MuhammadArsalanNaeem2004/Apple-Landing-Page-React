import React, { useState } from "react";
import { MdOutlineShoppingBag } from "react-icons/md";
import { FiSearch, FiMenu, FiX } from "react-icons/fi";
import { FaApple } from "react-icons/fa";
import SignupContent from "./AuthForms/SignupContent.jsx";
import LoginContent from "./AuthForms/LoginContent.jsx";

export default function Navbar({ activePage = "home" }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showSignup, setShowSignup] = useState(false);
  const [showLogin, setShowLogin] = useState(false);

  const navLinks = [
    { name: "Store", href: "#" },
    { name: "Mac", href: "#" },
    { name: "iPad", href: "#" },
    { name: "iPhone", href: "#" },
    { name: "Watch", href: "#" },
    { name: "Vision", href: "#" },
    { name: "AirPods", href: "#" },
    { name: "Entertainment", href: "#" },
    { name: "Accessories", href: "#" },
    { name: "Support", href: "#" },
  ];

  return (
    <>
      <nav className="glass-nav w-full relative z-50">
        <div className="max-w-5xl mx-auto px-4 h-12 flex items-center justify-between">
          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white text-xl"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <FiX /> : <FiMenu />}
          </button>

          {/* Apple Logo */}
          <a href="#" className="hover:opacity-80 transition-opacity">
            <FaApple className="text-white text-xl" />
          </a>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center gap-8 flex-1 justify-center">
            {navLinks.map((link) => (
              <a key={link.name} href={link.href} className="btn-nav">
                {link.name}
              </a>
            ))}
          </div>

          {/* Actions */}
          <div className="flex items-center gap-4">
            <div className="hidden md:flex items-center gap-4">
              <FiSearch className="text-white text-sm cursor-pointer" />
              <MdOutlineShoppingBag className="text-white text-sm cursor-pointer" />
            </div>

            <div className="flex items-center gap-2 pl-4 border-l border-gray-700 ml-2">
              <button
                onClick={() => {
                  setShowLogin(true);
                  setShowSignup(false);
                }}
                className={`px-3 py-1 rounded-full text-xs font-medium transition-colors ${
                  activePage === "login"
                    ? "bg-white text-black"
                    : "text-white hover:bg-white/10"
                }`}
              >
                Log In
              </button>

              <button
                onClick={() => {
                  setShowSignup(true);
                  setShowLogin(false);
                }}
                className={`px-3 py-1 rounded-full text-xs font-medium transition-colors ${
                  activePage === "signup"
                    ? "bg-white text-black"
                    : "text-white hover:bg-white/10"
                }`}
              >
                Sign Up
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-[#161617] absolute top-12 left-0 w-full h-screen p-8 flex flex-col gap-4">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-2xl text-[#f5f5f7] font-semibold py-2 border-b border-gray-800"
              >
                {link.name}
              </a>
            ))}

            <div className="mt-6 flex flex-col gap-3">
              <button
                onClick={() => {
                  setShowLogin(true);
                  setShowSignup(false);
                  setIsMenuOpen(false);
                }}
                className="bg-gray-800 text-white py-3 rounded-lg"
              >
                Log In
              </button>

              <button
                onClick={() => {
                  setShowSignup(true);
                  setShowLogin(false);
                  setIsMenuOpen(false);
                }}
                className="bg-[#0071e3] text-white py-3 rounded-lg"
              >
                Sign Up
              </button>
            </div>
          </div>
        )}
      </nav>

      {/* Auth Modals */}
      {showLogin && <LoginContent onClose={() => setShowLogin(false)} />}

      {showSignup && <SignupContent onClose={() => setShowSignup(false)} />}
    </>
  );
}
