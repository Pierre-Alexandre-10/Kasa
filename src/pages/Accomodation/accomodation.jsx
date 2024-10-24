import React from "react";
import Header from "../../components/Header/header";
import FicheLogement from "../../components/Fiche_Logement/ficheLogement";
import Footer from "../../components/Footer/footer";

function Accomodation() {
    return (
        <div>
            <div className="header__main">
                <header>
                    <Header />
                </header>
                <main>
                    <FicheLogement />
                </main>
            </div>
            <footer>
                <Footer />
            </footer>
        </div>
    );
}

export default Accomodation;
