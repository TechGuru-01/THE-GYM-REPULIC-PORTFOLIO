import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

export default function Navbar({ activeLink, setActiveLink, onGetStarted }) {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-30 w-full font-sans transition-all duration-300 border-b ${
        isScrolled
          ? "bg-black border-white/5 shadow-lg"
          : "bg-transparent border-transparent"
      }`}
    >
      <nav
        id="main-nav"
        className="w-full max-w-7xl mx-auto h-20 px-6 md:px-12 flex items-center justify-between"
      >
        <div id="brand-logo" className="flex items-center gap-3">
          <img
            className="h-7 w-7 rounded-full object-cover border border-white/20"
            src="/logo/rlogo.png"
            referrerPolicy="no-referrer"
            alt="Gym Republic logo"
          />
          <span className="text-white text-base font-normal tracking-tight">
            Gym Republic
          </span>
        </div>

        <div id="nav-links" className="hidden md:flex items-center gap-2">
          {["about", "branches", "trainers", "studios", "membership"].map(
            (item) => (
              <a
                key={item}
                id={`nav-${item}`}
                href={`#${item}`}
                onClick={(e) => {
                  e.preventDefault();
                  setActiveLink(item);
                  const element = document.getElementById(item);
                  if (element) {
                    element.scrollIntoView({ behavior: "smooth" });
                  }
                  setTimeout(() => setActiveLink(""), 1500);
                }}
                className="text-neutral-300 hover:text-white text-sm font-light px-4 py-2 rounded-full relative transition-colors tracking-wide lowercase"
              >
                {item}

                {activeLink === item && (
                  <motion.span
                    layoutId="activeGlow"
                    className="absolute inset-0 bg-white/10 rounded-full -z-10"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
              </a>
            ),
          )}
        </div>

        <div id="nav-actions">
          <button
            id="btn-get-started"
            onClick={onGetStarted}
            className="bg-[#d4af37] text-black hover:bg-neutral-200 text-xs font-normal tracking-wide rounded-full px-5 py-2.5 transition-colors shadow-md cursor-pointer "
          >
            Join Now
          </button>
        </div>
      </nav>
    </motion.header>
  );
}
