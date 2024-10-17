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

    return (
        <div className="accomodationPage">
            <Carrousel accommodationId={id} />
            <div className="accomodationPage__info">
                <div>
                    <Title titleId={id} />
                    <Tags tagsId={id} />
                </div>
                <div className="accomodationPage__info__right">
                    <Host hostId={id} />
                    <Rate rateId={id} />
                </div>
            </div>
            <div className="accomodationPage__collapse">
                <div className="accomodationPage__collapse__description">
                    <Collapse
                        contentId={id}
                        title="Description"
                        content={
                            filteredItem ? (
                                <div>
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
                        contentId={id}
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
    );
}

export default FicheLogement;
