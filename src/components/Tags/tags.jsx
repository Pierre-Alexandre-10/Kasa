import { useState, useEffect } from "react";

function Tags({ tagsId }) {
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
    const filteredItem = items.find((item) => item.id === tagsId);

    return (
        <div className="tags">
            {filteredItem ? (
                <div className="tags__content">
                    {filteredItem.tags.map((tag, index) => (
                        <h4 key={index}>{tag}</h4>
                    ))}
                </div>
            ) : (
                <p></p>
            )}
        </div>
    );
}

export default Tags;
