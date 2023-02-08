import Gallery from "./Gallery"

const Movies = (props) => {
    return (
        <section id="movies">
            {props.queries.map((q) => {
                      return <Gallery key={q} query={q} cat="movie" filterQuery={props.filterQuery}></Gallery>
            })}
        </section>
    )
}

export default Movies