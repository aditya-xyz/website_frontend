import React from "react"
import reactAndTailwind from "../assets/portfolio/reactAndTailwind.jpg"
import navbar from "../assets/portfolio/navbar.jpg"
import reactSmooth from "../assets/portfolio/reactSmooth.jpg"

const Projects = () => {
  const blogs = [
    {
      id: 1,
      src: reactAndTailwind,
      mediumUrl:
        "https://medium.com/@adityapatil.xyz/adding-tailwind-css-to-your-reactjs-app-2ab01a45fe40",
      githubUrl: "https://github.com/aditya-xyz/website_frontend",
    },
    {
      id: 2,
      src: navbar,
      mediumUrl:
        "https://medium.com/@adityapatil.xyz/responsive-nav-bar-for-your-react-app-b08452b39b15",
      githubUrl:
        "https://github.com/aditya-xyz/website_frontend/blob/main/src/components/NavBar.jsx",
    },
    {
      id: 3,
      src: reactSmooth,
      mediumUrl:
        "https://medium.com/@adityapatil.xyz/adding-react-smooth-scroll-to-your-site-74c791a23c4c",
      githubUrl:
        "https://github.com/aditya-xyz/website_frontend/blob/main/src/components/NavBar.jsx",
    },
  ]

  return (
    <div
      name="projects"
      className="pt-20 min-h-screen bg-gradient-to-b from-black to-gray-800 w-full text-white"
    >
      <div className="flex flex-col max-w-screen-lg p-4 mx-auto justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Projects
          </p>
          <p className="py-6">Check out some of my work!</p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
          {blogs.map(({ id, src, mediumUrl, githubUrl }) => (
            <div key={id} className="shadow-md shadow-gray-600 rounded-lg">
              <img
                src={src}
                alt=""
                className="rounded-md duration-200 hover:scale-105"
              />
              <div className="flex items-center justify-center">
                <button
                  onClick={() => {
                    window.open(mediumUrl, "_blank")
                  }}
                  className="border-2 rounded-md border-slate-100 w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105"
                >
                  Write-Up
                </button>
                <button
                  onClick={() => {
                    window.open(githubUrl, "_blank")
                  }}
                  className="border-2 rounded-md border-slate-100 w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105"
                >
                  Code
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Projects
