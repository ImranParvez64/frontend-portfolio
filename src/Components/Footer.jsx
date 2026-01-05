"use client";
import React from "react";
import FooterLogo from "./FooterComponents/FooterLogo";
import FooterLinks from "./FooterComponents/FooterLinks";
import FooterSocials from "./FooterComponents/FooterSocials";
import FooterBottom from "./FooterComponents/FooterBottom";

const Footer = () => {
  const links = ["About", "Skills", "Projects", "Contact"];

  return (
    <footer className="relative bg-[#0b1220] pt-16 pb-12 overflow-hidden">
      {/* Top Gradient Border */}
      <div className="absolute top-0 left-0 w-full h-px bg-linear-to-r from-transparent via-blue-500/50 to-transparent"></div>

      <div className="max-w-6xl mx-auto px-6 md:px-12 py-5">
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 items-start mb-12">
          <FooterLogo />
          <FooterLinks links={links} />
          <FooterSocials />
        </div>

        <FooterBottom />
      </div>

      {/* Subtle Background Glow */}
      <div className="absolute -bottom-24 left-1/2 -translate-x-1/2 w-full max-w-125 h-40 bg-blue-600/5 blur-[120px] rounded-full pointer-events-none"></div>
    </footer>
  );
};

export default Footer;
