"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

export default function Hero() {
  return (
    <div className="relative min-h-[90vh] flex items-center justify-center overflow-hidden pt-20">
      <Image src="/images/hero.jpeg" alt="Background" fill className="object-cover opacity-30 z-0" priority />
      {/* Abstract Bamboo Background Elements */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none opacity-20">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 2, ease: "easeOut" }}
          className="absolute -top-40 -right-40 w-[600px] h-[600px] rounded-full bg-[#D4B872] blur-3xl mix-blend-multiply"
        />
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 2, ease: "easeOut", delay: 0.5 }}
          className="absolute -bottom-40 -left-40 w-[600px] h-[600px] rounded-full bg-[#1A4314] blur-3xl mix-blend-multiply"
        />
      </div>

      <div className="container mx-auto px-6 z-10 grid md:grid-cols-2 gap-12 items-center">
        {/* Text Content */}
        <div className="flex flex-col items-start gap-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#D4B872]/20 text-[#1A4314] text-sm font-semibold tracking-wide uppercase"
          >
            <span>✨ New Arrivals</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-5xl md:text-7xl font-extrabold text-[#2D2D2D] leading-tight"
          >
            Sustainable <br />
            <span className="text-[#1A4314]">Bamboo Craft</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-lg text-gray-600 max-w-md leading-relaxed"
          >
            Elevate your living space with our handcrafted, eco-friendly bamboo essentials. Perfect blend of nature and modern design.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-wrap items-center gap-4 mt-4"
          >
            <Link href="/collection/kitchen-dining">
              <button className="px-8 py-4 bg-[#1A4314] text-white rounded-full font-medium flex items-center gap-2 hover:bg-[#2E5339] transition-all transform hover:scale-105 active:scale-95 shadow-lg shadow-[#1A4314]/30">
                Shop Kitchen & Dining <ArrowRight className="w-5 h-5" />
              </button>
            </Link>
            <Link href="/collection/all">
              <button className="px-8 py-4 bg-white text-[#1A4314] border-2 border-[#1A4314]/10 rounded-full font-medium hover:border-[#1A4314] transition-all transform hover:scale-105 active:scale-95">
                Explore All
              </button>
            </Link>
          </motion.div>
        </div>

        {/* Hero Image / Visualization */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="relative h-[500px] w-full"
        >
          <div className="absolute inset-0 rounded-[3rem] shadow-2xl overflow-hidden transform rotate-3 hover:rotate-0 transition-transform duration-500">
            <Image
              src="/images/hero.jpeg"
              alt="Premium Bamboo Craft"
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-black/20"></div>
          </div>

          {/* Floating badge */}
          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
            className="absolute -bottom-6 -left-6 bg-white p-4 rounded-2xl shadow-xl flex items-center gap-4 border border-gray-100"
          >
            <div className="w-12 h-12 bg-[#D4B872]/20 rounded-full flex items-center justify-center text-xl">🌱</div>
            <div>
              <p className="text-xs text-gray-500 font-medium uppercase tracking-wider">100% Organic</p>
              <p className="text-sm font-bold text-[#2D2D2D]">Handcrafted</p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}
