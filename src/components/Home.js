import React, { useState, useEffect } from 'react';
import { Navbar, Nav, Container, Row, Col } from 'react-bootstrap';
import garperhome from '../images/garperhome.jpg'
import logoCompleto from '../images/logoCompleto.png';

const Home = () => {
    const containerStyle = {
        backgroundImage: `url(${garperhome})`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center center',
        position: 'relative', // Asegura que el contenedor sea relativo para posicionar elementos hijos
        height: '70vh', // Altura de la ventana visible, ajusta según sea necesario
    };

    const overlayStyle = {
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        background: 'linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 1))', // Gradiente lineal semitransparente
      };

    return (
        <div style={containerStyle}>
            <div style={overlayStyle} className="d-flex align-items-center">
                <Container>
                    {/* <img className="mainLogo" src={logoCompleto} alt="Logo" ></img> */}
                    <Row>
                        <Col lg={7}>
                        <h1 className='mainTitle'>Firma dedicada al litigio y asesoría en materia juridica y contable.</h1>
                        </Col>
                    </Row>
                    
                </Container>
                
            </div>
        
        </div>

    );
};

export default Home;