import React, { useState, useEffect } from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
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
            <img src={logo} alt="Logo" class="logo" ></img>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="navbar-nav" />
            <Navbar.Collapse id="navbar-nav" className=" justify-content-center">
                <Nav className="ml-auto align-items-center">
                    <Link className="nav-link" to="/Especialidades">Especialidades</Link>
                    <Link className="nav-link" to="/Firma">Nuestra Firma</Link>
                    <Navbar.Brand href="/" className="logoMid">
                        <img src={logo} alt="Logo" class="logo" ></img>
                    </Navbar.Brand>
                    <Link className="nav-link" to="/Empresas">Empresas</Link>
                    <Link className="nav-link" to="/Contacto">Contacto</Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>

    );
};

export default Header;
