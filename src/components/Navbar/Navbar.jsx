import "./Navbar.scss"
import { NavLink } from "react-router-dom"

const Navbar = () => {
    return (
        <nav className="navbar">
            <NavLink className={({ isActive }) => isActive ? "navbar__link--active" : "navbar__link"} to="/">Home</NavLink>
            <NavLink className={({ isActive }) => isActive ? "navbar__link--active" : "navbar__link"} to="/history">History</NavLink>
            <NavLink className={({ isActive }) => isActive ? "navbar__link--active" : "navbar__link"} to="/meettheband">Meet The Band</NavLink>
            <NavLink className={({ isActive }) => isActive ? "navbar__link--active" : "navbar__link"} to="/ensembles">Ensembles</NavLink>
            <NavLink className={({ isActive }) => isActive ? "navbar__link--active" : "navbar__link"} to="/media">Media</NavLink>
            <NavLink className={({ isActive }) => isActive ? "navbar__link--active" : "navbar__link"} to="/jobs">Jobs</NavLink>
            <NavLink className={({ isActive }) => isActive ? "navbar__link--active" : "navbar__link"} to="/contact">Contact</NavLink>

        </nav>

    )
}

export default Navbar