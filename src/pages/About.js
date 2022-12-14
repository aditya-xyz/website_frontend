import Container from "react-bootstrap/esm/Container"

const About = () => {
  return (
    <>
      <Container>
        <h1 className="display-6 text-center mt-5">Hi there!</h1>
        <p className="lead mt-3">
          I am Aditya. I am a software engineer, dog lover, coffee addict, fan
          of the outdoors, and a photography enthusiast.
        </p>
        <p className="mt-4">
          As a fullstack .Net developer by trade but fullstack Django-React
          developer by passion, I developed this website using React.js for the
          frontend and Django rest API for the backend.
        </p>
        <p className="mt-4">
          I am self taught when it comes to Python/Django and React. I have
          always been fascinated by Python's simplicity and React's responsive
          UI. So when I wanted to build a website, I decided to dive deep in and
          learn both. This has been one of the most fun projects I have ever
          taken on!
        </p>
        <p className="mt-4">
          When I am not working on learning new technologies, you will find me
          on adventures with my dog, Pixel. She is my ride or die, exercise
          buddy, and photography model. Check out her Instagram page in the
          footer!
        </p>
      </Container>
    </>
  )
}

export default About
