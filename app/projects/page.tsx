"use client";

import { motion } from "framer-motion";

export default function Projects() {
  const fadeInUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  };

  const projects = [
    {
      name: "Urban Mapping Dashboard",
      desc: "Interactive map for urban growth analysis.",
    },
    {
      name: "Crop Monitoring Tool",
      desc: "Satellite-based monitoring system for crops.",
    },
    {
      name: "Disaster Risk Portal",
      desc: "Visualization for hazard zones and exposure.",
    },
  ];

  return (
    <motion.section
      className="min-h-screen flex flex-col items-center justify-center px-6 md:px-20 bg-gradient-to-b from-blue-50 to-white text-gray-900 pt-28"
      initial="hidden"
      animate="visible"
      variants={fadeInUp}
    >
      <h1 className="text-4xl font-bold text-blue-600 mb-8">Projects</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl">
        {projects.map((proj, i) => (
          <motion.div
            key={i}
            whileHover={{ scale: 1.05 }}
            className="bg-white p-6 rounded-2xl shadow-md hover:shadow-xl transition text-center"
          >
            <h3 className="text-xl font-bold text-blue-700 mb-2">
              {proj.name}
            </h3>
            <p className="text-gray-600">{proj.desc}</p>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
}
