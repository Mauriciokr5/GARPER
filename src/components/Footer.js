import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FaFacebook, FaTwitter, FaLinkedin } from 'react-icons/fa';
import logoCompleto from '../images/logoCompleto.png';

const Footer = () => {
  return (
    <footer className="bg-dark text-light py-4">
      <Container>
        <Row>
          
          
          <Col md={4} className="mb-4">
          <img src={logoCompleto} alt="Logo" class="mainLogo" ></img>

          </Col>
          <Col md={4} className=" mb-4 text-md-right">

          </Col>
          <Col md={4} className="footercontacto ">
            <h5>Contacto</h5>
            <p>Despacho Legal XYZ</p>
            <p>Dirección: Calle Principal #123, Ciudad</p>
            <p>Teléfono: (123) 456-7890</p>
            <p>Email: info@despachoabogados.com</p>
            <hr></hr>
            <div>
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
      </Container>
    </footer>
  );
};

export default Footer;
