"use client";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { FaInstagram, FaYoutube, FaFacebook, FaBars } from "react-icons/fa";

const targetDate = new Date("2025-04-24T00:00:00"); // Replace with actual fest date

const Hero = ({ setScrolled }: { setScrolled: (value: boolean) => void }) => {
  const [scrollY, setScrollY] = useState(0);
  const [timeLeft, setTimeLeft] = useState("");
  const [showNavbar, setShowNavbar] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
      setScrolled(window.scrollY > 50);
      setShowNavbar(window.scrollY > 100);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [setScrolled]);

  useEffect(() => {
    const updateTimer = () => {
      const now = new Date();
      const difference = targetDate.getTime() - now.getTime();
      if (difference <= 0) {
        setTimeLeft("00:00:00:00");
        return;
      }

      const days = Math.floor(difference / (1000 * 60 * 60 * 24));
      const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
      const minutes = Math.floor((difference / (1000 * 60)) % 60);
      const seconds = Math.floor((difference / 1000) % 60);
      setTimeLeft(`${days}d: ${hours}h: ${minutes}m: ${seconds}s`);
    };

    updateTimer();
    const interval = setInterval(updateTimer, 1000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  return (
    <section className="relative h-screen flex flex-col items-center justify-center text-white bg-black">
      
      {/* Top Left Corner Images */}
      

      {/* Navbar */}
      {showNavbar && (
        <motion.nav
          className="fixed top-0 w-full bg-black bg-opacity-90 backdrop-blur-lg shadow-md flex items-center justify-between px-6 py-3 z-50"
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          {/* Logo - Centered */}
          <motion.img
            src="/GRAFEST.png"
            alt="GRAFEST"
            className="h-12 md:h-14 mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          />

          {/* Hamburger Menu (Mobile View) */}
          {isMobile && (
            <button onClick={() => setMenuOpen(!menuOpen)} className="text-white text-3xl absolute right-6">
              <FaBars />
            </button>
          )}

          {
            !isMobile && (
                <div className="absolute top-4  left-4 flex ">
        <img src="/geu.jpg" alt="Image 1" className="h-16 w-auto md:h-20 rounded-lg shadow-lg" />
        
      </div>
            )
          }
          {
            isMobile && (
                <div className="absolute top-4  left-1 flex ">
        <img src="/geu.jpg" alt="Image 1" className="h-9 w-19 md:h-3 rounded-lg shadow-lg" />
        
      </div>
            )
          }


          {/* Navigation Links (Hidden in Mobile) */}
          {!isMobile && (
            <div className="absolute right-6 space-x-6 text-lg">
              <a href="#about" className="hover:text-gray-400">About</a>
              <a href="#schedule" className="hover:text-gray-400">Schedule</a>
              <a href="#contact" className="hover:text-gray-400">Contact</a>
              <a href="/signup" className="bg-gold text-white px-4 py-2 rounded-lg hover:bg-yellow-500 transition">
                Sign Up
              </a>
            </div>
            
          )}
        </motion.nav>
      )}

      {/* Mobile Menu (Dropdown when Hamburger Clicked) */}
      {menuOpen && isMobile && (
        <motion.div
          className="absolute top-16 w-full bg-black bg-opacity-90 flex flex-col items-center py-4 space-y-4"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
        >
          <a href="#about" className="text-white text-lg" onClick={() => setMenuOpen(false)}>About</a>
          <a href="#schedule" className="text-white text-lg" onClick={() => setMenuOpen(false)}>Schedule</a>
          <a href="#contact" className="text-white text-lg" onClick={() => setMenuOpen(false)}>Contact</a>
        </motion.div>
      )}

      {/* Large GRAFEST Logo - Centered */}
      <motion.img
        src="/GRAFEST.png"
        alt="GRAFEST"
        className="absolute mx-auto"
        animate={{
          width: scrollY > 100 ? 100 : "80vw",
          y: scrollY > 100 ? "-60vh" : 0,
        }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
      />

      {/* Countdown Timer - Royal Font */}
      <motion.div
        className="absolute text-xl md:text-3xl font-bold font-[Cinzel] text-white-300 tracking-widest"
        style={{ bottom: "100px" }}
        animate={{
          scale: scrollY > 100 ? 1.4 : 1,
          y: scrollY > 100 ? "-30vh" : 0,
        }}
        transition={{ duration: 0.6, ease: "easeInOut" }}
      >
        {timeLeft}
      </motion.div>

      {/* Social Links */}
      <motion.div
        className="absolute bottom-0 flex gap-6 text-3xl"
        animate={{
          opacity: scrollY > 150 ? 1.5 : 0,
          y: scrollY > 100 ? "-30vh" : 0,
        }}
        transition={{ duration: 0.6 }}
      >
        <a href="https://instagram.com" className="text-pink-500 hover:text-pink-700"><FaInstagram /></a>
        <a href="https://youtube.com" className="text-red-500 hover:text-red-700"><FaYoutube /></a>
        <a href="https://facebook.com" className="text-blue-500 hover:text-blue-700"><FaFacebook /></a>
      </motion.div>
    </section>
  );
};

export default Hero;
