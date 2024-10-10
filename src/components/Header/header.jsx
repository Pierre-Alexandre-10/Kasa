import Logo from "../../assets/images/LOGO.svg";
import Nav from "../Nav/nav";

function Header() {
    return (
        <header className="header">
            <img src={Logo} alt="Logo de l'agence Kasa" className="header__img" />
            <Nav />
        </header>
    );
}

export default Header;
