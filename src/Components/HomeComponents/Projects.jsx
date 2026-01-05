import React from "react";
import Title from "../miniComponents/Title";
import ProjectCard from "./Projects/ProjectCard";
import { projectData } from "./Projects/projectData";

const Projects = () => {
  return (
    <section id="projects" className="max-w-7xl mx-auto px-6 py-24">
      
      {/* Title */}
      <div className="text-center mb-16">
        <Title title="Projects" />
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projectData.map((project, index) => (
          <ProjectCard key={index} {...project} />
        ))}
      </div>
    </section>
  );
};

export default Projects;
