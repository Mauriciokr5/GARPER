import React, { useState, useEffect } from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import logo from '../images/logo.png';

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
            <img src={logo} alt="Logo" className="logo" ></img>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="navbar-nav" className="custom-toggler"/>
            <Navbar.Collapse id="navbar-nav" className=" justify-content-center">
                <Nav className="ml-auto align-items-center">

                    <Nav.Link href="#Especialidades">Especialidades</Nav.Link>
                    <Nav.Link href="#Firma">Nuestra Firma</Nav.Link>
                    <Navbar.Brand href="/" className="logoMid">
                        <img src={logo} alt="Logo" className="logo" ></img>
                    </Navbar.Brand>
                    <Nav.Link href="#Empresas">Empresas</Nav.Link>
                    <Nav.Link href="#Contacto">Contacto</Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>

    );
};

export default Header;
