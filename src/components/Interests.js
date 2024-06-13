import React from "react";

export default function Interests() {
  return (
    <section id="interests">
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
            Interests
          </h1>
          <h1 className="flex-grow border-t-4 border-primary-green dark:border-light-green"></h1>
        </div>

        <div className="show-on-scroll animate-stop animate-fade animate-once 
                        flex md:flex-row flex-col">
          <div className="flex flex-col">
            <h1 className="show-on-scroll animate-stop animate-interests-text1
                          title-font mb-2 font-bold font-poppins md:self-start self-center
                          text-2xl text-center text-darker-pink bg-light-pink px-2 py-1 rounded-lg">
              Video games
            </h1>
            <img className="show-on-scroll animate-stop animate-interests-vg hover:animate-interests-vg-wiggle
                            md:size-5/6 size-2/3 object-contain self-center"
                 src="./video-games.png" alt="Video games" loading="lazy" />
          </div>

          <div className="flex flex-col">
            <img className="show-on-scroll animate-stop animate-interests-kal hover:animate-interests-kal-wiggle
                            md:size-2/3 size-1/2 object-contain self-center"
                 src="./kalimba.png" alt="" loading="lazy" />
            <h1 className="show-on-scroll animate-stop animate-interests-text1
                          title-font mb-16 font-bold font-poppins md:self-end self-center
                          text-2xl text-center text-darker-pink  bg-light-pink px-2 py-1 rounded-lg">
              Kalimba
            </h1>
          </div>

          <div className="flex flex-col">
            <h1 className="show-on-scroll animate-stop animate-interests-text2
                          title-font mb-2 font-bold font-poppins self-center
                          text-2xl text-center text-darker-pink  bg-light-pink px-2 py-1 rounded-lg">
              Crochet
            </h1>
            <img className="show-on-scroll animate-stop animate-interests-cr hover:animate-interests-cr-wiggle
                            size-1/2 object-contain self-center"
                 src="./crochet.png" alt="" loading="lazy" />
          </div> 

          <div className="flex flex-col">
            <a href="https://mini-portfolio.my.canva.site/" target="_blank">
                <img className="show-on-scroll animate-stop animate-interests-gd hover:animate-interests-gd-wiggle
                                md:size-11/12 size-5/6 md:my-0 my-5 md:pl-0 pl-20
                                object-contain self-center "
                     src="./graphic-design.png" alt="" loading="lazy" />
            </a> 
            <div className="flex flex-row justify-self-center md:self-end self-center">
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
              <h1 className="show-on-scroll animate-stop animate-interests-text2
                            title-font mb-2 font-bold font-poppins
                            text-2xl text-center text-darker-pink  bg-light-pink px-2 py-1 rounded-lg">
                Graphic design
              </h1>
            </div>
          </div>                
        </div>
      </div>
    </section>
  );
}