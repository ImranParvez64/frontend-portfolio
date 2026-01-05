"use client";

import React from "react";
import Link from "next/link";
import { Cursor, useTypewriter } from "react-simple-typewriter";
import Image from "next/image";
import { FaFolderOpen, FaPaperPlane } from "react-icons/fa";

const Hero = () => {
  const [text] = useTypewriter({
    words: [
      "Frontend Developer",
      "React Developer",
      "Next.js Engineer",
      "UI-Focused Developer",
    ],
    loop: true,
    typeSpeed: 120,
    deleteSpeed: 80,
    delaySpeed: 1500,
  });

  return (
    <section
      id="home"
      className="max-w-6xl mx-auto flex items-center px-6"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center w-full">

        {/* Content */}
        <div className="order-2 md:order-1 text-center md:text-left">
          <p className="text-2xl font-semibold text-[#94A3B8]">Hi, I’m</p>

          <h1 className="mt-2 text-4xl md:text-6xl font-bold text-[#E5E7EB]">
            Imran <span className="text-[#38BDF8]">Parvez</span>
          </h1>

          <h3 className="mt-4 text-xl md:text-2xl text-[#94A3B8]">
            and I&apos;m a{" "}
            <span className="text-[#38BDF8] font-semibold">{text}</span>
            <Cursor cursorStyle="|" />
          </h3>

          <p className="mt-6 text-[#94A3B8] max-w-xl leading-relaxed mx-auto md:mx-0 text-justify">
            I specialize in building modern, responsive, and user-focused web
            interfaces. My passion lies in transforming ideas into clean,
            functional, and visually appealing digital experiences using modern
            frontend technologies.
          </p>

          {/* Buttons */}
          <div className="mt-8 flex flex-row flex-wrap gap-4 justify-center md:justify-start">
            <Link
              href="#projects"
              className="px-6 py-3 bg-[#38BDF8] text-[#020617] font-semibold rounded-lg hover:opacity-90 transition flex items-center gap-2 justify-center"
            >
              <FaFolderOpen /> View My Work
            </Link>

            <Link
              href="#contact"
              className="px-6 py-3 border border-[#38BDF8] text-[#38BDF8] rounded-lg hover:bg-[#38BDF8]/10 transition flex items-center gap-2 justify-center"
            >
              <FaPaperPlane /> Contact Me
            </Link>
          </div>
        </div>

        {/* Image */}
        <div className="order-1 md:order-2 flex justify-center md:justify-end mb-8 md:mb-0">
          <div className="relative w-56 h-56 sm:w-64 sm:h-64 md:w-80 md:h-80 rounded-full flex items-center justify-center">

            {/* Glow Ring */}
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-[#38BDF8] to-[#22D3EE] blur-xl opacity-30"></div>

            {/* Border Ring */}
            <div className="absolute inset-0 rounded-full p-[3px] bg-gradient-to-r from-[#38BDF8] to-[#22D3EE]">
              <div className="w-full h-full rounded-full bg-[#020617]"></div>
            </div>

            {/* Image */}
            <Image
              src="/my.png"
              alt="Imran Parvez"
              width={320}
              height={320}
              className="relative z-10 rounded-full object-cover w-52 h-52 sm:w-64 sm:h-64 md:w-72 md:h-72"
              priority
            />
          </div>
        </div>

      </div>
    </section>
  );
};

export default Hero;
