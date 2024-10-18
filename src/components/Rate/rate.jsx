import fullStar from "../../assets/images/fullStar.svg";
import emptyStar from "../../assets/images/emptyStar.svg";

function Rate({ filter, notes }) {
    return (
        <div className="rating">
            {/* {content} */}
            {filter ? (
                <div className="rating__content">
                    {notes.map((note) => (
                        <div key={note} className="rating__content_star">
                            {filter.rating >= note ? (
                                <img className="fullStar" src={fullStar} alt={filter.rating} />
                            ) : (
                                <img className="emptyStar" src={emptyStar} alt={filter.rating} />
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

// {
//     notes.map((note) => (
//         <div key={note} className="rating__content_star">
//             {filteredItem.rating >= note ? (
//                 <img className="fullStar" src={fullStar} alt={filteredItem.rating} />
//             ) : (
//                 <img className="emptyStar" src={emptyStar} alt={filteredItem.rating} />
//             )}
//         </div>
//     ));
// }
