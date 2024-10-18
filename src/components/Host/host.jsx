function Host({ filter }) {
    return (
        <div className="host">
            {filter ? (
                <div className="host__content">
                    <p>{filter.host.name}</p>
                    <img src={filter.host.picture} alt={filter.host.name} />
                </div>
            ) : (
                <p>Hôte non trouvée...</p>
            )}
        </div>
    );
}

export default Host;
