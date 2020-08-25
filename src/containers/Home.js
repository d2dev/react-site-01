import React from 'react';
import { Jumbotron, Button } from 'reactstrap';
import { Container, Row, Col } from 'reactstrap';
import { Card, CardImg, CardBody, CardTitle } from 'reactstrap';
// import { Component } from "react";
import heroImg from '../assets/the-beacon.jpg';
import './Home.css';

function Home () {
    const jumboStyle = {
        backgroundImage: 'url('+heroImg+')',
        backgroundColor: 'none',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover'
      }
    return(
        <div>
            <h1>Bienvenue</h1>
            <Jumbotron style={jumboStyle} className="jumbo">
                <Container fluid>
                    <Row>
                        <Col xs="12" sm={{size: 6, offset: 6}}>
                            <h1 className="title">Hello, world!</h1>
                            <p className="lead text-justify">This is a sample reactstrap website, inspired from an old wix template : "Mustacchio".</p>
                            <hr />
                            <p className="text-justify">It's only for learning and practices purposes.</p>
                            <div>
                                <Button color="primary">Learn More</Button>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </Jumbotron>
            <Container>
                <Row>
                    <Col xs="12" sm="4">
                    <Card>
                        <CardImg top width="100%" src={heroImg} alt="Card image cap" />
                        <CardBody>
                        <CardTitle>The father</CardTitle>
                        </CardBody>
                    </Card>
                    </Col>
                    <Col xs="12" sm="4">
                    <Card>
                        <CardImg top width="100%" src={heroImg} alt="Card image cap" />
                        <CardBody>
                        <CardTitle>The actor</CardTitle>
                        </CardBody>
                    </Card>
                    </Col>
                    <Col xs="12" sm="4">
                    <Card>
                        <CardImg top width="100%" src={heroImg} alt="Card image cap" />
                        <CardBody>
                        <CardTitle>The nerd</CardTitle>
                        </CardBody>
                    </Card>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Home;