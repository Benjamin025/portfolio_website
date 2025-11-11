"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaMapMarkedAlt,
  FaSatellite,
  FaCode,
  FaBrain,
  FaExternalLinkAlt,
} from "react-icons/fa";

interface SkillSection {
  [key: string]: string[];
}

interface Skill {
  title: string;
  icon: JSX.Element;
  summary: string;
  teaser: string;
  sections: SkillSection;
  proficiency: number;
  relatedCertifications?: number[];
}

export default function Skills() {
  const [expandedCard, setExpandedCard] = useState<number | null>(null);
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);
  const [activeFilter, setActiveFilter] = useState<string>("all");

  const handleExpand = (index: number) => {
    setExpandedCard(expandedCard === index ? null : index);
  };

  const filterButtons = [
    { key: "all", label: "All Skills" },
    { key: "gis", label: "GIS & Analysis" },
    { key: "remote-sensing", label: "Remote Sensing" },
    { key: "development", label: "Development" },
    { key: "emerging", label: "Emerging Tech" },
  ];

  const skills: Skill[] = [
    {
      title: "GIS & Spatial Analysis",
      icon: <FaMapMarkedAlt className="text-blue-600 text-5xl" />,
      summary:
        "Spatial data analysis, cartography, and terrain modeling using GIS tools.",
      teaser:
        "Explore tools like QGIS, ArcGIS, and PostGIS with advanced spatial analytics.",
      proficiency: 90,
      relatedCertifications: [18, 24, 26, 27, 28],
      sections: {
        "Core Concepts": [
          "Spatial data types (vector, raster, LiDAR)",
          "Coordinate systems, projections, and datums",
          "Map design and cartography",
          "Georeferencing and digitization",
        ],
        "Analytical Techniques": [
          "Spatial querying, overlay, buffering",
          "Network and proximity analysis",
          "Terrain & hydrological analysis",
          "Geostatistics and spatial autocorrelation",
        ],
        "Software & Tools": [
          "QGIS",
          "ArcGIS Pro",
          "GRASS GIS",
          "PostGIS",
          "Global Mapper",
          "GeoDa",
        ],
      },
    },
    {
      title: "Remote Sensing & Image Analysis",
      icon: <FaSatellite className="text-blue-600 text-5xl" />,
      summary:
        "Processing satellite & UAV data, classification, and change detection.",
      teaser:
        "Advanced Earth observation workflows using GEE, ENVI, and Python.",
      proficiency: 85,
      relatedCertifications: [4, 5, 6, 7, 8, 9, 10, 16, 25, 32, 34],
      sections: {
        "Foundational Knowledge": [
          "Spectral signatures & electromagnetic spectrum",
          "Image resolution types",
          "Atmospheric & geometric correction",
        ],
        "Analytical Skills": [
          "Supervised/unsupervised classification",
          "Change detection techniques",
          "Vegetation indices (NDVI, EVI, SAVI)",
          "Radar & LiDAR analysis",
        ],
        "Software & Tools": [
          "Google Earth Engine",
          "SNAP",
          "ENVI",
          "ERDAS Imagine",
          "Orfeo Toolbox",
          "Python (rasterio, GDAL)",
          "R (terra)",
        ],
      },
    },
    {
      title: "GIS Development & Automation",
      icon: <FaCode className="text-blue-600 text-5xl" />,
      summary:
        "Building WebGIS apps and automating workflows with Python, JS, and APIs.",
      teaser:
        "Web mapping with Leaflet, Mapbox, and geospatial Python scripting.",
      proficiency: 80,
      relatedCertifications: [3, 19, 20, 21, 22, 30, 33],
      sections: {
        "Programming & Frameworks": [
          "Python (geopandas, shapely, folium)",
          "JavaScript (Leaflet, Mapbox GL JS)",
          "R for geostatistics and visualization",
        ],
        "Web GIS & APIs": [
          "ArcGIS Online",
          "Experience Builder",
          "GeoServer",
          "REST APIs",
          "WMS",
          "WFS",
          "Streamlit",
          "Dash",
        ],
        "Version Control & Cloud": [
          "Git",
          "GitHub",
          "Docker",
          "AWS",
          "GCP",
          "BigQuery GIS",
        ],
      },
    },
    {
      title: "Emerging Technologies",
      icon: <FaBrain className="text-blue-600 text-5xl" />,
      summary:
        "AI, ML, and big data for intelligent geospatial systems and analytics.",
      teaser:
        "Machine learning and deep learning for remote sensing and 3D GIS.",
      proficiency: 75,
      relatedCertifications: [17, 23, 24, 31],
      sections: {
        "AI & ML": [
          "Deep learning for EO (CNNs, U-Net)",
          "Object detection and segmentation",
          "PyTorch",
          "TensorFlow frameworks",
        ],
        "Cloud & 3D": [
          "GEE",
          "AWS SageMaker",
          "Photogrammetry",
          "UAV 3D modeling",
          "CesiumJS",
          "Potree",
          "ArcGIS 3D",
        ],
        "Standards & Interoperability": [
          "OGC standards (WMS, WFS, WCS)",
          "ISO metadata standards",
        ],
      },
    },
  ];

  // Filter skills based on active filter
  const filteredSkills = skills.filter((skill) => {
    if (activeFilter === "all") return true;
    if (activeFilter === "gis") return skill.title.includes("GIS & Spatial");
    if (activeFilter === "remote-sensing")
      return skill.title.includes("Remote Sensing");
    if (activeFilter === "development")
      return skill.title.includes("Development");
    if (activeFilter === "emerging") return skill.title.includes("Emerging");
    return true;
  });

  return (
    <section className="min-h-screen bg-gradient-to-b from-blue-50 to-white py-20 px-4 sm:px-6 md:px-16 text-gray-800">
      {/* Header */}
      <motion.div
        className="text-center mb-16"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <h2 className="text-4xl font-bold mb-4 text-blue-600">
          Skills & Expertise
        </h2>
        <div className="w-24 h-1 bg-blue-400 mx-auto mb-6"></div>
        <motion.p
          className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
        >
          A showcase of the geospatial and analytical skills I&apos;ve developed
          — blending GIS, remote sensing, programming, and automation.
        </motion.p>
      </motion.div>

      {/* Filter Buttons */}
      <motion.div
        className="flex flex-wrap justify-center gap-3 mb-12"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        {filterButtons.map((button) => (
          <motion.button
            key={button.key}
            onClick={() => setActiveFilter(button.key)}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className={`px-5 py-3 rounded-full text-sm font-medium transition-all duration-300 ${
              activeFilter === button.key
                ? "bg-blue-500 text-white shadow-lg shadow-blue-200"
                : "bg-white text-gray-600 hover:bg-gray-100 border border-gray-200 hover:border-blue-300"
            }`}
          >
            {button.label}
          </motion.button>
        ))}
      </motion.div>

      {/* Cards Grid */}
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-2 gap-8 justify-items-center">
          {filteredSkills.map((skill: Skill, index: number) => (
            <motion.div
              key={index}
              layout
              className={`w-full max-w-2xl cursor-pointer transition-all duration-300 ${
                expandedCard === index ? "z-10" : "z-0"
              }`}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              onHoverStart={() => setHoveredCard(index)}
              onHoverEnd={() => setHoveredCard(null)}
            >
              {/* Main Card */}
              <motion.div
                layout
                className={`bg-white rounded-2xl shadow-lg border border-blue-100 overflow-hidden transition-all duration-300 ${
                  expandedCard === index
                    ? "shadow-2xl ring-2 ring-blue-200"
                    : "hover:shadow-xl"
                }`}
                onClick={() => handleExpand(index)}
              >
                {/* Card Header */}
                <div className="p-6 bg-gradient-to-r from-blue-50 to-white border-b border-blue-100">
                  <div className="flex items-center gap-4">
                    <div className="flex-shrink-0">{skill.icon}</div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-blue-800 mb-2">
                        {skill.title}
                      </h3>
                      <p className="text-gray-600 text-sm leading-relaxed mb-3">
                        {skill.summary}
                      </p>

                      {/* Skill Proficiency Bar */}
                      <div className="mt-3">
                        <div className="flex justify-between text-xs text-gray-500 mb-1">
                          <span>Proficiency Level</span>
                          <span className="font-semibold">
                            {skill.proficiency}%
                          </span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-2">
                          <motion.div
                            className="bg-gradient-to-r from-blue-500 to-blue-600 h-2 rounded-full shadow-sm"
                            initial={{ width: 0 }}
                            animate={{ width: `${skill.proficiency}%` }}
                            transition={{
                              duration: 1.5,
                              delay: index * 0.2,
                              ease: "easeOut",
                            }}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Card Body */}
                <div className="p-6">
                  <div className="flex justify-between items-center mb-4">
                    <p className="text-gray-700 text-sm italic flex-1">
                      {skill.teaser}
                    </p>
                    <motion.span
                      className="text-blue-500 text-sm font-semibold whitespace-nowrap ml-4 flex items-center gap-1"
                      whileHover={{ scale: 1.05 }}
                    >
                      {expandedCard === index ? "Show Less" : "Learn More"}
                      <FaExternalLinkAlt className="text-xs" />
                    </motion.span>
                  </div>

                  {/* Expanded Details */}
                  <AnimatePresence>
                    {expandedCard === index && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{
                          duration: 0.5,
                          ease: [0.04, 0.62, 0.23, 0.98],
                        }}
                        className="overflow-hidden"
                      >
                        <div className="pt-4 border-t border-gray-100 space-y-6">
                          {Object.entries(skill.sections).map(
                            (
                              [heading, list]: [string, string[]],
                              idx: number
                            ) => (
                              <div key={idx}>
                                <h4 className="text-blue-700 font-semibold mb-3 text-sm uppercase tracking-wide">
                                  {heading}
                                </h4>
                                <div className="flex flex-wrap gap-2">
                                  {list.map((item: string, j: number) => (
                                    <motion.span
                                      key={j}
                                      initial={{ opacity: 0, scale: 0.8 }}
                                      animate={{ opacity: 1, scale: 1 }}
                                      transition={{
                                        duration: 0.3,
                                        delay: j * 0.05,
                                      }}
                                      whileHover={{ scale: 1.05, y: -2 }}
                                      className="bg-blue-50 text-blue-700 px-3 py-2 rounded-xl text-xs font-medium border border-blue-200 hover:bg-blue-100 hover:border-blue-300 transition-all duration-200 cursor-default shadow-sm"
                                    >
                                      {item}
                                    </motion.span>
                                  ))}
                                </div>
                              </div>
                            )
                          )}

                          {/* Related Certifications */}
                          {skill.relatedCertifications && (
                            <div className="pt-4 border-t border-gray-100">
                              <h4 className="text-blue-700 font-semibold mb-3 text-sm uppercase tracking-wide">
                                Related Certifications
                              </h4>
                              <div className="flex flex-wrap gap-2">
                                {skill.relatedCertifications.map((certId) => (
                                  <motion.span
                                    key={certId}
                                    initial={{ opacity: 0, x: -10 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ duration: 0.3, delay: 0.2 }}
                                    whileHover={{ scale: 1.05 }}
                                    className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-xs font-medium border border-green-200 hover:bg-green-200 transition-colors"
                                  >
                                    Certification #{certId}
                                  </motion.span>
                                ))}
                              </div>
                            </div>
                          )}

                          {/* Quick Action Buttons */}
                          <div className="flex gap-3 pt-4 border-t border-gray-100">
                            <motion.button
                              whileHover={{ scale: 1.02 }}
                              whileTap={{ scale: 0.98 }}
                              className="flex-1 bg-blue-500 text-white py-2.5 px-4 rounded-lg text-sm font-medium hover:bg-blue-600 transition-colors shadow-md"
                            >
                              View Related Projects
                            </motion.button>
                            <motion.button
                              whileHover={{ scale: 1.02 }}
                              whileTap={{ scale: 0.98 }}
                              className="flex-1 border border-blue-500 text-blue-500 py-2.5 px-4 rounded-lg text-sm font-medium hover:bg-blue-50 transition-colors"
                            >
                              See Certificates
                            </motion.button>
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Skills Summary Stats */}
      <motion.div
        className="max-w-4xl mx-auto mt-16 grid grid-cols-2 md:grid-cols-4 gap-6"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        {[
          { number: "4", label: "Skill Categories" },
          { number: "40+", label: "Technologies" },
          { number: "85%", label: "Average Proficiency" },
          { number: "20+", label: "Related Certifications" },
        ].map((stat, index) => (
          <motion.div
            key={index}
            className="bg-white rounded-2xl p-6 text-center shadow-lg border border-blue-100"
            whileHover={{ y: -5, scale: 1.02 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <div className="text-2xl md:text-3xl font-bold text-blue-600 mb-2">
              {stat.number}
            </div>
            <div className="text-gray-600 text-sm font-medium">
              {stat.label}
            </div>
          </motion.div>
        ))}
      </motion.div>

      {/* Outro Section */}
      <motion.div
        className="text-center max-w-4xl mx-auto mt-20"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        <div className="bg-gradient-to-r from-blue-500 to-blue-600 rounded-2xl shadow-xl p-8 text-white">
          <h3 className="text-2xl font-bold mb-4">
            Building Intelligent Geospatial Systems
          </h3>
          <p className="leading-relaxed text-lg text-blue-100">
            These capabilities form the foundation for designing intelligent
            geospatial systems — integrating Earth observation, spatial
            analysis, and automation to solve complex environmental and urban
            challenges.
          </p>
          <motion.div className="mt-6 flex flex-col sm:flex-row gap-4 justify-center">
            <motion.button
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors"
            >
              View My Projects
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="border-2 border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors"
            >
              Download Skills PDF
            </motion.button>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
