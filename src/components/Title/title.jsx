import { useState, useEffect } from "react";

function Title({ titleId }) {
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
    const filteredItem = items.find((item) => item.id === titleId);

    return (
        <div className="title">
            {filteredItem ? (
                <div className="title__content">
                    <h2>{filteredItem.title}</h2>
                    <h3>{filteredItem.location}</h3>
                </div>
            ) : (
                <p></p>
            )}
        </div>
    );
}

export default Title;
