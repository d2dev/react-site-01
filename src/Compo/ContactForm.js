import React from 'react';
import { Col } from 'reactstrap';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';

export default class ContactForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = { 
            to_name: '',
            userName: 'Unknown', 
            email:'',
            feedback: ''
        };
        this.handleChangeUserName = this.handleChangeUserName.bind(this);
        this.handleChangeEmail = this.handleChangeEmail.bind(this);
        this.handleChangeFeedback = this.handleChangeFeedback.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChangeEmail(event){
        this.setState({email: event.target.value});
    }

    handleChangeUserName(event){
        this.setState({userName: event.target.value});
    }

    handleChangeFeedback(event) {
        this.setState({feedback: event.target.value})
    }

    handleSubmit(e) {
        const templateId = 'template_22ydbzw';
        const serviceId = 'service_mustacchio';

        this.sendFeedback(serviceId,templateId, {
            to_name: this.state.userName,
            message_html: this.state.feedback, 
            from_name: this.state.userName, 
            reply_to: this.state.email
        });
        
        // e.preventDefault();
    }

    sendFeedback (serviceId, templateId, variables) {
        window.emailjs.send(serviceId, templateId, variables)
            .then(res => {
                console.log('Email successfully sent!')
            })
            // Handle errors here however you like, or use a React error boundary
            .catch(err => console.error('Oh well, you failed. Here some thoughts on the error that occured:', err))
    }

    render() {
        return (
        <Form className="exampleForm" onSubmit={this.handleSubmit}>
            <FormGroup row>
                <Label for="exampleName" sm={3}>Enter your name</Label>
                <Col sm={9}>
                    <Input type="name" name="name" id="exampleName" placeholder="Enter your name" onChange={this.handleChangeUserName}/>
                </Col>
            </FormGroup>
            <FormGroup row>
                <Label for="exampleEmail" sm={3}>Your email please</Label>
                <Col sm={9}>
                    <Input type="email" name="email" id="exampleEmail" required placeholder="enter your email" onChange={this.handleChangeEmail}/>
                </Col>
            </FormGroup>
            <FormGroup row>
                <Label for="exampleFeedback" sm={3}>And then some text...</Label>
                <Col sm={9}>
                    <Input 
                        type="textarea" 
                        name="feedback" 
                        id="exampleFeedback" 
                        required 
                        placeholder="enter your message" 
                        onChange={this.handleChangeFeedback} 
                        value={this.state.feedback} 
                        style={{width: '100%', height: '150px'}} 
                    />
                </Col>
            </FormGroup>
            <Button>Done !</Button>
        </Form>
        )
    }

}