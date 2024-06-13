import React from "react";

export default function Navbar() {
  return (
    <header class="bg-light-pink md:sticky top-0 z-10 rounded-bl-3xl rounded-br-3xl">
      <div class="container mx-auto flex flex-wrap p-4 flex-col md:flex-row items-center">
        <nav class="w-full flex flex-wrap basis-full items-center justify-between"
             aria-label="Global">
          <a class="md:order-1 flex-none
                    font-lilita
                    text-3xl text-dark-green hover:text-primary-green dark:text-dark-green dark:hover:text-primary-green"
             href="#about">
            Inah Castro
          </a>
          <div class="md:order-3 flex items-center gap-x-2">
            <button type="button"
                    class="md:hidden hs-collapse-toggle items-center 
                          p-2.5 gap-x-2 rounded-full bg-lighter-pink
                          text-dark-green hover:text-primary-green dark:text-dark-green dark:hover:text-primary-green
                          disabled:opacity-50 disabled:pointer-events-none"
                    data-hs-collapse="#navbar-alignment"
                    aria-controls="navbar-alignment" aria-label="Toggle navigation">
              <svg class="hs-collapse-open:hidden flex-shrink-0 size-5" 
                   xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                   stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                <line x1="3" x2="21" y1="6" y2="6"/>
                <line x1="3" x2="21" y1="12" y2="12"/>
                <line x1="3" x2="21" y1="18" y2="18"/>
              </svg>
              <svg class="hs-collapse-open:block hidden flex-shrink-0 size-5" 
                   xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                   stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                <path d="M18 6 6 18"/>
                <path d="m6 6 12 12"/>
              </svg>
            </button>
            <button type="button"
                    className="hs-dark-mode-active:hidden block hs-dark-mode 
                              p-2 rounded-full bg-lighter-pink items-center 
                              text-dark-green hover:text-primary-green dark:text-dark-green dark:hover:text-primary-green" 
                    data-hs-theme-click-value="dark">
              <svg className="flex-shrink-0" xmlns="http://www.w3.org/2000/svg" 
                   width="24" height="24" viewBox="0 0 24 24" fill="none"
                   stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"></path>
              </svg>
            </button>
            <button type="button"
                    className="hs-dark-mode-active:block hidden hs-dark-mode 
                               p-2 rounded-full bg-lighter-pink group items-center 
                               text-dark-green hover:text-primary-green dark:text-dark-green dark:hover:text-primary-green" 
                    data-hs-theme-click-value="light">
              <svg className="flex-shrink-0" xmlns="http://www.w3.org/2000/svg" 
                   width="24" height="24" viewBox="0 0 24 24" fill="none"
                   stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
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
          </div>

          <div id="navbar-alignment" 
               class="hs-collapse hidden overflow-hidden transition-all duration-300 basis-full grow
                      md:grow-0 md:basis-auto md:block md:order-2">
            <div class="flex flex-col gap-6 mt-5 md:flex-row md:items-center md:justify-end md:mt-0 text-xl">
              <a href="#experience" className="text-dark-green hover:text-primary-green dark:text-dark-green dark:hover:text-primary-green font-lilita">
                Experience
              </a>
              <a href="#projects" className="text-dark-green hover:text-primary-green dark:text-dark-green dark:hover:text-primary-green font-lilita">
                Projects
              </a>
              <a href="#skills" className="text-dark-green hover:text-primary-green dark:text-dark-green dark:hover:text-primary-green font-lilita">
                Skills
              </a>
              <a href="#interests" className="text-dark-green hover:text-primary-green dark:text-dark-green dark:hover:text-primary-green font-lilita">
                Interests
              </a>
              <a href="#contact" className="text-dark-green hover:text-primary-green dark:text-dark-green dark:hover:text-primary-green font-lilita">
                Contact
              </a>
            </div>
          </div>
        </nav>
      </div>

      {/* <div className="container mx-auto flex flex-wrap p-3 flex-col md:flex-row items-center">
        <a href="#about" className="ml-3 text-3xl text-dark-green hover:text-primary-green dark:text-dark-green dark:hover:text-primary-green font-lilita">
          Inah Castro
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
      </div> */}
    </header>
  );
}