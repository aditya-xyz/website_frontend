import React from "react"

const About = () => {
  return (
    <div
      name="about"
      className="w-full md:pt-28 min-h-screen bg-gradient-to-b from-gray-800 to-black text-white md:h-screen"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            About
          </p>
        </div>
        <p className="text-xl">
          The site is completely responsive and is built using ReactJS and
          Tailwind CSS, and hosted on Netlify. I am using getform.io for the
          contact form and React Scroll for smooth scrolling. You can find the
          code on my GitHub. Feel free to use it if you'd like!
        </p>
        <br />
        <br />
        <p className="text-xl">
          I am currently working on adding a Node.js backend to this site so I
          can serve up content from a MongoDB database. This will make the site
          truly dynamic and speed up the process of making updates to it.
        </p>
        <br />
        <br />
        <p className="text-xl">
          As a full time Microsoft Power Platform professional by trade, I work
          on using Microsoft Dataverse and its whole suite of connectors and
          functionalities to build low-code/no-code solutions. These include a
          standalone app, mobile app, website, and automations.
        </p>
        <br />
        <br />
        <p className="text-xl">
          Check out my work and social links on the Contact page!
        </p>
      </div>
    </div>
  )
}

export default About
