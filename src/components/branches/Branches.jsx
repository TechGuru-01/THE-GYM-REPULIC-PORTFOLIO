import React from "react";
import { motion } from "motion/react";

const branchesData = [
  {
    id: 1,
    name: "Cavite Headquarters",
    location: "Cavite City, Philippines",
    image: "/branches/cavite.jpg",
  },
  {
    id: 2,
    name: "Tarlac",
    location: "Tarlac City, Philippines",
    image: "/branches/tarlac.jpg",
  },
  {
    id: 3,
    name: "Lipan",
    location: "Lipan Batangas, Philippines",
    image: "/branches/lipan.jpg",
  },
];

export default function Branches() {
  return (
    <section
      id="branches"
      className="bg-black relative pt-32 pb-24 w-full flex flex-col items-center justify-center overflow-hidden"
    >
      <div className="absolute top-1/4 right-[10%] w-[400px] h-[400px] bg-yellow-500/[0.03] blur-[160px] rounded-full pointer-events-none z-0" />
      <div className="absolute bottom-1/4 left-[5%] w-[350px] h-[350px] bg-red-950/10 blur-[140px] rounded-full pointer-events-none z-0" />

      <div className="max-w-7xl w-full mx-auto px-6 md:px-12 relative z-10 flex flex-col items-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mb-20"
        >
          <h2
            style={{
              filter: "url(#clean-rust)",
              backgroundImage:
                "url('data:image/svg+xml,%3Csvg viewBox=%220 0 100 100%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22n%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.95%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23n)%22 opacity=%220.4%22/%3E%3C/svg%3E')",
            }}
            className="text-white bg-clip-text bg-gradient-to-b from-zinc-100 via-zinc-300 to-zinc-500 font-[950] tracking-tight text-4xl md:text-7xl uppercase leading-tight bg-blend-color-burn mb-4"
          >
            Our{" "}
            <span className="text-yellow-500 bg-gradient-to-b from-yellow-400 to-amber-600 bg-clip-text">
              Branches
            </span>
          </h2>
          <p className="text-neutral-400 text-sm md:text-base md:leading-relaxed max-w-2xl mx-auto font-medium tracking-wide">
            Explore our elite tech-enabled training grounds strategically
            located across the republic.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 w-full max-w-">
          {branchesData.map((branch, index) => (
            <motion.div
              key={branch.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.8,
                delay: index * 0.1,
                ease: [0.16, 1, 0.3, 1],
              }}
              whileHover={{ y: -8 }}
              onClick={() => alert(`viewing details for ${branch.name}`)}
              className="group bg-zinc-950 border border-zinc-900 rounded-xl overflow-hidden shadow-2xl flex flex-col transition-all duration-500 hover:border-yellow-500/40 relative z-10 cursor-pointer"
            >
              <div className="relative aspect-[4/3] w-full overflow-hidden bg-zinc-900">
                <img
                  src={branch.image}
                  alt={branch.name}
                  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105 opacity-60 group-hover:opacity-100 filter contrast-125 brightness-90"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/40 to-transparent opacity-95" />

                <div className="absolute top-4 right-4 h-10 w-10 bg-zinc-950/80 backdrop-blur-md border border-zinc-800 rounded-lg flex items-center justify-center text-zinc-400 group-hover:text-yellow-500 group-hover:border-yellow-500/40 transition-all duration-300 z-20 shadow-xl">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={2.5}
                    stroke="currentColor"
                    className="w-5 h-5 transition-transform duration-300 group-hover:scale-110"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M3.75 3.75v4.5m0-4.5h4.5m-4.5 0L9 9M3.75 20.25v-4.5m0 4.5h4.5m-4.5 0L9 15M20.25 3.75h-4.5m4.5 0v4.5m0-4.5L15 9m5.25 11.25h-4.5m4.5 0v-4.5m0 4.5L15 15"
                    />
                  </svg>
                </div>
              </div>

              <div className="p-6 md:p-8 flex flex-col flex-grow bg-gradient-to-b from-zinc-950 to-black relative z-10">
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none z-0"
                  style={{
                    background:
                      "radial-gradient(600px circle at 50% 50%, rgba(234,179,8,0.04), transparent 50%)",
                  }}
                />

                <h3 className="text-white font-[950] text-xl md:text-2xl mb-2 tracking-tight group-hover:text-yellow-500 transition-colors uppercase relative z-10">
                  {branch.name}
                </h3>
                <p className="text-zinc-500 text-xs font-semibold uppercase tracking-widest relative z-10">
                  {branch.location}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
