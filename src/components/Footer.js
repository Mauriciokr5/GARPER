import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FaFacebook, FaTwitter, FaLinkedin } from 'react-icons/fa';
import logoCompleto from '../images/logoCompleto.png';
import { Link } from 'react-router-dom';
const Footer = () => {
    return (
        <footer className="bg-dark text-light py-4 footerStyle">
            <Container>
                <Row>
                    <Col md={5} className="mb-4">
                        <img src={logoCompleto} alt="Logo" className="footerLogo" ></img>
                    </Col>
                    <Col lg={4}  className="footercontacto">
                        <h5>Contactanos</h5>
                        <p>Paso De La Laja N° 2, La Mexicana, Álvaro Obregón, C.P. 01260, Ciudad de México.</p>
                        <p>Dirección: Calle Principal #123, Ciudad</p>
                        <p>Tel. 55 4502 5100</p>
                        <p>contacto.garper@gmail.com</p>
                    </Col>
                    <hr className='hidehrfooter'></hr>
                    <Col lg={{ span: 2, offset: 1 }} className='footerSocialMediaNav'>
                        <div className="footernav">
                            <a href="#Especialidades">Especialidades</a>
                            <a href="#Firma">Nuestra Firma</a>
                            <a href="#Empresas">Empresas</a>
                            <a href="#Contacto">Contacto</a>
                        </div>
                        <div className='footerSocialMedia'>
                            <a href="https://www.facebook.com/despachoxyz" target="_blank" rel="noopener noreferrer">
                                <FaFacebook size={30} className="mr-3 text-golden" />
                            </a>
                            <a href="https://www.twitter.com/despachoxyz" target="_blank" rel="noopener noreferrer">
                                <FaTwitter size={30} className="mr-3 text-golden" />
                            </a>
                            <a href="https://www.linkedin.com/company/despachoxyz" target="_blank" rel="noopener noreferrer">
                                <FaLinkedin size={30} className="text-golden" />
                            </a>
                        </div>
                    </Col>
                </Row>
                <hr></hr>
                <p className='leyendaDerechos'>©GARPER. Todos los derechos reservados</p>
            </Container>
        </footer>
    );
};

export default Footer;
