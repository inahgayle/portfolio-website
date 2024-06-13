import React from "react";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Interests from "./components/Interests";
import Contact from "./components/Contact";
import "preline/preline";

export default function App() {
  React.useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.remove("animate-stop");
          entry.target.classList.add("animate-play");
        } 
      });
    });

    const hiddenElements = document.querySelectorAll(".show-on-scroll");
    hiddenElements.forEach((el) => observer.observe(el));
    
    // Clean up the memory before the component gets destroyed:
    return () => {
      hiddenElements.forEach((el) => observer.unobserve(el));
    };
  }, []);

  return (
    <main className="bg-lightest-green dark:bg-gray-800 body-font">
      <Navbar />
      <About />
      <Experience />
      <Projects />
      <Skills />
      <Interests />
      <Contact />
    </main>
  );
}