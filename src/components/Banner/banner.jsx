function Banner({ image, texte, alt }) {
    return (
        <div className="banner">
            <img className="banner__img" src={image} alt={alt} />
            <h1 className="banner__txt"> {texte}</h1>
        </div>
    );
}

export default Banner;
