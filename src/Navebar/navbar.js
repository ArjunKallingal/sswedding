import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import logo from '../assets/logo.jpg'
import './navbar.css'
function navbar() {
    return (
        <div className='bg1' >
            <Navbar expand="lg">
                <Container>
                    <Navbar.Brand href="#home"><img style={{height:50,borderRadius:50}} src={logo}/></Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link href="/">Home</Nav.Link>
                            <Nav.Link href="/contact">Contact</Nav.Link>
                            <Nav.Link href="/services">Our Services</Nav.Link>
                            <NavDropdown title="Our Works" id="basic-nav-dropdown">
                                <NavDropdown.Item href="/catering">Catering</NavDropdown.Item>
                                <NavDropdown.Item href="wedding">Wedding</NavDropdown.Item>
                                <NavDropdown.Item href="brithday">Brithday</NavDropdown.Item>
                                <NavDropdown.Item href="house-deceration">House Decoration</NavDropdown.Item>
                                <NavDropdown.Item href="car-bouquet">Car bouquet</NavDropdown.Item>
                                <NavDropdown.Divider />

                            </NavDropdown>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    )
}

export default navbar