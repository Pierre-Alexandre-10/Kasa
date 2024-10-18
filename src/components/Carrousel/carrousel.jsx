import { useState } from "react";

function Carrousel({ filter }) {
    const [currentIndex, setCurrentIndex] = useState(0);
    const hasPictures = filter && filter.pictures && filter.pictures.length > 0;

    const nextPicture = () => {
        // Passe à l'image suivante
        setCurrentIndex((prevIndex) =>
            // Vérifie si on se trouve à la derniere image du tableau
            prevIndex === filter.pictures.length - 1 ? 0 : prevIndex + 1
        );
    };

    const prevPicture = () => {
        // Revient à l'image précédente
        setCurrentIndex((prevIndex) =>
            // Vérifie si on se trouve à la premiere image du tableau
            prevIndex === 0 ? filter.pictures.length - 1 : prevIndex - 1
        );
    };

    return (
        <div className="carrousel">
            <div className="carrousel__container">
                <div className="carrousel__items">
                    {hasPictures ? (
                        <div className="carrousel__items__content">
                            <img src={filter.pictures[currentIndex]} alt={currentIndex} />
                            <div className="carrousel__items__content__counter">
                                <p>
                                    {hasPictures && filter.pictures.length > 1 && (
                                        <span>
                                            {currentIndex + 1} / {filter.pictures.length}
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

            {hasPictures && filter.pictures.length > 1 && (
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
