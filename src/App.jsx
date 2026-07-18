import React, { useState } from "react";
import { motion } from "motion/react";
import Branches from "./components/branches/Branches.jsx";
import Hero from "./components/hero/Hero.jsx";
import Navbar from "./components/navbar/Navbar.jsx";
import About from "./components/about/About.jsx";

export default function App() {
  const [activeLink, setActiveLink] = useState("");

  const scrollAnimationVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] },
    },
  };

  return (
    <main className="relative bg-black h-auto w-full selection:bg-white selection:text-black overflow-x-hidden overflow-y-hidden">
      <Navbar
        activeLink={activeLink}
        setActiveLink={setActiveLink}
        onGetStarted={() => setShowModal(true)}
      />

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
        variants={scrollAnimationVariants}
      >
        <Hero activeLink={activeLink} setActiveLink={setActiveLink} />
      </motion.div>

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={scrollAnimationVariants}
      >
        <About />
      </motion.div>

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={scrollAnimationVariants}
      >
        <Branches />
      </motion.div>
    </main>
  );
}
