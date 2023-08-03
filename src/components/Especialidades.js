import React, { useState, useEffect } from 'react';
import { Navbar, Nav, Container, CardGroup } from 'react-bootstrap';

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

import handshake from '../images/handshake.png';
import law from '../images/law.png'
import juiciofamilia from '../images/juiciofamilia.png'
import justicia from '../images/justicia.png'

const Especialidades = () => {

    return (
        <Container>
            <div>
                <h1>Áreas de Especialidad</h1>
            </div>
            {/* <Row>
                <Col md="1">
                <img src={handshake} alt="Logo" class="logo" ></img>
                </Col>
                <Col>
                <h2>Derecho Mercantil</h2>
                <p>Resolvemos el conflicto de intereses que se dan entre comerciantes regulando y protegiendo los actos de comercio.</p>

                </Col>
                <Col  >
                    3 of 3
                </Col>
            </Row>
            <div>


                

            </div> */}
            <CardGroup>
                <Card className="align-items-center" >
                    <div className='icoEsp'>
                        <Card.Img variant="top" src={handshake} className='icoEsp'/>
                    </div>
                    
                    <Card.Body >
                        <Card.Title>Derecho Mercantil</Card.Title>
                        <Card.Text>
                            Resolvemos el conflicto de intereses que se dan entre comerciantes regulando y protegiendo los actos de comercio.
                        </Card.Text>
                    </Card.Body>
                </Card>
                <Card className="align-items-center" >
                    <div className='icoEsp'>
                        <Card.Img variant="top" src={law} className='icoEsp'/>
                    </div>
                    
                    <Card.Body >
                        <Card.Title>Derecho Civil</Card.Title>
                        <Card.Text>
                        Damos la atención para la protección a tu patrimonio, así como el bienestar de sus seres queridos.
                        </Card.Text>
                    </Card.Body>
                </Card>
                <Card className="align-items-center" >
                    <div className='icoEsp'>
                        <Card.Img variant="top" src={juiciofamilia} className='icoEsp'/>
                    </div>
                    
                    <Card.Body >
                        <Card.Title>Derecho Familiar</Card.Title>
                        <Card.Text>
                        Te brindamos el mejor servicio para proteger a tu familia, así como cada uno de sus integrantes. Trabajamos para lograr el respeto a los derechos de igualdad y dignidad humana para su desarrollo integral.
                        </Card.Text>
                    </Card.Body>
                </Card>
                <Card className="align-items-center" >
                    <div className='icoEsp'>
                        <Card.Img variant="top" src={justicia} className='icoEsp'/>
                    </div>
                    
                    <Card.Body >
                        <Card.Title>Derecho Penal</Card.Title>
                        <Card.Text>
                        Te damos esa protección para preservar tu bienestar, que conlleven a procurar la protección del inocente, y que se restituyan los daños ocasionados por un delito.
                        </Card.Text>
                    </Card.Body>
                </Card>
            </CardGroup>


        </Container>


    );
};

export default Especialidades;