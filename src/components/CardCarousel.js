import React from 'react';
import { Carousel, Row, Col, Card, CardGroup } from 'react-bootstrap';

const CardCarousel = ({ cardData, cardsPerSlide }) => {
  const totalSlides = Math.ceil(cardData.length / cardsPerSlide);

  const slides = Array.from({ length: totalSlides }, (_, slideIndex) => {
    const startIndex = slideIndex * cardsPerSlide;
    const endIndex = startIndex + cardsPerSlide;

    const cardsInSlide = cardData.slice(startIndex, endIndex).map((card, index) => (
      <Col key={index} md={6} className="d-flex justify-content-center colesp">
        <Card className="align-items-center" >
          <Card.Img className="icoEsp" variant="top" src={card.imageUrl} alt={`Card ${index}`} />
          <Card.Body>
            <Card.Title>{card.title}</Card.Title>
            <Card.Text>{card.description}</Card.Text>
          </Card.Body>
        </Card>

      </Col>

    ));

    return (
      <Carousel.Item key={slideIndex} >
        <div className="d-flex justify-content-center">
          <CardGroup className='cardgroupstyle'><Row>{cardsInSlide}</Row></CardGroup>
        </div>
      </Carousel.Item>
    );
  });

  return <Carousel interval={null}>{slides}</Carousel>;
};

export default CardCarousel;
