import { useParams } from "react-router-dom";
import Carrousel from "../Carrousel/carrousel";
import Title from "../Title/title";
import Tags from "../Tags/tags";
import Host from "../Host/host";
import Rate from "../Rate/rate";
import Collapse from "../Collapse/collapse";
import { useEffect, useState } from "react";

function FicheLogement() {
    const { id } = useParams();

    const [items, setItem] = useState([]);

    const notes = [1, 2, 3, 4, 5];

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
                setItem(data);
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        };

        fetchData();
    }, []);

    const filteredItem = items.find((item) => item.id === id);
    // console.log(filteredItem);

    return filteredItem ? (
        <div className="accomodationPage">
            <Carrousel filter={filteredItem} />
            <div className="accomodationPage__info">
                <div>
                    <Title title={filteredItem.title} location={filteredItem.location} />
                    <Tags filter={filteredItem} />
                </div>
                <div className="accomodationPage__info__right">
                    <Host filter={filteredItem} />
                    <Rate filter={filteredItem} notes={notes} />
                </div>
            </div>
            <div className="accomodationPage__collapse">
                <div className="accomodationPage__collapse__description">
                    <Collapse
                        title="Description"
                        content={
                            filteredItem ? (
                                <div className="accomodationPage__collapse__description__content">
                                    <span>{filteredItem.description}</span>
                                </div>
                            ) : (
                                <p>Chargement...</p>
                            )
                        }
                    />
                </div>
                <div className="accomodationPage__collapse__equipement">
                    <Collapse
                        title="Équipement"
                        content={
                            filteredItem ? (
                                <div className="accomodationPage__collapse__equipement__content">
                                    {filteredItem.equipments.map((equipement, index) => (
                                        <span key={index}>{equipement}</span>
                                    ))}
                                </div>
                            ) : (
                                <p>Chargement...</p>
                            )
                        }
                    />
                </div>
            </div>
        </div>
    ) : (
        <p>Chargement...</p>
    );
}

export default FicheLogement;
