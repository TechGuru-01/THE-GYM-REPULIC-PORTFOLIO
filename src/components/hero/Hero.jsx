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
      className="relative min-h-screen w-full overflow-hidden bg-black flex flex-col justify-center items-center px-6"
    >
      <svg className="absolute w-0 h-0 pointer-events-none">
        <defs>
          <filter id="clean-rust">
            <feTurbulence
              type="fractalNoise"
              baseFrequency="0.05"
              numOctaves="4"
              result="noise"
            />
            <feColorMatrix
              type="matrix"
              values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 8 -2"
              result="mask"
            />
            <feComposite
              operator="in"
              in="SourceGraphic"
              in2="mask"
              result="weathered"
            />
            <feDisplacementMap
              in="weathered"
              in2="noise"
              scale="6"
              xChannelSelector="R"
              yChannelSelector="G"
            />
          </filter>
        </defs>
      </svg>

      <video
        id="bg-video"
        className="absolute inset-0 w-full h-full object-cover opacity-25 z-0 pointer-events-none filter grayscale contrast-115 brightness-50"
        autoPlay
        loop
        muted
        playsInline
        src="/hero/hero.mp4"
      />

      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-transparent to-black z-10 pointer-events-none" />

      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] sm:w-[600px] h-[350px] sm:h-[600px] bg-yellow-500/[0.03] blur-[130px] rounded-full pointer-events-none z-0" />

      <div className="absolute inset-0 z-12 pointer-events-none opacity-70">
        <Particles
          particleColors={["#facc15", "#ffffff"]}
          particleCount={30}
          particleSpread={20}
          speed={0.05}
          particleBaseSize={25}
          moveParticlesOnHover={false}
          alphaParticles={true}
          disableRotation={true}
          pixelRatio={1}
        />
      </div>

      <div
        id="content-container"
        className="relative w-full max-w-4xl mx-auto z-20 flex flex-col items-center text-center mt-auto mb-auto"
      >
        

          <motion.h1
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            style={{
              filter: "url(#clean-rust)",
              backgroundImage:
                "url('data:image/svg+xml,%3Csvg viewBox=%220 0 100 100%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22n%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.95%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23n)%22 opacity=%220.4%22/%3E%3C/svg%3E')",
            }}
            className="text-white bg-clip-text bg-gradient-to-b from-zinc-100 via-zinc-300 to-zinc-500 font-[950] tracking-tight text-[clamp(2.2rem,6vw,4.2rem)] uppercase leading-tight bg-blend-color-burn relative z-10 pr-6 sm:pr-8"
          >
            ANG PAMBANSANG
          </motion.h1>

          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            style={{
              filter: "url(#clean-rust)",
              backgroundImage:
                "url('data:image/svg+xml,%3Csvg viewBox=%220 0 100 100%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22n%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.8%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23n)%22 opacity=%220.5%22/%3E%3C/svg%3E')",
            }}
            className="text-yellow-500 bg-clip-text bg-gradient-to-b from-yellow-400 via-amber-500 to-amber-700 font-[950] tracking-tight text-[clamp(2.5rem,7vw,4.8rem)] uppercase leading-none mt-1 bg-blend-color-burn relative z-10"
          >
            GYM BAKAL
          </motion.h2>
        

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-neutral-400 text-sm sm:text-base md:text-lg font-medium tracking-wide max-w-xl mb-10 opacity-90"
        >

        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto px-4"
        >
          <button
            id="btn-cta-trial"
            onClick={handleGetStartedClick}
            className="group relative w-full sm:w-auto bg-yellow-500 text-black text-sm md:text-base font-bold px-8 py-3.5 rounded-lg shadow-lg active:scale-[0.98] cursor-pointer text-center whitespace-nowrap transition-all duration-300 overflow-hidden"
          >
            <div
              className="absolute inset-0 opacity-0 group-hover:opacity-[0.15] transition-opacity duration-300 pointer-events-none mix-blend-overlay"
              style={{
                backgroundImage:
                  "url('data:image/svg+xml,%3Csvg viewBox=%220 0 100 100%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22g%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.95%22 numOctaves=%223%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23g)%22/%3E%3C/svg%3E')",
              }}
            />
            <span className="relative z-10">Join Now</span>
          </button>

          <button
            id="btn-view-branches"
            onClick={(e) => e.preventDefault()}
            className="group relative w-full sm:w-auto bg-transparent border-2 border-yellow-500 text-yellow-500 text-sm md:text-base font-bold px-8 py-3.5 rounded-lg active:scale-[0.98] cursor-pointer text-center whitespace-nowrap transition-all duration-300 overflow-hidden"
          >
            <div
              className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-300 pointer-events-none bg-amber-600 mix-blend-screen"
              style={{
                backgroundImage:
                  "url('data:image/svg+xml,%3Csvg viewBox=%220 0 100 100%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22g%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.95%22 numOctaves=%223%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23g)%22/%3E%3C/svg%3E')",
              }}
            />
            <span className="relative z-10 transition-colors group-hover:text-amber-400">
              View Branches
            </span>
          </button>
        </motion.div>
      </div>

      <div
        id="bottom-overlay"
        className="pointer-events-none absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-b from-transparent to-black"
      />

      <AnimatePresence>
        {activeLink && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="absolute bottom-8 left-1/2 -translate-x-1/2 z-30 bg-neutral-900 border border-neutral-800 rounded-lg px-5 py-2 shadow-2xl"
          >
            <p className="text-xs tracking-wide text-neutral-400 font-medium">
              navigating to{" "}
              <span className="text-yellow-500">{activeLink}</span>
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
