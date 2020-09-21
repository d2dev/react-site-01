import React from 'react';
import { Jumbotron, Button } from 'reactstrap';
import { Container, Row, Col } from 'reactstrap';
// import { Card, CardImg, CardBody, CardTitle } from 'reactstrap';
// import { Component } from "react";
import heroImg from '../assets/the-beacon.jpg';
import actorImg from '../assets/the-actor.jpg';
import fatherImg from '../assets/the-father.jpg';
import nerdImg from '../assets/the-nerd.jpg';
import './Home.css';

import ImgCompo from '../Compo/ImgCompo';

function Home () {
    const jumboStyle = {
        backgroundImage: 'url('+heroImg+')',
        backgroundColor: 'none',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover'
      }
    return(
        <div>
            <Jumbotron style={jumboStyle} className="jumbo">
                <Container fluid>
                    <Row>
                        <Col xs="12" sm={{size: 6, offset: 6}} className="text-left">
                            <h1 className="title">Hello, world!</h1><br/>
                            <p className="lead">This is a sample reactstrap website,</p>
                            <p className="lead">inspired from an old wix template : "Mustacchio".</p>
                            <p className="lead">It's only for learning and practices purposes.</p>
                            <div>
                                <Button color="primary">Learn More</Button>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </Jumbotron>
            <Container>
                <Row>
                    <Col xs="12" md="4">
                        <div>
                            <ImgCompo src={fatherImg} alt="Card image cap"/>
                            <span className="title">The father</span>
                        </div>
                    </Col>
                    <Col xs="12" md="4">
                        <div>
                            <ImgCompo src={actorImg} alt="Card image cap"/>
                            <span className="title">The actor</span>
                        </div>
                    </Col>
                    <Col xs="12" md="4">
                        <div>
                            <ImgCompo src={nerdImg} alt="Card image cap"/>
                            <span className="title">The nerd</span>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Home;