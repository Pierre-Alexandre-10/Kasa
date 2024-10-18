import Logo from "../../assets/images/LOGOfooter.svg";

function Footer() {
    return (
        <footer className="footer">
            <img src={Logo} alt="Logo de Kasa" className="footer__img" />
            <div className="footer__txt">© 2020 Kasa. All Rights reserved</div>
        </footer>
    );
}

export default Footer;
