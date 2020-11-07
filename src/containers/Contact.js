import React from 'react';
// import { Component } from "react";
import { Container, Row, Col } from 'reactstrap';
// import { Button, Form, FormGroup, Label, Input } from 'reactstrap';

import ContactForm from "../Compo/ContactForm";

class Contact extends React.Component {

    render(){
        return(
            <div>
                <Container>
                    <Row>
                        <Col xs={{size:8,offset:2}}>
                            <h1><span>Contact</span></h1>
                            <br/>
                            <br/>
                            <br/>
                            <ContactForm/>
                            <br/>
                            <br/>
                        </Col>
                    </Row>
                </Container>
            </div>
        )
    }
}

export default Contact;