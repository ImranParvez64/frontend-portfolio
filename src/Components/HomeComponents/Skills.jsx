import React from "react";
import { FaHtml5, FaCss3Alt, FaReact } from "react-icons/fa";
import { SiJavascript, SiNextdotjs, SiTailwindcss } from "react-icons/si";
import SkillCard from "./Skills/SkillsCard";
import Title from "../miniComponents/Title";

const SkillsRow = () => {
  const skills = [
    { name: "HTML", icon: <FaHtml5 color="#F16529" /> },
    { name: "CSS", icon: <FaCss3Alt color="#2965F1" /> },
    { name: "JavaScript", icon: <SiJavascript color="#F0DB4F" /> },
    { name: "React", icon: <FaReact color="#61DBFB" /> },
    { name: "Next.js", icon: <SiNextdotjs color="#FFFFFF" /> },
    { name: "Tailwind CSS", icon: <SiTailwindcss color="#38BDF8" /> },
  ];

  return (
    <section id="skills" className="max-w-6xl mx-auto px-4 sm:px-6 py-16 sm:py-20">
      {/* Title */}
      <Title title={"Skills"}></Title>

      <div>
        <div className="grid grid-cols-2 sm:grid-cols-6 justify-center gap-6 ">
        {skills.map((skill, index) => (
          <SkillCard key={index} icon={skill.icon} name={skill.name} />
        ))}
      </div>
      </div>
    </section>
  );
};

export default SkillsRow;
