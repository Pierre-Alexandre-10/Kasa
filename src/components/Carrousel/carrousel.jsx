import { useEffect, useState } from "react";

function Carrousel({ accommodationId }) {
    const [items, setItems] = useState([]);
    const [currentIndex, setCurrentIndex] = useState(0);

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

    const selectedItem = items.find((item) => item.id === accommodationId);
    const hasPictures = selectedItem && selectedItem.pictures && selectedItem.pictures.length > 0;

    const nextPicture = () => {
        // Passe à l'image suivante
        setCurrentIndex((prevIndex) =>
            // Vérifie si on se trouve à la derniere image du tableau
            prevIndex === selectedItem.pictures.length - 1 ? 0 : prevIndex + 1
        );
    };

    const prevPicture = () => {
        // Revient à l'image précédente
        setCurrentIndex((prevIndex) =>
            // Vérifie si on se trouve à la premiere image du tableau
            prevIndex === 0 ? selectedItem.pictures.length - 1 : prevIndex - 1
        );
    };

    return (
        <div className="carrousel">
            <div className="carrousel__container">
                <div className="carrousel__items">
                    {hasPictures ? (
                        <div className="carrousel__items__content">
                            <img src={selectedItem.pictures[currentIndex]} alt={currentIndex} />
                            <div className="carrousel__items__content__counter">
                                <p>
                                    {hasPictures && selectedItem.pictures.length > 1 && (
                                        <span>
                                            {currentIndex + 1} / {selectedItem.pictures.length}
                                        </span>
                                    )}
                                </p>
                            </div>
                        </div>
                    ) : (
                        <p></p>
                    )}
                </div>
            </div>

            {hasPictures && selectedItem.pictures.length > 1 && (
                <div className="button">
                    <div className="button__left">
                        <i onClick={prevPicture} className="fa-solid fa-chevron-left"></i>
                    </div>
                    <div className="button__right">
                        <i onClick={nextPicture} className="fa-solid fa-chevron-right"></i>
                    </div>
                </div>
            )}
        </div>
    );
}

export default Carrousel;
