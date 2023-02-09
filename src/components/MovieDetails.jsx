import { useEffect, useState } from 'react'
import { Card, Col, Container, Row, Alert, Spinner } from 'react-bootstrap'
import { useParams } from 'react-router-dom'
import CommentList from './CommentList'

const MovieDeatils = () => {
    const id = useParams().id
    const [details, setDetails] = useState(null)
    const [isLoading, setIsLoading] = useState(true)
    const [hasError, setHasError] = useState(false)
    const [comments, setComments] = useState([])

    console.log(id)

    const getDetails = async () => {
        try {
            const res = await fetch(`http://www.omdbapi.com/?apikey=ffbd3a91&i=${id}`)
            if (res.ok) {
                const data = await res.json()
                setDetails(data)
            /*     setIsLoading(false) */
            }
        } catch (error) {
            console.log(error)
            setIsLoading(false)
            setHasError(true)
        }
    }

    const getComments = async () => {
        try {
            const res = await fetch("https://striveschool-api.herokuapp.com/api/comments/" + id, {headers: {
                "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2M2M5MzBmNmU3MzczODAwMTUzNzQzNzMiLCJpYXQiOjE2NzUzNDE1NzUsImV4cCI6MTY3NjU1MTE3NX0.WmNIWEtNArJGmqpfnbxs-o5HyEBAj95Z8nTAfVOr0_o"
                }})
            if (res.ok) {
                const data = await res.json()
                setComments(data)
                setIsLoading(false)
            }
        } catch (error) {
            console.log(error)
            setIsLoading(false)
            setHasError(true)
        }
    }

    useEffect(() => {
        getDetails()
        getComments()
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return (
        <section>
            <Container>
                {isLoading && (
                    <Spinner className="mx-auto" animation="grow" variant="dark" />
                )}
                {hasError && (
                    <Alert variant="danger">You done fucked up</Alert>
                )}
                {details && <Row>
                    <Col xs={12} md={8}>
                        <Card className='detailed'>
                            <Card.Img variant="top" src={details.Poster}></Card.Img>
                            <Card.Body>
                                <h2>{details.Title}</h2>
                                <Row>
                                    <Col xs={8}>
                                        <div className='d-flex flex-column'>
                                            <span>{details.Year} {details.Rated} {details.Released} {details.Runtime}</span>
                                            <p>{details.Plot}</p>
                                        </div>
                                    </Col>
                                    <Col xs={4}>
                                        <div className='d-flex flex-column'>
                                            <p>Actors: {details.Actors}</p>
                                            <p>Genres: {details.Genre}</p>
                                            <p>Awards: {details.Awards}</p>
                                        </div>
                                    </Col>
                                </Row>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col xs={12} md={4}>
                     {comments.length ? <CommentList comments={comments} rerender={getComments}/>: <Alert variant="warning">No comments yet</Alert>}
                    </Col>
                </Row>}
            </Container>
        </section>
    )
}

export default MovieDeatils