import { Component } from "react"
import {Navbar, Nav, Container} from "react-bootstrap"
import AltNav from "./AltNav"
import logo from "../netflix_logo.png"

class MainNav extends Component {
    render() {
        return (
        <Navbar collapseOnSelect expand="md" variant="dark">
            <Container fluid className="px-5">
                <Navbar.Brand href="#">
                    <img src={logo} alt="netflix" style={{height: 49}}></img>
                </Navbar.Brand>
                <Navbar.Toggle className="mr-auto" aria-controls="navi">
                    Browse<span className="arrow"></span>
                </Navbar.Toggle>
                <Navbar.Collapse id="navi">
                    <Nav className="mr-auto">
                        <Nav.Link href="#">Home</Nav.Link>
                        <Nav.Link href="#">TV Shows</Nav.Link>
                        <Nav.Link href="#">Movies</Nav.Link>
                        <Nav.Link href="#">Recently Added</Nav.Link>
                        <Nav.Link href="#">My List</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
                <AltNav />
            </Container>
        </Navbar>
        )
    }
}

export default MainNav