import React from "react";
import Header from "../../components/Header/header";
import Banner from "../../components/Banner/banner";
import Image from "../../assets/images/banner2_Img.svg";
import Footer from "../../components/Footer/footer";
import Collapse from "../../components/Collapse/collapse";
import CollapseData from "../../data/collapse.json";

function About() {
    return (
        <div className="about">
            <div className="header__main">
                <Header />
                <Banner image={Image} alt="Image de bannière" />
                <div className="collapse">
                    <div className="collapse__down">
                        {CollapseData.map((data) => {
                            return (
                                <div key={data.id}>
                                    <Collapse content={data.content} title={data.title} />
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default About;
