import { NavLink } from "react-router-dom";

function Nav() {
    return (
        <nav className="header__nav">
            <NavLink
                to="/"
                className={({ isActive }) =>
                    isActive ? "header__nav__home active" : "header__nav__home"
                }
            >
                Accueil
            </NavLink>
            <NavLink
                to="/about"
                className={({ isActive }) =>
                    isActive ? "header__nav__about active" : "header__nav__about"
                }
            >
                A propos
            </NavLink>
        </nav>
    );
}

export default Nav;
