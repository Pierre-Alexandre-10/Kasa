import { useParams } from "react-router-dom";
import Carrousel from "../Carrousel/carrousel";
import Title from "../Title/title";
import Tags from "../Tags/tags";
import Host from "../Host/host";
import Rate from "../Rate/rate";

function FicheLogement() {
    const { id } = useParams();

    return (
        <div>
            <Carrousel accommodationId={id} />
            <div className="accomodation__info">
                <div>
                    <Title titleId={id} />
                    <Tags tagsId={id} />
                </div>
                <div className="accomodation__info__right">
                    <Host hostId={id} />
                    <Rate rateId={id} />
                </div>
            </div>
        </div>
    );
}

export default FicheLogement;
