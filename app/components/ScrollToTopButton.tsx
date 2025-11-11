// app/components/ScrollToTopButton.tsx
"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaArrowUp } from "react-icons/fa";

export default function ScrollToTopButton() {
  const [showScroll, setShowScroll] = useState(false);

  useEffect(() => {
    const handleScroll = () => setShowScroll(window.scrollY > 300);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <AnimatePresence>
      {showScroll && (
        <motion.button
          onClick={scrollToTop}
          initial={{ opacity: 0, y: 50 }}
          animate={{
            opacity: 1,
            y: 0,
            scale: [1, 1.1, 1],
            boxShadow: [
              "0 0 0 rgba(37,99,235,0)",
              "0 0 15px rgba(37,99,235,0.4)",
              "0 0 0 rgba(37,99,235,0)",
            ],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          exit={{ opacity: 0, y: 50 }}
          whileHover={{
            scale: 1.15,
            boxShadow: "0 0 25px rgba(37,99,235,0.6)",
          }}
          whileTap={{ scale: 0.9 }}
          className="fixed bottom-6 right-6 bg-blue-600 text-white p-4 md:p-5 rounded-full shadow-lg hover:bg-blue-700 transition z-50"
        >
          <FaArrowUp className="text-xl" />
        </motion.button>
      )}
    </AnimatePresence>
  );
}
