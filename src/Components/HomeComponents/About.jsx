import Image from "next/image";
import React from "react";
import { FaReact, FaHtml5, FaCss3Alt } from "react-icons/fa";
import { SiJavascript, SiNextdotjs, SiTailwindcss } from "react-icons/si";

/* ---------- Skill Component ---------- */
const Skill = ({ icon, text, color }) => (
  <div
    className="flex items-center gap-3 px-4 py-2.5
                  bg-[#0f1a33] rounded-md
                  border border-gray-700"
  >
    <span className={`text-lg ${color}`}>{icon}</span>
    <span className="text-sm text-gray-200">{text}</span>
  </div>
);

/* ---------- Stat Component ---------- */
const Stat = ({ number, title }) => (
  <div
    className="bg-[#0b1220] rounded-lg p-5 text-center
                  border border-gray-700"
  >
    <h3 className="text-3xl font-semibold text-white mb-1">{number}</h3>
    <p className="text-sm text-gray-400 leading-snug">{title}</p>
  </div>
);

/* ---------- About Section ---------- */
const About = () => {
  return (
    <section
      id="about"
      className="max-w-6xl mx-auto px-4 sm:px-6 py-16 sm:py-20"
    >
      {/* Title */}
      <div className="mb-12 sm:mb-16 text-center sm:text-left">
        <div className="relative inline-block">
          <h2 className="text-4xl sm:text-5xl font-bold text-white">
            About Me
          </h2>
          {/* underline starts exactly from text */}
          <span
            className="absolute -bottom-2 left-0
                 w-full h-1
                 bg-gradient-to-r from-blue-500 to-transparent
                 rounded-full"
          ></span>
        </div>
      </div>

      {/* Main Card */}
      <div
        className="bg-[#10192f] rounded-2xl p-6 sm:p-8
                   grid grid-cols-1 md:grid-cols-[1fr_2fr]
                   gap-10 md:gap-12 items-center
                   border border-gray-600"
      >
        {/* Image */}
        <div className="flex justify-center">
          <div className="p-1 rounded-xl border border-gray-500">
            <div className="relative w-56 h-72 sm:w-64 sm:h-80 rounded-lg overflow-hidden bg-[#0b1220]">
              <Image
                src="/image.png"
                alt="Profile"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>

        {/* Content */}
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

          {/* Skills */}
          <div className="flex flex-wrap gap-3 sm:gap-4 mb-8 sm:mb-10 justify-center items-center md:justify-start md:items-start">
            <Skill icon={<FaHtml5 />} text="HTML" color="text-orange-500" />
            <Skill icon={<FaCss3Alt />} text="CSS" color="text-blue-500" />
            <Skill
              icon={<SiJavascript />}
              text="JavaScript"
              color="text-yellow-400"
            />
            <Skill icon={<FaReact />} text="React" color="text-cyan-400" />
            <Skill icon={<SiNextdotjs />} text="Next.js" color="text-white" />
            <Skill
              icon={<SiTailwindcss />}
              text="Tailwind CSS"
              color="text-sky-400"
            />
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 gap-4 sm:gap-6">
            <Stat number="3+" title="Years of Experience" />
            <Stat number="25+" title="Projects Completed" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
