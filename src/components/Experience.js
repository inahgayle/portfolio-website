import React from "react";
import { experiences } from "../data";

export default function Experience() {
  return (
    <section id="experience">
      <div className="container px-5 py-10 mx-auto lg:px-20">
        <div className="flex flex-row w-full mb-16 items-center">
          <img
            className="block dark:hidden object-contain object-center size-12"
            src="./flower-light.png" 
            alt=""
          />
          <img
            className="hidden dark:block object-contain object-center size-12"
            src="./flower-dark.png"
            alt=""
          />
          <h1 className="px-4 font-medium font-lilita title-font
                        sm:text-4xl text-3xl text-dark-pink dark:text-light-pink">
            Experience
          </h1>
          <h1 className="flex-grow border-t-4 border-dark-pink dark:border-light-pink"></h1>
        </div>

        <div className="flex flex-col sm:items-center items-start">
          {experiences.map((experience, index) => (
            <div className="show-on-scroll animate-stop animate-fade-up animate-once animate-ease-out animate-delay-200
                            p-4 md:w-3/5 w-full">
              <div className="h-full bg-lighter-pink p-6 rounded-2xl">
                <div className="flex flex-row items-center pb-8">
                  <img
                    alt="gallery"
                    className="size-16 object-contain object-center"
                    src={experience.image}
                  />
                  <div className="flex flex-col items-start pl-2">
                    <p className="title-font font-medium font-lilita text-darker-pink sm:text-2xl text-xl text-left">
                      {experience.company}
                    </p>
                    <p className="font-poppins text-md text-darker-pink text-left">
                      {experience.role}
                    </p>
                  </div>
                  <p className="font-poppins font-bold text-md text-right text-darker-pink ml-auto self-start pt-1">
                    {experience.duration}
                  </p>
                </div>

                {experience.description.map((desc, i) => (
                  <div className="flex flex-col items-start">
                    <ul className="list-none">
                      {desc.d1 ? 
                        <li className="flex flex-row pb-3">
                          <svg className="fill-darker-pink flex-shrink-0" viewBox="0 0 24 24" focusable="false"
                               xmlns="http://www.w3.org/2000/svg" width="24" height="24">
                            <path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"></path>
                          </svg>
                          <p className="font-poppins text-md text-darker-pink text-justify">{desc.d1}</p>
                        </li> : null}
                      {desc.d2 ? 
                        <li className="flex flex-row pb-3">
                          <svg className="fill-darker-pink flex-shrink-0" viewBox="0 0 24 24" focusable="false"
                               xmlns="http://www.w3.org/2000/svg" width="24" height="24">
                            <path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"></path>
                          </svg>
                          <p className="font-poppins text-md text-darker-pink text-justify">{desc.d2}</p>
                        </li> : null}
                      {desc.d3 ? 
                        <li className="flex flex-row pb-3">
                          <svg className="fill-darker-pink flex-shrink-0" viewBox="0 0 24 24" focusable="false"
                               xmlns="http://www.w3.org/2000/svg" width="24" height="24">
                            <path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"></path>
                          </svg>
                          <p className="font-poppins text-md text-darker-pink text-justify">{desc.d3}</p>
                        </li> : null}
                    </ul>
                  </div>
                ))}

                <div className="flex flex-row flex-wrap items-start pt-3">
                  {experience.skills.map(skill => ( 
                      <p className="bg-dark-pink px-2 py-1 rounded-lg mt-2 mr-2
                                    font-poppins font-bold text-lighter-pink sm:text-md text-sm">
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