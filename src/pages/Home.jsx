// src/pages/Home.jsx
import React from "react";
import { motion } from "framer-motion";
import Particles from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";
import Tilt from "react-parallax-tilt";
import { useNavigate } from "react-router-dom"; // ✅ Import useNavigate

export default function Home() {
  const navigate = useNavigate(); // ✅ Initialize navigate

  const particlesInit = async (engine) => {
    await loadSlim(engine);
  };

  return (
    <div className="relative min-h-screen bg-background flex items-center justify-center overflow-hidden">
      {/* Particles background */}
      <Particles
        id="tsparticles"
        init={particlesInit}
        options={{
          background: { color: "#0f172a" },
          fpsLimit: 60,
          particles: {
            number: { value: 60 },
            color: { value: "#3b82f6" },
            links: { enable: true, color: "#06b6d4", distance: 150 },
            move: { enable: true, speed: 2 },
          },
        }}
        className="absolute inset-0 -z-10"
      />

      <Tilt tiltMaxAngleX={6} tiltMaxAngleY={6} scale={1.02}>
        <motion.div
          className="text-center w-[85vw] max-w-3xl p-12 rounded-2xl bg-surface/70 backdrop-blur-lg shadow-xl border border-white/10"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
        >
          {/* Heading */}
          <motion.h1
            className="text-5xl font-extrabold text-heading mb-6"
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            Hi, I’m{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
              Bharath S
            </span>{" "}
            👋
          </motion.h1>

          {/* Pointwise Roles */}
          <ul className="text-xl font-semibold text-text mb-8 space-y-3 text-left max-w-md mx-auto list-disc list-inside">
            <li>Frontend Developer</li>
            <li>React Enthusiast</li>
            <li>Creative Designer</li>
          </ul>

          {/* Description */}
          <motion.p
            className="text-gray-300 text-lg max-w-2xl mx-auto mb-10"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            Welcome to my portfolio! Built with{" "}
            <span className="text-primary">React</span>,{" "}
            <span className="text-secondary">TailwindCSS</span>, and{" "}
            <span className="text-primary">Framer Motion</span> 🚀
          </motion.p>

          {/* Buttons */}
          <div className="flex gap-6 justify-center">
            <motion.button
              className="btn-gradient px-8 py-4 rounded-xl text-lg font-semibold"
              whileHover={{
                scale: 1.08,
                boxShadow: "0px 10px 25px rgba(59,130,246,0.4)",
              }}
              whileTap={{ scale: 0.95 }}
              onClick={() => navigate('/projects')} // ✅ Navigate to Projects
            >
              Explore My Work
            </motion.button>

            <motion.button
              className="px-8 py-4 rounded-xl text-lg font-semibold border border-primary text-primary hover:bg-primary/10 transition"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => navigate('/contact')} // ✅ Navigate to Contact
            >
              Contact Me
            </motion.button>
          </div>
        </motion.div>
      </Tilt>
    </div>
  );
}
