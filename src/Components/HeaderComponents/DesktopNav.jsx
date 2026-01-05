"use client";
import React from "react";

const DesktopNav = ({ navLinks, activeLink, setActiveLink }) => {
  return (
    <nav className="hidden md:flex items-center gap-10">
      {navLinks.map((link) => (
        <a
          key={link.id}
          href={link.href}
          className={`relative group text-sm font-semibold transition-colors ${
            activeLink === link.id
              ? "text-[#38BDF8]"
              : "text-[#94A3B8] hover:text-[#E5E7EB]"
          }`}
          onClick={() => setActiveLink(link.id)}
        >
          {link.label}
          <span
            className={`absolute left-0 -bottom-1 h-0.75 w-0 bg-[#38BDF8] transition-all duration-300 ${
              activeLink === link.id ? "w-full" : "group-hover:w-full"
            }`}
          />
        </a>
      ))}
    </nav>
  );
};

export default DesktopNav;
