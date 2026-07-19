import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import Particles from "../particles/Particles";

export default function Hero({
  showModal,
  setShowModal,
  activeLink,
  setActiveLink,
}) {
  const handleGetStartedClick = (e) => {
    e.preventDefault();
    if (setShowModal) setShowModal(true);
  };

  return (
    <section
      id="hero-section"
      className="relative min-h-screen md:h-screen w-full overflow-hidden bg-black select-none flex flex-col justify-between md:block"
    >
      <video
        id="bg-video"
        className="absolute inset-0 w-full h-full object-cover opacity-35 z-0 pointer-events-none filter grayscale contrast-125 brightness-100"
        autoPlay
        loop
        muted
        playsInline
        src="/hero/hero.mp4"
      />

      <div className="absolute inset-0 bg-gradient-to-b from-black via-black/40 to-black z-10 pointer-events-none" />
      <div className="absolute inset-0 bg-black/60 z-10 pointer-events-none mix-blend-multiply" />

      {/* Ambient Glows */}
      <div className="absolute top-[20%] md:top-[30%] left-[10%] md:left-[20%] w-[250px] md:w-[500px] h-[250px] md:h-[500px] bg-[#d4af37]/5 blur-[80px] md:blur-[160px] rounded-full pointer-events-none z-0" />
      <div className="absolute bottom-[20%] right-[5%] md:right-[10%] w-[200px] md:w-[400px] h-[200px] md:h-[400px] bg-red-950/20 blur-[70px] md:blur-[140px] rounded-full pointer-events-none z-0" />

      <div className="absolute inset-0 z-12 pointer-events-none opacity-40">
        <Particles
          particleColors={["#d4af37", "#ffffff"]}
          particleCount={30}
          particleSpread={8}
          speed={0.2}
          particleBaseSize={60}
          moveParticlesOnHover
          alphaParticles={true}
          disableRotation={false}
          pixelRatio={1}
        />
      </div>

      {/* Main Content Container */}
      <div
        id="content-container"
        className="relative h-full w-full max-w-7xl mx-auto z-20 px-6 md:px-12 flex flex-col pt-28 pb-12 md:block md:pt-0 md:pb-0 flex-grow"
      >
        {/* BUILD */}
        <motion.h1
          id="title-build"
          initial={{ x: -40, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="relative md:absolute text-white font-[950] italic tracking-tight text-[15vw] md:text-[11vw] left-0 md:left-12 md:top-[16%] leading-none uppercase text-left"
        >
          BUILD
        </motion.h1>

        {/* REAL */}
        <motion.h1
          id="title-real"
          initial={{ x: 40, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className="relative md:absolute text-white font-[950] italic tracking-tight text-[15vw] md:text-[11vw] text-right md:right-24 md:top-[30%] leading-none uppercase mt-2 md:mt-0"
        >
          REAL
        </motion.h1>

        {/* STRENGTH */}
        <motion.h1
          id="title-strength"
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="relative md:absolute text-transparent bg-clip-text bg-gradient-to-r from-[#d4af37] via-neutral-100 to-[#d4af37] font-[950] italic tracking-tight text-[15vw] md:text-[11vw] left-0 md:left-[28%] md:top-[56%] leading-none pb-2 md:pb-4 pr-4 md:pr-8 uppercase mt-2 md:mt-0 text-left"
        >
          STRENGTH
        </motion.h1>

        {/* DESCRIPTION & CTAs (Phone setup shifts this below STRENGTH smoothly) */}
        <motion.div
          id="desc-and-ctas"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="relative md:absolute left-0 md:left-12 md:top-[44%] max-w-full md:max-w-[340px] flex flex-col gap-5 z-20 mt-8 md:mt-0"
        >
          <p
            id="desc-paragraph"
            className="text-[12px] md:text-[13px] leading-relaxed text-neutral-400 font-normal tracking-wider uppercase"
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
          <div className="flex flex-row gap-3 w-full sm:w-auto">
            <button
              id="btn-cta-trial"
              onClick={handleGetStartedClick}
              className="flex-1 sm:flex-none bg-[#d4af37] hover:bg-white text-black text-[11px] font-black tracking-widest uppercase rounded-none px-6 py-3 transition-all shadow-xl cursor-pointer text-center whitespace-nowrap"
            >
              Join Now
            </button>
            <button
              id="btn-view-branches"
              onClick={(e) => e.preventDefault()}
              className="flex-1 sm:flex-none bg-transparent hover:bg-white/5 border-2 border-white text-white text-[11px] font-black tracking-widest uppercase rounded-none px-6 py-3 transition-all cursor-pointer text-center whitespace-nowrap"
            >
              View Branches
            </button>
          </div>
        </motion.div>

        {/* STATS - TOP RIGHT (Desktop fixed position, Phone flows below nicely) */}
        <motion.div
          id="stat-top-right"
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="absolute right-6 md:right-24 top-[4%] md:top-[16%] flex flex-col items-end"
        >
          <span className="text-2xl md:text-5xl font-[950] italic tracking-tight text-[#d4af37] leading-none">
            +3
          </span>
          <span className="text-[8px] md:text-[10px] text-neutral-400 tracking-widest uppercase mt-1 text-right font-bold">
            Active Branches
          </span>
        </motion.div>

        {/* BOTTOM STATS CONTAINER (Converted to a clean grid on phone view) */}
        <div className="grid grid-cols-2 gap-4 border-t border-white/5 md:border-none pt-6 md:pt-0 mt-auto md:mt-0">
          {/* STAT - BOTTOM LEFT */}
          <motion.div
            id="stat-bottom-left"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 1 }}
            className="relative md:absolute left-0 md:left-12 md:bottom-16 md:bottom-20 flex flex-col items-start"
          >
            <span className="text-2xl md:text-5xl font-[950] italic tracking-tight text-[#d4af37] leading-none">
              +1.7k
            </span>
            <span className="text-[8px] md:text-[10px] text-neutral-400 tracking-widest uppercase mt-1 font-bold text-left">
              Active Members
            </span>
          </motion.div>

          {/* STAT - BOTTOM RIGHT */}
          <motion.div
            id="stat-bottom-right"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.2 }}
            className="relative md:absolute right-0 md:right-24 md:bottom-12 md:bottom-16 flex flex-col items-end"
          >
            <span className="text-2xl md:text-5xl font-[950] italic tracking-tight text-[#d4af37] leading-none">
              +505
            </span>
            <span className="text-[8px] md:text-[10px] text-neutral-400 tracking-widest uppercase mt-1 text-right font-bold">
              FB Reviews
            </span>
          </motion.div>
        </div>
      </div>

      <div
        id="bottom-overlay"
        className="pointer-events-none absolute bottom-0 left-0 right-0 h-32 md:h-48 bg-gradient-to-b from-transparent to-black z-10"
      />

      <AnimatePresence>
        {activeLink && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="absolute bottom-6 md:bottom-8 left-1/2 -translate-x-1/2 z-30 bg-neutral-900 border border-neutral-800 rounded-none px-4 md:px-5 py-2 shadow-2xl"
          >
            <p className="text-[8px] md:text-[9px] tracking-widest text-neutral-400 uppercase font-bold whitespace-nowrap">
              navigating to <span className="text-[#d4af37]">{activeLink}</span>
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
