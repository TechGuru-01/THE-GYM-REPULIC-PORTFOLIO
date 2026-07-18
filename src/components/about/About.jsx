import React from "react";
import { motion } from "motion/react";
import SideRays from "../siderays/SideRays.jsx";

export default function About() {
  return (
    <section
      id="about"
      className="bg-black relative pt-32 pb-24 px-6 md:px-12 flex flex-col items-center justify-center overflow-hidden"
    >
      {/* Background SideRays aligned to Hero Colors */}
      <div className="absolute inset-0 z-0 pointer-events-none opacity-30">
        <SideRays
          origin="top-right"
          rayColor1="#eab308"
          rayColor2="#fef08a"
          intensity={2.0}
          opacity={1}
          speed={5}
          spread={10}
        />
      </div>

      {/* Background Glows */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-yellow-500/[0.03] blur-[160px] rounded-full pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] bg-red-950/10 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-5xl mx-auto text-center relative z-10 flex flex-col items-center">
        {/* Distressed Gritty Header (Mirrors Hero Style) */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          style={{
            filter: "url(#clean-rust)",
            backgroundImage:
              "url('data:image/svg+xml,%3Csvg viewBox=%220 0 100 100%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22n%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.95%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23n)%22 opacity=%220.4%22/%3E%3C/svg%3E')",
          }}
          className="text-white bg-clip-text bg-gradient-to-b from-zinc-100 via-zinc-300 to-zinc-500 font-[950] tracking-tight text-4xl md:text-7xl uppercase leading-tight bg-blend-color-burn mb-6"
        >
          ABOUT THE {" "}
          <span className="text-yellow-500 bg-gradient-to-b from-yellow-400 to-amber-600 bg-clip-text">
            REPUBLIC
          </span>
        </motion.h2>

        {/* Clean, Readable Body Content */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
          className="text-neutral-400 text-sm md:text-base md:leading-relaxed max-w-2xl mb-10 font-medium tracking-wide"
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </motion.p>

        {/* Cohesive Theme Buttons (Pill shaped, matching height) */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto px-4"
        >
          <button
            id="btn-download-app"
            onClick={() =>
              alert("Gym Republic App download links coming soon!")
            }
            className="w-full sm:w-auto bg-yellow-500 hover:bg-white text-black font-bold text-sm md:text-base tracking-wider uppercase rounded-lg px-8 py-3.5 transition-all shadow-lg active:scale-[0.98] cursor-pointer text-center whitespace-nowrap"
          >
            Join the Republic
          </button>

          <button
            id="btn-learn-more"
            onClick={() => {
              const heroSection = document.getElementById("hero-section");
              if (heroSection) {
                heroSection.scrollIntoView({ behavior: "smooth" });
              }
            }}
            className="w-full sm:w-auto bg-transparent hover:bg-white/5 border-2 border-yellow-500 text-yellow-500 font-bold text-sm md:text-base tracking-wider uppercase rounded-lg px-8 py-3.5 transition-all active:scale-[0.98] cursor-pointer text-center whitespace-nowrap"
          >
            I want to learn more
          </button>
        </motion.div>
      </div>
    </section>
  );
}
