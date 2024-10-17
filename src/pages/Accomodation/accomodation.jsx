import React from "react";
import Header from "../../components/Header/header";
import FicheLogement from "../../components/Fiche_Logement/ficheLogement";
import Footer from "../../components/Footer/footer";

function Accomodation() {
    return (
        <div>
            <div className="header__main">
                <Header />
                <main>
                    <FicheLogement />
                </main>
            </div>
            <Footer />
        </div>
    );
}

export default Accomodation;
