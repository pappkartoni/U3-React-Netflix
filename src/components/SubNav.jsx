import { Component } from "react";
import {Button, ButtonGroup, Container, Dropdown} from "react-bootstrap"

class SubNav extends Component {
    render() {
        return (
            <Container fluid className="subnav sticky-top px-5 d-flex align-items-center">
                <h1 className="mr-5 text-white">{this.props.title}</h1>
                <Dropdown className="mr-auto d-flex">
                    <Dropdown.Toggle variant="outline-secondary" id="genres">Genres</Dropdown.Toggle>
                    <Dropdown.Menu>
                        <Dropdown.Item href="#">Action</Dropdown.Item>
                        <Dropdown.Item href="#">Action</Dropdown.Item>
                        <Dropdown.Item href="#">Action</Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>
                <ButtonGroup>
                    <Button variant="outline-light">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="svg-icon svg-icon-rows"><path fillRule="evenodd" clipRule="evenodd" d="M24 6H0V4H24V6ZM24 18V20H0V18H24ZM0 13H12V11H0V13Z" fill="currentColor"></path></svg>
                    </Button>
                    <Button variant="outline-light">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="svg-icon svg-icon-grid"><path fillRule="evenodd" clipRule="evenodd" d="M1 3C0.447715 3 0 3.44772 0 4V10C0 10.5523 0.447715 11 1 11H10C10.5523 11 11 10.5523 11 10V4C11 3.44772 10.5523 3 10 3H1ZM1 13C0.447715 13 0 13.4477 0 14V20C0 20.5523 0.447715 21 1 21H10C10.5523 21 11 20.5523 11 20V14C11 13.4477 10.5523 13 10 13H1ZM13 4C13 3.44772 13.4477 3 14 3H23C23.5523 3 24 3.44772 24 4V10C24 10.5523 23.5523 11 23 11H14C13.4477 11 13 10.5523 13 10V4ZM14 13C13.4477 13 13 13.4477 13 14V20C13 20.5523 13.4477 21 14 21H23C23.5523 21 24 20.5523 24 20V14C24 13.4477 23.5523 13 23 13H14Z" fill="currentColor"></path></svg>
                    </Button>
                </ButtonGroup>
            </Container>
        )
    }
}

export default SubNav