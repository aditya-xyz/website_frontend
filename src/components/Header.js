import Container from "react-bootstrap/Container"
import Nav from "react-bootstrap/Nav"
import Navbar from "react-bootstrap/Navbar"
import Navitem from "./Navitem"

const Header = ({ links }) => {
  return (
    <Navbar bg="dark" variant="dark" className="navbar navbar-expand-lg">
      <Container>
        <Navbar.Brand href="/">aditya</Navbar.Brand>
        <Nav className="ms-auto">
          {links.map((link) => (
            <Navitem key={link.id} link={link} />
          ))}
        </Nav>
      </Container>
    </Navbar>
  )
}

export default Header
