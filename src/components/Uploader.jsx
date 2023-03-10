import { useState } from "react"
import { Button, Container, Form } from "react-bootstrap"

const Uploader = () => {
    const [newMedium, setNewMedium] = useState({
        title: "",
        year: "",
        imdbID: "",
        type: ""
    })
    const [poster, setPoster] = useState(null)

    const postMedium = async () => {
        try {
            const res = await fetch(`${process.env.REACT_APP_BE_URL}/media`, {
                method: "POST",
                headers: {"Content-Type": "application/json"},
                body: JSON.stringify(newMedium)
            })
            if (res.ok) {
                const data = await res.json()
                await postPoster(data.id)
                setNewMedium({
                    title: "",
                    year: "",
                    imdbID: "",
                    type: ""
                })
            }
        } catch (error) {
            console.log(error)
        }
    }
    
    const postPoster = async (id) => {
        const formData = new FormData()
        formData.append("poster", poster)
        try {
            const res = await fetch(`${process.env.REACT_APP_BE_URL}/media/${id}/upload`, {
                method: "POST",
                body: formData
            })

            if (res.ok) {
                setPoster(null)
            }
        } catch (error) {
            console.log(error)
        }
    }

    const submitForm = async () => {
        await postMedium()
    }

    return (
        <section>
            <Container>
                <Form>
                    <Form.Group>
                        <Form.Label>Title</Form.Label>
                        <Form.Control type="text" placeholder="Enter Title" value={newMedium.title} onChange={e => setNewMedium({...newMedium, title: e.target.value})}></Form.Control>
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Year</Form.Label>
                        <Form.Control type="text" placeholder="Enter Year" value={newMedium.year} onChange={e => setNewMedium({...newMedium, year: e.target.value})}></Form.Control>
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>imdbID</Form.Label>
                        <Form.Control type="text" placeholder="Enter imdbID" value={newMedium.imdbID} onChange={e => setNewMedium({...newMedium, imdbID: e.target.value})}></Form.Control>
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Type</Form.Label>
                        <Form.Control type="text" placeholder="Enter Title" value={newMedium.type} onChange={e => setNewMedium({...newMedium, type: e.target.value})}></Form.Control>
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Poster</Form.Label>
                        <Form.File id="blub" value={poster ? `C:\\fakepath\\${poster.name}` : ""} onChange={e => setPoster(e.target.files[0])}></Form.File>
                    </Form.Group>
                    <Button variant="success" type="submit" onClick={(e) => {e.preventDefault(); submitForm()}}>Submit</Button>
                </Form>
            </Container>
        </section>
    )
}

export default Uploader