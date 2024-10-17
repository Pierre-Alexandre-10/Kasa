import { useState, useEffect } from "react";
import fullStar from "../../assets/images/fullStar.svg";
import emptyStar from "../../assets/images/emptyStar.svg";

function Rate({ rateId }) {
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
    const filteredItem = items.find((item) => item.id === rateId);
    const notes = [1, 2, 3, 4, 5];

    return (
        <div className="rating">
            {filteredItem ? (
                <div className="rating__content">
                    {notes.map((note) => (
                        <div key={note} className="rating__content_star">
                            {filteredItem.rating >= note ? (
                                <img
                                    className="fullStar"
                                    src={fullStar}
                                    alt={filteredItem.rating}
                                />
                            ) : (
                                <img
                                    className="emptyStar"
                                    src={emptyStar}
                                    alt={filteredItem.rating}
                                />
                            )}
                        </div>
                    ))}
                </div>
            ) : (
                <p></p>
            )}
        </div>
    );
}

export default Rate;
