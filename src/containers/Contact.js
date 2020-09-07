import React from 'react';
// import { Component } from "react";
import { Container, Row, Col } from 'reactstrap';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';

class Contact extends React.Component {
    constructor(props){
        super(props);
        this.state = {textValue:'', emailValue:''};

        this.handleChangeText = this.handleChangeText.bind(this);
        this.handleChangeEmail = this.handleChangeEmail.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChangeEmail(event){
        this.setState({emailValue: event.target.value});
    }
    
    handleChangeText(event){
        this.setState({textValue: event.target.value});
    }

    handleSubmit(event){
        alert('Submitted by : ' + this.state.emailValue +'\n Message : ' + this.state.textValue);
        event.preventDefault();
    }

    render(){
        return(
            <div>
                <Container>
                    <Row>
                        <Col xs={{size:8,offset:2}}>
                            <h1>Contact</h1>
                            <br/>
                            <Form onSubmit={this.handleSubmit}>
                                <FormGroup row>   
                                    <Label for="exampleEmail" sm={3}>Email</Label>
                                    <Col sm={9}>
                                        <Input type="email" name="email" id="exampleEmail" placeholder="placeholder" onChange={this.handleChangeEmail}/>
                                    </Col>
                                </FormGroup>
                                <FormGroup row>
                                    <Label for="text1" sm={3}>Enter some text</Label>
                                    <Col sm={9}>
                                        <Input type="text" name="text1" id="text1" placeholder="placeholder" onChange={this.handleChangeText}/>
                                    </Col>
                                </FormGroup>
                                <Button>Submit</Button>
                            </Form>
                        </Col>
                    </Row>
                </Container>
            </div>
        )
    }
}

export default Contact;