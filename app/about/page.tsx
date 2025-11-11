"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

export default function About() {
  // Fixed variants with proper easing values
  const fadeInUp = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.25, 0.46, 0.45, 0.94], // cubic-bezier equivalent of easeOut
      },
    },
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const stats = [
    { number: "1+", label: "Years Experience" },
    { number: "40+", label: "Certifications" },
    { number: "15+", label: "Projects Completed" },
    { number: "10+", label: "Technologies" },
  ];

  const expertiseCards = [
    {
      title: "Geospatial Expertise",
      front: "GIS | Remote Sensing | EO",
      back: "Strong foundation in spatial data processing, remote sensing analysis, and integrating geospatial intelligence for actionable insights.",
    },
    {
      title: "Web & GIS Development",
      front: "Full Stack | APIs | Maps",
      back: "Skilled in web technologies and GIS integration—building spatial applications with interactive maps and RESTful APIs.",
    },
    {
      title: "Soft Skills",
      front: "Leadership | Collaboration",
      back: "Effective communicator, team-oriented, and adaptable — always driven by curiosity and a passion for continuous learning.",
    },
  ];

  const technologies = [
    "Python",
    "R",
    "JavaScript",
    "React",
    "Next.js",
    "QGIS",
    "ArcGIS",
    "Google Earth Engine",
    "PostGIS",
    "Leaflet",
    "OpenLayers",
    "Git",
    "Docker",
    "PostgreSQL",
    "Node.js",
    "TypeScript",
    "Tailwind CSS",
    "Framer Motion",
  ];

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="min-h-screen bg-white flex flex-col justify-center items-center px-6 md:px-16 py-20 text-gray-800"
    >
      {/* Section 1: Hero Introduction */}
      <motion.h2
        className="text-4xl md:text-5xl font-bold mb-10 text-center text-blue-600"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeInUp as any} // Temporary fix for TypeScript
      >
        About Me
      </motion.h2>

      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12 mb-20">
        {/* Left: Image with Hover Effects */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          whileHover={{
            scale: 1.05,
            rotate: 1.5,
            boxShadow: "0 0 30px rgba(37,99,235,0.4)",
          }}
          transition={{ type: "spring", stiffness: 200, damping: 15 }}
          className="relative w-72 h-96 md:w-80 md:h-[28rem] rounded-3xl overflow-hidden shadow-2xl bg-blue-50 flex-shrink-0"
          variants={fadeInUp as any}
        >
          <Image
            src="/files/profile2.jpg"
            alt="Karanja Benjamin Ndung'u - GIS Specialist & Web Developer"
            fill
            className="object-cover hover:scale-105 transition-transform duration-700"
            priority
          />
        </motion.div>

        {/* Right: Description */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-center md:text-left space-y-6 max-w-2xl"
          variants={fadeInUp as any}
        >
          <p className="leading-relaxed text-lg md:text-xl">
            👋 Hi, I&apos;m{" "}
            <span className="font-semibold text-blue-600">
              Karanja Benjamin Ndung&apos;u
            </span>
            , a passionate{" "}
            <span className="font-medium text-blue-500">
              GIS Specialist, Web/GIS Developer, and Earth Observation Analyst
            </span>{" "}
            with a deep interest in how{" "}
            <span className="font-medium text-blue-500">
              geospatial technologies
            </span>{" "}
            can shape smarter decision-making and drive innovation.
          </p>

          <p className="leading-relaxed text-gray-700 text-lg">
            My journey has been guided by a love for{" "}
            <span className="font-medium text-blue-500">
              Earth Observation (EO)
            </span>
            , spatial data analysis, and web-based tools that make complex
            information{" "}
            <span className="font-semibold text-gray-900">
              accessible and impactful
            </span>
            . I enjoy merging technical expertise with creativity to build
            real-world solutions.
          </p>

          <p className="leading-relaxed text-gray-700 text-lg">
            Beyond code and maps, I believe in{" "}
            <span className="italic text-blue-600">
              building meaningful experiences
            </span>{" "}
            that empower individuals, organizations, and communities to make
            data-driven decisions that matter.
          </p>
        </motion.div>
      </div>

      {/* Section 2: Quick Stats */}
      <motion.div
        className="mb-20 w-full"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={staggerContainer as any}
      >
        <motion.h3
          className="text-3xl font-bold text-center mb-12 text-gray-800"
          variants={fadeInUp as any}
        >
          My Journey in Numbers
        </motion.h3>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              className="text-center p-6 bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl shadow-lg border border-blue-200"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              whileHover={{
                scale: 1.05,
                y: -5,
                boxShadow: "0 20px 25px -5px rgba(59, 130, 246, 0.3)",
              }}
            >
              <motion.div
                className="text-3xl md:text-4xl font-bold text-blue-600 mb-2"
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                transition={{
                  delay: index * 0.1,
                  type: "spring",
                  stiffness: 200,
                }}
              >
                {stat.number}
              </motion.div>
              <div className="text-gray-600 font-medium">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Section 3: Expertise Cards */}
      <motion.div
        className="mb-20 w-full"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={staggerContainer as any}
      >
        <motion.h3
          className="text-3xl font-bold text-center mb-12 text-gray-800"
          variants={fadeInUp as any}
        >
          Areas of Expertise
        </motion.h3>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {expertiseCards.map((card, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              whileHover={{ scale: 1.03 }}
              className="relative w-full h-48 [perspective:1000px]"
            >
              <div
                className="relative w-full h-full transition-transform duration-700 [transform-style:preserve-3d] hover:[transform:rotateY(180deg)] cursor-pointer"
                aria-label={`Flip to learn more about ${card.title}`}
              >
                {/* Front */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-100 to-blue-200 text-blue-800 flex flex-col justify-center items-center rounded-2xl shadow-lg [backface-visibility:hidden] p-6 border-2 border-blue-300">
                  <h3 className="text-xl font-bold mb-3 text-center">
                    {card.title}
                  </h3>
                  <p className="text-sm text-center font-medium">
                    {card.front}
                  </p>
                </div>

                {/* Back */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-600 to-blue-700 text-white flex flex-col justify-center items-center rounded-2xl shadow-xl [transform:rotateY(180deg)] [backface-visibility:hidden] p-6">
                  <p className="text-sm text-center mb-4 leading-relaxed">
                    {card.back}
                  </p>
                  <Link
                    href="/skills"
                    className="text-white underline text-sm font-medium hover:opacity-80 transition-opacity"
                  >
                    Learn More →
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Section 4: Technologies Grid */}
      <motion.div
        className="mb-20 w-full"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={staggerContainer as any}
      >
        <motion.h3
          className="text-3xl font-bold text-center mb-12 text-gray-800"
          variants={fadeInUp as any}
        >
          Technologies & Tools
        </motion.h3>

        <div className="flex flex-wrap justify-center gap-4 max-w-4xl mx-auto">
          {technologies.map((tech, index) => (
            <motion.span
              key={tech}
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{
                delay: index * 0.05,
                type: "spring",
                stiffness: 200,
              }}
              whileHover={{
                scale: 1.1,
                y: -2,
                backgroundColor: "#3B82F6",
                color: "white",
              }}
              className="bg-gray-100 px-5 py-3 rounded-full text-sm font-medium text-gray-700 hover:bg-blue-500 hover:text-white transition-all duration-300 cursor-default shadow-md"
            >
              {tech}
            </motion.span>
          ))}
        </div>
      </motion.div>

      {/* Section 5: Enhanced Call-to-Action */}
      <motion.div
        className="text-center"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <motion.h3
          className="text-3xl font-bold mb-6 text-gray-800"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          Let&apos;s Build Something Amazing Together
        </motion.h3>

        <motion.p
          className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          Ready to turn your geospatial ideas into reality? Whether you need a
          custom mapping solution, data analysis, or a full-stack web
          application, I&apos;m here to help.
        </motion.p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <motion.a
            href="/files/Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            whileHover={{
              scale: 1.05,
              y: -2,
              boxShadow: "0 10px 25px -5px rgba(37, 99, 235, 0.4)",
            }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center justify-center gap-3 bg-blue-600 text-white px-8 py-4 rounded-xl hover:bg-blue-700 transition-all duration-300 shadow-lg font-semibold text-lg"
          >
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
              />
            </svg>
            Download Full CV
          </motion.a>

          <motion.a
            href="/contact"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            whileHover={{
              scale: 1.05,
              y: -2,
              boxShadow: "0 10px 25px -5px rgba(37, 99, 235, 0.3)",
            }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center justify-center gap-3 border-2 border-blue-600 text-blue-600 px-8 py-4 rounded-xl hover:bg-blue-600 hover:text-white transition-all duration-300 shadow-lg font-semibold text-lg"
          >
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
              />
            </svg>
            Get In Touch
          </motion.a>
        </div>
      </motion.div>
    </motion.section>
  );
}
