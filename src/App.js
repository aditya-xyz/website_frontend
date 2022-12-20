import About from "./components/About"
import Blog from "./components/Blog"
import Contact from "./components/Contact"
import Experience from "./components/Experience"
import Home from "./components/Home"
import NavBar from "./components/NavBar"

function App() {
  return (
    <div>
      <NavBar />
      <Home />
      <About />
      <Blog />
      <Experience />
      <Contact />
    </div>
  )
}

export default App
