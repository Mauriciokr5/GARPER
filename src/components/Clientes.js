import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FaFacebook, FaTwitter, FaLinkedin } from 'react-icons/fa';
import logoCompleto from '../images/logoCompleto.png';
import garperfirma from '../images/garperfirma.jpg';



import display from '../images/display.png';
import dortel from '../images/dortel.png';
import manitas from '../images/manitas.png';
import ni from '../images/ni.png';
import sistemas from '../images/sistemas.png';



const Clientes = () => {

    return (
        <div className='containerStyleClientes' id='Clientes'>
            <div className="overlayClientes d-flex align-items-center">
                <Container>
                    <Row>
                        <Col  lg={{ span: 6, offset: 3 }}>
                            <div className='backClientes '>
                                <h1>Clientes corporativos</h1>
                                <p>
                                    La confianza que depositan en nosotros nuestros clientes es nuestra mayor recompensa. Nos enorgullecemos de ser sus aliados en la búsqueda de justicia y soluciones legales efectivas.
                                </p>
                                <div className='clienteslogos'>
                                    <img className="logofirma" src={display} alt="Logo" ></img>
                                    <img className="logofirma" src={dortel} alt="Logo" ></img>
                                    <img className="logofirma" src={manitas} alt="Logo" ></img>
                                    <img className="logofirma" src={ni} alt="Logo" ></img>
                                    <img className="logofirma" src={sistemas} alt="Logo" ></img>
                                </div>
                            </div>

                        </Col>

                    </Row>
                </Container>

            </div>

        </div>

    );
};

export default Clientes;
