import React from "react"
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa"
import { BsMedium } from "react-icons/bs"
import { useForm } from "react-hook-form"
import axios from "axios"
import { ToastContainer, toast } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"

const Contact = () => {
  const GETFORM_FORM_ENDPOINT =
    "https://getform.io/f/0754b1cf-543b-4f39-82bb-5f766c1a44a7"

  const { register, handleSubmit, reset } = useForm()

  const submit = (data) => {
    axios
      .post(GETFORM_FORM_ENDPOINT, {
        name: data.name,
        email: data.email,
        message: data.message,
      })
      .then(() => {
        toast.success("Thank you! I will reach out to you shortly.", {
          position: toast.POSITION.BOTTOM_CENTER,
        })
        reset()
      })
      .catch((error) => console.log(error))
  }

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
      className="w-full pt-20 min-h-screen bg-gradient-to-b from-black to-gray-800 p-4 text-white"
    >
      <div className="flex flex-col p-4 justify-center max-w-screen-lg mx-auto h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Contact
          </p>
          <p className="py-6 text-gray-400 text-xl">Send me a message!</p>
        </div>
        <div className="flex justify-center items-center">
          <form
            action={GETFORM_FORM_ENDPOINT}
            method="POST"
            onSubmit={handleSubmit(submit)}
            className="flex flex-col w-full md:w-1/2"
          >
            <input
              {...register("name")}
              type="text"
              // name="name"
              placeholder="Enter your name"
              required
              className="p-2 bg-transparent border-2 text-white focus:outline-none"
            />
            <input
              {...register("email")}
              type="text"
              // name="email"
              placeholder="Enter your email"
              required
              className="my-4 p-2 bg-transparent border-2 text-white focus:outline-none"
            />
            <textarea
              {...register("message")}
              // name="message"
              placeholder="Enter your message"
              required
              rows="10"
              className="p-2 bg-transparent border-2 text-white focus:outline-none"
            ></textarea>
            <button className="text-white bg-gradient-to-b from-cyan-500 to-blue-500 px-6 py-3 my-8 mx-auto flex items-center rounded-md hover:scale-110 duration-300">
              Let's talk
            </button>
            <ToastContainer />
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
