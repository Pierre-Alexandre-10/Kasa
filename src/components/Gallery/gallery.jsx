import { Link } from "react-router-dom";
import Card from "../Card/card";
import { useEffect, useState } from "react";

function Gallery() {
    //Stock les données JSON récupérées
    const [accomodationData, setAccomodationData] = useState([]);

    // Récupère les données json via fetch après création composant
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch("/data/accomodation.json");
                if (!response.ok) {
                    throw new Error("Failed to fetch data");
                }
                // Convertir le json en objet javascript
                const data = await response.json();
                setAccomodationData(data);
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        };

        fetchData();
    }, []);

    return (
        <div className="gallery">
            <div className="gallery__card">
                {accomodationData.map((logement) => {
                    return (
                        <article key={logement.id}>
                            <Link to={`/accomodation/${logement.id}`}>
                                <Card image={logement.cover} title={logement.title}></Card>
                            </Link>
                        </article>
                    );
                })}
            </div>
        </div>
    );
}

export default Gallery;
