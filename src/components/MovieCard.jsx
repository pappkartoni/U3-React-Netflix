import { Component } from "react";
import {Card, Col} from "react-bootstrap"
import { Link } from "react-router-dom";

class MovieCard extends Component {
    render() {
        const m = this.props.movie
        return (
            <Col xs={6} md={3} lg={2} className="px-1">
                <Card className="mb-2">
                    <div className="card-img-wrapper">
                        <Link to={`/details/${m.imdbID}/`}>
                            <Card.Img variant="top" src={m.Poster} />
                        </Link>
                    </div>
                    <Card.Body>
                        <div className="d-flex flex-column">
                            <Card.Title>{m.Title}</Card.Title>
                            <Card.Text>Year: {m.Year} - Type: {m.Type}</Card.Text>
                        </div>
                    </Card.Body>
                </Card>
            </Col>
        )
    }
}

export default MovieCard