import React from "react"
import HeroImage from "../assets/heroImage.png"
// import { FiArrowRight } from "react-icons/fi"
// import { Link } from "react-scroll"

const Home = () => {
  return (
    <div
      name="home"
      className="h-screen w-full bg-gradient-to-b from-black via-black to-gray-800"
    >
      <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row">
        <div className="flex flex-col justify-center h-full">
          <h2 className="text-4xl sm:text-6xl text-white">Hi y'all!</h2>
          <p className="text-gray-400 py-4 mr-2 max-w-md">
            I am a Microsoft Power Platform engineer by trade and a Full Stack
            Developer by passion. In the recent months, I have been fascinated
            by the world of modern web development, so I decided to build this
            site using ReactJS.
          </p>
          <p className="text-gray-400 py-4 mr-2 max-w-md">
            Outside of work, I like to spend my time outdoors with my dog,
            Pixel. My eventual goal is to road trip through all 50 states with
            her. So far, I'm on state #25, and Pixel is on #10. If you're
            interested in following her adventures, follow her on Instagram!
          </p>
          {/* <div>
            <Link
              to="blog"
              smooth
              duration={500}
              className="group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from from-cyan-500 to-blue-500 cursor-pointer"
            >
              Blog
              <span className="group-hover:rotate-90 duration-300">
                <FiArrowRight size={25} className="ml-1" />
              </span>
            </Link>
          </div> */}
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
