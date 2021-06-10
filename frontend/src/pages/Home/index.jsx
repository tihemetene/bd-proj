import React from 'react'
import CardInicial from '../../components/CardInicial'
import { Card, Container, Row } from 'react-bootstrap'

const Home = () =>
(
    <Container className="mt-4">
        <CardInicial
            title="TÔ DE OLHO"
        >
            <Card.Body>
                <Row>
                    <h4>TODEOLHO APP, faca nos bandido</h4>
                </Row>
                <Row>
                    <Card.Link href="/acessoMedico">Relatar crime</Card.Link>
                    <Card.Link href="/acessoRecep">Visualizar locais</Card.Link>                  
                </Row>
            </Card.Body>
        </CardInicial>
    </Container>
);

export default Home;