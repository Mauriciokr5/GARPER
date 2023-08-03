import React, { useState, useEffect } from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
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
        background: 'linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 1))', // Gradiente lineal semitransparente
      };

    return (
        <div style={containerStyle}>
            <div style={overlayStyle} className="d-flex align-items-center">
                <Container>
                    <img className="mainLogo" src={logoCompleto} alt="Logo" ></img>
                    <h1 className='mainTitle'>Firma dedicada al <br></br> litigio y asesoría en materia penal.</h1>
                </Container>
                
            </div>
        
        </div>

    );
};

export default Home;