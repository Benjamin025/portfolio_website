"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaSearch,
  FaCalendarAlt,
  FaClock,
  FaArrowRight,
  FaTags,
  FaEye,
  FaShare,
  FaBook,
  FaSatellite,
  FaBrain,
  FaMapMarkedAlt,
  FaCode,
  FaGlobeAmericas,
} from "react-icons/fa";

interface Blog {
  id: number;
  title: string;
  excerpt: string;
  content: string;
  category: string;
  readTime: string;
  publishDate: string;
  tags: string[];
  image?: string;
  views?: number;
  featured?: boolean;
}

export default function Blogs() {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [selectedBlog, setSelectedBlog] = useState<Blog | null>(null);

  const categories = [
    "All",
    "GIS & Spatial Analysis",
    "Remote Sensing",
    "GeoAI & Machine Learning",
    "Web GIS Development",
    "Environmental Monitoring",
    "Data Visualization",
    "Tutorials & Guides",
  ];

  const blogs: Blog[] = [
    {
      id: 1,
      title:
        "The Future of GIS in Climate Action: Building Resilient Communities",
      excerpt:
        "Exploring how geospatial technologies are revolutionizing climate adaptation strategies and supporting sustainable development goals through data-driven decision making.",
      content: `Climate change presents one of the most significant challenges of our time, and Geographic Information Systems (GIS) are emerging as crucial tools in the fight against its impacts. This comprehensive analysis explores how GIS technologies are transforming climate action across multiple sectors.

## Key Applications:

### 1. Vulnerability Assessment
GIS enables precise mapping of climate vulnerability by integrating socioeconomic data, environmental factors, and climate projections. Through spatial analysis, we can identify communities most at risk from sea-level rise, extreme weather events, and changing precipitation patterns.

### 2. Carbon Sequestration Monitoring
Advanced remote sensing combined with GIS allows for accurate monitoring of forest carbon stocks and land use changes. This is crucial for carbon credit programs and REDD+ initiatives.

### 3. Urban Heat Island Analysis
Using thermal infrared data and GIS analysis, cities can identify heat hotspots and plan green infrastructure to mitigate urban heat island effects.

### 4. Climate-Resilient Agriculture
Precision agriculture powered by GIS helps farmers adapt to changing climate conditions through optimized irrigation, crop selection, and soil management.

## Case Study: Coastal Vulnerability in Mombasa
A recent project integrated LiDAR data, satellite imagery, and socioeconomic indicators to create a comprehensive coastal vulnerability index for Mombasa County. The results informed the county&apos;s climate adaptation strategy and infrastructure planning.

The integration of IoT sensors, satellite data, and AI with GIS platforms is creating unprecedented opportunities for real-time climate monitoring and predictive analysis. As these technologies continue to evolve, their role in climate action will only become more critical.`,
      category: "GIS & Spatial Analysis",
      readTime: "8 min read",
      publishDate: "2024-01-15",
      tags: [
        "Climate Change",
        "Spatial Analysis",
        "Sustainability",
        "Vulnerability Assessment",
      ],
      featured: true,
      views: 1247,
    },
    {
      id: 2,
      title:
        "Advanced Earth Observation for Food Security: From Satellites to Solutions",
      excerpt:
        "Deep dive into how satellite imagery and machine learning are transforming agricultural monitoring, crop yield prediction, and food security assessment across Africa.",
      content: `Earth Observation (EO) technologies are revolutionizing how we monitor and manage agricultural systems. This technical exploration covers the latest advancements in using satellite data for food security applications.

## Technical Framework:

### Satellite Data Sources:
- **Sentinel-2**: 10m resolution multispectral data for crop monitoring
- **Landsat 8/9**: Historical analysis and change detection
- **MODIS**: Daily coverage for rapid assessment
- **PlanetScope**: 3m resolution for detailed field-level analysis

### Key Vegetation Indices:
- **NDVI** (Normalized Difference Vegetation Index)
- **EVI** (Enhanced Vegetation Index)
- **NDWI** (Normalized Difference Water Index)
- **LSWI** (Land Surface Water Index)

### Machine Learning Applications:
- **Random Forest** for crop classification
- **CNN** for yield prediction
- **LSTM** for time-series analysis
- **Anomaly detection** for early warning systems

## Implementation Pipeline:

1. **Data Acquisition**: Automated download of satellite imagery
2. **Preprocessing**: Atmospheric correction, cloud masking, geometric correction
3. **Feature Extraction**: Calculation of vegetation indices and texture metrics
4. **Model Training**: Supervised learning with ground truth data
5. **Deployment**: Real-time monitoring and alert systems

The integration of EO data with weather information, soil data, and market prices creates a comprehensive food security monitoring system that can predict shortages months in advance.`,
      category: "Remote Sensing",
      readTime: "12 min read",
      publishDate: "2024-01-10",
      tags: [
        "Earth Observation",
        "Agriculture",
        "Machine Learning",
        "Satellite Imagery",
      ],
      views: 892,
    },
    {
      id: 3,
      title:
        "Building Interactive Web GIS Applications with Next.js and Leaflet",
      excerpt:
        "Comprehensive tutorial on creating performant, scalable web mapping applications using modern React frameworks and open-source mapping libraries.",
      content: `Web GIS has evolved significantly with modern JavaScript frameworks. This hands-on guide walks through building a complete interactive mapping application from scratch.

## Technology Stack:
- **Frontend**: Next.js 14 with TypeScript
- **Mapping**: Leaflet with React-Leaflet
- **Styling**: Tailwind CSS
- **State Management**: Zustand
- **Data**: GeoJSON, WMS, Vector Tiles

## Step-by-Step Implementation:

### 1. Project Setup
\`\`\`bash
npx create-next-app@latest web-gis-app --typescript --tailwind --eslint
cd web-gis-app
npm install leaflet react-leaflet @types/leaflet
\`\`\`

### 2. Basic Map Component
\`\`\`tsx
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

export default function InteractiveMap() {
  return (
    <MapContainer
      center={[-1.2921, 36.8219]}
      zoom={10}
      style={{ height: '500px', width: '100%' }}
    >
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; OpenStreetMap contributors'
      />
      <Marker position={[-1.2921, 36.8219]}>
        <Popup>
          Nairobi, Kenya
        </Popup>
      </Marker>
    </MapContainer>
  );
}
\`\`\`

### 3. Advanced Features:
- **Layer Control**: Multiple basemaps and overlay layers
- **Spatial Analysis**: Buffer, intersect, and measurement tools
- **Data Visualization**: Choropleth maps and heatmaps
- **Performance Optimization**: Clustering and lazy loading

### 4. Deployment Considerations:
- **Bundle Size Optimization**: Code splitting for mapping components
- **Caching Strategy**: Service workers for offline capability
- **API Integration**: RESTful services for dynamic data

This approach ensures scalable, maintainable web GIS applications that perform well across devices and network conditions.`,
      category: "Web GIS Development",
      readTime: "15 min read",
      publishDate: "2024-01-08",
      tags: ["Web Development", "Next.js", "Leaflet", "TypeScript", "Tutorial"],
      views: 1563,
    },
    {
      id: 4,
      title:
        "GeoAI: Revolutionizing Environmental Monitoring with Deep Learning",
      excerpt:
        "How convolutional neural networks and transformer architectures are enabling automated analysis of earth observation data at unprecedented scales.",
      content: `GeoAI represents the convergence of geospatial science and artificial intelligence, creating powerful new capabilities for environmental monitoring and analysis.

## Deep Learning Architectures for Geospatial Data:

### 1. Convolutional Neural Networks (CNNs)
- **U-Net**: For semantic segmentation of satellite imagery
- **ResNet**: Feature extraction from multispectral data
- **Inception**: Multi-scale feature learning

### 2. Transformer Networks
- **Vision Transformers**: Processing satellite image patches
- **Spatial Transformers**: Handling geometric variations
- **Time-Series Transformers**: Analyzing temporal patterns

### 3. Graph Neural Networks
- **Spatial Graph Networks**: Modeling geographic relationships
- **Dynamic Graph Networks**: Tracking changes over time

## Practical Applications:

### Land Cover Classification
Using U-Net architecture with Sentinel-2 data to achieve 94% accuracy in land cover classification across East Africa.

### Deforestation Monitoring
Combining SAR data from Sentinel-1 with optical imagery from Sentinel-2 for all-weather deforestation detection.

### Urban Growth Prediction
Spatio-temporal models predicting urban expansion with 85% accuracy 5 years into the future.

## Implementation Challenges:
- **Data Quality**: Handling cloud cover and atmospheric effects
- **Computational Resources**: Training models on large geospatial datasets
- **Interpretability**: Making AI decisions transparent and explainable

The field is rapidly evolving with new architectures specifically designed for geospatial data, promising even more accurate and efficient environmental monitoring solutions.`,
      category: "GeoAI & Machine Learning",
      readTime: "10 min read",
      publishDate: "2024-01-05",
      tags: [
        "Artificial Intelligence",
        "Deep Learning",
        "Environmental Monitoring",
        "CNN",
        "Transformers",
      ],
      views: 1034,
    },
    {
      id: 5,
      title: "Spatial Data Visualization: Beyond Basic Maps",
      excerpt:
        "Advanced techniques for creating compelling, informative spatial visualizations that tell powerful stories with geographic data.",
      content: `Effective spatial data visualization goes beyond simple point maps. This guide explores advanced techniques for creating insightful geographic visualizations.

## Advanced Visualization Techniques:

### 1. 3D Visualizations
- **Digital Elevation Models**: Terrain analysis and visualization
- **Building Models**: Urban planning and solar potential analysis
- **Voxel Data**: 3D representation of atmospheric and ocean data

### 2. Interactive Dashboards
- **Cross-filtering**: Linked views for multidimensional analysis
- **Time-sliders**: Animated temporal data exploration
- **Brush and zoom**: Interactive data selection

### 3. Multivariate Mapping
- **Bivariate Choropleth**: Showing two variables simultaneously
- **Proportional Symbols**: Size and color encoding
- **Flow Maps**: Movement and connectivity patterns

## Tools and Libraries:

### Web-based:
- **Deck.gl**: Large-scale data visualization
- **Mapbox GL JS**: Custom styled maps
- **D3.js**: Custom geographic visualizations
- **Cesium**: 3D geospatial visualization

### Desktop:
- **QGIS**: With TimeManager plugin
- **ArcGIS Pro**: Advanced 3D capabilities
- **R with ggplot2**: Statistical spatial visualizations

## Best Practices:
1. **Choose appropriate color schemes** (ColorBrewer, Viridis)
2. **Consider color blindness** in design choices
3. **Provide scale and north arrows** for context
4. **Use appropriate projections** for the area of interest
5. **Include metadata and data sources**

Effective visualization transforms complex spatial data into understandable insights that drive decision-making.`,
      category: "Data Visualization",
      readTime: "7 min read",
      publishDate: "2024-01-03",
      tags: [
        "Data Visualization",
        "Cartography",
        "Web Mapping",
        "3D Visualization",
      ],
      views: 765,
    },
    {
      id: 6,
      title: "Wetland Monitoring Using Multi-Sensor Remote Sensing",
      excerpt:
        "Integrating optical, radar, and LiDAR data for comprehensive wetland ecosystem assessment and conservation planning.",
      content: `Wetlands are critical ecosystems that require sophisticated monitoring approaches. This technical paper details multi-sensor remote sensing methods for wetland assessment.

## Multi-Sensor Approach:

### Optical Sensors (Sentinel-2, Landsat)
- **Vegetation health** through NDVI and EVI
- **Water extent** using NDWI and MNDWI
- **Seasonal changes** through time-series analysis

### Radar Sensors (Sentinel-1)
- **Surface moisture** through backscatter analysis
- **Flood monitoring** regardless of cloud cover
- **Vegetation structure** using polarization data

### LiDAR Data
- **Topographic mapping** of wetland basins
- **Vegetation height** and structure
- **Hydrological modeling** inputs

## Classification Methodology:

### Object-Based Image Analysis (OBIA)
1. **Segmentation**: Creating meaningful image objects
2. **Feature extraction**: Spectral, textural, and geometric features
3. **Classification**: Random Forest or Support Vector Machines
4. **Accuracy assessment**: Confusion matrix and kappa statistics

### Deep Learning Approach
- **U-Net** for pixel-wise classification
- **Transfer learning** from natural image datasets
- **Data augmentation** for limited training data

## Case Study: Tana River Delta
Application of these methods to monitor the Tana River Delta wetlands, showing 92% classification accuracy and identifying critical areas for conservation.

The integration of multiple data sources provides a comprehensive understanding of wetland dynamics, supporting effective conservation and management strategies.`,
      category: "Environmental Monitoring",
      readTime: "11 min read",
      publishDate: "2023-12-28",
      tags: [
        "Wetlands",
        "Remote Sensing",
        "Conservation",
        "Multi-sensor",
        "LiDAR",
      ],
      views: 623,
    },
  ];

  const filteredBlogs = blogs.filter((blog) => {
    const matchesSearch =
      blog.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      blog.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
      blog.tags.some((tag) =>
        tag.toLowerCase().includes(searchQuery.toLowerCase())
      );

    const matchesCategory =
      selectedCategory === "All" || blog.category === selectedCategory;

    return matchesSearch && matchesCategory;
  });

  const featuredBlog = blogs.find((blog) => blog.featured);
  const otherBlogs = filteredBlogs.filter((blog) => !blog.featured);

  const fadeInUp = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8 },
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

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case "GIS & Spatial Analysis":
        return <FaMapMarkedAlt className="text-blue-500" />;
      case "Remote Sensing":
        return <FaSatellite className="text-green-500" />;
      case "GeoAI & Machine Learning":
        return <FaBrain className="text-purple-500" />;
      case "Web GIS Development":
        return <FaCode className="text-orange-500" />;
      case "Environmental Monitoring":
        return <FaGlobeAmericas className="text-teal-500" />;
      case "Data Visualization":
        return <FaEye className="text-red-500" />;
      default:
        return <FaBook className="text-gray-500" />;
    }
  };

  return (
    <section className="min-h-screen bg-gradient-to-b from-blue-50 to-white py-20 px-6 md:px-16 text-gray-800">
      {/* Header */}
      <motion.div
        className="text-center mb-16"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h1 className="text-4xl md:text-5xl font-bold text-blue-600 mb-4">
          Geospatial Insights & Tutorials
        </h1>
        <div className="w-24 h-1 bg-blue-400 mx-auto mb-6"></div>
        <motion.p
          className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
        >
          Exploring the intersection of geospatial technology, data science, and
          environmental solutions through in-depth technical articles,
          tutorials, and case studies.
        </motion.p>
      </motion.div>

      {/* Search and Filter Section */}
      <motion.div
        className="max-w-6xl mx-auto mb-12"
        initial="hidden"
        animate="visible"
        variants={fadeInUp}
      >
        <div className="bg-white rounded-2xl shadow-lg p-6 border border-gray-200">
          <div className="flex flex-col lg:flex-row gap-4 items-center justify-between">
            {/* Search Input */}
            <div className="flex-1 w-full">
              <div className="relative">
                <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search blogs, topics, technologies..."
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
                  className={`flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                    selectedCategory === category
                      ? "bg-blue-500 text-white shadow-lg"
                      : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                  }`}
                >
                  {getCategoryIcon(category)}
                  {category}
                </button>
              ))}
            </div>
          </div>
        </div>
      </motion.div>

      {/* Featured Blog */}
      {featuredBlog && selectedCategory === "All" && searchQuery === "" && (
        <motion.div
          className="max-w-6xl mx-auto mb-16"
          initial="hidden"
          animate="visible"
          variants={fadeInUp}
        >
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl shadow-2xl overflow-hidden">
            <div className="p-8 text-white">
              <div className="flex items-center gap-2 mb-4">
                <span className="bg-white/20 px-3 py-1 rounded-full text-sm font-medium">
                  Featured Article
                </span>
                <span className="flex items-center gap-1 text-blue-100">
                  <FaEye className="text-sm" />
                  {featuredBlog.views} views
                </span>
              </div>

              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                {featuredBlog.title}
              </h2>

              <p className="text-xl text-blue-100 mb-6 leading-relaxed">
                {featuredBlog.excerpt}
              </p>

              <div className="flex flex-wrap items-center gap-4 mb-6">
                <div className="flex items-center gap-2">
                  {getCategoryIcon(featuredBlog.category)}
                  <span className="font-medium">{featuredBlog.category}</span>
                </div>
                <div className="flex items-center gap-2 text-blue-100">
                  <FaCalendarAlt />
                  <span>
                    {new Date(featuredBlog.publishDate).toLocaleDateString()}
                  </span>
                </div>
                <div className="flex items-center gap-2 text-blue-100">
                  <FaClock />
                  <span>{featuredBlog.readTime}</span>
                </div>
              </div>

              <div className="flex flex-wrap gap-2 mb-6">
                {featuredBlog.tags.map((tag, index) => (
                  <span
                    key={index}
                    className="bg-white/20 px-3 py-1 rounded-full text-sm"
                  >
                    #{tag}
                  </span>
                ))}
              </div>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setSelectedBlog(featuredBlog)}
                className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors flex items-center gap-2"
              >
                Read Full Article
                <FaArrowRight />
              </motion.button>
            </div>
          </div>
        </motion.div>
      )}

      {/* Blog Grid */}
      <motion.div
        className="max-w-6xl mx-auto"
        variants={staggerContainer}
        initial="hidden"
        animate="visible"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {otherBlogs.map((blog) => (
            <motion.article
              key={blog.id}
              variants={fadeInUp}
              whileHover={{ y: -5 }}
              className="bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-200 hover:shadow-xl transition-all duration-300"
            >
              <div className="p-6">
                {/* Category and Metadata */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-2">
                    {getCategoryIcon(blog.category)}
                    <span className="text-sm font-medium text-gray-600">
                      {blog.category}
                    </span>
                  </div>
                  <div className="flex items-center gap-4 text-sm text-gray-500">
                    <span className="flex items-center gap-1">
                      <FaCalendarAlt className="text-xs" />
                      {new Date(blog.publishDate).toLocaleDateString()}
                    </span>
                    <span className="flex items-center gap-1">
                      <FaClock className="text-xs" />
                      {blog.readTime}
                    </span>
                  </div>
                </div>

                {/* Title and Excerpt */}
                <h3 className="text-xl font-bold text-gray-800 mb-3 leading-tight">
                  {blog.title}
                </h3>
                <p className="text-gray-600 mb-4 leading-relaxed">
                  {blog.excerpt}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {blog.tags.slice(0, 3).map((tag, index) => (
                    <span
                      key={index}
                      className="bg-blue-50 text-blue-700 px-2 py-1 rounded-full text-xs font-medium"
                    >
                      #{tag}
                    </span>
                  ))}
                  {blog.tags.length > 3 && (
                    <span className="bg-gray-100 text-gray-600 px-2 py-1 rounded-full text-xs">
                      +{blog.tags.length - 3} more
                    </span>
                  )}
                </div>

                {/* Actions */}
                <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                  <div className="flex items-center gap-2 text-sm text-gray-500">
                    <FaEye className="text-xs" />
                    <span>{blog.views} views</span>
                  </div>
                  <div className="flex gap-2">
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={() => setSelectedBlog(blog)}
                      className="flex items-center gap-2 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors text-sm font-medium"
                    >
                      Read More
                      <FaArrowRight className="text-xs" />
                    </motion.button>
                  </div>
                </div>
              </div>
            </motion.article>
          ))}
        </div>

        {/* No Results Message */}
        {filteredBlogs.length === 0 && (
          <motion.div
            className="text-center py-16"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-200">
              <FaSearch className="text-gray-400 text-5xl mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-gray-700 mb-2">
                No blog posts found
              </h3>
              <p className="text-gray-600">
                Try adjusting your search terms or filter categories to find
                what you&apos;re looking for.
              </p>
            </div>
          </motion.div>
        )}
      </motion.div>

      {/* Blog Detail Modal */}
      <AnimatePresence>
        {selectedBlog && (
          <motion.div
            className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-hidden"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
            >
              {/* Modal Header */}
              <div className="flex items-center justify-between p-6 border-b border-gray-200 bg-gradient-to-r from-blue-50 to-white">
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-2">
                    {getCategoryIcon(selectedBlog.category)}
                    <span className="font-medium text-gray-700">
                      {selectedBlog.category}
                    </span>
                  </div>
                  <h2 className="text-2xl font-bold text-gray-800">
                    {selectedBlog.title}
                  </h2>
                </div>
                <button
                  onClick={() => setSelectedBlog(null)}
                  className="p-2 hover:bg-gray-100 rounded-lg transition-colors ml-4"
                >
                  <svg
                    className="w-6 h-6 text-gray-500"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>
              </div>

              {/* Modal Content */}
              <div className="p-6 max-h-[60vh] overflow-y-auto">
                <div className="flex items-center gap-4 text-sm text-gray-500 mb-6">
                  <span className="flex items-center gap-1">
                    <FaCalendarAlt />
                    {new Date(selectedBlog.publishDate).toLocaleDateString()}
                  </span>
                  <span className="flex items-center gap-1">
                    <FaClock />
                    {selectedBlog.readTime}
                  </span>
                  <span className="flex items-center gap-1">
                    <FaEye />
                    {selectedBlog.views} views
                  </span>
                </div>

                <div className="prose max-w-none">
                  {selectedBlog.content.split("\n").map((paragraph, index) => {
                    if (paragraph.startsWith("## ")) {
                      return (
                        <h3
                          key={index}
                          className="text-xl font-bold text-gray-800 mt-6 mb-4"
                        >
                          {paragraph.replace("## ", "")}
                        </h3>
                      );
                    } else if (paragraph.startsWith("### ")) {
                      return (
                        <h4
                          key={index}
                          className="text-lg font-semibold text-gray-800 mt-4 mb-3"
                        >
                          {paragraph.replace("### ", "")}
                        </h4>
                      );
                    } else if (paragraph.startsWith("```")) {
                      return null; // Skip code block markers
                    } else if (paragraph.trim() === "") {
                      return <br key={index} />;
                    } else {
                      return (
                        <p
                          key={index}
                          className="text-gray-700 leading-relaxed mb-4"
                        >
                          {paragraph}
                        </p>
                      );
                    }
                  })}
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mt-8 pt-6 border-t border-gray-200">
                  <FaTags className="text-gray-400 mt-1" />
                  {selectedBlog.tags.map((tag, index) => (
                    <span
                      key={index}
                      className="bg-blue-50 text-blue-700 px-3 py-1 rounded-full text-sm font-medium"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Modal Footer */}
              <div className="flex items-center justify-between p-6 border-t border-gray-200 bg-gray-50">
                <button
                  onClick={() => setSelectedBlog(null)}
                  className="px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-100 transition-colors"
                >
                  Close
                </button>
                <div className="flex gap-2">
                  <button className="flex items-center gap-2 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors">
                    <FaShare className="text-sm" />
                    Share
                  </button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
