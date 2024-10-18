function Title({ title, location }) {
    return (
        <div className="title">
            <div className="title__content">
                <h2>{title}</h2>
                <h3>{location}</h3>
            </div>
        </div>
    );
    // return (
    //     <div className="title">
    //         <div className="title__content">
    //             <h2>{title}</h2>
    //             <h3>{location}</h3>
    //         </div>
    //     </div>
    // );
}

export default Title;
