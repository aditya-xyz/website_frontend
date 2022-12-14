import { NavLink } from "react-router-dom"

const Navitem = ({ link }) => {
  return (
    <NavLink
      to={link.path}
      className={(isActive) => "nav-link" + (!isActive ? " unselected" : "")}
    >
      {link.text}
    </NavLink>
  )
}

export default Navitem
