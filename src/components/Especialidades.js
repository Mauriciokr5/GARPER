import React, { useState, useEffect } from 'react';
import { Navbar, Nav, Container, CardGroup } from 'react-bootstrap';


import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import CardCarousel from './CardCarousel';

import handshake from '../images/handshake.png';
import law from '../images/law.png'
import juiciofamilia from '../images/juiciofamilia.png'
import justicia from '../images/justicia.png'
import juiciocalculado from '../images/juiciocalculado.png'
import maletin from '../images/maletin.png'
import libro from '../images/libro.png'
import familia from '../images/familia.png'
import martillo from '../images/martillo.png'
import cajafuerte from '../images/cajafuerte.png'


const Especialidades = () => {
    const cardData = [
        {
            title: 'Derecho Mercantil',
            description: 'Resolvemos el conflicto de intereses que se dan entre comerciantes regulando y protegiendo los actos de comercio',
            imageUrl: handshake,
        },
        {
            title: 'Derecho Civil',
            description: 'Damos la atención para la protección a tu patrimonio, así como el bienestar de sus seres queridos.',
            imageUrl: law,
        },
        {
            title: 'Derecho Familiar',
            description: 'Te brindamos el mejor servicio para proteger a tu familia, así como cada uno de sus integrantes. Trabajamos para lograr el respeto a los derechos de igualdad y dignidad humana para su desarrollo integral',
            imageUrl: juiciofamilia,
        },
        {
            title: 'Derecho Penal',
            description: 'Te damos esa protección para preservar tu bienestar, que conlleven a procurar la protección del inocente, y que se restituyan los daños ocasionados por un delito.',
            imageUrl: justicia,
        },
	{
            title: 'Derecho Administrativo',
            description: 'Te evitamos cualquier procedimiento judicial, gestionando, tramitando y en su caso peleando ante cualquier problemática con las instituciones, garantizando un asesoramiento de calidad.',
            imageUrl: libro,
        },
        {
            title: 'Derecho Fiscal',
            description: 'Salvaguardamos tu patrimonio como contribuyente impugnando cualquier acto de molestia señalados por las autoridades mediante el mejor medio de defensa, defendiendo siempre tus intereses.',
            imageUrl: juiciocalculado,
        },
        {
            title: 'Derecho Corporativo',
            description: 'Valoramos el funcionamiento de tu empresa determinando las líneas de trabajo y filosofía protegiendo sus intereses mediante un asesoramiento y aplicación de las disposiciones legales. ',
            imageUrl: maletin,
        },
	{
            title: 'Atención a víctimas',
            description: 'Procuramos proporcionarles asistencia jurídica y apoyo para así garantizar la atención y reparación integral del daño, adoptando medidas y protocolos para evitar una actuación indebida de las instituciones públicas.',
            imageUrl: familia,
        },
        {
            title: 'Derecho de seguridad social pensiones ISSSTE: ',
            description: 'Resguardamos tus intereses como pensionado haciendo que la Institución respete los lineamientos y parámetros establecidos en la ley que a ti te favorecen.',
            imageUrl: martillo,
        },
        {
            title: 'Contabilidad',
            description: 'Te ayudamos a mantener el estado financiero de tu empresa y así puedas tomar una buena decisión para tus inversiones y obtener el resultado que generan tus actividades. ',
            imageUrl: cajafuerte,
        },
        // ... Agrega más objetos de tarjeta según sea necesario
    ];

    const cardsPerSlide = 2;

    return (
        <div className='especialidadesSec'>
            <Container >
                <Row>
                    <Col className="d-flex align-items-center justify-content-center" lg={4}>
                        <h1>Áreas de Especialidad</h1>
                    </Col>
                    <Col>
                        <CardCarousel cardData={cardData} cardsPerSlide={cardsPerSlide} />
                    </Col>

                </Row>


            </Container>
        </div>



    );
};

export default Especialidades;