// Home.tsx
import AboutMe from "@/components/AboutMe";
import HeroSection from "@/components/HeroSection";
import MySkills from "@/components/MySkills";
import Projects from "@/components/Projects";

export default function Home() {
  return (
    <>
      <section id="hero">
        <HeroSection />
      </section>
      <section id="about">
        <AboutMe />
      </section>
      <section id="skills">
        <MySkills />
      </section>
      <section id="projects">
        <Projects />
      </section>
    </>
  );
}
