import React from "react";
import About from "./components/About";
import Contact from "./components/Contact";
import Navbar from "./components/Navbar";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Interests from "./components/Interests";
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
      <Interests />
      <Contact />
    </main>
  );
}