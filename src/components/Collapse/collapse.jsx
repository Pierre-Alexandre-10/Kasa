import { useState } from "react";

function Collapse(props) {
    // Déclaration de la position du collapse ouvert ou fermer
    const [isOpen, setIsOpen] = useState(false);
    // Fonction pour inverser l'état ouvert ou fermer
    const toggleCollapse = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className="collapse__dropdown__container">
            <div className="collapse__dropdown__up">
                <h2>{props.title}</h2>
                <span onClick={toggleCollapse}>
                    {isOpen ? (
                        <i className="fa-solid fa-chevron-up"></i>
                    ) : (
                        <i className="fa-solid fa-chevron-down"></i>
                    )}
                </span>
            </div>
            <div className="collapse__dropdown__content">{isOpen && <p>{props.content}</p>}</div>
        </div>
    );
}

export default Collapse;
