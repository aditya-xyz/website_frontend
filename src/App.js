import "bootstrap/dist/css/bootstrap.min.css"
import Footer from "./components/Footer"
import NavBar from "./components/NavBar"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import { createBrowserHistory } from "history"
import { ThemeProvider, createTheme } from "@mui/material/styles"
import CssBaseline from "@mui/material/CssBaseline"
import Home from "./pages/Home"
import About from "./pages/About"
import Resume from "./pages/Resume"
import Projects from "./pages/Projects"
import Container from "react-bootstrap/esm/Container"

function App() {
  const browserHistory = createBrowserHistory()

  const darkTheme = createTheme({
    palette: {
      mode: "dark",
    },
  })

  const links = [
    {
      id: 1,
      text: "About this site",
      path: "/about",
    },
    {
      id: 2,
      text: "Resume",
      path: "/resume",
    },
    // {
    //   id: 3,
    //   text: "Projects",
    //   path: "/projects",
    // },
  ]

  return (
    <Container className="d-flex flex-column min-vh-100 p-3 mx-auto flex-column">
      <ThemeProvider theme={darkTheme}>
        <CssBaseline />
        <Router history={browserHistory}>
          <NavBar links={links} />
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/about" element={<About />} />
            <Route exact path="/resume" element={<Resume />} />
            <Route exact path="/projects" element={<Projects />} />
          </Routes>
          <Footer />
        </Router>
      </ThemeProvider>
    </Container>
  )
}

export default App
