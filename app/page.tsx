"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence, useAnimation } from "framer-motion";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

export default function Home() {
  const [showIntro, setShowIntro] = useState(false);
  const controls = useAnimation();

  useEffect(() => {
    // Show intro once per session
    const hasSeenIntro = sessionStorage.getItem("hasSeenIntro");
    if (!hasSeenIntro) {
      setShowIntro(true);
      sessionStorage.setItem("hasSeenIntro", "true");
      setTimeout(() => setShowIntro(false), 2500);
    }

    // Handle tagline visibility on scroll
    const handleScroll = () => {
      const scrollY = window.scrollY;
      if (scrollY < 200) {
        controls.start({ opacity: 1, y: 0 });
      } else {
        controls.start({ opacity: 0, y: 20 });
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [controls]);

  const fadeInUp = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  };

  return (
    <div className="overflow-x-hidden relative">
      {/* INTRO SCREEN */}
      <AnimatePresence>
        {showIntro && (
          <motion.div
            key="intro"
            className="fixed inset-0 flex items-center justify-center bg-gradient-to-b from-blue-50 via-white to-blue-100 z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0, transition: { duration: 1.2 } }}
          >
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
              className="text-3xl md:text-5xl text-blue-600 font-light italic text-center px-6"
            >
              &ldquo;Welcome to my digital space — where creativity meets
              geospatial intelligence.&rdquo;
            </motion.h1>
          </motion.div>
        )}
      </AnimatePresence>

      {/* HERO SECTION */}
      <motion.section
        id="home"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.2 }}
        className="min-h-screen flex flex-col md:flex-row items-center justify-center bg-gradient-to-b from-blue-50 via-white to-blue-100 px-6 md:px-16 text-gray-900 relative overflow-hidden"
      >
        {/* Subtle Background Elements */}
        <div className="absolute inset-0 opacity-10 pointer-events-none">
          <motion.div
            className="absolute top-20 left-10 w-4 h-4 bg-blue-400 rounded-full"
            animate={{ y: [0, -20, 0], opacity: [0.5, 1, 0.5] }}
            transition={{ duration: 4, repeat: Infinity }}
          />
          <motion.div
            className="absolute bottom-40 right-20 w-6 h-6 bg-blue-300 rounded-full"
            animate={{ y: [0, 20, 0], opacity: [0.3, 0.8, 0.3] }}
            transition={{ duration: 5, repeat: Infinity, delay: 1 }}
          />
          <motion.div
            className="absolute top-1/2 left-1/4 w-3 h-3 bg-blue-500 rounded-full"
            animate={{ y: [0, 15, 0], opacity: [0.4, 0.9, 0.4] }}
            transition={{ duration: 6, repeat: Infinity, delay: 2 }}
          />
        </div>

        {/* LEFT CONTENT */}
        <motion.div
          className="flex-1 text-center md:text-left space-y-6 z-10"
          initial="hidden"
          animate="visible"
          variants={fadeInUp}
        >
          <h1 className="text-5xl md:text-7xl font-bold leading-tight">
            Hi, I&apos;m <br />
            <span className="bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent drop-shadow-sm">
              Karanja Benjamin Ndung&apos;u
            </span>
          </h1>

          <h2 className="text-2xl md:text-3xl text-gray-700 font-medium">
            GIS Specialist | Web Developer | Earth Observation Analyst
          </h2>

          <p className="max-w-lg text-gray-600 mt-4 leading-relaxed text-lg">
            I specialize in creating innovative GIS and web solutions that
            transform spatial data into meaningful real-world applications.
            Let&apos;s explore how technology and geography can shape smarter
            decisions together.
          </p>

          {/* Social Links with Tooltips */}
          <div className="flex justify-center md:justify-start space-x-6 mt-8">
            {[
              {
                href: "https://github.com/Benjamin025",
                icon: <FaGithub />,
                label: "GitHub",
              },
              {
                href: "https://www.linkedin.com/in/benjamin-ndung-u-87585a268/",
                icon: <FaLinkedin />,
                label: "LinkedIn",
              },
              {
                href: "mailto:ndungubenjamin025@gmail.com",
                icon: <FaEnvelope />,
                label: "Email",
              },
            ].map((link, i) => (
              <motion.a
                key={i}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={link.label}
                whileHover={{ scale: 1.2, y: -5 }}
                whileTap={{ scale: 0.9 }}
                className="text-gray-600 hover:text-blue-600 text-3xl transition-colors relative group"
              >
                {link.icon}
                <span className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 text-xs bg-gray-800 text-white px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
                  {link.label}
                </span>
              </motion.a>
            ))}
          </div>

          {/* CV Buttons */}
          <div className="flex justify-center md:justify-start space-x-4 mt-8">
            <motion.a
              href="/files/Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="bg-blue-600 text-white px-6 py-3 rounded-xl hover:bg-blue-700 transition-all shadow-lg hover:shadow-xl font-medium"
            >
              View CV
            </motion.a>
            <motion.a
              href="/files/Resume.pdf"
              download
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="bg-gray-200 text-gray-800 px-6 py-3 rounded-xl hover:bg-gray-300 transition-all shadow-lg hover:shadow-xl font-medium"
            >
              Download CV
            </motion.a>
          </div>
        </motion.div>

        {/* RIGHT IMAGE + TAGLINE */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8, y: 30 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="flex-1 flex justify-center mt-12 md:mt-0 relative z-10"
        >
          <motion.div
            whileHover={{
              scale: 1.05,
              rotate: [0, 1, -1, 0],
              transition: { duration: 0.8 },
            }}
            className="relative w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden border-[6px] md:border-[8px] border-white shadow-2xl bg-blue-100"
          >
            <Image
              src="/files/profile.jpg"
              alt="Karanja Benjamin - GIS Specialist and Web Developer"
              fill
              className="object-cover"
              priority
              sizes="(max-width: 768px) 256px, (max-width: 1024px) 320px, 384px"
            />

            {/* Animated Glow Ring */}
            <motion.div
              className="absolute inset-0 rounded-full border-4 border-blue-300/30"
              animate={{
                boxShadow: [
                  "0 0 0 rgba(59,130,246,0)",
                  "0 0 25px rgba(59,130,246,0.3)",
                  "0 0 0 rgba(59,130,246,0)",
                ],
              }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            />
          </motion.div>

          {/* Persistent Welcome Tagline (bottom-left desktop only) */}
          <motion.div
            animate={controls}
            transition={{ duration: 0.8 }}
            className="absolute bottom-[-60px] left-0 hidden md:block"
          >
            <p className="text-blue-600 italic text-sm opacity-80">
              &ldquo;Welcome to my digital space...&rdquo;
            </p>
          </motion.div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 hidden md:flex flex-col items-center"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <span className="text-gray-500 text-sm mb-2">Scroll to explore</span>
          <div className="w-6 h-10 border-2 border-blue-400 rounded-full flex justify-center">
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="w-1 h-3 bg-blue-400 rounded-full mt-2"
            />
          </div>
        </motion.div>
      </motion.section>
    </div>
  );
}
