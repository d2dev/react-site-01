import React from 'react';
// import { Component } from "react";
import { Container, Row, Col } from 'reactstrap';
import { Card, CardImg, CardTitle, CardImgOverlay, CardColumns } from 'reactstrap';

function Gallery () {
    return(
        <div>
            <Container>
                <Row>
                    <Col xs="12">
                        <h1>Pseudo Bootstrap masonry gallery</h1>
                    </Col>
                </Row>
                <Row>
                    <Col xs="12">
                        <CardColumns>
                            <Card className=" bg-dark text-white">
                                <CardImg src="https://placebeard.it/640x360" alt="..."/>
                                <CardImgOverlay>
                                    <CardTitle>Card title #1</CardTitle>
                                </CardImgOverlay>
                            </Card>
                            <Card className="bg-dark text-white">
                                <CardImg src="https://placebeard.it/1280x720" alt="..."/>
                                <CardImgOverlay>
                                    <CardTitle>Card title #2</CardTitle>
                                </CardImgOverlay>
                            </Card>
                            <Card className="bg-dark text-white">
                                <CardImg src="https://placebeard.it/640x720" alt="..."/>
                                <CardImgOverlay>
                                    <CardTitle>Card title #3</CardTitle>
                                </CardImgOverlay>
                            </Card>
                            <Card className="bg-dark text-white">
                                <CardImg src="https://placebeard.it/128x360" alt="..."/>
                                <CardImgOverlay>
                                    <CardTitle>Card title #4</CardTitle>
                                </CardImgOverlay>
                            </Card>
                            <Card className="bg-dark text-white">
                                <CardImg src="https://placebeard.it/280x360" alt="..."/>
                                <CardImgOverlay>
                                    <CardTitle>Card title #5</CardTitle>
                                </CardImgOverlay>
                            </Card>
                            <Card className="bg-dark text-white">
                                <CardImg src="https://placebeard.it/780x560" alt="..."/>
                                <CardImgOverlay>
                                    <CardTitle>Card title #6</CardTitle>
                                </CardImgOverlay>
                            </Card>
                            <Card className="bg-dark text-white">
                                <CardImg src="https://placebeard.it/180x320"  alt="..."/>
                                <CardImgOverlay>
                                    <CardTitle>Card title #7</CardTitle>
                                </CardImgOverlay>
                            </Card>
                            <Card className="card bg-dark text-white">
                                <CardImg src="https://placebeard.it/430"  alt="..."/>
                                <CardImgOverlay>
                                    <CardTitle>Card title #8</CardTitle>
                                </CardImgOverlay>
                            </Card>
                        </CardColumns>
                    </Col>
                </Row>
            </Container>

        </div>
    )
}

export default Gallery;