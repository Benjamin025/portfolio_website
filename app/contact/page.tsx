"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
  FaLinkedin,
  FaGithub,
  FaTwitter,
  FaPaperPlane,
  FaCheckCircle,
  FaCalendarAlt,
  FaClock,
  FaVideo,
  FaExternalLinkAlt,
} from "react-icons/fa";

// Replace these with your actual Formspree Form IDs
const FORMSPREE_IDS = {
  CONTACT: "mdkynrgw",
  SCHEDULE: "xzzyplrq",
};

// Your scheduling links (replace with your actual links when set up)
const SCHEDULING_LINKS = {
  CALENDLY: "https://calendly.com/your-username/30min", // Replace when you set up Calendly
  CALCOM: "https://cal.com/benja-spatial", // Replace when you set up Cal.com
};

// Types
interface FormData {
  name: string;
  email: string;
  subject: string;
  message: string;
  projectType?: string;
  _replyto?: string;
  _subject?: string;
}

interface ScheduleData {
  name: string;
  email: string;
  date: string;
  time: string;
  topic: string;
  meetingType: string;
  _replyto?: string;
  _subject?: string;
}

export default function Contact() {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    subject: "",
    message: "",
    projectType: "",
  });

  const [scheduleData, setScheduleData] = useState<ScheduleData>({
    name: "",
    email: "",
    date: "",
    time: "",
    topic: "",
    meetingType: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [activeTab, setActiveTab] = useState<"message" | "schedule">("message");
  const [errors, setErrors] = useState<Record<string, string>>({});

  // Enhanced time slots with timezone labels
  const timeSlots = [
    { time: "09:00", label: "9:00 AM EAT" },
    { time: "09:30", label: "9:30 AM EAT" },
    { time: "10:00", label: "10:00 AM EAT" },
    { time: "10:30", label: "10:30 AM EAT" },
    { time: "11:00", label: "11:00 AM EAT" },
    { time: "11:30", label: "11:30 AM EAT" },
    { time: "14:00", label: "2:00 PM EAT" },
    { time: "14:30", label: "2:30 PM EAT" },
    { time: "15:00", label: "3:00 PM EAT" },
    { time: "15:30", label: "3:30 PM EAT" },
    { time: "16:00", label: "4:00 PM EAT" },
    { time: "16:30", label: "4:30 PM EAT" },
  ];

  const meetingTypes = [
    {
      value: "consultation",
      label: "30-min Consultation Call",
      duration: "30 minutes",
    },
    {
      value: "project-discussion",
      label: "60-min Project Discussion",
      duration: "60 minutes",
    },
    {
      value: "technical-review",
      label: "45-min Technical Review",
      duration: "45 minutes",
    },
  ];

  const projectTypes = [
    "Web GIS Development",
    "Remote Sensing Analysis",
    "Spatial Data Analysis",
    "Custom Mapping Solution",
    "GIS Automation",
    "Consultation",
    "Other",
  ];

  // Get next 7 business days for date selection
  const getNextBusinessDays = () => {
    const days = [];
    let count = 0;
    let currentDate = new Date();

    while (days.length < 7) {
      currentDate.setDate(currentDate.getDate() + 1);
      // Skip weekends (0 = Sunday, 6 = Saturday)
      if (currentDate.getDay() !== 0 && currentDate.getDay() !== 6) {
        days.push(currentDate.toISOString().split("T")[0]);
      }
    }
    return days;
  };

  const availableDates = getNextBusinessDays();

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    if (activeTab === "message") {
      setFormData((prev) => ({ ...prev, [name]: value }));
    } else {
      setScheduleData((prev) => ({ ...prev, [name]: value }));
    }
    // Clear errors when user starts typing
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const validateForm = () => {
    const newErrors: Record<string, string> = {};
    const data = activeTab === "message" ? formData : scheduleData;

    if (!data.name.trim()) newErrors.name = "Name is required";
    if (!data.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(data.email)) {
      newErrors.email = "Email is invalid";
    }

    if (activeTab === "message") {
      if (!formData.subject.trim()) newErrors.subject = "Subject is required";
      if (!formData.message.trim()) newErrors.message = "Message is required";
    } else {
      if (!scheduleData.date) newErrors.date = "Date is required";
      if (!scheduleData.time) newErrors.time = "Time is required";
      if (!scheduleData.topic.trim())
        newErrors.topic = "Meeting topic is required";
      if (!scheduleData.meetingType)
        newErrors.meetingType = "Meeting type is required";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // Formspree Submission Functions
  const submitContactForm = async (data: FormData) => {
    const formData = new FormData();

    // Add all form fields
    Object.entries(data).forEach(([key, value]) => {
      if (value) formData.append(key, value);
    });

    // Formspree specific fields for better email formatting
    formData.append("_replyto", data.email);
    formData.append("_subject", `New Portfolio Contact: ${data.subject}`);
    formData.append("_format", "plain");

    const response = await fetch(
      `https://formspree.io/f/${FORMSPREE_IDS.CONTACT}`,
      {
        method: "POST",
        body: formData,
        headers: {
          Accept: "application/json",
        },
      }
    );

    return response.ok;
  };

  const submitScheduleRequest = async (data: ScheduleData) => {
    const formData = new FormData();

    // Add all form fields
    Object.entries(data).forEach(([key, value]) => {
      if (value) formData.append(key, value);
    });

    // Formspree specific fields
    formData.append("_replyto", data.email);
    formData.append("_subject", `Meeting Request: ${data.topic}`);
    formData.append("_format", "plain");
    formData.append("type", "meeting_schedule");

    const response = await fetch(
      `https://formspree.io/f/${FORMSPREE_IDS.SCHEDULE}`,
      {
        method: "POST",
        body: formData,
        headers: {
          Accept: "application/json",
        },
      }
    );

    return response.ok;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) return;

    setIsSubmitting(true);

    try {
      let success = false;

      if (activeTab === "message") {
        success = await submitContactForm(formData);
      } else {
        success = await submitScheduleRequest(scheduleData);
      }

      if (success) {
        setIsSubmitted(true);
        // Reset form
        if (activeTab === "message") {
          setFormData({
            name: "",
            email: "",
            subject: "",
            message: "",
            projectType: "",
          });
        } else {
          setScheduleData({
            name: "",
            email: "",
            date: "",
            time: "",
            topic: "",
            meetingType: "",
          });
        }

        // Reset after 5 seconds
        setTimeout(() => {
          setIsSubmitted(false);
        }, 5000);
      } else {
        setErrors({ submit: "Failed to send message. Please try again." });
      }
    } catch (error) {
      setErrors({ submit: "An error occurred. Please try again." });
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: <FaEnvelope className="text-blue-500 text-xl" />,
      label: "Email",
      value: "ndungubenjamin025@gmail.com",
      link: "mailto:ndungubenjamin025@gmail.com",
    },
    {
      icon: <FaPhone className="text-green-500 text-xl" />,
      label: "Phone",
      value: "+254 112962529",
      link: "tel:+254112962529",
    },
    {
      icon: <FaMapMarkerAlt className="text-red-500 text-xl" />,
      label: "Location",
      value: "Nairobi, Kenya",
      link: "https://maps.google.com/?q=Nairobi,Kenya",
    },
  ];

  const socialLinks = [
    {
      icon: <FaLinkedin className="text-white text-lg" />,
      label: "LinkedIn",
      url: "https://www.linkedin.com/in/benjamin-ndung-u-87585a268",
      color: "bg-blue-600 hover:bg-blue-700",
    },
    {
      icon: <FaGithub className="text-white text-lg" />,
      label: "GitHub",
      url: "https://github.com/Benjamin025",
      color: "bg-gray-800 hover:bg-gray-900",
    },
    {
      icon: <FaTwitter className="text-white text-lg" />,
      label: "Twitter",
      url: "https://x.com/Karanjaben39202",
      color: "bg-blue-400 hover:bg-blue-500",
    },
  ];

  const fadeInUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0 },
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 },
    },
  };

  return (
    <section className="min-h-screen bg-gradient-to-b from-white to-blue-50 py-20 px-6 md:px-16 text-gray-800">
      {/* Header */}
      <motion.div
        className="text-center mb-16"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h1 className="text-4xl md:text-5xl font-bold text-blue-600 mb-4">
          Let&apos;s Connect
        </h1>
        <div className="w-24 h-1 bg-blue-400 mx-auto mb-6"></div>
        <motion.p
          className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
        >
          Ready to bring your geospatial ideas to life? Whether you have a
          project in mind, want to collaborate, or just want to say hello —
          I&apos;d love to hear from you.
        </motion.p>
      </motion.div>

      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Contact Information */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
        >
          <motion.h2
            className="text-2xl font-bold text-gray-800 mb-8"
            variants={fadeInUp}
            transition={{ duration: 0.8 }}
          >
            Get In Touch
          </motion.h2>

          {/* Contact Methods */}
          <div className="space-y-6 mb-8">
            {contactInfo.map((item, index) => (
              <motion.a
                key={index}
                href={item.link}
                variants={fadeInUp}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ x: 10, scale: 1.02 }}
                className="flex items-center gap-4 p-4 bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 group"
              >
                <div className="p-3 bg-gray-50 rounded-lg group-hover:bg-blue-50 transition-colors">
                  {item.icon}
                </div>
                <div>
                  <h3 className="font-semibold text-gray-700">{item.label}</h3>
                  <p className="text-gray-600">{item.value}</p>
                </div>
              </motion.a>
            ))}
          </div>

          {/* Enhanced Quick Schedule Section */}
          <motion.div
            className="mb-8"
            variants={fadeInUp}
            transition={{ duration: 0.8 }}
          >
            <h3 className="text-lg font-semibold text-gray-800 mb-4">
              Book a Meeting Instantly
            </h3>
            <div className="space-y-3">
              <motion.a
                href={SCHEDULING_LINKS.CALCOM}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.02, y: -2 }}
                whileTap={{ scale: 0.98 }}
                className="flex items-center justify-between gap-3 bg-blue-500 text-white p-4 rounded-xl hover:bg-blue-600 transition-colors shadow-lg group"
              >
                <div className="flex items-center gap-3">
                  <FaCalendarAlt className="text-white text-lg" />
                  <div>
                    <div className="font-semibold">Schedule with Cal.com</div>
                    <div className="text-blue-100 text-sm">
                      See my real-time availability
                    </div>
                  </div>
                </div>
                <FaExternalLinkAlt className="text-white opacity-70 group-hover:opacity-100" />
              </motion.a>

              <motion.a
                href={SCHEDULING_LINKS.CALENDLY}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.02, y: -2 }}
                whileTap={{ scale: 0.98 }}
                className="flex items-center justify-between gap-3 bg-green-500 text-white p-4 rounded-xl hover:bg-green-600 transition-colors shadow-lg group"
              >
                <div className="flex items-center gap-3">
                  <FaCalendarAlt className="text-white text-lg" />
                  <div>
                    <div className="font-semibold">Schedule with Calendly</div>
                    <div className="text-green-100 text-sm">
                      Pick from available slots
                    </div>
                  </div>
                </div>
                <FaExternalLinkAlt className="text-white opacity-70 group-hover:opacity-100" />
              </motion.a>

              {/* Manual scheduling option */}
              <div className="text-center pt-2">
                <button
                  onClick={() => setActiveTab("schedule")}
                  className="text-blue-500 hover:text-blue-600 text-sm font-medium transition-colors"
                >
                  Or schedule manually below →
                </button>
              </div>
            </div>
          </motion.div>

          {/* Social Links */}
          <motion.div variants={fadeInUp} transition={{ duration: 0.8 }}>
            <h3 className="text-lg font-semibold text-gray-800 mb-4">
              Follow Me
            </h3>
            <div className="flex gap-4">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`${social.color} p-3 rounded-xl text-white transition-all duration-300 shadow-lg hover:shadow-xl`}
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  aria-label={social.label}
                  transition={{ duration: 0.2 }}
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Formspree Status */}
          <motion.div
            className="mt-8 p-4 bg-green-50 border border-green-200 rounded-xl"
            variants={fadeInUp}
            transition={{ duration: 0.8 }}
          >
            <p className="text-green-700 text-sm text-center">
              ✅ Forms are connected and ready to receive messages!
            </p>
          </motion.div>
        </motion.div>

        {/* Contact Form & Scheduling */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
        >
          {/* Tab Navigation */}
          <div className="flex bg-white rounded-2xl shadow-lg p-2 mb-6 border border-gray-100">
            <button
              onClick={() => setActiveTab("message")}
              className={`flex-1 py-3 px-4 rounded-xl font-semibold transition-all duration-300 ${
                activeTab === "message"
                  ? "bg-blue-500 text-white shadow-md"
                  : "text-gray-600 hover:text-blue-500"
              }`}
            >
              <FaEnvelope className="inline mr-2" />
              Send Message
            </button>
            <button
              onClick={() => setActiveTab("schedule")}
              className={`flex-1 py-3 px-4 rounded-xl font-semibold transition-all duration-300 ${
                activeTab === "schedule"
                  ? "bg-green-500 text-white shadow-md"
                  : "text-gray-600 hover:text-green-500"
              }`}
            >
              <FaCalendarAlt className="inline mr-2" />
              Schedule Call
            </button>
          </div>

          <motion.form
            onSubmit={handleSubmit}
            className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 space-y-6"
            variants={fadeInUp}
            transition={{ duration: 0.8 }}
          >
            {isSubmitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6 }}
                className="text-center py-8"
              >
                <FaCheckCircle className="text-green-500 text-5xl mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                  {activeTab === "message"
                    ? "Message Sent!"
                    : "Meeting Scheduled!"}
                </h3>
                <p className="text-gray-600">
                  {activeTab === "message"
                    ? "Thank you for reaching out. I'll get back to you within 24 hours."
                    : "Thank you for scheduling a call. You'll receive a confirmation email shortly."}
                </p>
              </motion.div>
            ) : (
              <>
                {/* Common Fields */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium text-gray-700 mb-2"
                    >
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={
                        activeTab === "message"
                          ? formData.name
                          : scheduleData.name
                      }
                      onChange={handleChange}
                      required
                      className={`w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all ${
                        errors.name ? "border-red-500" : "border-gray-300"
                      }`}
                      placeholder="Your full name"
                    />
                    {errors.name && (
                      <p className="text-red-500 text-xs mt-1">{errors.name}</p>
                    )}
                  </div>
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-gray-700 mb-2"
                    >
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={
                        activeTab === "message"
                          ? formData.email
                          : scheduleData.email
                      }
                      onChange={handleChange}
                      required
                      className={`w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all ${
                        errors.email ? "border-red-500" : "border-gray-300"
                      }`}
                      placeholder="your.email@example.com"
                    />
                    {errors.email && (
                      <p className="text-red-500 text-xs mt-1">
                        {errors.email}
                      </p>
                    )}
                  </div>
                </div>

                {/* Message Form */}
                {activeTab === "message" && (
                  <>
                    <div>
                      <label
                        htmlFor="projectType"
                        className="block text-sm font-medium text-gray-700 mb-2"
                      >
                        Project Type
                      </label>
                      <select
                        id="projectType"
                        name="projectType"
                        value={formData.projectType}
                        onChange={handleChange}
                        className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                      >
                        <option value="">Select project type...</option>
                        {projectTypes.map((type) => (
                          <option key={type} value={type}>
                            {type}
                          </option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <label
                        htmlFor="subject"
                        className="block text-sm font-medium text-gray-700 mb-2"
                      >
                        Subject *
                      </label>
                      <input
                        type="text"
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        required
                        className={`w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all ${
                          errors.subject ? "border-red-500" : "border-gray-300"
                        }`}
                        placeholder="What's this about?"
                      />
                      {errors.subject && (
                        <p className="text-red-500 text-xs mt-1">
                          {errors.subject}
                        </p>
                      )}
                    </div>

                    <div>
                      <label
                        htmlFor="message"
                        className="block text-sm font-medium text-gray-700 mb-2"
                      >
                        Message *
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        rows={4}
                        value={formData.message}
                        onChange={handleChange}
                        required
                        className={`w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all resize-none ${
                          errors.message ? "border-red-500" : "border-gray-300"
                        }`}
                        placeholder="Tell me about your project or inquiry..."
                      />
                      {errors.message && (
                        <p className="text-red-500 text-xs mt-1">
                          {errors.message}
                        </p>
                      )}
                    </div>
                  </>
                )}

                {/* Enhanced Schedule Form */}
                {activeTab === "schedule" && (
                  <>
                    <div className="bg-blue-50 p-4 rounded-lg border border-blue-200 mb-4">
                      <div className="flex items-center gap-2 text-blue-700 mb-2">
                        <FaCalendarAlt className="text-blue-500" />
                        <span className="font-semibold">Pro Tip</span>
                      </div>
                      <p className="text-sm text-blue-600">
                        For instant scheduling with real-time availability, use
                        the booking links on the left. This manual form is for
                        specific time requests.
                      </p>
                    </div>

                    <div>
                      <label
                        htmlFor="meetingType"
                        className="block text-sm font-medium text-gray-700 mb-2"
                      >
                        Meeting Type *
                      </label>
                      <select
                        id="meetingType"
                        name="meetingType"
                        value={scheduleData.meetingType}
                        onChange={handleChange}
                        required
                        className={`w-full p-3 border rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all ${
                          errors.meetingType
                            ? "border-red-500"
                            : "border-gray-300"
                        }`}
                      >
                        <option value="">Select meeting type...</option>
                        {meetingTypes.map((type) => (
                          <option key={type.value} value={type.value}>
                            {type.label} ({type.duration})
                          </option>
                        ))}
                      </select>
                      {errors.meetingType && (
                        <p className="text-red-500 text-xs mt-1">
                          {errors.meetingType}
                        </p>
                      )}
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label
                          htmlFor="date"
                          className="block text-sm font-medium text-gray-700 mb-2"
                        >
                          Preferred Date *
                        </label>
                        <select
                          id="date"
                          name="date"
                          value={scheduleData.date}
                          onChange={handleChange}
                          required
                          className={`w-full p-3 border rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all ${
                            errors.date ? "border-red-500" : "border-gray-300"
                          }`}
                        >
                          <option value="">Select date...</option>
                          {availableDates.map((date) => (
                            <option key={date} value={date}>
                              {new Date(date).toLocaleDateString("en-US", {
                                weekday: "short",
                                month: "short",
                                day: "numeric",
                              })}
                            </option>
                          ))}
                        </select>
                        {errors.date && (
                          <p className="text-red-500 text-xs mt-1">
                            {errors.date}
                          </p>
                        )}
                      </div>
                      <div>
                        <label
                          htmlFor="time"
                          className="block text-sm font-medium text-gray-700 mb-2"
                        >
                          Preferred Time (EAT) *
                        </label>
                        <select
                          id="time"
                          name="time"
                          value={scheduleData.time}
                          onChange={handleChange}
                          required
                          className={`w-full p-3 border rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all ${
                            errors.time ? "border-red-500" : "border-gray-300"
                          }`}
                        >
                          <option value="">Select time...</option>
                          {timeSlots.map((slot) => (
                            <option key={slot.time} value={slot.time}>
                              {slot.label}
                            </option>
                          ))}
                        </select>
                        {errors.time && (
                          <p className="text-red-500 text-xs mt-1">
                            {errors.time}
                          </p>
                        )}
                      </div>
                    </div>

                    <div>
                      <label
                        htmlFor="topic"
                        className="block text-sm font-medium text-gray-700 mb-2"
                      >
                        What would you like to discuss? *
                      </label>
                      <textarea
                        id="topic"
                        name="topic"
                        rows={3}
                        value={scheduleData.topic}
                        onChange={handleChange}
                        required
                        className={`w-full p-3 border rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all resize-none ${
                          errors.topic ? "border-red-500" : "border-gray-300"
                        }`}
                        placeholder="Briefly describe what you'd like to discuss during our call..."
                      />
                      {errors.topic && (
                        <p className="text-red-500 text-xs mt-1">
                          {errors.topic}
                        </p>
                      )}
                    </div>

                    <div className="bg-green-50 p-4 rounded-lg border border-green-200">
                      <div className="flex items-center gap-2 text-green-700 mb-2">
                        <FaVideo className="text-green-500" />
                        <span className="font-semibold">
                          After You Schedule
                        </span>
                      </div>
                      <p className="text-sm text-green-600">
                        I'll review your request and send a Google Meet link to
                        your email. You'll receive confirmation within 2 hours.
                      </p>
                    </div>
                  </>
                )}

                {errors.submit && (
                  <div className="bg-red-50 border border-red-200 rounded-lg p-4">
                    <p className="text-red-600 text-sm">{errors.submit}</p>
                  </div>
                )}

                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  whileHover={{ scale: isSubmitting ? 1 : 1.02 }}
                  whileTap={{ scale: isSubmitting ? 1 : 0.98 }}
                  transition={{ duration: 0.2 }}
                  className={`w-full py-4 rounded-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2 ${
                    activeTab === "message"
                      ? "bg-blue-500 text-white hover:bg-blue-600"
                      : "bg-green-500 text-white hover:bg-green-600"
                  }`}
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                      {activeTab === "message" ? "Sending..." : "Scheduling..."}
                    </>
                  ) : (
                    <>
                      {activeTab === "message" ? (
                        <FaPaperPlane />
                      ) : (
                        <FaCalendarAlt />
                      )}
                      {activeTab === "message"
                        ? "Send Message"
                        : "Schedule Meeting"}
                    </>
                  )}
                </motion.button>

                <p className="text-xs text-gray-500 text-center">
                  {activeTab === "message"
                    ? "I typically respond within 24 hours. For urgent matters, please call."
                    : "You'll receive a confirmation email with meeting details within 2 hours."}
                </p>
              </>
            )}
          </motion.form>
        </motion.div>
      </div>
    </section>
  );
}
