import Gallery from "./Gallery"

const Shows = (props) => {
    return (
        <section id="movies">
            {props.queries.map((q) => {
                      return <Gallery key={q} query={q} cat="series"></Gallery>
            })}
        </section>
    )
}

export default Shows