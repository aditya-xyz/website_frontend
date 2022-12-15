import Container from "@mui/material/Container"
import { MdWavingHand } from "react-icons/md"

const About = () => {
  return (
    <>
      <Container
        fixed
        sx={{
          paddingTop: "50px",
          fontSize: 17,
        }}
      >
        <p>
          I had become complacent in life for far too long, so I decided to
          embark on this journey to learn something new. Almost immediately
          during my research, ReactJS emerged as a clear winner for the most
          popular framework on the Internet. It was decided, I had to
          familiarize myself and build something with it. The end goal of this
          journey is to have a full stack website with ReactJS for the front
          end. In its current form, this website is version 0.5 of that end
          goal. As I add more full stack components to this site, I will update
          the version number.
        </p>
        <p className="mt-5">
          In this first iteration, this site is entirely static. I hope to
          change that. I am also aiming to use this website as a front end for
          small Python projects.
        </p>
        <p className="mt-5">
          Why am I putting all this on the site, you may ask. It's so that I
          hold myself to it. I have always been late to all parties all my life,
          including and especially this one. But a little accountability goes a
          long way toward learning new things and becoming a better version of
          yourself. This site is my attempt at that. As this site nears
          completion, I will replace this page with one that will explain the
          whole stack and why I chose what I chose.
        </p>
        <p className="mt-5">
          If you just stumbled upon this website, <MdWavingHand />. In the
          coming days and weeks, I plan to deploy more functionality until I
          reach my goal of a full stack website. Please keep coming back and
          check out the progress. In the mean time, stop by and say hello on
          your social media of choice! Links are in the footer.
        </p>
      </Container>
    </>
  )
}

export default About
