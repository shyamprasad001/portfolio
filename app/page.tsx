import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import CustomCursor from "@/components/CustomCursor";

export default function Home() {
  return (
    <>
      {/* Grain texture overlay — adds depth to the near-black background */}
      <div className="grain-overlay" aria-hidden />

      {/* Custom cursor — hidden on touch devices automatically */}
      <CustomCursor />

      <Nav />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
      </main>
      <Contact />
    </>
  );
}
