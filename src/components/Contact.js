import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { BsEnvelopeAtFill } from "react-icons/bs";

export default function Contact() {
  // const [name, setName] = React.useState("");
  // const [email, setEmail] = React.useState("");
  // const [message, setMessage] = React.useState("");

  // function encode(data) {
  //   return Object.keys(data)
  //     .map(
  //       (key) => encodeURIComponent(key) + "=" + encodeURIComponent(data[key])
  //     )
  //     .join("&");
  // }

  // function handleSubmit(e) {
  //   e.preventDefault();
  //   fetch("/", {
  //     method: "POST",
  //     headers: { "Content-Type": "application/x-www-form-urlencoded" },
  //     body: encode({ "form-name": "contact", name, email, message }),
  //   })
  //     .then(() => alert("Message sent!"))
  //     .catch((error) => alert(error));
  // }

  return (
    <section id="contact" className="relative">
      <div className="container px-5 py-10 mx-auto lg:px-20">
        <div className="flex flex-row w-full mb-16 items-center">
          <img
            className="block dark:hidden object-contain object-center size-12"
            src="./leaf-light.png" 
          />
          <img
            className="hidden dark:block object-contain object-center size-12"
            src="./leaf-dark.png"
          />
          <h1 className="sm:text-4xl text-3xl font-medium font-lilita title-font text-primary-green dark:text-light-green px-4">
            Contact
          </h1>
          <h1 className="flex-grow border-t-4 border-primary-green dark:border-light-green"></h1>
        </div>
        
        <div className="lg:flex-grow flex flex-col md:items-center md:text-center mb-16 md:mb-0 items-center text-center">
          <h1 className="title-font sm:text-6xl text-4xl mb-4 font-medium text-darker-green dark:text-lighter-green font-lilita">
            Get in touch!
          </h1>
          <p className="mb-8 md:w-1/2 leading-relaxed font-poppins text-dark-green dark:text-lighter-green">
            I’m currently looking for new opportunities. Feel free to reach out via my inbox, 
            I’d love to hear from you!
          </p>
        </div>

        <div className="flex justify-center">
          <a href="mailto:iscastro@up.edu.ph">
            <BsEnvelopeAtFill className="text-4xl text-primary-green hover:text-dark-green dark:text-lighter-green dark:hover:text-light-green mr-3"/>
          </a>
          <a href="https://github.com/inahgayle" target="_blank">
            <FaGithub className="text-4xl text-primary-green hover:text-dark-green dark:text-lighter-green dark:hover:text-light-green mr-3"/>
          </a>
          <a href="https://www.linkedin.com/in/inah-gayle-castro/" target="_blank">
            <FaLinkedin className="text-4xl text-primary-green hover:text-dark-green dark:text-lighter-green dark:hover:text-light-green mr-3"/>
          </a>
        </div>
        {/* <form
          netlify
          name="contact"
          onSubmit={handleSubmit}
          className="lg:w-1/3 md:w-1/2 flex flex-col md:ml-auto w-full md:py-8 mt-8 md:mt-0">
          <h2 className="text-white sm:text-4xl text-3xl mb-1 font-medium title-font">
            Hire Me
          </h2>
          <p className="leading-relaxed mb-5">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illum
            suscipit officia aspernatur veritatis. Asperiores, aliquid?
          </p>
          <div className="relative mb-4">
            <label htmlFor="name" className="leading-7 text-sm text-gray-400">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              className="w-full bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="relative mb-4">
            <label htmlFor="email" className="leading-7 text-sm text-gray-400">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="w-full bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="relative mb-4">
            <label
              htmlFor="message"
              className="leading-7 text-sm text-gray-400">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              className="w-full bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 h-32 text-base outline-none text-gray-100 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
              onChange={(e) => setMessage(e.target.value)}
            />
          </div>
          <button
            type="submit"
            className="text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">
            Submit
          </button>
        </form> */}
      </div>

      <footer className="bg-light-green z-10 rounded-tl-3xl rounded-tr-3xl">
        <div className="container mx-auto p-3 flex flex-col place-items-center">
          <h1 className="font-poppins font-medium text-darker-green text-center">
            © 2024 Inah Castro. All rights reserved
          </h1>
        </div>
      </footer>
    </section>
    
  );
}