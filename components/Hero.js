"use client";

import { motion } from "framer-motion";

const Hero = () => {
  return (
    <div className="hero">
      <motion.h1
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="title"
      >
        Welcome to My Animated Home Page
      </motion.h1>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 1 }}
        className="subtitle"
      >
        Smooth UI • Modern Design • React Animations
      </motion.p>

      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="btn"
      >
        Get Started
      </motion.button>
    </div>
  );
};

export default Hero;
