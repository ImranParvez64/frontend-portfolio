"use client";
import React from "react";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";

const SocialIcons = () => {
  return (
    <div className="hidden md:flex items-center gap-5 text-[#E5E7EB] text-3xl">
      <a
        href="https://github.com/ImranParvez64"
        target="_blank"
        rel="noopener noreferrer"
        className="hover:text-[#38BDF8] transition"
      >
        <FaGithub />
      </a>
      <a
        href="https://www.linkedin.com/in/imranparvez964/"
        target="_blank"
        rel="noopener noreferrer"
        className="hover:text-[#38BDF8] transition"
      >
        <FaLinkedinIn />
      </a>
    </div>
  );
};

export default SocialIcons;
