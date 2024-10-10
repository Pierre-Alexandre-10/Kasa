import { Link } from "react-router-dom";
import Accomodation from "../../data/accomodation.json";
import Card from "../Card/card";

function Gallery() {
    return (
        <div className="gallery">
            <div className="gallery__card">
                {Accomodation.map((logement) => {
                    return (
                        <article key={logement.id}>
                            <Link to={`/logement/${logement.id}`}>
                                <Card image={logement.cover} title={logement.title}></Card>
                            </Link>
                        </article>
                    );
                })}
            </div>
        </div>
    );
}

export default Gallery;
