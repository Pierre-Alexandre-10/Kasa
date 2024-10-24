import React from "react";
import Header from "../../components/Header/header";
import Banner from "../../components/Banner/banner";
import Image from "../../assets/images/Banner_Img.png";
import Gallery from "../../components/Gallery/gallery";
import Footer from "../../components/Footer/footer";

function Home() {
    return (
        <div className="home">
            <div className="header__main">
                <header>
                    <Header />
                </header>
                <main>
                    <Banner
                        image={Image}
                        texte="Chez vous, partout et ailleurs"
                        alt="Image de la bannière"
                    />
                    <Gallery />
                </main>
            </div>
            <footer>
                <Footer />
            </footer>
        </div>
    );
}

export default Home;
