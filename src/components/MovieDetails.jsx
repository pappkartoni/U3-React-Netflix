import { useEffect, useState } from 'react'
import { Card, Col, Container, Row, Alert, Spinner, Button } from 'react-bootstrap'
import { useParams } from 'react-router-dom'
import CommentList from './CommentList'

const MovieDeatils = () => {
    const id = useParams().id
    const [details, setDetails] = useState(null)
    const [isLoading, setIsLoading] = useState(true)
    const [hasError, setHasError] = useState(false)
    const [comments, setComments] = useState([])

    const getDetails = async () => {
        try {
            const res = await fetch(`${process.env.REACT_APP_BE_URL}/media/${id}`)
            if (res.ok) {
                const data = await res.json()
                setDetails(data)
                setIsLoading(false)
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

    const downloadPDF = async () => {
        try {
            const res = await fetch(`${process.env.REACT_APP_BE_URL}/media/${id}/pdf`)
            if (res.ok) {
                window.location = res.url
            }
        } catch (error) {
            console.log(error);
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
                            <Card.Img variant="top" src={details.poster}></Card.Img>
                            <Card.Body>
                                <h2 style={{color: "black"}}>{details.title}</h2>
                                <Row>
                                    <Col xs={8}>
                                        <div className='d-flex flex-column'>
                                            <span>{details.year} - {details.imdbID}{/*  {details.Rated} {details.Released} {details.Runtime} */}</span>
                                            {/* <p>{details.Plot}</p> */}
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
                                <Button variant="primary" onClick={downloadPDF} type="button">DOWNLOAD</Button>
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