'use client'
import React from "react";
import { motion } from "framer-motion"; // Animation er jonno (npm install framer-motion)

const SkillCard = ({ icon, name }) => {
  return (
    <motion.div
      whileHover={{ y: -8, scale: 1.02 }} // Hover korle upore uthbe
      className="group relative flex flex-col items-center justify-center 
                 w-38 h-38 sm:w-38 sm:h-38 
                 bg-linear-to-br from-[#162447] to-[#0f1a33] 
                 text-white rounded-2xl border border-gray-800
                 shadow-lg hover:shadow-blue-500/20 
                 transition-all duration-300 ease-out overflow-hidden"
    >
      {/* Background Decor (Hover e glow korbe) */}
      <div className="absolute inset-0 bg-[#38BDF8]/5 opacity-0 group-hover:opacity-100 transition-opacity" />
      
      {/* Icon Wrapper */}
      <div className="relative z-10 text-4xl mb-3 transform group-hover:scale-110 transition-transform duration-300">
        <div className="drop-shadow-[0_0_8px_rgba(59,130,246,0.5)]">
          {icon}
        </div>
      </div>

      {/* Name */}
      <div className="relative z-10 text-xs sm:text-sm font-medium tracking-wide text-gray-300 group-hover:text-white transition-colors">
        {name}
      </div>

      {/* Bottom Border Accent */}
      <div className="absolute bottom-0 left-0 h-0.5 w-0 bg-[#38BDF8] group-hover:w-full transition-all duration-500" />
    </motion.div>
  );
};

export default SkillCard;