import React, { useState, useEffect } from "react";
import Header from "../../components/Header/header";
import Banner from "../../components/Banner/banner";
import Image from "../../assets/images/banner2_Img.svg";
import Footer from "../../components/Footer/footer";
import Collapse from "../../components/Collapse/collapse";

function About() {
    //Stock les données JSON récupérées
    const [collapseData, setCollapseData] = useState([]);

    // Récupère les données json via fetch
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(`${process.env.PUBLIC_URL}/data/collapse.json`);
                if (!response.ok) {
                    throw new Error("Failed to fetch data");
                }
                const data = await response.json();
                setCollapseData(data);
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        };

        fetchData();
    }, []); // Ne pas oublier dépendance vide pour éxécution unique

    return (
        <div className="about">
            <div className="header__main">
                <Header />
                <Banner image={Image} alt="Image de bannière" />
                <div className="collapse">
                    <div className="collapse__down">
                        {collapseData.map((data) => (
                            <div key={data.id}>
                                <Collapse content={data.content} title={data.title} />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default About;
