function Movie(props) {
    console.log(props);
    return (
        <div>
            <h1>Lord of the Rings: {props.title}</h1>
            <p>{props.hours}:{props.minutes}</p>
        </div>
    )
}

export default Movie;