"use client";

import { motion } from "framer-motion";
import { ArrowRight, Star } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

const CATEGORIES = [
  { id: 1, title: "Lamps & Lighting", image: "/images/bamboo-craft-05.jpg" },
  { id: 2, title: "Home Decor", image: "/images/bamboo-craft-06.jpg" },
  { id: 3, title: "Kitchen & Dining", image: "/images/bamboo-craft-07.jpg" },
];

const PRODUCTS = [
  { id: 1, name: "Bamboo Pendant Light", price: "$85.00", category: "Lamps & Lighting", rating: 4.8, image: "/images/bamboo-craft-01.jpg" },
  { id: 2, name: "Woven Fruit Basket", price: "$32.00", category: "Kitchen & Dining", rating: 4.9, image: "/images/bamboo-craft-02.jpg" },
  { id: 3, name: "Minimalist Planter", price: "$45.00", category: "Home Decor", rating: 4.7, image: "/images/bamboo-craft-03.jpg" },
  { id: 4, name: "Dining Mat Set", price: "$28.00", category: "Kitchen & Dining", rating: 5.0, image: "/images/bamboo-craft-04.jpg" },
];

export default function NewCollections() {
  return (
    <section className="py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Categories Section */}
        <div className="mb-24">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6"
          >
            <div>
              <h2 className="text-sm font-bold tracking-widest text-[#D4B872] uppercase mb-2">Shop by Category</h2>
              <h3 className="text-4xl font-extrabold text-[#2D2D2D]">Explore Collections</h3>
            </div>
            <Link href="/collection/all" className="text-[#1A4314] font-medium flex items-center gap-2 hover:gap-3 transition-all">
              View All Categories <ArrowRight className="w-4 h-4" />
            </Link>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {CATEGORIES.map((cat, index) => (
              <motion.div
                key={cat.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                className="rounded-3xl p-8 cursor-pointer group relative overflow-hidden transition-all duration-300 min-h-[300px] flex flex-col justify-end shadow-md hover:shadow-xl"
              >
                <Image src={cat.image} alt={cat.title} fill className="object-cover transition-transform duration-700 group-hover:scale-110" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
                
                <div className="relative z-10 flex items-end justify-between">
                  <div>
                    <h4 className="text-2xl font-bold text-white mb-1">{cat.title}</h4>
                    <p className="text-white/80 text-sm">Handcrafted essentials</p>
                  </div>
                  <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-[#1A4314] opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all duration-300 shadow-lg shrink-0">
                    <ArrowRight className="w-5 h-5" />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* New Arrivals Section */}
        <div>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-sm font-bold tracking-widest text-[#1A4314] uppercase mb-2">Just Landed</h2>
            <h3 className="text-4xl font-extrabold text-[#2D2D2D]">New Arrivals</h3>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {PRODUCTS.map((product, index) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group cursor-pointer"
              >
                <div className="relative aspect-[4/5] bg-[#F9F6F0] rounded-2xl mb-4 overflow-hidden flex items-center justify-center">
                  <Image 
                    src={product.image} 
                    alt={product.name} 
                    fill 
                    className="object-cover group-hover:scale-110 transition-transform duration-700" 
                  />
                  <div className="absolute inset-0 bg-black/5 group-hover:bg-black/10 transition-colors duration-300"></div>
                  
                  {/* Quick Add Button */}
                  <div className="absolute bottom-4 left-1/2 -translate-x-1/2 translate-y-12 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                    <button className="bg-[#1A4314] text-white px-6 py-2 rounded-full font-medium shadow-lg hover:bg-[#2E5339]">
                      Quick Add
                    </button>
                  </div>
                </div>
                
                <div className="px-2">
                  <p className="text-xs text-gray-500 uppercase tracking-wider mb-1">{product.category}</p>
                  <div className="flex items-start justify-between gap-2">
                    <h4 className="text-lg font-bold text-[#2D2D2D] line-clamp-1">{product.name}</h4>
                    <div className="flex items-center gap-1 text-sm font-medium text-[#D4B872]">
                      <Star className="w-3 h-3 fill-current" /> {product.rating}
                    </div>
                  </div>
                  <p className="text-[#1A4314] font-semibold mt-1">{product.price}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
