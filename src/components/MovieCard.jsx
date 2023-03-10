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
                        <Link to={`/details/${m.id}/`}>
                            <Card.Img variant="top" src={m.poster} />
                        </Link>
                    </div>
                    <Card.Body>
                        <div className="d-flex flex-column">
                            <Card.Title>{m.title}</Card.Title>
                            <Card.Text>Year: {m.year} - Type: {m.type}</Card.Text>
                        </div>
                    </Card.Body>
                </Card>
            </Col>
        )
    }
}

export default MovieCard