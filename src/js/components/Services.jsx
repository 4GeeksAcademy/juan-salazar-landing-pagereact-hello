import React from 'react';
import { Container, Card, Row, Col,Button } from 'react-bootstrap';

const Services = () => {
    return (
        <Container id="services" className="my-5">
            <h2>Our Services</h2>
            <Row>
                <Col md={3}>
                    <Card>
                        <Card.Body>
                            <Card.Img variant="top" src="src/img/code-820275_1280.jpg" /> 
                            <Card.Title>Card Title</Card.Title>
                        <Card.Text>
                        Some quick example text to build on the card title and make up the
                        bulk of the card's content.
                        </Card.Text>
                        <Button variant="primary">Go somewhere</Button>
                       
                        </Card.Body>
                    </Card>
                </Col>
                <Col md={3}>
                    <Card>
                        <Card.Body>
                        <Card.Img variant="top" src="src/img/digital-marketing-1725340_1280.jpg" /> 
                        <Card.Title>Card Title</Card.Title>
                        <Card.Text>
                        Some quick example text to build on the card title and make up the
                        bulk of the card's content.
                        </Card.Text>
                        <Button variant="primary">Go somewhere</Button>
                        
                        </Card.Body>
                    </Card>
                </Col>
                <Col md={3}>
                    <Card>
                        <Card.Body>
                        <Card.Img variant="top" src="src/img/hands-820272_1280.jpg" /> 
                        <Card.Title>Card Title</Card.Title>
                        <Card.Text>
                        Some quick example text to build on the card title and make up the
                        bulk of the card's content.
                        </Card.Text>
                        <Button variant="primary">Go somewhere</Button>
                        
                        </Card.Body>
                    </Card>
                </Col>

                <Col md={3}>
                    <Card>
                        <Card.Body>
                        <Card.Img variant="top" src="src/img/laptop-5078695_1280 (1).jpg" /> 
                       
                        <Card.Title>Card Title</Card.Title>
                        <Card.Text>
                        Some quick example text to build on the card title and make up the
                        bulk of the card's content.
                        </Card.Text>
                        <Button variant="primary">Go somewhere</Button>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    );
};

export default Services;