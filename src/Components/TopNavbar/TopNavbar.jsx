import './TopNavbar.css'
import {Col,Row,Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';

const TopNavbar = () => {
    return (
        <div>
            <Container fluid={true} className="top-nav-bar">
                <Navbar expand="lg">
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ml-auto nav-menu">
                        <Nav.Link className="nav-items" href="#home">BRANDS</Nav.Link>
                        <Nav.Link className="nav-items" href="#about">CAMERAS</Nav.Link>
                        <Nav.Link className="nav-items" href="#services">LENSES</Nav.Link>
                        <Nav.Link className="nav-items" href="#contact">ACCESSORIES</Nav.Link>
                        <Nav.Link className="nav-items" href="#contact">STUDIO</Nav.Link>
                        <Nav.Link className="nav-items" href="#contact">EXTREME</Nav.Link>
                        <Nav.Link className="nav-items" href="#contact">USED</Nav.Link>
                    </Nav>
                    </Navbar.Collapse>
                </Navbar>
            </Container>

       </div> 
    );
};

export default TopNavbar;