"use client";
import Link from "next/link";
import React from "react";

const FooterLinks = ({ links }) => (
  <div className="flex flex-col items-center md:items-center gap-4 mt-4 md:mt-0">
    {links.map((link) => (
      <Link
        key={link}
        href={`#${link.toLowerCase()}`}
        className="relative text-gray-400 hover:text-[#38BDF8] font-semibold text-sm transition-colors
                   after:content-[''] after:absolute after:left-1/2 after:-bottom-1 after:w-0 after:h-0.5 after:bg-[#38BDF8] after:rounded-full after:transition-all hover:after:w-6 hover:after:-translate-x-1/2"
      >
        {link}
      </Link>
    ))}
  </div>
);

export default FooterLinks;
