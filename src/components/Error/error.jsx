import { Link } from "react-router-dom";

function ErrorPage() {
    return (
        <div className="error">
            <div className="error__container">
                <p className="error__container__number">404</p>
                <p className="error__container__txt">
                    Oups! La page que vus demandez n'existe pas.
                </p>
                <Link to="/" className="error__container__link">
                    Retourner sur la page d'accueil
                </Link>
            </div>
        </div>
    );
}

export default ErrorPage;
