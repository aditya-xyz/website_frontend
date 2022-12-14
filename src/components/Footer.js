import Container from "react-bootstrap/esm/Container"
import { FaGithub } from "react-icons/fa"
import { FaLinkedin } from "react-icons/fa"
import { FaInstagram } from "react-icons/fa"
import { FaTwitter } from "react-icons/fa"
import { FiCoffee } from "react-icons/fi"
import { FaReact } from "react-icons/fa"
import { FaNodeJs } from "react-icons/fa"

const Footer = () => {
  return (
    <>
      <Container className="mt-auto">
        <footer className="py-3 my-4">
          <ul className="nav justify-content-center border-bottom pb-3 mb-3">
            <li className="nav-item">
              <a
                className="nav-link px-2 text-muted"
                href="https://www.linkedin.com/in/aditya-fullstack/"
                target="_blank"
                rel="noreferrer"
              >
                <h3>
                  <FaLinkedin />
                </h3>
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link px-2 text-muted"
                href="https://github.com/aditya-xyz"
                target="_blank"
                rel="noreferrer"
              >
                <h3>
                  <FaGithub />
                </h3>
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link px-2 text-muted"
                href="https://twitter.com/adityapatil_xyz"
                target="_blank"
                rel="noreferrer"
              >
                <h3>
                  <FaTwitter />
                </h3>
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link px-2 text-muted"
                href="https://instagram.com/pixelthegsd"
                target="_blank"
                rel="noreferrer"
              >
                <h3>
                  <FaInstagram />
                </h3>
              </a>
            </li>
          </ul>
          <p className="text-center text-muted">
            Powered by <FiCoffee />, <FaReact />, and <FaNodeJs />
          </p>
          <p className="text-center text-muted">
            © {new Date().getFullYear()} Aditya Patil
          </p>
        </footer>
      </Container>
    </>
  )
}

export default Footer
