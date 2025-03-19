"use client";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { FaInstagram, FaYoutube, FaFacebook } from "react-icons/fa";

const Navbar = ({ isScrolled }: { isScrolled: boolean }) => {
  return (
    <motion.nav
      className={`fixed top-0 left-0 w-full px-6 py-4 flex items-center justify-between backdrop-blur-md transition-all ${
        isScrolled ? "bg-black/80 shadow-md" : "bg-transparent"
      }`}
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="flex gap-4 text-lg">
        
      </div>

      {/* Shrinking Logo */}
      <motion.img
        src="/GRAFEST.png"
        alt="GRAFEST"
        className="transition-all"
        animate={{
          width: isScrolled ? 80 : 200,
          opacity: isScrolled ? 1 : 0,
        }}
      />

      <div className="flex gap-4 text-lg">
        <a href="#sponsors" className="text-white hover:text-yellow-400 transition">Sponsors</a>
        <a href="#contact" className="text-white hover:text-yellow-400 transition">Contact</a>
      </div>
    </motion.nav>
  );
};

export default Navbar;
