"use client";
import React from "react";

const Skill = ({ icon, text, color }) => {
  return (
    <div className="group relative flex items-center gap-2 px-4 py-2 bg-[#111827] rounded-lg cursor-pointer border border-[#5f9cb6] transition-all duration-300
                    hover:-translate-y-1   hover:border-[#38BDF8] hover:bg-white/10">
      <span className={`text-xl ${color} transition-colors duration-300 group-hover:text-white`}>
        {icon}
      </span>
      <span className="text-sm font-medium text-gray-300 transition-colors duration-300 group-hover:text-white">
        {text}
      </span>

      {/* Subtle overlay/glow on hover */}
      <div className="absolute inset-0 rounded-lg bg-[#38BDF8]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
    </div>
  );
};

export default Skill;
