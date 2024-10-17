import { useState, useEffect } from "react";

function Host({ hostId }) {
    const [items, setItems] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch("/data/accomodation.json");
                if (!response.ok) {
                    throw new Error("Failed to fetch data");
                }
                const data = await response.json();
                setItems(data);
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        };
        fetchData();
    }, []);

    // Filtrer les titres slon l'ID dans l'url
    const filteredItem = items.find((item) => item.id === hostId);

    return (
        <div className="host">
            {filteredItem ? (
                <div className="host__content">
                    <p>{filteredItem.host.name}</p>
                    <img src={filteredItem.host.picture} alt={filteredItem.host.name} />
                </div>
            ) : (
                <p>Hôte non trouvée...</p>
            )}
        </div>
    );
}

export default Host;
