"use client";

import { motion } from "framer-motion";
import {
  FaGithub,
  FaExternalLinkAlt,
  FaMap,
  FaSeedling,
  FaCloudRain,
  FaTemperatureHigh,
  FaLeaf,
  FaMountain,
} from "react-icons/fa";

export default function Projects() {
  const fadeInUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  };

  const stagger = {
    visible: {
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const projects = [
    {
      name: "Land Use Land Cover Analysis",
      description:
        "Classification and monitoring of land use changes using satellite imagery and machine learning algorithms for environmental assessment.",
      icon: <FaMap className="text-2xl text-green-600" />,
      technologies: ["Remote Sensing", "Machine Learning", "QGIS", "Python"],
      githubUrl: "https://github.com/Benjamin025?tab=repositories",
      category: "Environmental Monitoring",
      status: "Completed",
    },
    {
      name: "Rainfall Estimation System",
      description:
        "Satellite-based precipitation estimation and analysis for hydrological modeling and water resource management.",
      icon: <FaCloudRain className="text-2xl text-blue-500" />,
      technologies: ["Satellite Data", "GIS", "R/Python", "Data Analysis"],
      githubUrl: "https://github.com/Benjamin025?tab=repositories",
      category: "Hydrology",
      status: "Completed",
    },
    {
      name: "Soil Moisture Estimation",
      description:
        "Remote sensing approach to estimate soil moisture content for agricultural and environmental applications.",
      icon: <FaSeedling className="text-2xl text-brown-600" />,
      technologies: ["Remote Sensing", "Soil Science", "GIS", "Python"],
      githubUrl: "https://github.com/Benjamin025?tab=repositories",
      category: "Agriculture",
      status: "Completed",
    },
    {
      name: "Soil Organic Carbon Mapping",
      description:
        "Spatial analysis and mapping of soil organic carbon for climate change studies and soil health assessment.",
      icon: <FaMountain className="text-2xl text-amber-700" />,
      technologies: ["Spatial Analysis", "Carbon Mapping", "GIS", "Statistics"],
      githubUrl: "https://github.com/Benjamin025?tab=repositories",
      category: "Climate Science",
      status: "Completed",
    },
    {
      name: "Temperature Estimation",
      description:
        "Land surface temperature estimation using thermal infrared data for urban heat island studies.",
      icon: <FaTemperatureHigh className="text-2xl text-red-500" />,
      technologies: [
        "Thermal Remote Sensing",
        "Urban Planning",
        "QGIS",
        "Python",
      ],
      githubUrl: "https://github.com/Benjamin025?tab=repositories",
      category: "Urban Studies",
      status: "Completed",
    },
    {
      name: "Vegetation Analysis",
      description:
        "NDVI and vegetation indices analysis for monitoring plant health and biomass estimation.",
      icon: <FaLeaf className="text-2xl text-green-500" />,
      technologies: [
        "Vegetation Indices",
        "Time Series",
        "GIS",
        "Remote Sensing",
      ],
      githubUrl: "https://github.com/Benjamin025?tab=repositories",
      category: "Ecology",
      status: "Completed",
    },
  ];

  // Extract unique categories for filtering
  const categories = [...new Set(projects.map((project) => project.category))];

  return (
    <motion.section
      className="min-h-screen flex flex-col items-center justify-center px-6 md:px-20 bg-gradient-to-b from-blue-50 to-white text-gray-900 pt-28 py-12"
      initial="hidden"
      animate="visible"
      variants={fadeInUp}
    >
      <div className="text-center mb-12">
        <motion.h1
          className="text-4xl md:text-5xl font-bold text-blue-600 mb-4"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          My Projects
        </motion.h1>
        <motion.p
          className="text-lg text-gray-600 max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          A collection of geospatial and data science projects showcasing my
          expertise in remote sensing, GIS analysis, and environmental
          monitoring.
        </motion.p>
      </div>

      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl w-full"
        variants={stagger}
        initial="hidden"
        animate="visible"
      >
        {projects.map((project, index) => (
          <motion.div
            key={index}
            variants={fadeInUp}
            whileHover={{
              scale: 1.03,
              y: -5,
              transition: { duration: 0.3 },
            }}
            className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-100"
          >
            <div className="p-6">
              {/* Project Header */}
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center space-x-3">
                  {project.icon}
                  <span className="inline-block px-2 py-1 text-xs font-medium bg-blue-100 text-blue-800 rounded-full">
                    {project.category}
                  </span>
                </div>
                <span className="text-xs font-medium bg-green-100 text-green-800 px-2 py-1 rounded-full">
                  {project.status}
                </span>
              </div>

              {/* Project Content */}
              <h3 className="text-xl font-bold text-gray-800 mb-3">
                {project.name}
              </h3>
              <p className="text-gray-600 mb-4 leading-relaxed">
                {project.description}
              </p>

              {/* Technologies */}
              <div className="flex flex-wrap gap-2 mb-4">
                {project.technologies.map((tech, techIndex) => (
                  <span
                    key={techIndex}
                    className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-full"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* Action Buttons */}
              <div className="flex space-x-3">
                <motion.a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex items-center justify-center space-x-2 bg-gray-800 text-white px-4 py-2 rounded-lg hover:bg-gray-900 transition-colors flex-1 text-sm font-medium"
                >
                  <FaGithub />
                  <span>Code</span>
                </motion.a>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex items-center justify-center space-x-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors flex-1 text-sm font-medium"
                >
                  <FaExternalLinkAlt />
                  <span>Details</span>
                </motion.button>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>

      {/* GitHub Call to Action */}
      <motion.div
        className="text-center mt-12"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.6 }}
      >
        <p className="text-gray-600 mb-4">Want to see more of my work?</p>
        <motion.a
          href="https://github.com/Benjamin025"
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="inline-flex items-center space-x-2 bg-gray-900 text-white px-6 py-3 rounded-lg hover:bg-black transition-colors font-medium"
        >
          <FaGithub className="text-lg" />
          <span>Explore My GitHub</span>
        </motion.a>
      </motion.div>
    </motion.section>
  );
}
