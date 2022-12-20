import React from "react"

const About = () => {
  return (
    <div
      name="about"
      className="w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            About
          </p>
        </div>
        <p className="text-xl mt-20">
          When I decided to learn ReactJS, I figured what better way to use that
          knowledge than to build a personal website, and here we are. As of
          right now, the site is completely static. I am working on building a
          NodeJS backend using MongoDB so I can dynamically add to the site
          without having to make any changes to the front end code.
        </p>
        <br />
        <p className="text-xl">
          The site is completely responsive and is built using ReactJS and
          Tailwind CSS, and hosted on Netlify. I am using getform.io for the
          contact form and React Scroll for smooth scrolling. You can find the
          code on my GitHub. Feel free to use it if you'd like!
        </p>
        <br />
        <p className="text-xl">
          My full time job is that of a Microsoft Power Platform engineer. The
          goal there is to use Microsoft Dataverse and its various connectors
          and services to come up with innovative yet low-code/no-code ways to
          stand up entire projects from the ground up quickly. These could be a
          web app, mobile app, a website, automations, etc. I have also done
          full stack ASP.Net development alongside Power Platform work.
        </p>
      </div>
    </div>
  )
}

export default About