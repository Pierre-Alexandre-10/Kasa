function Tags({ filter }) {
    return (
        <div className="tags">
            {filter ? (
                <div className="tags__content">
                    {filter.tags.map((tag, index) => (
                        <h4 key={index}>{tag}</h4>
                    ))}
                </div>
            ) : (
                <p></p>
            )}
        </div>
    );
}

export default Tags;
