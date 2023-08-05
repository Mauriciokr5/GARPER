import React, { useState } from 'react';
import { Form, Button, Container, Row, Col } from 'react-bootstrap';


const Contacto = () => {
    const [nombre, setNombre] = useState('');
    const [correo, setCorreo] = useState('');
    const [telefono, setTelefono] = useState('');
    const [mensaje, setMensaje] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        // Aquí podrías implementar la lógica para enviar el formulario
        console.log('Formulario enviado:', { nombre, correo, telefono, mensaje });
        // Limpia los campos después del envío
        setNombre('');
        setCorreo('');
        setTelefono('');
        setMensaje('');
    };

    return (
        <div className='contactodiv'>
            <Container>
                <Row>
                    <Col md={6}>
                        <h1>Contacto</h1>
                        <p>Paso De La Laja N° 2, La Mexicana, Álvaro Obregón, C.P. 01260, Ciudad de México.</p>
                        <p>Dirección: Calle Principal #123, Ciudad</p>
                        <p>Tel. 55 4502 5100</p>
                        <p>contacto.garper@gmail.com</p>
                        <hr className='hidehr'></hr>
                    </Col>
                    <Col md={6}>
                        <Form onSubmit={handleSubmit}>
                            <Form.Group controlId="nombre">
                                <Form.Label>Nombre</Form.Label>
                                <Form.Control
                                    type="text"
                                    placeholder="Ingrese su nombre"
                                    value={nombre}
                                    onChange={(e) => setNombre(e.target.value)}
                                    required
                                />
                            </Form.Group>

                            <Form.Group controlId="correo">
                                <Form.Label>Correo Electrónico</Form.Label>
                                <Form.Control
                                    type="email"
                                    placeholder="Ingrese su correo electrónico"
                                    value={correo}
                                    onChange={(e) => setCorreo(e.target.value)}
                                    required
                                />
                            </Form.Group>

                            <Form.Group controlId="telefono">
                                <Form.Label>Teléfono</Form.Label>
                                <Form.Control
                                    type="tel"
                                    placeholder="Ingrese su teléfono"
                                    value={telefono}
                                    onChange={(e) => setTelefono(e.target.value)}
                                    required
                                />
                            </Form.Group>

                            <Form.Group controlId="mensaje">
                                <Form.Label>Mensaje</Form.Label>
                                <Form.Control
                                    as="textarea"
                                    rows={4}
                                    placeholder="Escriba su mensaje"
                                    value={mensaje}
                                    onChange={(e) => setMensaje(e.target.value)}
                                    required
                                />
                            </Form.Group>

                            <Button type="submit">
                                Enviar
                            </Button>
                        </Form>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Contacto;
