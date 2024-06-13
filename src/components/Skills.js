import React from "react";
import Highcharts from 'highcharts'
import HighchartsReact from 'highcharts-react-official'
import highchartsMore from 'highcharts/highcharts-more'
import { skills } from "../data";

highchartsMore(Highcharts)

export default function Skills() {
  const options = {
    chart: {
      type: 'packedbubble',
      backgroundColor: 'transparent',
      height: '74%',
      events: {
        load() {
          setTimeout(this.reflow.bind(this), 0);
        },
      },
      className: 'hc-chart'
    },
    
    title: {
      text: ''
    },

    tooltip: {
      backgroundColor: '#F5E1DE',
      borderRadius: 10,
      shadow: false,
      useHTML: true,
      className: 'hc-tooltip',
      style: {
        color: '#745B56',
        fontFamily: 'poppins',
        fontSize: '16px',
      },
      pointFormat: (
        '<b>{point.name}</b>'
      )
    },

    legend: {
      enabled: false,
    },

    plotOptions: {
      packedbubble: {
        minSize: '50%',
        maxSize: '120%',
        layoutAlgorithm: {
          splitSeries: false,
          gravitationalConstant: 0.02
        },
      },
      series: {
        states: {
          inactive: {
            opacity: 1,
          },
        }
      }
    },

    responsive: {
      rules: [{
        condition: {
          maxWidth: 768
        },
        plotOptions: {
          packedbubble: {
            minSize: '50%',
            maxSize: '115%',
          }
        }
      }]
    },

    series: [
      {
        name: 'Language',
        data: skills.filter((item) => item.type === 'Language'),
        color: '#66b16c',
        className: 'hc-marker',
        marker: {
          symbol: "url(./gacha-darkgreen.png)"
        }
      },
      {
        name: 'Frontend',
        data: skills.filter((item) => item.type === 'Frontend'),
        color: '#66b16c',
        className: 'hc-marker',
        marker: {
          symbol: "url(./gacha-darkpink.png)"
        }
      },
      {
        name: 'Backend',
        data: skills.filter((item) => item.type === 'Backend'),
        color: '#66b16c',
        className: 'hc-marker',
        marker: {
          symbol: "url(./gacha-green.png)"
        }
      },
      {
        name: 'Tool',
        data: skills.filter((item) => item.type === 'Tool'),
        color: '#66b16c',
        className: 'hc-marker',
        marker: {
          symbol: "url(./gacha-pink.png)"
        }
      },
    ],
  }

  return (
    <section id="skills">
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
            Skills
          </h1>
          <h1 className="flex-grow border-t-4 border-dark-pink dark:border-light-pink"></h1>
        </div>

        <div className="flex flex-col md:flex-row items-center">
          <div className="show-on-scroll animate-stop animate-fade-up animate-once animate-ease-out animate-delay-200
                          p-4 md:w-3/5 w-full flex justify-center">
            <div className="absolute flex z-[1] w-[81%] h-[54%] mt-[13%]">
              <HighchartsReact 
                highcharts={Highcharts}
                //containerProps={{ style: { position: 'relative'} }}
                options={options} 
              />
            </div>

            <img
              className="object-cover object-center rounded"
              alt="gacha"
              src="./gacha-machine.png"
              loading="lazy"
            />
          </div>

          <div className="show-on-scroll animate-stop animate-fade-up animate-once animate-ease-out animate-delay-200
                            p-4 md:w-3/5 w-full">
            <div className="h-full bg-lighter-green p-6 rounded-2xl">
              <div className="flex flex-col flex-wrap items-start">
                <p className="title-font font-medium font-lilita text-darker-green sm:text-2xl text-xl pb-2">
                  Languages</p>

                <div className="flex flex-row flex-wrap items-start gap-2 pb-4">
                  {skills.filter((item) => item.type === 'Language').map((skill) => (
                    <div className="flex flex-row bg-lightest-green gap-2 px-3 py-2 rounded-lg">
                        <p className="font-poppins text-lg text-darker-green self-center">
                          {skill.icon} </p>
                        <p className="font-poppins text-md text-darker-green">
                          {skill.name} </p>
                    </div>
                  ))}
                </div>

                <p className="title-font font-medium font-lilita text-darker-green sm:text-2xl text-xl pb-2">
                  Frontend</p>

                <div className="flex flex-row flex-wrap items-start gap-2 pb-4">
                  {skills.filter((item) => item.type === 'Frontend').map((skill) => (
                    <div className="flex flex-row bg-lightest-green gap-2 px-3 py-2 rounded-lg">
                        <p className="font-poppins text-lg text-darker-green self-center">
                          {skill.icon} </p>
                        <p className="font-poppins text-md text-darker-green">
                          {skill.name} </p>
                    </div>
                  ))}
                </div>

                <p className="title-font font-medium font-lilita text-darker-green sm:text-2xl text-xl pb-2">
                  Backend</p>

                <div className="flex flex-row flex-wrap items-start gap-2 pb-4">
                  {skills.filter((item) => item.type === 'Backend').map((skill) => (
                    <div className="flex flex-row bg-lightest-green gap-2 px-3 py-2 rounded-lg">
                        <p className="font-poppins text-lg text-darker-green self-center">
                          {skill.icon} </p>
                        <p className="font-poppins text-md text-darker-green">
                          {skill.name} </p>
                    </div>
                  ))}
                </div>

                <p className="title-font font-medium font-lilita text-darker-green sm:text-2xl text-xl pb-2">
                  Tools</p>

                <div className="flex flex-row flex-wrap items-start gap-2">
                  {skills.filter((item) => item.type === 'Tool').map((skill) => (
                    <div className="flex flex-row bg-lightest-green gap-2 px-3 py-2 rounded-lg">
                        <p className="font-poppins text-lg text-darker-green self-center">
                          {skill.icon} </p>
                        <p className="font-poppins text-md text-darker-green">
                          {skill.name} </p>
                    </div>
                  ))}
                </div>
                  
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}