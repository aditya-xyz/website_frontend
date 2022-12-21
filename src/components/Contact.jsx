import React from "react"
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa"
import { BsMedium } from "react-icons/bs"

const Contact = () => {
  const GETFORM_FORM_ENDPOINT =
    "https://getform.io/f/0754b1cf-543b-4f39-82bb-5f766c1a44a7"

  const links = [
    {
      id: 1,
      child: (
        <>
          <FaGithub size={30} />
        </>
      ),
      href: "https://github.com/aditya-xyz",
      style: "rounded-tl-md",
    },
    {
      id: 2,
      child: (
        <>
          <FaLinkedin size={30} />
        </>
      ),
      href: "https://www.linkedin.com/in/aditya-fullstack/",
    },
    {
      id: 3,
      child: (
        <>
          <BsMedium size={30} />
        </>
      ),
      href: "https://medium.com/@adityapatil.xyz",
    },
    {
      id: 4,
      child: (
        <>
          <FaInstagram size={30} />
        </>
      ),
      href: "https://www.instagram.com/pixelthegsd/",
      style: "rounded-bl-md",
    },
  ]

  return (
    <div
      name="contact"
      className="w-full h-screen bg-gradient-to-b from-black to-gray-800 p-4 pt-32 text-white"
    >
      <div className="flex flex-col p-4 justify-center max-w-screen-lg mx-auto h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Contact
          </p>
          <p className="py-6">Send me a message!</p>
        </div>
        <div className="flex justify-center items-center">
          <form
            action={GETFORM_FORM_ENDPOINT}
            method="POST"
            className="flex flex-col w-full md:w-1/2"
          >
            <input
              type="text"
              name="name"
              placeholder="Enter your name"
              required
              className="p-2 bg-transparent border-2 text-white focus:outline-none"
            />
            <input
              type="text"
              name="email"
              placeholder="Enter your email"
              required
              className="my-4 p-2 bg-transparent border-2 text-white focus:outline-none"
            />
            <textarea
              name="message"
              placeholder="Enter your message"
              required
              rows="10"
              className="p-2 bg-transparent border-2 text-white focus:outline-none"
            ></textarea>
            <button className="text-white bg-gradient-to-b from-cyan-500 to-blue-500 px-6 py-3 my-8 mx-auto flex items-center rounded-md hover:scale-110 duration-300">
              Let's talk
            </button>
          </form>
        </div>
        <div className="flex flex-row justify-center right-0">
          <ul className="flex flex-row">
            {links.map(({ id, child, href, style }) => (
              <li
                key={id}
                className={`flex justify-between items-center w-20 h-14 px-4 ${style}`}
              >
                <a
                  href={href}
                  className="flex justify-between items-center w-full text-white"
                  target="_blank"
                  rel="noreferrer"
                >
                  {child}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Contact
