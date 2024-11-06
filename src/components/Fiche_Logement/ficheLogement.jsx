import { useParams, useNavigate } from "react-router-dom";
import Carrousel from "../Carrousel/carrousel";
import Title from "../Title/title";
import Tags from "../Tags/tags";
import Host from "../Host/host";
import Rate from "../Rate/rate";
import Collapse from "../Collapse/collapse";
import { useEffect, useState } from "react";

function FicheLogement() {
    // Récupérer l'id dans l'url
    const { id } = useParams();

    // Stocker le données récupérés
    const [items, setItem] = useState([]);

    // Suivre l'état de chargement des données pour la page erreur
    const [loading, setLoading] = useState(true);

    // Tableau de valeur comparative pour la notation
    const notes = [1, 2, 3, 4, 5];

    // Récupère les données json via fetch après création composant
    useEffect(() => {
        const fetchData = async () => {
            try {
                // process.env.PUBLIC_URL génère l'url complète pour que le json soit accessible
                const response = await fetch(`${process.env.PUBLIC_URL}/data/accomodation.json`);
                if (!response.ok) {
                    throw new Error("Failed to fetch data");
                }
                // Convertir le json en objet javascript
                const data = await response.json();
                setItem(data);
            } catch (error) {
                console.error("Error fetching data:", error);
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, []);

    const filteredItem = items.find((item) => item.id === id);
    const navigate = useNavigate();

    useEffect(() => {
        // Si le chargement est terminé est que aucun élément ne correspond à l'ID
        if (!loading && !filteredItem) {
            navigate("*");
        }
    }, [loading, filteredItem, navigate]); // Assure que l'effet se déclenche correctement lorsque ces valeurs changent

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
