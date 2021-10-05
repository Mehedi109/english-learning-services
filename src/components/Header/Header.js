import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

const Header = () => {
    const anchorLink = {
        textDecoration: 'none',
        marginTop: '15px',
        marginBottom: '15px',
        marginRight: '50px',
        color: 'white',
    }

    return (
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Container>
                <div className="logo" style={{ fontWeight: 'bold' }}>
                    <Navbar.Brand href="/home">Learn<span style={{ color: 'tomato' }}>English</span></Navbar.Brand>
                </div>
                <div className="w-50" >
                    <Nav className="me-3" style={{ marginLeft: '100px' }}>
                        <NavLink to="/home" className="nav-style" style={anchorLink} >Home</NavLink>
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