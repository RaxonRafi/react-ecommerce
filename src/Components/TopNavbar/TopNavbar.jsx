import './TopNavbar.css'
import {Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';

const TopNavbar = () => {

    return (
        <div>
            <Container fluid={true} className="top-nav-bar">
                <Navbar expand="lg">
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ml-auto nav-menu">
                        <Nav.Link className="nav-items" href="#home">BRANDS</Nav.Link>
    
                        <NavDropdown 
                        className="nav-items" 
                        title="CAMERAS" 
                        id="basic-nav-dropdown">
                            <NavDropdown.Item href="#action/3.1">CAMERAS</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">
                                Another action
                            </NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#action/3.4">
                                Separated link
                            </NavDropdown.Item>
                        </NavDropdown>
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