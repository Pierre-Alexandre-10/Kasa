import { useState } from "react";

function Collapse({ title, content }) {
    const [isOpen, setIsOpen] = useState(false);
    const toggleCollapse = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className="collapse__dropdown__container">
            <div className="collapse__dropdown__up">
                <h2>{title}</h2>
                <span onClick={toggleCollapse}>
                    {isOpen ? (
                        <i className="fa-solid fa-chevron-up"></i>
                    ) : (
                        <i className="fa-solid fa-chevron-down"></i>
                    )}
                </span>
            </div>
            <div className="collapse__dropdown__content">{isOpen && <p>{content}</p>}</div>
        </div>
    );
}

export default Collapse;
