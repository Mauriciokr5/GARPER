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
        <div className='contactodiv' id='Contacto'>
            <Container>
                <Row>
                    <Col md={6}>
                        <h1>Contacto</h1>
                        <p>Paso De La Laja N° 2, La Mexicana, Álvaro Obregón, C.P. 01260, Ciudad de México.</p>
                        <p>Dirección: Calle Principal #123, Ciudad</p>
                        <p>Tel. 55 4502 5100</p>
                        <p>contacto.garper@gmail.com</p>
                        <hr className='hidehr'></hr>
                        <div style={{ position: 'relative', width: '100%', paddingTop: '75%' }}>
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d940.9153723849391!2d-99.2323235242238!3d19.383804761036043!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85d201ab038aed8d%3A0x93116e55ccf6fc62!2sPaso%20De%20La%20Laja%202%2C%20La%20Mexicana%2C%20%C3%81lvaro%20Obreg%C3%B3n%2C%20%C3%81lvaro%20Obreg%C3%B3n%2C%2001260%20Ciudad%20de%20M%C3%A9xico%2C%20CDMX!5e0!3m2!1ses-419!2smx!4v1691266179601!5m2!1ses-419!2smx"
                                style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', border: '0' }}
                                allowFullScreen=""
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                            ></iframe>
                        </div>
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
