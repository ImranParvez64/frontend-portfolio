"use client";
import React from "react";
import SocialIcons from "./SocialIcons";

const MobileNav = ({ navLinks, activeLink, setActiveLink, closeMenu }) => {
  return (
    <div className="md:hidden bg-[#020617] w-full absolute top-full left-0 border-t-[3px] border-[#38BDF8] shadow-[0_2px_6px_rgba(0,0,0,0.15)]">
      <nav className="flex flex-col gap-6 px-6 py-6">
        {navLinks.map((link) => (
          <a
            key={link.id}
            href={link.href}
            className={`text-lg font-medium text-left ${
              activeLink === link.id
                ? "text-[#38BDF8]"
                : "text-[#E5E7EB] hover:text-[#38BDF8]"
            }`}
            onClick={() => {
              setActiveLink(link.id);
              closeMenu();
            }}
          >
            {link.label}
          </a>
        ))}
        <div className="pt-4">
          <SocialIcons />
        </div>
      </nav>
    </div>
  );
};

export default MobileNav;
