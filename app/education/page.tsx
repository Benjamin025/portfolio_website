"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import {
  FaGraduationCap,
  FaUniversity,
  FaCertificate,
  FaRocket,
  FaSatellite,
  FaGlobeAmericas,
  FaCode,
  FaMapMarkedAlt,
  FaSearch,
  FaCalendarAlt,
  FaExternalLinkAlt,
  FaTimes,
  FaDownload,
  FaArrowLeft,
  FaArrowRight,
  FaChartLine,
  FaChartBar,
  FaRoute,
  FaCog,
  FaFilter,
} from "react-icons/fa";

interface Education {
  id: number;
  type: "formal" | "professional" | "school";
  institution: string;
  degree?: string;
  program: string;
  duration: string;
  description?: string;
  status?: "completed" | "ongoing";
  grade?: string;
  link?: string;
  category?: string;
  skills?: string[];
  certificateImage?: string;
  completionDate?: string;
}

export default function Education() {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [selectedItem, setSelectedItem] = useState<number | null>(null);
  const [selectedCertificate, setSelectedCertificate] =
    useState<Education | null>(null);
  const [certificateView, setCertificateView] = useState<boolean>(false);
  const [activeView, setActiveView] = useState<
    "grid" | "progress" | "skills" | "stats" | "pathways"
  >("grid");

  const certificateImages: { [key: number]: string } = {
    1: "/certificates/jkuat-degree.PNG",
    3: "/certificates/worldquant-data-science.png",
    4: "/certificates/digital-earth-africa-sandbox.png",
    5: "/certificates/digital-earth-africa-land-degradation.png",
    6: "/certificates/nasa-arset-module1.jpg",
    7: "/certificates/nasa-arset-module2.jpg",
    8: "/certificates/nasa-arset-module3.jpg",
    9: "/certificates/nasa-arset-fundamentals.jpg",
    10: "/certificates/eo-college-basics-rs.jpg",
    11: "/certificates/eo-college-agriculture.jpg",
    12: "/certificates/eo-college-forests.jpg",
    13: "/certificates/eo-college-cubes-clouds.jpg",
    14: "/certificates/eo-college-echoes-space.jpg",
    15: "/certificates/eo-college-wet-ecosystems.jpg",
    16: "/certificates/eo-college-hyperspectral.jpg",
    17: "/certificates/eo-college-ml-earth-observation.jpg",
    18: "/certificates/esri-spatial-analysis.jpg",
    19: "/certificates/esri-modern-geo-apps.jpg",
    20: "/certificates/esri-arcgis-online.jpg",
    21: "/certificates/esri-arcgis-pro.jpg",
    22: "/certificates/esri-javascript-apps.jpg",
    23: "/certificates/esri-climate-action.jpg",
    24: "/certificates/esri-spatial-data-science.jpg",
    25: "/certificates/esri-imagery-rs.jpg",
    26: "/certificates/esri-gis-basics.jpg",
    27: "/certificates/rcmrd-wetlands.jpg",
    28: "/certificates/rcmrd-coastal.jpg",
    29: "/certificates/osm-data-quality.jpg",
    30: "/certificates/uniathena-python.jpg",
    31: "/certificates/copernicus-marine.jpg",
    32: "/certificates/uav-precision-ag.jpg",
    33: "/certificates/hot-tasking-manager.jpg",
    34: "/certificates/geo-university-rs.jpg",
    35: "/certificates/data-viz-cartography.jpg",
    36: "/certificates/gda-space-development.jpg",
    37: "/certificates/Marine-session-2.jpg",
    38: "/certificates/Marine-session-3.jpg",
    39: "/certificates/spectral_indices.jpg",
    40: "/certificates/nasa-landslide.jpg",
    41: "/certificates/waterborne.jpg",
    42: "/certificates/esri-geoapps.jpg",
    43: "/certificates/new-certificate-7.jpg",
  };

  const categories = [
    "All",
    "University",
    "Professional",
    "GIS & Remote Sensing",
    "Data Science",
    "Programming",
    "Environmental",
    "ESRI",
    "Risk Assessment",
  ];

  const educationData: Education[] = [
    {
      id: 1,
      type: "formal",
      institution: "Jomo Kenyatta University of Agriculture and Technology",
      degree: "Bachelor of Science",
      program: "Geospatial Information Science",
      duration: "September 2021 – May 2025",
      status: "ongoing",
      description:
        "Comprehensive education in GIS principles, remote sensing, spatial analysis, and geospatial technologies.",
      category: "University",
      skills: [
        "GIS Analysis",
        "Remote Sensing",
        "Spatial Databases",
        "Cartography",
      ],
      certificateImage: certificateImages[1],
    },
    {
      id: 2,
      type: "school",
      institution: "Naivasha Day Secondary School",
      program: "Kenya Certificate of Secondary Education",
      duration: "January 2016 – November 2019",
      grade: "B+",
      category: "University",
    },
    {
      id: 3,
      type: "professional",
      institution: "WorldQuant University",
      program: "Applied Data Science Lab",
      duration: "May 2024 – November 2024",
      status: "completed",
      description:
        "Advanced data science techniques, machine learning algorithms, and real-world project applications.",
      link: "https://www.credly.com/badges/111b58cc-86e5-4d51-b1a192140ccadf9d",
      category: "Data Science",
      skills: [
        "Machine Learning",
        "Python",
        "Data Analysis",
        "Statistical Modeling",
      ],
      certificateImage: certificateImages[3],
    },
    {
      id: 4,
      type: "professional",
      institution: "Digital Earth Africa",
      program: "Introduction to Digital Earth Africa Sandbox",
      duration: "June 2024",
      status: "completed",
      category: "GIS & Remote Sensing",
      skills: ["Earth Observation", "Sandbox Platform", "Geospatial Analysis"],
      link: "#",
      certificateImage: certificateImages[4],
    },
    {
      id: 5,
      type: "professional",
      institution: "Digital Earth Africa",
      program: "Land Degradation Monitoring",
      duration: "2024",
      status: "completed",
      category: "Environmental",
      skills: [
        "Land Monitoring",
        "Change Detection",
        "Environmental Assessment",
      ],
      link: "#",
      certificateImage: certificateImages[5],
    },
    {
      id: 6,
      type: "professional",
      institution: "NASA ARSET",
      program: "Developing Sustainable Earth Science Applications - Module 1",
      duration: "June 2024",
      status: "completed",
      category: "GIS & Remote Sensing",
      skills: ["Earth Science", "Applications Development", "Sustainability"],
      link: "#",
      certificateImage: certificateImages[6],
    },
    {
      id: 7,
      type: "professional",
      institution: "NASA ARSET",
      program: "Developing Sustainable Earth Science Applications - Module 2",
      duration: "June 2024",
      status: "completed",
      category: "GIS & Remote Sensing",
      link: "#",
      certificateImage: certificateImages[7],
    },
    {
      id: 8,
      type: "professional",
      institution: "NASA ARSET",
      program: "Developing Sustainable Earth Science Applications - Module 3",
      duration: "February 2025",
      status: "completed",
      category: "GIS & Remote Sensing",
      link: "#",
      certificateImage: certificateImages[8],
    },
    {
      id: 9,
      type: "professional",
      institution: "NASA ARSET",
      program: "Fundamentals of Remote Sensing",
      duration: "February 2025",
      status: "completed",
      category: "GIS & Remote Sensing",
      skills: ["Remote Sensing", "Satellite Imagery", "Spectral Analysis"],
      link: "#",
      certificateImage: certificateImages[9],
    },
    {
      id: 10,
      type: "professional",
      institution: "Earth Observation College",
      program: "Land in Focus - Basics of Remote Sensing",
      duration: "May 2024",
      status: "completed",
      category: "GIS & Remote Sensing",
      link: "#",
      certificateImage: certificateImages[10],
    },
    {
      id: 11,
      type: "professional",
      institution: "Earth Observation College",
      program: "Land in Focus - Agriculture and Food",
      duration: "May 2024",
      status: "completed",
      category: "Environmental",
      link: "#",
      certificateImage: certificateImages[11],
    },
    {
      id: 12,
      type: "professional",
      institution: "Earth Observation College",
      program: "Land in Focus - Forest Ecosystems",
      duration: "May 2024",
      status: "completed",
      category: "Environmental",
      link: "#",
      certificateImage: certificateImages[12],
    },
    {
      id: 13,
      type: "professional",
      institution: "Earth Observation College",
      program: "Cubes and Clouds",
      duration: "June 2024",
      status: "completed",
      category: "GIS & Remote Sensing",
      link: "#",
      certificateImage: certificateImages[13],
    },
    {
      id: 14,
      type: "professional",
      institution: "Earth Observation College",
      program: "Echoes in Space",
      duration: "May 2024",
      status: "completed",
      category: "GIS & Remote Sensing",
      link: "#",
      certificateImage: certificateImages[14],
    },
    {
      id: 15,
      type: "professional",
      institution: "Earth Observation College",
      program: "Land in Focus - Wet Ecosystems",
      duration: "June 2024",
      status: "completed",
      category: "Environmental",
      link: "#",
      certificateImage: certificateImages[15],
    },
    {
      id: 16,
      type: "professional",
      institution: "Earth Observation College",
      program: "Introduction to Hyperspectral Remote Sensing",
      duration: "June 2024",
      status: "completed",
      category: "GIS & Remote Sensing",
      skills: ["Hyperspectral", "Advanced RS", "Spectral Analysis"],
      link: "#",
      certificateImage: certificateImages[16],
    },
    {
      id: 17,
      type: "professional",
      institution: "Earth Observation College",
      program: "Introduction to Machine Learning for Earth Observation",
      duration: "February 2025",
      status: "completed",
      category: "Data Science",
      skills: ["Machine Learning", "Earth Observation", "AI Applications"],
      link: "#",
      certificateImage: certificateImages[17],
    },
    {
      id: 18,
      type: "professional",
      institution: "ESRI",
      program: "Going Places with Spatial Analysis",
      duration: "March 2025",
      status: "completed",
      category: "ESRI",
      skills: ["Spatial Analysis", "ArcGIS", "Geoprocessing"],
      link: "#",
      certificateImage: certificateImages[18],
    },
    {
      id: 19,
      type: "professional",
      institution: "ESRI",
      program: "Make an Impact with Modern Geo Apps",
      duration: "October 2024",
      status: "completed",
      category: "ESRI",
      link: "#",
      certificateImage: certificateImages[19],
    },
    {
      id: 20,
      type: "professional",
      institution: "ESRI",
      program: "ArcGIS Online Basics",
      duration: "May 2024",
      status: "completed",
      category: "ESRI",
      link: "#",
      certificateImage: certificateImages[20],
    },
    {
      id: 21,
      type: "professional",
      institution: "ESRI",
      program: "ArcGIS Pro Basics",
      duration: "May 2024",
      status: "completed",
      category: "ESRI",
      link: "#",
      certificateImage: certificateImages[21],
    },
    {
      id: 22,
      type: "professional",
      institution: "ESRI",
      program: "Basics of JavaScript Web Apps",
      duration: "May 2024",
      status: "completed",
      category: "Programming",
      link: "#",
      certificateImage: certificateImages[22],
    },
    {
      id: 23,
      type: "professional",
      institution: "ESRI",
      program: "GIS for Climate Action",
      duration: "March 2025",
      status: "completed",
      category: "Environmental",
      link: "#",
      certificateImage: certificateImages[23],
    },
    {
      id: 24,
      type: "professional",
      institution: "ESRI",
      program: "Spatial Data Science",
      duration: "October 2024",
      status: "completed",
      category: "Data Science",
      skills: ["Spatial Data Science", "Analytics", "Big Data"],
      link: "#",
      certificateImage: certificateImages[24],
    },
    {
      id: 25,
      type: "professional",
      institution: "ESRI",
      program: "Getting Started with Imagery and Remote Sensing",
      duration: "May 2024",
      status: "completed",
      category: "GIS & Remote Sensing",
      link: "#",
      certificateImage: certificateImages[25],
    },
    {
      id: 26,
      type: "professional",
      institution: "ESRI",
      program: "GIS Basics",
      duration: "May 2024",
      status: "completed",
      category: "ESRI",
      link: "#",
      certificateImage: certificateImages[26],
    },
    {
      id: 27,
      type: "professional",
      institution: "RCMRD",
      program:
        "Wetlands Vulnerability Assessment & Community-Based Wetland Action Planning",
      duration: "July 2024",
      status: "completed",
      category: "Environmental",
      link: "#",
      certificateImage: certificateImages[27],
    },
    {
      id: 28,
      type: "professional",
      institution: "RCMRD",
      program: "Coastal Geomorphology Mapping & Shoreline Change Analysis",
      duration: "February 2024",
      status: "completed",
      category: "Environmental",
      link: "#",
      certificateImage: certificateImages[28],
    },
    {
      id: 29,
      type: "professional",
      institution: "OpenStreetMap Kenya",
      program: "Data Quality Training",
      duration: "December 2024",
      status: "completed",
      category: "GIS & Remote Sensing",
      link: "#",
      certificateImage: certificateImages[29],
    },
    {
      id: 30,
      type: "professional",
      institution: "UniAthena",
      program: "Basics of Python",
      duration: "May 2024",
      status: "completed",
      category: "Programming",
      skills: ["Python", "Programming", "Scripting"],
      link: "#",
      certificateImage: certificateImages[30],
    },
    {
      id: 31,
      type: "professional",
      institution: "Copernicus Marine Service",
      program: "Copernicus Marine Essentials",
      duration: "April 2025",
      status: "completed",
      category: "Environmental",
      link: "#",
      certificateImage: certificateImages[31],
    },
    {
      id: 32,
      type: "professional",
      institution: "ITC & Geoversity",
      program: "UAV&apos;s for Precision Agriculture",
      duration: "March 2025",
      status: "completed",
      category: "GIS & Remote Sensing",
      skills: ["UAV", "Precision Agriculture", "Drones"],
      link: "#",
      certificateImage: certificateImages[32],
    },
    {
      id: 33,
      type: "professional",
      institution: "Humanitarian OpenStreetMap Team",
      program: "HOT Tasking Manager FastAPI Testing",
      duration: "December 2024",
      status: "completed",
      category: "Programming",
      link: "#",
      certificateImage: certificateImages[33],
    },
    {
      id: 34,
      type: "professional",
      institution: "GEO University",
      program: "Introduction to Remote Sensing",
      duration: "June 2024",
      status: "completed",
      category: "GIS & Remote Sensing",
      link: "#",
      certificateImage: certificateImages[34],
    },
    {
      id: 35,
      type: "professional",
      institution: "Various",
      program: "Data Visualization & Cartography",
      duration: "May 2024",
      status: "completed",
      category: "GIS & Remote Sensing",
      skills: ["Data Visualization", "Cartography", "Map Design"],
      link: "#",
      certificateImage: certificateImages[35],
    },
    {
      id: 36,
      type: "professional",
      institution: "Global Development Assistance",
      program: "Space for International Development Assistance",
      duration: "June 2023",
      status: "completed",
      category: "GIS & Remote Sensing",
      link: "#",
      certificateImage: certificateImages[36],
    },
    // Add new certificates from your document here
    {
      id: 37,
      type: "professional",
      institution: "Copernicus Marine Services",
      program: "Copernicus Marine Essentials 2",
      duration: "April 2025",
      status: "completed",
      category: "Marine Remote Sensing",
      skills: ["Environmental", "Marine Analysis"],
      link: "#",
      certificateImage: certificateImages[37],
    },
    {
      id: 38,
      type: "professional",
      institution: "Copernicus Marine Services",
      program: "Copernicus Marine Essentials 3",
      duration: "April 2025",
      status: "completed",
      category: "Remote Sensing",
      skills: ["Marine RS", "Environmental"],
      link: "#",
      certificateImage: certificateImages[38],
    },
    {
      id: 39,
      type: "professional",
      institution: "NASA ARSET",
      program:
        "Calculating Spectral Indices for Land and Aquatic Applications using QGIS",
      duration: "February 2025",
      status: "completed",
      category: "GIS & Remote Sensing",
      skills: ["Remote Sensing", "Satellite Imagery", "Spectral Analysis"],
      link: "#",
      certificateImage: certificateImages[39],
    },
    {
      id: 40,
      type: "professional",
      institution: "NASA ARSET",
      program:
        "Landslide Monitoring and Risk Assessment using NASA Earth Systems Data",
      duration: "March 2025",
      status: "completed",
      category: "GIS & Remote Sensing",
      skills: [
        "Remote Sensing",
        "Satellite Imagery",
        "Spectral Analysis",
        "Risk Assessment",
      ],
      link: "#",
      certificateImage: certificateImages[40],
    },
    {
      id: 41,
      type: "professional",
      institution: "NASA ARSET",
      program:
        "The Applications of Earth Observation for Accessing Waterborne Disease Risk",
      duration: "March 2025",
      status: "completed",
      category: "GIS & Remote Sensing",
      skills: [
        "Remote Sensing",
        "Satellite Imagery",
        "Spectral Analysis",
        "Risk Assessment",
      ],
      link: "#",
      certificateImage: certificateImages[41],
    },
    {
      id: 42,
      type: "professional",
      institution: "ESRI",
      program: "Making an Impact with Modern GeoApps",
      duration: "May 2025",
      status: "completed",
      category: "ESRI",
      skills: ["GIS & Remote Sensing"],
      link: "#",
      certificateImage: certificateImages[42],
    },
  ];

  // Extract all unique skills
  const allSkills = Array.from(
    new Set(educationData.flatMap((item) => item.skills || []))
  ).filter((skill) => skill && skill.trim() !== "");

  // Progress tracking data
  const progressData = educationData
    .filter((item) => item.status === "completed")
    .sort((a, b) => {
      const dateA = new Date(a.duration.split("–")[1] || "");
      const dateB = new Date(b.duration.split("–")[1] || "");
      return dateA.getTime() - dateB.getTime();
    });

  // Skill matrix data
  const skillMatrix = allSkills.map((skill) => {
    const relatedCourses = educationData.filter((item) =>
      item.skills?.includes(skill)
    );
    const skillLevel =
      relatedCourses.length > 3
        ? "advanced"
        : relatedCourses.length > 1
        ? "intermediate"
        : "beginner";

    return {
      skill,
      level: skillLevel,
      count: relatedCourses.length,
      courses: relatedCourses.map((c) => c.program),
    };
  });

  // Statistics data
  const stats = {
    total: educationData.length,
    completed: educationData.filter((item) => item.status === "completed")
      .length,
    ongoing: educationData.filter((item) => item.status === "ongoing").length,
    institutions: Array.from(
      new Set(educationData.map((item) => item.institution))
    ).length,
    categories: Array.from(new Set(educationData.map((item) => item.category)))
      .length,
    skills: allSkills.length,
  };

  // Learning pathways
  const learningPathways = [
    {
      title: "Geospatial Specialist",
      description: "Master GIS and remote sensing technologies",
      skills: [
        "GIS Analysis",
        "Remote Sensing",
        "Spatial Analysis",
        "Cartography",
      ],
      progress: 85,
      color: "from-blue-500 to-purple-600",
    },
    {
      title: "Data Scientist",
      description: "Advanced analytics and machine learning",
      skills: [
        "Python",
        "Machine Learning",
        "Data Analysis",
        "Statistical Modeling",
      ],
      progress: 75,
      color: "from-orange-500 to-red-600",
    },
    {
      title: "Environmental Analyst",
      description: "Environmental monitoring and assessment",
      skills: [
        "Environmental Assessment",
        "Land Monitoring",
        "Climate Action",
        "Sustainability",
      ],
      progress: 70,
      color: "from-green-500 to-teal-600",
    },
  ];

  const filteredEducation = educationData.filter((item) => {
    const matchesSearch =
      item.program.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.institution.toLowerCase().includes(searchQuery.toLowerCase()) ||
      (item.skills &&
        item.skills.some((skill) =>
          skill.toLowerCase().includes(searchQuery.toLowerCase())
        ));

    const matchesCategory =
      selectedCategory === "All" || item.category === selectedCategory;

    return matchesSearch && matchesCategory;
  });

  const handleCertificateView = (item: Education) => {
    setSelectedCertificate(item);
    setCertificateView(true);
  };

  const closeCertificateView = () => {
    setCertificateView(false);
    setSelectedCertificate(null);
  };

  const navigateCertificate = (direction: "prev" | "next") => {
    if (!selectedCertificate) return;

    const currentIndex = filteredEducation.findIndex(
      (item) => item.id === selectedCertificate.id
    );
    if (direction === "next" && currentIndex < filteredEducation.length - 1) {
      setSelectedCertificate(filteredEducation[currentIndex + 1]);
    } else if (direction === "prev" && currentIndex > 0) {
      setSelectedCertificate(filteredEducation[currentIndex - 1]);
    }
  };

  const getIcon = (type: string, category?: string) => {
    if (type === "formal") return <FaUniversity className="text-blue-500" />;
    if (type === "school")
      return <FaGraduationCap className="text-green-500" />;

    switch (category) {
      case "GIS & Remote Sensing":
        return <FaSatellite className="text-purple-500" />;
      case "Data Science":
        return <FaRocket className="text-orange-500" />;
      case "Programming":
        return <FaCode className="text-red-500" />;
      case "Environmental":
        return <FaGlobeAmericas className="text-teal-500" />;
      case "ESRI":
        return <FaMapMarkedAlt className="text-blue-600" />;
      default:
        return <FaCertificate className="text-gray-500" />;
    }
  };

  const getTypeColor = (type: string) => {
    switch (type) {
      case "formal":
        return "from-blue-500 to-blue-600";
      case "professional":
        return "from-purple-500 to-purple-600";
      case "school":
        return "from-green-500 to-green-600";
      default:
        return "from-gray-500 to-gray-600";
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  const modalVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.3,
      },
    },
    exit: {
      opacity: 0,
      scale: 0.8,
      transition: {
        duration: 0.2,
      },
    },
  };

  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
      },
    },
  };

  // View Components
  const renderGridView = () => (
    <motion.div
      className="max-w-7xl mx-auto"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
        {filteredEducation.map((item) => (
          <motion.div
            key={item.id}
            variants={itemVariants}
            className="group cursor-pointer"
            onClick={() =>
              setSelectedItem(selectedItem === item.id ? null : item.id)
            }
          >
            <motion.div
              className={`bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden h-full transition-all duration-300 group-hover:shadow-xl ${
                selectedItem === item.id ? "ring-2 ring-blue-200 scale-105" : ""
              }`}
              whileHover={{ y: -5 }}
            >
              {/* Card Header */}
              <div
                className={`bg-gradient-to-r ${getTypeColor(
                  item.type
                )} p-6 text-white`}
              >
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-3">
                    <div className="text-2xl">
                      {getIcon(item.type, item.category)}
                    </div>
                    <span className="text-sm font-semibold bg-white/20 px-2 py-1 rounded-full">
                      {item.type === "formal"
                        ? "University"
                        : item.type === "school"
                        ? "Secondary"
                        : "Professional"}
                    </span>
                  </div>
                  {item.status === "ongoing" && (
                    <span className="text-xs bg-yellow-500 px-2 py-1 rounded-full font-semibold">
                      Ongoing
                    </span>
                  )}
                </div>

                <h3 className="text-lg font-bold mb-2 line-clamp-2">
                  {item.program}
                </h3>

                <p className="text-blue-100 text-sm font-medium">
                  {item.institution}
                </p>
              </div>

              {/* Card Body */}
              <div className="p-6">
                <div className="flex items-center gap-2 text-sm text-gray-500 mb-3">
                  <FaCalendarAlt className="text-gray-400" />
                  <span>{item.duration}</span>
                </div>

                {item.degree && (
                  <p className="text-sm text-gray-700 mb-2">
                    <strong>Degree:</strong> {item.degree}
                  </p>
                )}

                {item.grade && (
                  <p className="text-sm text-gray-700 mb-3">
                    <strong>Grade:</strong> {item.grade}
                  </p>
                )}

                {item.description && (
                  <p className="text-sm text-gray-600 mb-4 line-clamp-2">
                    {item.description}
                  </p>
                )}

                {/* Skills Tags */}
                {item.skills && (
                  <div className="flex flex-wrap gap-1 mb-4">
                    {item.skills.map((skill, skillIndex) => (
                      <span
                        key={skillIndex}
                        className="px-2 py-1 bg-blue-100 text-blue-700 rounded-full text-xs"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                )}

                {/* Action Buttons */}
                <div className="flex gap-2">
                  {item.certificateImage && (
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        handleCertificateView(item);
                      }}
                      className="flex items-center gap-2 px-3 py-2 bg-blue-500 text-white rounded-lg text-sm font-medium hover:bg-blue-600 transition-colors"
                    >
                      <FaCertificate className="text-xs" />
                      View Certificate
                    </button>
                  )}

                  {item.link && (
                    <a
                      href={item.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => e.stopPropagation()}
                      className="flex items-center gap-2 px-3 py-2 bg-gray-100 text-gray-700 rounded-lg text-sm font-medium hover:bg-gray-200 transition-colors"
                    >
                      <FaExternalLinkAlt className="text-xs" />
                      Verify
                    </a>
                  )}
                </div>

                {/* Expandable Details */}
                <AnimatePresence>
                  {selectedItem === item.id && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      className="overflow-hidden"
                    >
                      <div className="pt-4 border-t border-gray-200 mt-4">
                        {/* Additional details can go here */}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </motion.div>
          </motion.div>
        ))}
      </div>

      {/* No Results Message */}
      {filteredEducation.length === 0 && (
        <motion.div
          className="text-center py-16"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-200">
            <FaSearch className="text-gray-400 text-5xl mx-auto mb-4" />
            <h3 className="text-2xl font-bold text-gray-700 mb-2">
              No education records found
            </h3>
            <p className="text-gray-600">
              Try adjusting your search terms or filter categories to find what
              you&apos;re looking for.
            </p>
          </div>
        </motion.div>
      )}
    </motion.div>
  );

  const renderProgressView = () => (
    <motion.div
      className="max-w-6xl mx-auto"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-200">
        <h3 className="text-2xl font-bold text-gray-800 mb-6">
          Learning Journey Timeline
        </h3>
        <div className="space-y-8">
          {progressData.map((item, progressIndex) => (
            <motion.div
              key={item.id}
              className="flex gap-6"
              variants={itemVariants}
            >
              <div className="flex flex-col items-center">
                <div className="w-4 h-4 bg-blue-500 rounded-full ring-4 ring-white ring-offset-2" />
                {progressIndex < progressData.length - 1 && (
                  <div className="w-0.5 h-full bg-gray-200 mt-2" />
                )}
              </div>
              <div className="flex-1 bg-gray-50 rounded-xl p-6 hover:shadow-md transition-shadow">
                <div className="flex justify-between items-start mb-2">
                  <h4 className="text-lg font-semibold text-gray-800">
                    {item.program}
                  </h4>
                  <span className="text-sm text-gray-500">{item.duration}</span>
                </div>
                <p className="text-gray-600 mb-3">{item.institution}</p>
                {item.skills && (
                  <div className="flex flex-wrap gap-1">
                    {item.skills.map((skill, skillIndex) => (
                      <span
                        key={skillIndex}
                        className="px-2 py-1 bg-blue-100 text-blue-700 rounded-full text-xs"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );

  const renderSkillsView = () => (
    <motion.div
      className="max-w-6xl mx-auto"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-200">
        <h3 className="text-2xl font-bold text-gray-800 mb-6">Skill Matrix</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {skillMatrix.map((skill) => (
            <motion.div
              key={skill.skill}
              variants={itemVariants}
              className="bg-gray-50 rounded-xl p-6 border border-gray-200 hover:shadow-md transition-shadow"
            >
              <div className="flex justify-between items-start mb-3">
                <h4 className="font-semibold text-gray-800">{skill.skill}</h4>
                <span
                  className={`px-2 py-1 rounded-full text-xs font-medium ${
                    skill.level === "advanced"
                      ? "bg-green-100 text-green-800"
                      : skill.level === "intermediate"
                      ? "bg-yellow-100 text-yellow-800"
                      : "bg-blue-100 text-blue-800"
                  }`}
                >
                  {skill.level}
                </span>
              </div>
              <div className="text-sm text-gray-600 mb-3">
                {skill.count} course{skill.count > 1 ? "s" : ""}
              </div>
              <div className="space-y-1">
                {skill.courses.slice(0, 3).map((course, courseIndex) => (
                  <div
                    key={courseIndex}
                    className="text-xs text-gray-500 truncate"
                  >
                    • {course}
                  </div>
                ))}
                {skill.courses.length > 3 && (
                  <div className="text-xs text-gray-400">
                    +{skill.courses.length - 3} more
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );

  const renderStatsView = () => (
    <motion.div
      className="max-w-6xl mx-auto"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-200">
        <h3 className="text-2xl font-bold text-gray-800 mb-8">
          Learning Statistics Dashboard
        </h3>

        {/* Main Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8">
          <div className="bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl p-6 text-white text-center">
            <div className="text-3xl font-bold mb-2">{stats.total}</div>
            <div className="text-blue-100">Total Programs</div>
          </div>
          <div className="bg-gradient-to-br from-green-500 to-green-600 rounded-2xl p-6 text-white text-center">
            <div className="text-3xl font-bold mb-2">{stats.completed}</div>
            <div className="text-green-100">Completed</div>
          </div>
          <div className="bg-gradient-to-br from-purple-500 to-purple-600 rounded-2xl p-6 text-white text-center">
            <div className="text-3xl font-bold mb-2">{stats.skills}</div>
            <div className="text-purple-100">Skills Gained</div>
          </div>
          <div className="bg-gradient-to-br from-orange-500 to-orange-600 rounded-2xl p-6 text-white text-center">
            <div className="text-3xl font-bold mb-2">{stats.institutions}</div>
            <div className="text-orange-100">Institutions</div>
          </div>
        </div>

        {/* Category Distribution */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="bg-gray-50 rounded-xl p-6">
            <h4 className="font-semibold text-gray-800 mb-4">
              Category Distribution
            </h4>
            <div className="space-y-3">
              {Array.from(
                new Set(educationData.map((item) => item.category))
              ).map((category) => {
                const count = educationData.filter(
                  (item) => item.category === category
                ).length;
                const percentage = ((count / stats.total) * 100).toFixed(1);
                return (
                  <div
                    key={category}
                    className="flex items-center justify-between"
                  >
                    <span className="text-sm text-gray-600">{category}</span>
                    <div className="flex items-center gap-2">
                      <div className="w-24 bg-gray-200 rounded-full h-2">
                        <div
                          className="bg-blue-500 h-2 rounded-full"
                          style={{ width: `${percentage}%` }}
                        />
                      </div>
                      <span className="text-sm font-medium w-10">
                        {percentage}%
                      </span>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="bg-gray-50 rounded-xl p-6">
            <h4 className="font-semibold text-gray-800 mb-4">
              Skill Level Distribution
            </h4>
            <div className="space-y-3">
              {["beginner", "intermediate", "advanced"].map((level) => {
                const count = skillMatrix.filter(
                  (skill) => skill.level === level
                ).length;
                const percentage = ((count / skillMatrix.length) * 100).toFixed(
                  1
                );
                return (
                  <div
                    key={level}
                    className="flex items-center justify-between"
                  >
                    <span className="text-sm text-gray-600 capitalize">
                      {level}
                    </span>
                    <div className="flex items-center gap-2">
                      <div className="w-24 bg-gray-200 rounded-full h-2">
                        <div
                          className={`h-2 rounded-full ${
                            level === "advanced"
                              ? "bg-green-500"
                              : level === "intermediate"
                              ? "bg-yellow-500"
                              : "bg-blue-500"
                          }`}
                          style={{ width: `${percentage}%` }}
                        />
                      </div>
                      <span className="text-sm font-medium w-10">
                        {percentage}%
                      </span>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );

  const renderPathwaysView = () => (
    <motion.div
      className="max-w-6xl mx-auto"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-200">
        <h3 className="text-2xl font-bold text-gray-800 mb-8">
          Learning Pathways
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {learningPathways.map((pathway) => (
            <motion.div
              key={pathway.title}
              variants={itemVariants}
              className={`bg-gradient-to-br ${pathway.color} rounded-2xl p-6 text-white relative overflow-hidden`}
            >
              <div className="relative z-10">
                <h4 className="text-xl font-bold mb-2">{pathway.title}</h4>
                <p className="text-white/80 text-sm mb-4">
                  {pathway.description}
                </p>

                {/* Progress Bar */}
                <div className="mb-4">
                  <div className="flex justify-between text-sm mb-1">
                    <span>Progress</span>
                    <span>{pathway.progress}%</span>
                  </div>
                  <div className="w-full bg-white/30 rounded-full h-2">
                    <div
                      className="bg-white h-2 rounded-full"
                      style={{ width: `${pathway.progress}%` }}
                    />
                  </div>
                </div>

                {/* Skills */}
                <div className="space-y-2">
                  {pathway.skills.map((skill, skillIndex) => (
                    <div key={skillIndex} className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-white rounded-full" />
                      <span className="text-sm text-white/90">{skill}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Background Pattern */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -translate-y-16 translate-x-16" />
              <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/10 rounded-full translate-y-12 -translate-x-12" />
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );

  // View selector buttons
  const viewButtons = [
    { key: "grid" as const, label: "Grid View", icon: FaFilter },
    { key: "progress" as const, label: "Progress Tracking", icon: FaChartLine },
    { key: "skills" as const, label: "Skill Matrix", icon: FaChartBar },
    { key: "stats" as const, label: "Statistics", icon: FaCog },
    { key: "pathways" as const, label: "Learning Pathways", icon: FaRoute },
  ];

  return (
    <section className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50 py-20 px-4 sm:px-6 lg:px-8">
      {/* Header Section */}
      <motion.div
        className="text-center mb-16 max-w-4xl mx-auto"
        initial="hidden"
        animate="visible"
        variants={fadeInUp}
      >
        <motion.div
          className="inline-flex items-center gap-3 mb-4"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <FaGraduationCap className="text-blue-500 text-4xl" />
          <h1 className="text-5xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Education & Certifications
          </h1>
          <FaCertificate className="text-purple-500 text-4xl" />
        </motion.div>

        <motion.div
          className="w-32 h-1.5 bg-gradient-to-r from-blue-400 to-purple-400 mx-auto mb-6 rounded-full"
          initial={{ width: 0 }}
          animate={{ width: 128 }}
          transition={{ duration: 1, delay: 0.5 }}
        />

        <motion.p
          className="text-xl text-gray-600 leading-relaxed"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.7 }}
        >
          A comprehensive journey through formal education and professional
          certifications in geospatial science, remote sensing, and data
          analytics.
        </motion.p>
      </motion.div>

      {/* View Selector */}
      <motion.div
        className="max-w-7xl mx-auto mb-8"
        initial="hidden"
        animate="visible"
        variants={fadeInUp}
      >
        <div className="bg-white rounded-2xl shadow-lg p-4 border border-gray-200">
          <div className="flex flex-wrap gap-2 justify-center">
            {viewButtons.map(({ key, label, icon: Icon }) => (
              <button
                key={key}
                onClick={() => setActiveView(key)}
                className={`flex items-center gap-2 px-4 py-3 rounded-xl text-sm font-medium transition-all duration-300 ${
                  activeView === key
                    ? "bg-blue-500 text-white shadow-lg"
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                }`}
              >
                <Icon className="text-sm" />
                {label}
              </button>
            ))}
          </div>
        </div>
      </motion.div>

      {/* Filter and Search Section */}
      {(activeView === "grid" || activeView === "skills") && (
        <motion.div
          className="max-w-7xl mx-auto mb-12"
          initial="hidden"
          animate="visible"
          variants={fadeInUp}
          transition={{ delay: 0.9 }}
        >
          <div className="bg-white rounded-2xl shadow-lg p-6 border border-gray-200">
            <div className="flex flex-col lg:flex-row gap-4 items-center justify-between">
              {/* Search Input */}
              <div className="flex-1 w-full">
                <div className="relative">
                  <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                  <input
                    type="text"
                    placeholder="Search programs, institutions, skills..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>
              </div>

              {/* Category Filter */}
              <div className="flex flex-wrap gap-2 justify-center">
                {categories.map((category) => (
                  <button
                    key={category}
                    onClick={() => setSelectedCategory(category)}
                    className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                      selectedCategory === category
                        ? "bg-blue-500 text-white shadow-lg"
                        : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                    }`}
                  >
                    {category}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      )}

      {/* Dynamic Content based on Active View */}
      <AnimatePresence mode="wait">
        <motion.div
          key={activeView}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.3 }}
        >
          {activeView === "grid" && renderGridView()}
          {activeView === "progress" && renderProgressView()}
          {activeView === "skills" && renderSkillsView()}
          {activeView === "stats" && renderStatsView()}
          {activeView === "pathways" && renderPathwaysView()}
        </motion.div>
      </AnimatePresence>

      {/* Certificate Modal */}
      <AnimatePresence>
        {certificateView && selectedCertificate && (
          <motion.div
            className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-hidden"
              variants={modalVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
            >
              {/* Modal Header */}
              <div className="flex items-center justify-between p-6 border-b border-gray-200">
                <div>
                  <h3 className="text-xl font-bold text-gray-800">
                    {selectedCertificate.program}
                  </h3>
                  <p className="text-gray-600">
                    {selectedCertificate.institution}
                  </p>
                </div>
                <div className="flex items-center gap-2">
                  <button
                    onClick={closeCertificateView}
                    className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
                  >
                    <FaTimes className="text-gray-500" />
                  </button>
                </div>
              </div>

              {/* Certificate Image */}
              <div className="p-6 max-h-[60vh] overflow-auto">
                {selectedCertificate.certificateImage ? (
                  <Image
                    src={selectedCertificate.certificateImage}
                    alt={`Certificate for ${selectedCertificate.program}`}
                    width={800}
                    height={600}
                    className="w-full h-auto rounded-lg shadow-lg"
                  />
                ) : (
                  <div className="text-center py-16">
                    <FaCertificate className="text-gray-300 text-6xl mx-auto mb-4" />
                    <p className="text-gray-500">
                      Certificate image not available
                    </p>
                  </div>
                )}
              </div>

              {/* Modal Footer */}
              <div className="flex items-center justify-between p-6 border-t border-gray-200 bg-gray-50">
                <div className="flex items-center gap-4">
                  <button
                    onClick={() => navigateCertificate("prev")}
                    disabled={
                      filteredEducation.findIndex(
                        (item) => item.id === selectedCertificate.id
                      ) === 0
                    }
                    className="flex items-center gap-2 px-4 py-2 bg-white border border-gray-300 rounded-lg disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-50"
                  >
                    <FaArrowLeft />
                    Previous
                  </button>

                  <button
                    onClick={() => navigateCertificate("next")}
                    disabled={
                      filteredEducation.findIndex(
                        (item) => item.id === selectedCertificate.id
                      ) ===
                      filteredEducation.length - 1
                    }
                    className="flex items-center gap-2 px-4 py-2 bg-white border border-gray-300 rounded-lg disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-50"
                  >
                    Next
                    <FaArrowRight />
                  </button>
                </div>

                <div className="flex items-center gap-2">
                  {selectedCertificate.certificateImage && (
                    <a
                      href={selectedCertificate.certificateImage}
                      download={`${selectedCertificate.program.replace(
                        /\s+/g,
                        "_"
                      )}_certificate.jpg`}
                      className="flex items-center gap-2 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
                    >
                      <FaDownload />
                      Download
                    </a>
                  )}

                  {selectedCertificate.link && (
                    <a
                      href={selectedCertificate.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition-colors"
                    >
                      <FaExternalLinkAlt />
                      Verify Online
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Summary Statistics */}
      <motion.div
        className="max-w-7xl mx-auto mt-16"
        initial="hidden"
        animate="visible"
        variants={fadeInUp}
      >
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-200 text-center">
            <div className="text-3xl font-bold text-blue-600 mb-2">
              {educationData.filter((item) => item.type === "formal").length}
            </div>
            <div className="text-gray-600">Formal Education</div>
          </div>
          <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-200 text-center">
            <div className="text-3xl font-bold text-purple-600 mb-2">
              {
                educationData.filter((item) => item.type === "professional")
                  .length
              }
            </div>
            <div className="text-gray-600">Professional Certifications</div>
          </div>
          <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-200 text-center">
            <div className="text-3xl font-bold text-green-600 mb-2">
              {
                educationData.filter((item) => item.status === "completed")
                  .length
              }
            </div>
            <div className="text-gray-600">Completed Programs</div>
          </div>
          <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-200 text-center">
            <div className="text-3xl font-bold text-orange-600 mb-2">
              {
                Array.from(
                  new Set(educationData.map((item) => item.institution))
                ).length
              }
            </div>
            <div className="text-gray-600">Institutions</div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
