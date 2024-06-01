import React from "react";

export default function Navbar() {
  return (
    <header className="bg-light-pink md:sticky top-0 z-10 rounded-bl-3xl rounded-br-3xl">
      <div className="container mx-auto flex flex-wrap p-3 flex-col md:flex-row items-center">
        <a className="title-font font-medium text-white mb-4 md:mb-0">
          <a href="#about" className="ml-3 text-3xl text-dark-green hover:text-primary-green dark:text-dark-green dark:hover:text-primary-green font-lilita">
            Inah Castro
          </a>
        </a>
        <nav className="md:ml-auto md:py-1 flex flex-wrap items-center text-base text-xl justify-center">
          <a href="#experience" className="ml-5 text-dark-green hover:text-primary-green dark:text-dark-green dark:hover:text-primary-green font-lilita">
            Experience
          </a>
          <a href="#projects" className="ml-5 text-dark-green hover:text-primary-green dark:text-dark-green dark:hover:text-primary-green font-lilita">
            Projects
          </a>
          <a href="#interests" className="ml-5 text-dark-green hover:text-primary-green dark:text-dark-green dark:hover:text-primary-green font-lilita">
            Interests
          </a>
          <a href="#contact" className="ml-5 text-dark-green hover:text-primary-green dark:text-dark-green dark:hover:text-primary-green font-lilita">
            Contact
          </a>
          <button type="button" className="hs-dark-mode-active:hidden block hs-dark-mode ml-5 p-2 rounded-full bg-lighter-pink group flex items-center text-dark-green hover:text-primary-green dark:text-dark-green dark:hover:text-primary-green" data-hs-theme-click-value="dark">
            <svg className="flex-shrink-0" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"></path>
            </svg>
          </button>
          <button type="button" className="hs-dark-mode-active:block hidden hs-dark-mode ml-5 p-2 rounded-full bg-lighter-pink group flex items-center text-dark-green hover:text-primary-green dark:text-dark-green dark:hover:text-primary-green" data-hs-theme-click-value="light">
            <svg className="flex-shrink-0" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="12" cy="12" r="4"></circle>
              <path d="M12 2v2"></path>
              <path d="M12 20v2"></path>
              <path d="m4.93 4.93 1.41 1.41"></path>
              <path d="m17.66 17.66 1.41 1.41"></path>
              <path d="M2 12h2"></path>
              <path d="M20 12h2"></path>
              <path d="m6.34 17.66-1.41 1.41"></path>
              <path d="m19.07 4.93-1.41 1.41"></path>
            </svg>
          </button>
        </nav>
      </div>
    </header>
  );
}