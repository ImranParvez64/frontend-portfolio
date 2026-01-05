import React from "react";
import AboutImage from "./AboutComponents/AboutImage";
import AboutContent from "./AboutComponents/AboutContent";
import Title from "../miniComponents/Title";

const About = () => (
  <section id="about" className="max-w-6xl mx-auto px-4 sm:px-6 py-16 sm:py-20">
    {/* Title */}
    <Title title={"About Me"}></Title>

    {/* Main Card */}
    <div className="bg-[#10192f] rounded-2xl p-6 sm:p-8
                    grid grid-cols-1 md:grid-cols-[1fr_2fr]
                    gap-10 md:gap-12 items-center
                    border border-gray-600">
      <AboutImage />
      <AboutContent />
    </div>
  </section>
);

export default About;
