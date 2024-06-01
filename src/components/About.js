import React from "react";

export default function About() {
  return (
    <section id="about">
      <div className="container mx-auto flex md:flex-row flex-col px-10 py-20 items-center">
        <div className="show-on-scroll animate-stop animate-fade animate-once 
                        lg:flex-grow flex flex-col lg:pr-24 md:w-1/2 md:pr-16 
                        items-center md:items-start
                        mb-16 md:mb-0
                        text-center md:text-left">
          <h1 className="show-on-scroll animate-stop animate-about-hello animate-once 
                         mb-2 px-2 py-1 rounded-lg
                         title-font font-lilita font-medium 
                         text-xl sm:text-2xl text-darker-green bg-light-green">
            Hello! I'm
          </h1>
          <h1 className="show-on-scroll animate-stop animate-jump animate-once animate-ease-out animate-duration-1000 
                         mb-4 sm:pl-10
                         title-font text-4xl sm:text-6xl  
                         font-medium font-lilita text-darker-green dark:text-lighter-green">
            Inah Castro,
          </h1>
          <p className="show-on-scroll animate-stop animate-fade animate-delay-500 animate-once 
                        mb-4 sm:pl-10
                        font-poppins text-dark-green dark:text-lighter-green leading-relaxed">
            an aspiring front-end software engineer.
            Beyond web development, I'm also interested in refining my skills and expertise in data science and machine learning.
          </p>
          <div className="show-on-scroll animate-stop animate-fade animate-delay-500 
                          flex justify-center sm:pl-10">
            <a
              href="./CASTRO_RESUME_MAY2024.pdf"
              className="inline-flex 
                       bg-light-green hover:bg-dark-green dark:bg-lighter-green dark:hover:bg-light-green
                         border-0 py-1.5 px-4 rounded-lg
                         font-poppins text-darker-green hover:text-lightest-green dark:hover:text-darker-green">
              View my resume
            </a>
          </div>
        </div>
        <div className="show-on-scroll animate-stop animate-fade animate-once
                        lg:max-w-md lg:w-full md:w-1/2 w-5/6 sm:pr-10">
          <img
            className="object-cover object-center rounded"
            alt="Profile"
            src="./profile-pic.png"
            loading="lazy"
          />
        </div>
      </div>
    </section>
  );
}