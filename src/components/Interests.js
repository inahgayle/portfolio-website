import React from "react";

export default function Interests() {
  return (
    <section id="interests">
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
          <h1 className="sm:text-4xl text-3xl font-medium font-lilita title-font text-dark-pink dark:text-light-pink px-4">
            Interests
          </h1>
          <h1 className="flex-grow border-t-4 border-dark-pink dark:border-light-pink"></h1>
        </div>

        <div className="show-on-scroll animate-stop animate-fade animate-once grid grid-flow-col grid-rows-3 grid-cols-4 auto-cols-min justify-center px-8">
          <div className="justify-self-start self-end">
            <h1 className="show-on-scroll animate-stop animate-interests-text1 title-font mb-2 sm:text-2xl text-xl text-center font-bold font-poppins text-darker-pink  bg-light-pink px-2 py-1 rounded-lg">
              Video games
            </h1>
          </div>
          <div className="show-on-scroll animate-stop animate-interests-vg hover:animate-interests-vg-wiggle row-span-2 self-end pl-12">
            <img src="./video-games.png" alt="" loading="lazy" />
          </div>
          <div className="show-on-scroll animate-stop animate-interests-kal hover:animate-interests-kal-wiggle self-end row-span-2">
            <img src="./kalimba.png" alt="" loading="lazy" className="size-3/5 object-contain"/>
          </div>
          <div className="justify-self-end self-start">
            <h1 className="show-on-scroll animate-stop animate-interests-text1 title-font mb-2 sm:text-2xl text-xl text-center font-bold font-poppins text-darker-pink  bg-light-pink px-2 py-1 rounded-lg">
              Kalimba
            </h1>
          </div>
          <div className="justify-self-center self-end">
            <h1 className="show-on-scroll animate-stop animate-interests-text2 title-font mb-2 sm:text-2xl text-xl text-center font-bold font-poppins text-darker-pink  bg-light-pink px-2 py-1 rounded-lg">
              Crochet
            </h1>
          </div>
          <div className="show-on-scroll animate-stop animate-interests-cr hover:animate-interests-cr-wiggle row-span-2 pl-12">
            <img src="./crochet.png" alt="" loading="lazy" className="size-3/5 object-contain" />
          </div>
          <div className="show-on-scroll animate-stop animate-interests-gd hover:animate-interests-gd-wiggle row-span-2 pl-12">
            <a href="https://mini-portfolio.my.canva.site/" target="_blank">
              <img src="./graphic-design.png" alt="" loading="lazy" className="object-contain" />
            </a> 
          </div>
          <div className="flex flex-row justify-self-center self-start">
            <img 
              src="./mini-pf-light.png" 
              alt="" loading="lazy" 
              className="block dark:hidden absolute size-24 object-contain show-on-scroll animate-stop animate-interests-clickmp"
            />
            <img 
              src="./mini-pf-dark.png" 
              alt="" loading="lazy" 
              className="hidden dark:block absolute size-24 object-contain show-on-scroll animate-stop animate-interests-clickmp"
            />
            <h1 className="show-on-scroll animate-stop animate-interests-text2 title-font mb-2 sm:text-2xl text-xl text-center font-bold font-poppins text-darker-pink  bg-light-pink px-2 py-1 rounded-lg">
              Graphic design
            </h1>
          </div>
        </div>
      </div>
    </section>
  );
}