function Card({ image, title }) {
    return (
        <div className="card">
            <img className="card__img" src={image} alt={title} />
            <div className="card__gradient"></div>
            <h2 className="card__title">{title}</h2>
        </div>
    );
}

export default Card;
