import React from "react";
import { FaHtml5, FaCss3Alt, FaReact } from "react-icons/fa";
import { SiJavascript, SiNextdotjs, SiTailwindcss } from "react-icons/si";
import Skill from "./Skills";
import Stat from "./Stat";

const AboutContent = () => (
  <div className="text-gray-300 flex flex-col justify-center items-center md:justify-start md:items-start">
    <p className="mb-6 sm:mb-8 leading-relaxed text-sm sm:text-base text-center md:text-start">
      I am Imran Parvez, a MERN Stack Developer specializing in Next.js,
      React, and Tailwind CSS. I focus on building fast, responsive web
      applications with clean and efficient JavaScript code. Passionate
      about continuous learning, I strive to deliver high-quality,
      user-friendly digital experiences.
    </p>

    <h4 className="text-white font-semibold mb-4 sm:mb-5">
      I have expertise in:
    </h4>

    <div className="flex flex-wrap gap-3 sm:gap-4 mb-8 sm:mb-10 justify-center items-center md:justify-start md:items-start">
      <Skill icon={<FaHtml5 />} text="HTML" color="text-orange-500" />
      <Skill icon={<FaCss3Alt />} text="CSS" color="text-[#38BDF8]" />
      <Skill icon={<SiJavascript />} text="JavaScript" color="text-yellow-400" />
      <Skill icon={<FaReact />} text="React" color="text-cyan-400" />
      <Skill icon={<SiNextdotjs />} text="Next.js" color="text-white" />
      <Skill icon={<SiTailwindcss />} text="Tailwind CSS" color="text-sky-400" />
    </div>

    <div className="grid grid-cols-2 gap-4 sm:gap-6">
      <Stat number="2+" title="Years of Experience" />
      <Stat number="10+" title="Projects Completed" />
    </div>
  </div>
);

export default AboutContent;
