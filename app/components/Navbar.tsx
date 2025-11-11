// app/components/Navbar.tsx
"use client";

import Link from "next/link";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaBars, FaTimes } from "react-icons/fa";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const pages = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Skills", path: "/skills" },
    { name: "Solutions", path: "/solutions" },
    { name: "Projects", path: "/projects" },
    { name: "Education", path: "/education" },
    { name: "Blogs", path: "/blogs" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full bg-white/70 backdrop-blur-md shadow-sm z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <Link
          href="/"
          className="text-2xl font-bold text-blue-600 hover:opacity-80 transition"
        >
          Karanja Benjamin
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex space-x-6">
          {pages.map((page) => (
            <motion.div key={page.name} whileHover={{ scale: 1.1 }}>
              <Link
                href={page.path}
                className="text-gray-700 hover:text-blue-600 font-medium transition"
              >
                {page.name}
              </Link>
            </motion.div>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden text-gray-700 text-2xl focus:outline-none"
        >
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Mobile Dropdown */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="md:hidden bg-white shadow-md overflow-hidden"
          >
            <div className="flex flex-col items-center py-4 space-y-4">
              {pages.map((page) => (
                <motion.div key={page.name} whileHover={{ scale: 1.1 }}>
                  <Link
                    href={page.path}
                    onClick={() => setMenuOpen(false)}
                    className="text-gray-700 hover:text-blue-600 text-lg font-medium transition"
                  >
                    {page.name}
                  </Link>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
