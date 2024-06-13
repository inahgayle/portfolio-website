import React from "react";
import { projects } from "../data";

export default function Projects() {
  React.useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("animate-fade-up");
          entry.target.classList.add("animate-once");
          entry.target.classList.add("animate-ease-out");
          entry.target.classList.add("animate-delay-200");
        } 
      });
    });

    const hiddenElements = document.querySelectorAll(".showproj-on-scroll");
    hiddenElements.forEach((el) => observer.observe(el));
    
    // Clean up the memory before the component gets destroyed:
    return () => {
      hiddenElements.forEach((el) => observer.unobserve(el));
    };
  }, []);
  
  React.useEffect(() => {
    const buttons = document.querySelectorAll('.filter-button')
    buttons.forEach((button) => {
      button.addEventListener('click', () => {
        buttons.forEach((b) => { 
          b.classList.remove('bg-light-pink');
          b.classList.remove('dark:bg-lighter-pink');
          b.classList.add('bg-light-green');
          b.classList.add('dark:bg-lighter-green');
        });

        button.classList.remove('bg-light-green');
        button.classList.remove('dark:bg-lighter-green');
        button.classList.add('bg-light-pink');
        button.classList.add('dark:bg-lighter-pink');
      });
    });  
  }, []);

  const [projCards, setProjCards] = React.useState(projects);
  const [currentProjCard, setCurrentProjCard] = React.useState("all");

  const handleBtns = (e) => {
    let word = e.target.value;
    setCurrentProjCard(word);
  };

  React.useEffect(() => {
    if (currentProjCard === "all") {
      setProjCards(projects);
    } else {
      const filtered = projects.filter((project) => {
        return (
          project.category === currentProjCard || project.category.includes(currentProjCard)
        );
      });
      setProjCards(filtered);
    }
  }, [currentProjCard]);

  return (
    <section id="projects">
      <div className="container px-5 py-10 mx-auto lg:px-20">
        <div className="flex flex-row w-full mb-16 items-center">
          <img
            className="block dark:hidden object-contain object-center size-12"
            src="./leaf-light.png" 
            alt=""
          />
          <img
            className="hidden dark:block object-contain object-center size-12"
            src="./leaf-dark.png"
            alt=""
          />
          <h1 className="px-4 font-medium font-lilita title-font 
                      sm:text-4xl text-3xl text-primary-green dark:text-light-green">
            Projects
          </h1>
          <h1 className="flex-grow border-t-4 border-primary-green dark:border-light-green"></h1>
        </div>

        <div className="flex flex-row justify-center mb-8">
          <button 
            className="filter-button px-4 py-0.5 mx-2 rounded-lg
                    bg-light-pink hover:bg-lighter-pink dark:bg-lighter-pink dark:hover:bg-lighter-pink
                      font-lilita font-medium sm:text-2xl text-xl text-darker-green hover:text-darker-green"
            value="all"
            onClick={handleBtns}>
            All
          </button>
          <button 
            className="filter-button px-4 py-0.5 mx-2 rounded-lg
                    bg-light-green hover:bg-lighter-pink dark:bg-lighter-green dark:hover:bg-lighter-pink
                      font-lilita font-medium sm:text-2xl text-xl text-darker-green hover:text-darker-green"
            value="academic"
            onClick={handleBtns}>
            Academic
          </button>
          <button 
            className="filter-button px-4 py-0.5 mx-2 rounded-lg
            bg-light-green hover:bg-lighter-pink dark:bg-lighter-green dark:hover:bg-lighter-pink
              font-lilita font-medium sm:text-2xl text-xl text-darker-green hover:text-darker-green"
            value="personal"
            onClick={handleBtns}>
            Personal
          </button>
        </div>

        <div className="flex flex-col sm:items-center items-start">
          {projCards.map((project, index) => (
            <div className="showproj-on-scroll p-4 md:w-3/5 w-full">
              <div className="h-full bg-lighter-green rounded-2xl">
                <div className="flex flex-wrap items-center">
                  <img
                    alt="gallery"
                    className="w-full rounded-t-2xl pb-6"
                    src={project.image}
                    loading="lazy"
                  />
                  <div className="flex flex-col items-start px-6">
                    <p className="title-font font-medium font-lilita text-darker-green sm:text-2xl text-xl text-justify pb-3">
                      {project.title}
                    </p>
                    <p className="font-poppins text-md text-darker-green text-justify">
                      {project.description}
                    </p>
                  </div>  
                </div>

                <div className="flex flex-row flex-wrap items-start px-6 pt-3 pb-6">
                  {project.link ?
                    <a
                      href={project.link}
                      target="_blank"
                      className="inline-flex bg-light-green hover:bg-dark-green rounded-lg py-1.5 px-4 mr-3
                                font-poppins text-darker-green hover:text-lightest-green ">
                      Live Site
                    </a> : null}
                  {project.github ?
                    <a
                      href={project.github}
                      target="_blank"
                      className="inline-flex bg-light-green hover:bg-dark-green rounded-lg py-1.5 px-4 mr-3
                                font-poppins text-darker-green hover:text-lightest-green ">
                      GitHub Repo
                    </a> : null}
                </div>

                <div className="flex flex-row flex-wrap items-start px-6 pb-6">
                  {project.skills.map(skill => ( 
                      <p className="bg-dark-green px-2 py-1 rounded-lg mr-2 mt-2
                                    font-poppins font-bold text-lighter-green sm:text-md text-sm">
                        {skill}</p>  
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}