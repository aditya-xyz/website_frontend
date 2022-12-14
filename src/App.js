import "bootstrap/dist/css/bootstrap.min.css"
import Container from "react-bootstrap/esm/Container"
import Footer from "./components/Footer"
import Header from "./components/Header"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import { createBrowserHistory } from "history"
import Home from "./pages/Home"
import About from "./pages/About"
import ContactMe from "./pages/ContactMe"
import Resume from "./pages/Resume"

function App() {
  const browserHistory = createBrowserHistory()
  const links = [
    {
      id: 1,
      text: "About Me",
      path: "/about",
    },
    {
      id: 2,
      text: "Resume",
      path: "/resume",
    },
    {
      id: 3,
      text: "Contact Me",
      path: "/contactme",
    },
  ]

  return (
    <Container className="d-flex flex-column min-vh-100 p-3 mx-auto flex-column">
      <Router history={browserHistory}>
        <Header links={links} />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/about" element={<About />} />
          <Route exact path="/contactme" element={<ContactMe />} />
          <Route exact path="/resume" element={<Resume />} />
        </Routes>
      </Router>
      <Footer />
    </Container>
  )
}

export default App
