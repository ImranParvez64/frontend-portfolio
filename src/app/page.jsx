import About from "@/Components/HomeComponents/About";
import Contact from "@/Components/HomeComponents/Contact";
import Hero from "@/Components/HomeComponents/Hero";
import Projects from "@/Components/HomeComponents/Projects";
import SkillsRow from "@/Components/HomeComponents/Skills";

export default function Home() {
  return (
    <div>
      <section className="min-h-screen pt-22.5 max-w-6xl mx-auto px-6 md:px-12 py-5 flex justify-between items-center">
        <Hero></Hero>
      </section>
      <section className="max-w-6xl mx-auto px-6 md:px-12 py-5 flex justify-between items-center">
        <About></About>
      </section>
      <section className="max-w-6xl mx-auto px-6 md:px-12 py-5 flex justify-between items-center">
        <SkillsRow></SkillsRow>
      </section>
      <section className="max-w-6xl mx-auto px-6 md:px-12 py-5 flex justify-between items-center">
        <Projects></Projects>
      </section>
      <section className="max-w-6xl mx-auto px-6 md:px-12 py-5 flex justify-between items-center">
        <Contact></Contact>
      </section>

      {/*       
      
      <section id="skills">...</section>
      <section id="projects">...</section>
      <section id="contact">...</section> */}
    </div>
  );
}
