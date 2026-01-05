"use client";
import React from "react";

const FooterBottom = () => (
  <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-[11px] md:text-xs tracking-wider">
    <p className="text-gray-500 text-center md:text-left">
      © {new Date().getFullYear()} <span className="text-gray-300">Imran Parvez</span>. All rights reserved.
    </p>
    <p className="text-gray-500 uppercase flex items-center gap-1">
      Designed & Built with <span className="text-[#38BDF8] text-sm">❤️</span> using Next.js
    </p>
  </div>
);

export default FooterBottom;
