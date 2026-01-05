"use client";
import React, { useState, useEffect } from "react";
import DesktopNav from "./HeaderComponents/DesktopNav";
import MobileNav from "./HeaderComponents/MobileNav";
import SocialIcons from "./HeaderComponents/SocialIcons";
import { FaBars, FaTimes } from "react-icons/fa";

const navLinks = [
  { id: "home", label: "Home", href: "#home" },
  { id: "about", label: "About", href: "#about" },
  { id: "skills", label: "Skills", href: "#skills" },
  { id: "projects", label: "Projects", href: "#projects" },
  { id: "contact", label: "Contact", href: "#contact" },
];

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeLink, setActiveLink] = useState("home");

  // Scroll listener for active link
  useEffect(() => {
    const handleScroll = () => {
      const scrollPos = window.scrollY + 150; // header offset
      let current = "home";

      navLinks.forEach((link) => {
        const section = document.querySelector(link.href);
        if (section) {
          if (
            scrollPos >= section.offsetTop &&
            scrollPos < section.offsetTop + section.offsetHeight
          ) {
            current = link.id;
          }
        }
      });

      setActiveLink(current);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-[#020617] border-b border-white/10 shadow-[0_2px_6px_rgba(0,0,0,0.15)]">
      <div className="max-w-6xl mx-auto px-6 md:px-12 py-5 flex justify-between items-center">
        {/* Logo */}
        <a
          href="#home"
          className="text-3xl md:text-4xl font-bold text-[#E5E7EB] cursor-pointer"
        >
          Imran<span className="text-[#38BDF8]">.</span>
        </a>

        {/* Desktop Nav */}
        <DesktopNav
          navLinks={navLinks}
          activeLink={activeLink}
          setActiveLink={setActiveLink}
        />

        {/* Social Icons */}
        <SocialIcons />

        {/* Mobile Hamburger */}
        <div className="md:hidden flex items-center">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-[#E5E7EB] text-2xl"
          >
            {isOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <MobileNav
          navLinks={navLinks}
          activeLink={activeLink}
          setActiveLink={setActiveLink}
          closeMenu={() => setIsOpen(false)}
        />
      )}
    </header>
  );
};

export default Header;
