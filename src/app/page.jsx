import About from "@/Components/HomeComponents/About";
import Hero from "@/Components/HomeComponents/Hero";

export default function Home() {
  return (
    <div>
      <section id="home" className="min-h-screen pt-22.5 max-w-6xl mx-auto px-6 md:px-12 py-5 flex justify-between items-center">
        <Hero></Hero>
      </section>
      <section id="home" className="max-w-6xl mx-auto px-6 md:px-12 py-5 flex justify-between items-center">
        <About></About>
      </section>

      {/*       
      
      <section id="skills">...</section>
      <section id="projects">...</section>
      <section id="contact">...</section> */}
    </div>
  );
}
