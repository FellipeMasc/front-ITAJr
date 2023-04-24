import { NavLink } from "react-router-dom"
import logoJR from "../assets/images/AviaoBranco.png"
import "../assets/css/navbar.css"
import { useRef } from "react"
export const Navbar = () => {
    const button = useRef(null)

    const changeUrl_list = (e) => {
        console.log(window.location.href)
        window.location.href = "http://localhost:3000/#list"
    }
    const changeUrl_about = (e) => {
        console.log(window.location.href)
        window.location.href = "http://localhost:3000/#about"
    }

    /* const changeList = (e) => {
        window.location.href = "http://localhost:3000/#list"
    } */
    return (
        <nav className="navbar">
            <div className="nav-center">
                <div className="nav-header">
                    <h1>ITA</h1>
                    <h2>JÚNIOR</h2>
                    <img src={logoJR} className="nav-logo" alt="Aviao"></img>
                </div>
                <ul className="nav-links">
                    <li>
                        <NavLink
                            to="/"
                            className={({ isActive }) => (isActive ? "link-active" : "link")}
                        >
                            Home
                        </NavLink>
                    </li>
                    <li>
                        <a
                            href="#list"
                            className="button-icon"
                            ref={button}
                            onClick={changeUrl_list}
                        >
                            Services
                        </a>
                    </li>
                    <li>
                        <a
                            href="#about"
                            className="button-icon"
                            ref={button}
                            onClick={changeUrl_about}
                        >
                            About
                        </a>
                    </li>
                    <li>
                        <NavLink
                            to="/contact"
                            className={({ isActive }) => (isActive ? "link-active" : "link")}
                        >
                            Contacts
                        </NavLink>
                    </li>
                    <li className="login-link">
                        <NavLink
                            to="/login"
                            className={({ isActive }) => (isActive ? "link-active" : "link")}
                        >
                            <div className="login-button">
                                <span className="material-symbols-outlined">login</span>
                                Login
                            </div>
                        </NavLink>
                    </li>
                </ul>
                {/* os icones desse componente foram importadas do fontawesome, o link está no root */}
                <ul className="nav-icons">
                    <li>
                        <a
                            href="https://www.facebook.com/itajunior.ej/"
                            target="_blank"
                            rel="noreferrer"
                            className="nav-icon"
                        >
                            <i className={"fab fa-facebook"}></i>
                        </a>
                    </li>
                    <li>
                        <a
                            href="https://www.instagram.com/itajunior.ej/"
                            target="_blank"
                            rel="noreferrer"
                            className="nav-icon"
                        >
                            <i className={"fab fa-instagram"}></i>
                        </a>
                    </li>
                    <li>
                        <a
                            href="https://www.linkedin.com/company/itajunior/?originalSubdomain=br"
                            target="_blank"
                            rel="noreferrer"
                            className="nav-icon"
                        >
                            <i className={"fab fa-linkedin"}></i>
                        </a>
                    </li>
                </ul>
            </div>
        </nav>
    )
}
