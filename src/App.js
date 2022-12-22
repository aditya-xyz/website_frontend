import About from "./components/About"
import Projects from "./components/Projects"
import Contact from "./components/Contact"
import Experience from "./components/Experience"
import Home from "./components/Home"
import NavBar from "./components/NavBar"

function App() {
  return (
    <div>
      <NavBar />
      <Home />
      <Experience />
      <Projects />
      <About />
      <Contact />
    </div>
  )
}

export default App
