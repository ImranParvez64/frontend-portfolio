import React from "react";
import Image from "next/image";

const AboutImage = () => (
  <div className="flex justify-center">
    <div className="p-1 rounded-xl border border-gray-500">
      <div className="relative w-56 h-72 sm:w-64 sm:h-80 rounded-lg overflow-hidden bg-[#0b1220]">
        <Image src="/image.png" alt="Profile" fill className="object-cover" />
      </div>
    </div>
  </div>
);

export default AboutImage;
