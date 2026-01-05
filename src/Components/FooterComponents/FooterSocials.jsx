"use client";
import React from "react";
import { FaGithub, FaLinkedin, FaFacebook, FaTwitter, FaArrowUp } from "react-icons/fa";

const FooterSocials = () => {
  const scrollToTop = () => {
    if (typeof window !== "undefined") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <div className="flex flex-col items-center md:items-end gap-5 mt-4 md:mt-0">
      <div className="flex gap-5 text-xl">
        <a href="https://github.com" target="_blank" rel="noreferrer" className="text-gray-400 hover:text-white transition-colors">
          <FaGithub />
        </a>
        <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="text-gray-400 hover:text-blue-400 transition-colors">
          <FaLinkedin />
        </a>
        <a href="https://facebook.com" target="_blank" rel="noreferrer" className="text-gray-400 hover:text-blue-600 transition-colors">
          <FaFacebook />
        </a>
        <a href="https://twitter.com" target="_blank" rel="noreferrer" className="text-gray-400 hover:text-sky-400 transition-colors">
          <FaTwitter />
        </a>
      </div>

      <button
        onClick={scrollToTop}
        className="group flex items-center gap-2 text-[10px] font-bold text-[#38BDF8] uppercase tracking-widest hover:text-white transition-all mt-2"
      >
        Back to top
        <span className="p-2 bg-[#38BDF8]/10 rounded-full group-hover:bg-[#38BDF8] group-hover:text-white transition-all shadow-lg shadow-blue-500/20">
          <FaArrowUp size={12} />
        </span>
      </button>
    </div>
  );
};

export default FooterSocials;
