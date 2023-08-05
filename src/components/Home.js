import React, { useState, useEffect } from 'react';
import { Navbar, Nav, Container, Row, Col } from 'react-bootstrap';
import garperhome from '../images/garperhome.jpg'
import logoCompleto from '../images/logoCompleto.png';

const Home = () => {
    const containerStyle = {
        backgroundImage: `url(${garperhome})`
    };

    return (
        <div style={containerStyle} className='containerStyleHome'>
            <div className="overlayHome d-flex align-items-center">
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