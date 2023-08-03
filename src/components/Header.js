import React, { useState, useEffect } from 'react';
import { Navbar, Nav } from 'react-bootstrap';

const Header = () => {
    const [scrolling, setScrolling] = useState(false);

    const handleScroll = () => {
        if (window.scrollY > 0) {
            setScrolling(true);
        } else {
            setScrolling(false);
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <Navbar expand="lg" className={`header ${scrolling ? 'scrolling' : ''}`}>
            <Navbar.Brand href="#home" className="logoleft">
                <img
                    src="logotipo.jpg"
                    alt="Logo"
                    className="logo"
                />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="navbar-nav" />
            <Navbar.Collapse id="navbar-nav" className="justify-content-center align-items-center">
                <Nav className="ml-auto">
                    <Nav.Link href="#especialidades">Especialidades</Nav.Link>
                    <Nav.Link href="#nuestra-firma">Nuestra firma</Nav.Link>
                    <Navbar.Brand href="#home" className="logoMid">
                <img
                    src="logotipo.jpg"
                    alt="Logo"
                    className="logo"
                />
            </Navbar.Brand>
                    <Nav.Link href="#empresas">Empresas</Nav.Link>
                    <Nav.Link href="#contacto">Contacto</Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>

    );
};

export default Header;
