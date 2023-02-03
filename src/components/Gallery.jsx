import { Component } from "react";
import { Alert, Carousel, Container, Row, Spinner } from "react-bootstrap";
import MovieCard from "./MovieCard"

class Gallery extends Component {
    state = {
        movies: [],
        isLoading: true,
        errorMsg: ""
    }

    capitalize = (str) => {
        return str.split(" ").map(s => s.charAt(0).toUpperCase() + s.slice(1)).join(" ") // can't live without a little bit of jank
    }

    getMovies = async () => {
        try {
            const res = await fetch(`http://www.omdbapi.com/?apikey=ffbd3a91&type=movie&s=${encodeURIComponent(this.props.query)}`)
            if (res.ok) {
                const results = await res.json()
                if (results.Response === "True") {
                    this.setState({...this.state, isLoading: false, movies: results.Search})
                } else {
                    this.setState({...this.state, isLoading: false, errorMsg: "No movies found"})
                }
            } else {
                this.setState({isLoading: false, errorMsg: (res.status + res.statusText)})
            }
        } catch (error) {
            this.setState({isLoading: false, errorMsg: error.message})
        }
    }

    componentDidMount() {
        this.getMovies()
    }

    fillCarousel = (per) => {
        let carItems = []
        for (let i = 0; i < Math.ceil(this.state.movies.length/per); i++) {
            carItems.push(<Carousel.Item key={i}>
                    	    <Row className="py-2 mx-n1">
                                {this.state.movies?.slice(per*i, per*i+per).map((m) => {
                                    return <MovieCard key={m.imdbID} movie={m} />
                                })}
                            </Row>
                        </Carousel.Item>)
        }

        return carItems
    }

    makeCarousels = () => {
        return (
        <>
            <Carousel className="d-md-none" id={this.props.query.slice(0,3) + "-sm"} interval={null}>
                {this.fillCarousel(2)}
            </Carousel>
            <Carousel className="d-none d-md-block d-lg-none" id={this.props.query.slice(0,3) + "-md"} interval={null}>
                {this.fillCarousel(4)}
            </Carousel>
            <Carousel className="d-none d-lg-block" id={this.props.query.slice(0,3) + "-lg"} interval={null}>
                {this.fillCarousel(6)}
            </Carousel>
        </>
        )
    }

    render() {
        return (
            <Container fluid className="px-5 pt-5 pb-2">
                <h2>{this.capitalize(this.props.query)}</h2>
                {this.state.isLoading && <Spinner animation="grow" variant="light"></Spinner>}
                {this.state.errorMsg && <Alert variant="danger">{this.state.errorMsg}</Alert>}
                {!(this.state.isLoading || this.state.errorMsg) && this.makeCarousels()}
            </Container>
        )
    }
}

export default Gallery