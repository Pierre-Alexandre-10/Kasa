import React from "react";
import { useParams } from "react-router-dom";
import Header from "../../components/Header/header";
import AccomodationCarrousel from "../../components/Carrousel/carrousel";
import Footer from "../../components/Footer/footer";

function Accomodation() {
    const { id } = useParams();
    return (
        <div>
            <div className="header__main">
                <Header />
                <main>
                    {/* <AccomodationCarrousel /> */}
                    <AccomodationCarrousel accommodationId={id} />
                </main>
            </div>
            <Footer />
        </div>
    );
    // return (
    //     <div>
    //         <div className="header__main">
    //             <Header />
    //             <main>
    //                 <AccomodationCarrousel />
    //             </main>
    //         </div>
    //     </div>
    // );
}

export default Accomodation;
