import React from "react"
import HeroImage from "../assets/heroImage.png"
import { FiArrowRight } from "react-icons/fi"
import { Link } from "react-scroll"

const Home = () => {
  return (
    <div
      name="home"
      className="pt-20 md:pt-32 min-h-screen w-full bg-gradient-to-b from-black via-black to-gray-800"
    >
      <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center px-4 md:flex-row">
        <div className="flex flex-col justify-center h-full">
          <h2 className="text-4xl sm:text-6xl text-white">Hi y'all!</h2>
          <br />
          <p className="text-gray-400 py-4 mr-2 max-w-md text-xl">
            I am a Full Stack Developer, dog dad, coffee connoisseur,
            photography enthusiast, and a fan of the outdoors, like I'm sure
            every Coloradan is!
          </p>
          <p className="text-gray-400 py-4 mr-2 max-w-md text-xl">
            Outside of work, I like to spend time with my dog, Pixel. So far she
            has been to 10 states and that number will only go up! If you're
            interested in following her adventures, check out her Instagram! All
            links are under the Contact section.
          </p>
          <br />
          <div>
            <Link
              to="experience"
              smooth
              duration={500}
              className="group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from from-cyan-500 to-blue-500 cursor-pointer"
            >
              Experience
              <span className="group-hover:rotate-90 duration-300">
                <FiArrowRight size={25} className="ml-1" />
              </span>
            </Link>
          </div>
        </div>
        <div>
          <img
            src={HeroImage}
            alt="my profile"
            className="rounded-2xl mx-auto w-2/3 md:w-full"
          />
        </div>
      </div>
    </div>
  )
}

export default Home
