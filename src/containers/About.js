import React from 'react';
// import { Component } from "react";
import { Container, Row, Col } from 'reactstrap';
import { withScriptjs, withGoogleMap, GoogleMap, Marker } from "react-google-maps"


function About () {
    // Explanations at : https://tomchentw.github.io/react-google-maps/
    const MyMapComponent = withScriptjs(withGoogleMap((props) =>
        <GoogleMap
            defaultZoom={10}
            defaultCenter={{ lat: 14.6488, lng: -61.1388335 }}
        >
            {props.isMarkerShown && <Marker position={{ lat: 14.6060405, lng: -61.069892 }} />}
        </GoogleMap>
    ))
    return(
        <div>
            <Container>
                <Row>
                    <Col>
                        <h1>About</h1>
                        <p className="text-justify">
                            Hello this is a sample About page... about this page.
                            <br/><br/>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                            Vel orci porta non pulvinar neque. Viverra ipsum nunc aliquet bibendum enim facilisis gravida. Amet volutpat consequat mauris nunc congue nisi. <br/><br/>
                            Ac felis donec et odio pellentesque diam volutpat commodo. Enim ut sem viverra aliquet eget sit amet tellus cras. Felis eget nunc lobortis mattis aliquam faucibus. Quisque non tellus orci ac auctor augue mauris augue neque. 
                            Commodo viverra maecenas accumsan lacus vel facilisis. Dignissim diam quis enim lobortis scelerisque fermentum dui faucibus. At consectetur lorem donec massa sapien faucibus et molestie ac. Metus vulputate eu scelerisque felis imperdiet proin. 
                            Cum sociis natoque penatibus et magnis dis parturient. Lobortis elementum nibh tellus molestie nunc. Nulla facilisi etiam dignissim diam quis enim lobortis.
                        </p>
                    </Col>
                </Row>
            </Container>
            <Container fluid style={{padding: 0}}>
                <Row>
                    <Col>
                        <MyMapComponent 
                            isMarkerShown 
                            googleMapURL="https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places"
                            loadingElement={<div style={{height: `150px`, backgroundColor: `#20bf55`}} />}
                            containerElement={<div style={{height: `450px`}} />}
                            mapElement={<div style={{height: `100%`}} />}
                        />
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default About;