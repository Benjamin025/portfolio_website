"use client";

import { useState, JSX, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaTree,
  FaTractor,
  FaWater,
  FaMountain,
  FaCity,
  FaSearch,
  FaChartLine,
  FaShieldAlt,
  FaLightbulb,
  FaRocket,
  FaFilter,
  FaCheck,
  FaTimes,
} from "react-icons/fa";

interface Solution {
  id: number;
  title: string;
  icon: JSX.Element;
  description: string;
  challenges: string[];
  methodologies: string[];
  technologies: string[];
  deliverables: string[];
  impact: string;
  category: string;
  implementationPhases: string[];
  checklistItems: string[];
  connectedSkills: string[];
}

// Client-only wrapper component to prevent hydration issues
const ClientOnly = ({
  children,
  fallback = null,
}: {
  children: React.ReactNode;
  fallback?: React.ReactNode;
}) => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  return isClient ? <>{children}</> : <>{fallback}</>;
};

export default function Solutions() {
  const [selectedSolution, setSelectedSolution] = useState<number | null>(null);
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [comparisonMode, setComparisonMode] = useState<boolean>(false);
  const [selectedForComparison, setSelectedForComparison] = useState<number[]>(
    []
  );
  const [currentPhases, setCurrentPhases] = useState<{ [key: number]: number }>(
    {}
  );
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const categories = [
    "All",
    "Environmental",
    "Agricultural",
    "Urban",
    "Disaster",
    "Climate",
    "Infrastructure",
  ];

  const solutions: Solution[] = [
    {
      id: 1,
      title: "Land Use & Land Cover Mapping",
      icon: <FaTree className="text-green-600 text-4xl" />,
      description:
        "Comprehensive land classification and change detection using multi-temporal satellite imagery and machine learning.",
      challenges: [
        "Classifying complex urban-rural interfaces",
        "Detecting subtle land cover changes over time",
        "Handling seasonal variations in vegetation",
        "Integrating multi-source data formats",
      ],
      methodologies: [
        "Supervised classification (Random Forest, SVM)",
        "Object-Based Image Analysis (OBIA)",
        "Time-series analysis with Landsat/Sentinel",
        "Change detection algorithms",
        "Accuracy assessment with ground truth data",
      ],
      technologies: [
        "Google Earth Engine",
        "QGIS with SCP plugin",
        "Python (scikit-learn, rasterio)",
        "ENVI/ERDAS Imagine",
        "PostGIS for spatial databases",
      ],
      deliverables: [
        "Land Use/Land Cover maps (10-class system)",
        "Change detection reports (5-year intervals)",
        "Spatial statistics and area calculations",
        "Interactive web maps",
        "Accuracy assessment reports (>85% accuracy)",
      ],
      impact:
        "Enables sustainable land management, urban planning compliance, and biodiversity conservation monitoring.",
      category: "Environmental",
      implementationPhases: [
        "Data Collection & Preprocessing",
        "Model Training & Validation",
        "Classification & Analysis",
        "Quality Assessment",
        "Delivery & Integration",
      ],
      checklistItems: [
        "Acquire satellite imagery datasets",
        "Perform atmospheric correction",
        "Collect ground truth data",
        "Train classification model",
        "Validate accuracy metrics",
        "Generate final maps and reports",
      ],
      connectedSkills: [
        "GIS & Spatial Analysis",
        "Remote Sensing",
        "Machine Learning",
      ],
    },
    {
      id: 2,
      title: "Agricultural Monitoring & Precision Farming",
      icon: <FaTractor className="text-yellow-600 text-4xl" />,
      description:
        "Crop health assessment, yield prediction, and precision agriculture solutions using remote sensing and IoT integration.",
      challenges: [
        "Early detection of crop stress and diseases",
        "Yield prediction under variable climate conditions",
        "Optimizing irrigation and fertilizer use",
        "Monitoring large-scale farming operations",
      ],
      methodologies: [
        "Vegetation indices (NDVI, EVI, NDWI) time-series",
        "Soil moisture mapping with SAR data",
        "Machine learning for yield prediction",
        "Drone-based high-resolution monitoring",
        "IoT sensor data integration",
      ],
      technologies: [
        "Sentinel-2 & Landsat 8/9 imagery",
        "UAV/drone photogrammetry",
        "Python (Pandas, NumPy, Scikit-learn)",
        "Farm management software APIs",
        "Mobile data collection apps",
      ],
      deliverables: [
        "Crop health monitoring dashboards",
        "Yield prediction models (R² > 0.8)",
        "Precision farming recommendations",
        "Irrigation optimization maps",
        "Seasonal analysis reports",
      ],
      impact:
        "Increases crop yields by 15-25%, reduces water and fertilizer usage by 30%, enables data-driven farming decisions.",
      category: "Agricultural",
      implementationPhases: [
        "Field Data Collection",
        "Sensor Integration Setup",
        "Model Development",
        "Dashboard Implementation",
        "Farmer Training & Support",
      ],
      checklistItems: [
        "Install soil moisture sensors",
        "Set up drone flight paths",
        "Develop prediction algorithms",
        "Create farmer dashboard",
        "Conduct training sessions",
        "Monitor and optimize system",
      ],
      connectedSkills: ["Remote Sensing", "GIS Development", "Data Analysis"],
    },
    {
      id: 3,
      title: "Environmental Change Detection",
      icon: <FaWater className="text-blue-600 text-4xl" />,
      description:
        "Monitoring environmental changes including deforestation, water quality, and ecosystem health using multi-sensor data.",
      challenges: [
        "Detecting gradual environmental degradation",
        "Monitoring illegal deforestation activities",
        "Water quality assessment in remote areas",
        "Biodiversity and habitat monitoring",
      ],
      methodologies: [
        "Multi-temporal spectral analysis",
        "Radar-based forest monitoring",
        "Water quality parameters from satellite",
        "Habitat fragmentation analysis",
        "Carbon stock estimation",
      ],
      technologies: [
        "Sentinel-1 SAR for all-weather monitoring",
        "MODIS for large-scale vegetation trends",
        "GIS-based spatial modeling",
        "R for statistical analysis",
        "Cloud computing platforms",
      ],
      deliverables: [
        "Deforestation alert systems",
        "Environmental change hotspots",
        "Water quality index maps",
        "Ecosystem health scorecards",
        "Compliance monitoring reports",
      ],
      impact:
        "Supports environmental conservation, enables early intervention, and provides evidence for policy decisions.",
      category: "Environmental",
      implementationPhases: [
        "Baseline Data Establishment",
        "Change Detection Algorithm Setup",
        "Validation with Ground Data",
        "Alert System Development",
        "Reporting & Policy Integration",
      ],
      checklistItems: [
        "Establish baseline environmental data",
        "Develop change detection algorithms",
        "Validate with field observations",
        "Set up automated alert system",
        "Create policy recommendation reports",
      ],
      connectedSkills: [
        "Remote Sensing",
        "Spatial Analysis",
        "Environmental Monitoring",
      ],
    },
    {
      id: 4,
      title: "Disaster Risk Management",
      icon: <FaShieldAlt className="text-red-600 text-4xl" />,
      description:
        "Comprehensive disaster risk assessment, early warning systems, and post-disaster damage assessment.",
      challenges: [
        "Flood risk mapping in data-scarce regions",
        "Early warning for natural disasters",
        "Rapid post-disaster damage assessment",
        "Vulnerability and exposure mapping",
      ],
      methodologies: [
        "Digital Elevation Model (DEM) analysis",
        "Hydrological modeling",
        "Machine learning for risk prediction",
        "Satellite-based damage assessment",
        "Real-time monitoring systems",
      ],
      technologies: [
        "LiDAR and SRTM elevation data",
        "Google Earth Engine for rapid analysis",
        "WebGIS for decision support systems",
        "Mobile GIS for field data collection",
        "Automated alert systems",
      ],
      deliverables: [
        "Flood risk maps (100-year return period)",
        "Early warning system dashboards",
        "Damage assessment reports within 24h",
        "Evacuation route planning",
        "Risk reduction strategies",
      ],
      impact:
        "Reduces disaster impacts, saves lives through early warnings, and accelerates recovery efforts.",
      category: "Disaster",
      implementationPhases: [
        "Risk Assessment & Mapping",
        "Early Warning System Development",
        "Stakeholder Training",
        "System Testing & Validation",
        "Operational Deployment",
      ],
      checklistItems: [
        "Collect historical disaster data",
        "Develop risk assessment models",
        "Set up early warning infrastructure",
        "Train emergency response teams",
        "Conduct simulation exercises",
      ],
      connectedSkills: [
        "GIS Development",
        "Spatial Analysis",
        "Real-time Systems",
      ],
    },
    {
      id: 5,
      title: "Urban Growth Analysis & Smart Cities",
      icon: <FaCity className="text-purple-600 text-4xl" />,
      description:
        "Urban sprawl monitoring, infrastructure planning, and smart city development using geospatial technologies.",
      challenges: [
        "Monitoring urban expansion patterns",
        "Infrastructure planning and optimization",
        "Green space and urban heat island analysis",
        "Population density and mobility patterns",
      ],
      methodologies: [
        "Urban growth modeling (CA-Markov)",
        "Spatial metrics and landscape ecology",
        "Night-time light data analysis",
        "3D city modeling and visualization",
        "Transportation network analysis",
      ],
      technologies: [
        "High-resolution satellite imagery",
        "3D GIS and BIM integration",
        "Python for urban analytics",
        "WebGL for 3D visualization",
        "IoT and sensor networks",
      ],
      deliverables: [
        "Urban growth prediction models",
        "Infrastructure suitability maps",
        "Smart city dashboards",
        "3D urban models",
        "Sustainable development plans",
      ],
      impact:
        "Enables sustainable urban development, optimizes infrastructure investments, and improves quality of life.",
      category: "Urban",
      implementationPhases: [
        "Urban Data Collection",
        "Growth Modeling & Simulation",
        "Infrastructure Planning",
        "Stakeholder Engagement",
        "Implementation Roadmap",
      ],
      checklistItems: [
        "Collect urban infrastructure data",
        "Develop growth prediction models",
        "Create infrastructure planning maps",
        "Engage with city planners",
        "Develop implementation timeline",
      ],
      connectedSkills: ["GIS Development", "Spatial Analysis", "3D Modeling"],
    },
    {
      id: 6,
      title: "Climate Change Resilience",
      icon: <FaChartLine className="text-teal-600 text-4xl" />,
      description:
        "Climate vulnerability assessment, adaptation planning, and resilience building using geospatial data.",
      challenges: [
        "Sea-level rise impact assessment",
        "Climate vulnerability mapping",
        "Carbon sequestration monitoring",
        "Extreme weather event analysis",
      ],
      methodologies: [
        "Climate scenario modeling",
        "Vulnerability index development",
        "Carbon stock assessment",
        "Coastal vulnerability analysis",
        "Climate-resilient planning",
      ],
      technologies: [
        "CMIP6 climate model data",
        "Remote sensing for carbon monitoring",
        "GIS-based multi-criteria analysis",
        "Statistical downscaling techniques",
        "Decision support systems",
      ],
      deliverables: [
        "Climate vulnerability maps",
        "Adaptation strategy reports",
        "Carbon accounting systems",
        "Resilience action plans",
        "Policy recommendation briefs",
      ],
      impact:
        "Builds climate resilience, supports Paris Agreement commitments, and protects vulnerable communities.",
      category: "Climate",
      implementationPhases: [
        "Climate Data Analysis",
        "Vulnerability Assessment",
        "Adaptation Planning",
        "Stakeholder Consultation",
        "Resilience Implementation",
      ],
      checklistItems: [
        "Collect climate projection data",
        "Assess community vulnerability",
        "Develop adaptation strategies",
        "Engage with local communities",
        "Create resilience action plan",
      ],
      connectedSkills: [
        "Environmental Monitoring",
        "Data Analysis",
        "Policy Integration",
      ],
    },
  ];

  // Filter solutions based on category and search query
  const filteredSolutions = solutions.filter((solution) => {
    const matchesSearch =
      solution.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      solution.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      solution.technologies.some((tech) =>
        tech.toLowerCase().includes(searchQuery.toLowerCase())
      );

    const matchesCategory =
      selectedCategory === "All" ||
      solution.category.toLowerCase() === selectedCategory.toLowerCase();

    return matchesSearch && matchesCategory;
  });

  // Toggle solution for comparison
  const toggleComparison = (solutionId: number) => {
    setSelectedForComparison(
      (prev) =>
        prev.includes(solutionId)
          ? prev.filter((id) => id !== solutionId)
          : [...prev, solutionId].slice(0, 3) // Limit to 3 comparisons
    );
  };

  // Update current phase for a solution
  const updatePhase = (solutionId: number, phaseIndex: number) => {
    setCurrentPhases((prev) => ({
      ...prev,
      [solutionId]: phaseIndex,
    }));
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  const detailVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
    exit: {
      opacity: 0,
      scale: 0.9,
      transition: {
        duration: 0.3,
      },
    },
  };

  // Process Flow Component
  const ProcessFlow = ({ methodologies }: { methodologies: string[] }) => {
    return (
      <div className="relative">
        {methodologies.map((step, index) => (
          <motion.div
            key={index}
            className="flex items-center mb-4"
            initial={{ opacity: 0, x: -20 }}
            animate={mounted ? { opacity: 1, x: 0 } : { opacity: 1, x: 0 }}
            transition={{ delay: index * 0.2 }}
          >
            <div className="flex-shrink-0 w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center text-white text-sm font-bold mr-4">
              {index + 1}
            </div>
            <div className="bg-white p-3 rounded-lg shadow-sm border border-gray-200 flex-1">
              <p className="text-sm text-gray-700">{step}</p>
            </div>
            {index < methodologies.length - 1 && (
              <div className="absolute left-4 top-8 w-0.5 h-8 bg-blue-300 ml-3.5" />
            )}
          </motion.div>
        ))}
      </div>
    );
  };

  // Solution Progress Component
  const SolutionProgress = ({
    solutionId,
    phases,
  }: {
    solutionId: number;
    phases: string[];
  }) => {
    const currentPhase = currentPhases[solutionId] || 0;

    return (
      <div className="flex items-center justify-between mb-6 flex-wrap gap-4">
        {phases.map((phase, index) => (
          <div key={phase} className="flex items-center">
            <div
              className={`w-10 h-10 rounded-full flex items-center justify-center border-2 ${
                index <= currentPhase
                  ? "bg-blue-500 border-blue-500 text-white"
                  : "border-gray-300 text-gray-500"
              } cursor-pointer transition-all duration-300`}
              onClick={() => updatePhase(solutionId, index)}
            >
              {index + 1}
            </div>
            <span
              className={`ml-2 text-sm ${
                index <= currentPhase
                  ? "text-blue-600 font-semibold"
                  : "text-gray-500"
              }`}
            >
              {phase}
            </span>
            {index < phases.length - 1 && (
              <div
                className={`w-8 h-0.5 mx-4 ${
                  index < currentPhase ? "bg-blue-500" : "bg-gray-300"
                }`}
              />
            )}
          </div>
        ))}
      </div>
    );
  };

  // Implementation Checklist Component
  const ImplementationChecklist = ({ items }: { items: string[] }) => {
    const [checkedItems, setCheckedItems] = useState<boolean[]>(
      new Array(items.length).fill(false)
    );

    return (
      <div className="space-y-2">
        {items.map((item, index) => (
          <motion.label
            key={index}
            className="flex items-center space-x-3 cursor-pointer group"
            whileHover={mounted ? { x: 5 } : { x: 0 }}
          >
            <input
              type="checkbox"
              checked={checkedItems[index]}
              onChange={(e) => {
                const newChecked = [...checkedItems];
                newChecked[index] = e.target.checked;
                setCheckedItems(newChecked);
              }}
              className="w-4 h-4 text-blue-600 rounded focus:ring-blue-500"
            />
            <span
              className={`text-sm ${
                checkedItems[index]
                  ? "text-gray-500 line-through"
                  : "text-gray-700"
              } group-hover:text-blue-600`}
            >
              {item}
            </span>
          </motion.label>
        ))}
      </div>
    );
  };

  // Static fallback for server rendering
  if (!mounted) {
    return (
      <section className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-green-50 py-20 px-4 sm:px-6 lg:px-8">
        {/* Static header without animations */}
        <div className="text-center mb-16 max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-3 mb-4">
            <FaLightbulb className="text-yellow-500 text-3xl" />
            <h1 className="text-5xl font-bold bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text text-transparent">
              Geospatial Solutions
            </h1>
            <FaRocket className="text-green-500 text-3xl" />
          </div>
          <div className="w-32 h-1.5 bg-gradient-to-r from-blue-400 to-green-400 mx-auto mb-6 rounded-full" />
          <p className="text-xl text-gray-600 leading-relaxed">
            Transforming complex spatial challenges into actionable insights
            through cutting-edge geospatial technologies and data-driven
            approaches.
          </p>
        </div>

        {/* Static loading state for solutions */}
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
            {solutions.map((solution) => (
              <div
                key={solution.id}
                className="bg-white rounded-2xl shadow-lg border border-gray-200 p-6 animate-pulse"
              >
                <div className="flex items-start gap-4">
                  <div className="w-16 h-16 bg-gray-200 rounded-xl"></div>
                  <div className="flex-1">
                    <div className="h-6 bg-gray-200 rounded mb-2"></div>
                    <div className="h-4 bg-gray-200 rounded mb-2"></div>
                    <div className="h-4 bg-gray-200 rounded w-3/4"></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-green-50 py-20 px-4 sm:px-6 lg:px-8">
      {/* Header Section */}
      <motion.div
        className="text-center mb-16 max-w-4xl mx-auto"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <motion.div
          className="inline-flex items-center gap-3 mb-4"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <FaLightbulb className="text-yellow-500 text-3xl" />
          <h1 className="text-5xl font-bold bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text text-transparent">
            Geospatial Solutions
          </h1>
          <FaRocket className="text-green-500 text-3xl" />
        </motion.div>

        <motion.div
          className="w-32 h-1.5 bg-gradient-to-r from-blue-400 to-green-400 mx-auto mb-6 rounded-full"
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
          Transforming complex spatial challenges into actionable insights
          through cutting-edge geospatial technologies and data-driven
          approaches.
        </motion.p>
      </motion.div>

      {/* Filter and Search Section */}
      <ClientOnly>
        <motion.div
          className="max-w-7xl mx-auto mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.9 }}
        >
          <div className="bg-white rounded-2xl shadow-lg p-6 border border-gray-200">
            <div className="flex flex-col lg:flex-row gap-4 items-center justify-between">
              {/* Search Input */}
              <div className="flex-1 w-full">
                <div className="relative">
                  <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                  <input
                    type="text"
                    placeholder="Search solutions, technologies, methodologies..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>
              </div>

              {/* Category Filter */}
              <div className="flex flex-wrap gap-2">
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

              {/* Comparison Mode Toggle */}
              <button
                onClick={() => setComparisonMode(!comparisonMode)}
                className={`px-6 py-3 rounded-xl font-semibold transition-all duration-300 flex items-center gap-2 ${
                  comparisonMode
                    ? "bg-purple-500 text-white shadow-lg"
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                }`}
              >
                <FaFilter />
                {comparisonMode ? "Exit Comparison" : "Compare Solutions"}
              </button>
            </div>

            {/* Selected for Comparison */}
            {comparisonMode && selectedForComparison.length > 0 && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                className="mt-4 p-4 bg-purple-50 rounded-xl border border-purple-200"
              >
                <div className="flex items-center justify-between mb-2">
                  <span className="text-purple-700 font-semibold">
                    Comparing {selectedForComparison.length} solutions
                  </span>
                  <button
                    onClick={() => setSelectedForComparison([])}
                    className="text-purple-500 hover:text-purple-700"
                  >
                    <FaTimes />
                  </button>
                </div>
                <div className="flex flex-wrap gap-2">
                  {selectedForComparison.map((solutionId) => {
                    const solution = solutions.find((s) => s.id === solutionId);
                    return solution ? (
                      <span
                        key={solutionId}
                        className="px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-sm"
                      >
                        {solution.title}
                      </span>
                    ) : null;
                  })}
                </div>
              </motion.div>
            )}
          </div>
        </motion.div>
      </ClientOnly>

      {/* Solutions Grid */}
      <ClientOnly>
        <motion.div
          className="max-w-7xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8 mb-12">
            {filteredSolutions.map((solution) => (
              <motion.div
                key={solution.id}
                variants={itemVariants}
                className={`relative cursor-pointer transition-all duration-300 ${
                  selectedSolution === solution.id
                    ? "lg:col-span-2 xl:col-span-3"
                    : ""
                } ${
                  comparisonMode && selectedForComparison.includes(solution.id)
                    ? "ring-2 ring-purple-500 ring-offset-2"
                    : ""
                }`}
                onMouseEnter={() => setHoveredCard(solution.id)}
                onMouseLeave={() => setHoveredCard(null)}
              >
                {/* Solution Card */}
                <motion.div
                  className={`bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden h-full transition-all duration-500 ${
                    selectedSolution === solution.id
                      ? "shadow-2xl ring-2 ring-blue-200 scale-105"
                      : hoveredCard === solution.id
                      ? "shadow-xl scale-102"
                      : ""
                  }`}
                  whileHover={selectedSolution !== solution.id ? { y: -5 } : {}}
                  onClick={() =>
                    !comparisonMode &&
                    setSelectedSolution(
                      selectedSolution === solution.id ? null : solution.id
                    )
                  }
                  layout
                >
                  {/* Card Header */}
                  <div className="p-6 bg-gradient-to-r from-gray-50 to-white border-b border-gray-100">
                    <div className="flex items-start gap-4">
                      <motion.div
                        className="flex-shrink-0 p-3 rounded-xl bg-gradient-to-br from-blue-50 to-white"
                        whileHover={{ rotate: 5, scale: 1.1 }}
                      >
                        {solution.icon}
                      </motion.div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-start justify-between mb-2">
                          <h3 className="text-xl font-bold text-gray-800">
                            {solution.title}
                          </h3>
                          {comparisonMode && (
                            <button
                              onClick={(e) => {
                                e.stopPropagation();
                                toggleComparison(solution.id);
                              }}
                              className={`p-2 rounded-lg transition-colors ${
                                selectedForComparison.includes(solution.id)
                                  ? "bg-purple-100 text-purple-600"
                                  : "bg-gray-100 text-gray-400 hover:bg-gray-200"
                              }`}
                            >
                              <FaCheck />
                            </button>
                          )}
                        </div>
                        <p className="text-gray-600 leading-relaxed mb-3">
                          {solution.description}
                        </p>

                        {/* Connected Skills */}
                        <div className="flex flex-wrap gap-2">
                          {solution.connectedSkills.map((skill, index) => (
                            <motion.span
                              key={skill}
                              className="px-2 py-1 bg-blue-100 text-blue-700 rounded-full text-xs font-medium"
                              initial={{ opacity: 0, scale: 0.8 }}
                              animate={{ opacity: 1, scale: 1 }}
                              transition={{ delay: index * 0.1 }}
                            >
                              {skill}
                            </motion.span>
                          ))}
                        </div>
                      </div>
                      {!comparisonMode && (
                        <motion.div
                          className="flex-shrink-0"
                          animate={{
                            rotate: selectedSolution === solution.id ? 180 : 0,
                          }}
                          transition={{ duration: 0.3 }}
                        >
                          <FaSearch className="text-blue-500 text-lg" />
                        </motion.div>
                      )}
                    </div>
                  </div>

                  {/* Expanded Details */}
                  <AnimatePresence>
                    {selectedSolution === solution.id && !comparisonMode && (
                      <motion.div
                        variants={detailVariants}
                        initial="hidden"
                        animate="visible"
                        exit="exit"
                        className="p-6 bg-gray-50"
                        layout
                      >
                        {/* Implementation Progress */}
                        <div className="mb-8">
                          <h4 className="font-semibold text-gray-800 mb-4">
                            Implementation Progress
                          </h4>
                          <SolutionProgress
                            solutionId={solution.id}
                            phases={solution.implementationPhases}
                          />
                        </div>

                        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-4 gap-6">
                          {/* Challenges */}
                          <div className="bg-white rounded-xl p-4 shadow-sm border border-red-100">
                            <h4 className="font-semibold text-red-700 mb-3 flex items-center gap-2">
                              <FaMountain className="text-red-500" />
                              Key Challenges
                            </h4>
                            <ul className="space-y-2">
                              {solution.challenges.map((challenge, idx) => (
                                <motion.li
                                  key={idx}
                                  className="text-sm text-gray-600 flex items-start gap-2"
                                  initial={{ opacity: 0, x: -10 }}
                                  animate={{ opacity: 1, x: 0 }}
                                  transition={{
                                    duration: 0.4,
                                    delay: idx * 0.1,
                                  }}
                                >
                                  <span className="text-red-400 mt-1 flex-shrink-0">
                                    •
                                  </span>
                                  <span>{challenge}</span>
                                </motion.li>
                              ))}
                            </ul>
                          </div>

                          {/* Methodologies */}
                          <div className="bg-white rounded-xl p-4 shadow-sm border border-blue-100">
                            <h4 className="font-semibold text-blue-700 mb-3 flex items-center gap-2">
                              <FaChartLine className="text-blue-500" />
                              Methodologies
                            </h4>
                            <ProcessFlow
                              methodologies={solution.methodologies}
                            />
                          </div>

                          {/* Technologies */}
                          <div className="bg-white rounded-xl p-4 shadow-sm border border-green-100">
                            <h4 className="font-semibold text-green-700 mb-3 flex items-center gap-2">
                              <FaRocket className="text-green-500" />
                              Technologies
                            </h4>
                            <ul className="space-y-2">
                              {solution.technologies.map((tech, idx) => (
                                <motion.li
                                  key={idx}
                                  className="text-sm text-gray-600 flex items-start gap-2"
                                  initial={{ opacity: 0, x: -10 }}
                                  animate={{ opacity: 1, x: 0 }}
                                  transition={{
                                    duration: 0.4,
                                    delay: idx * 0.1 + 0.4,
                                  }}
                                >
                                  <span className="text-green-400 mt-1 flex-shrink-0">
                                    •
                                  </span>
                                  <span>{tech}</span>
                                </motion.li>
                              ))}
                            </ul>
                          </div>

                          {/* Implementation Checklist */}
                          <div className="bg-white rounded-xl p-4 shadow-sm border border-purple-100 lg:col-span-2 xl:col-span-1">
                            <h4 className="font-semibold text-purple-700 mb-3">
                              Implementation Checklist
                            </h4>
                            <ImplementationChecklist
                              items={solution.checklistItems}
                            />

                            <div className="mt-4 pt-4 border-t border-gray-200">
                              <h4 className="font-semibold text-purple-700 mb-2">
                                Impact
                              </h4>
                              <p className="text-sm text-gray-600 leading-relaxed">
                                {solution.impact}
                              </p>
                            </div>
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              </motion.div>
            ))}
          </div>

          {/* No Results Message */}
          {filteredSolutions.length === 0 && (
            <motion.div
              className="text-center py-16"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
            >
              <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-200">
                <FaSearch className="text-gray-400 text-5xl mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-gray-700 mb-2">
                  No solutions found
                </h3>
                <p className="text-gray-600">
                  Try adjusting your search terms or filter categories to find
                  what you're looking for.
                </p>
              </div>
            </motion.div>
          )}
        </motion.div>
      </ClientOnly>

      {/* Call to Action */}
      <ClientOnly>
        <motion.div
          className="text-center max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="bg-gradient-to-r from-blue-600 to-green-600 rounded-2xl p-8 text-white shadow-2xl">
            <h3 className="text-2xl font-bold mb-4">
              Ready to Transform Your Spatial Challenges?
            </h3>
            <p className="text-blue-100 text-lg mb-6 leading-relaxed">
              Let&apos;s collaborate to build custom geospatial solutions that
              drive meaningful impact for your organization and stakeholders.
            </p>
            <motion.button
              className="bg-white text-blue-600 px-8 py-3 rounded-full font-semibold shadow-lg"
              whileHover={{
                scale: 1.05,
                boxShadow: "0 10px 25px rgba(255,255,255,0.2)",
              }}
              whileTap={{ scale: 0.95 }}
            >
              Start Your Geospatial Journey
            </motion.button>
          </div>
        </motion.div>
      </ClientOnly>
    </section>
  );
}
