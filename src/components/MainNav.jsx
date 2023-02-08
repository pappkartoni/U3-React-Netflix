import {Navbar, Nav, Container} from "react-bootstrap"
import AltNav from "./AltNav"
import logo from "../netflix_logo.png"
import { Link, useLocation } from 'react-router-dom'

const MainNav = (props) => {
    const location = useLocation()

    return (
    <Navbar collapseOnSelect expand="md" variant="dark">
        <Container fluid className="px-5">
            <Link to="/">
                <Navbar.Brand>
                    <img src={logo} alt="netflix" style={{height: 49}}></img>
                </Navbar.Brand>
            </Link>
            <Navbar.Toggle className="mr-auto" aria-controls="navi">
                Browse<span className="arrow"></span>
            </Navbar.Toggle>
            <Navbar.Collapse id="navi">
                <Nav className="mr-auto">
                    <Link to="/">
                        <div className={`nav-link${location.pathname === '/' ? ' active' : ''}`}>Home</div>
                    </Link>
                    <Link to="/">
                        <div className={`nav-link`}>Movies</div>
                    </Link>
                    <Link to="/shows/">
                        <div className={`nav-link${location.pathname === '/shows/' ? ' active' : ''}`}>TV Shows</div>
                    </Link>
                </Nav>
            </Navbar.Collapse>
            <AltNav filterStuff={props.filterStuff} />
        </Container>
    </Navbar>
    )
}

export default MainNav