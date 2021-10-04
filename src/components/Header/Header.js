import React from 'react';
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { Link, NavLink } from 'react-router-dom';

const Header = () => {
    const anchorLink = {
        textDecoration: 'none',
        marginTop: '8px',
        marginBottom: '8px',
        marginRight: '50px'
    }
    return (
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Container>
                <div className="">
                    <Navbar.Brand href="#home">LearnEnglish</Navbar.Brand>
                </div>

                <div className="w-50" >
                    <Nav className="me-3" style={{ marginLeft: '100px' }}>
                        <NavLink to="/home" style={anchorLink}>Home</NavLink>
                        <NavLink to="/about" style={anchorLink}>About Us</NavLink>
                        <NavLink to="/courses" style={anchorLink}>Courses</NavLink>
                        <NavLink to="/contact" style={anchorLink}>Contact</NavLink>
                    </Nav>
                </div>
            </Container>
        </Navbar >
    );
};

export default Header;