import React from 'react';
import { Form, Button, Container } from 'react-bootstrap';

const Contact = () => {
    return (
        <>
            <Container>
                <div class="my-5 shadow-lg" style={{ backgroundColor: 'white', padding: '35px 100px', borderRadius: '5px' }}>
                    <h1 className="text-center pt-3 pb-3 fw-bold">Contact Us</h1>
                    <p className="text-center w-responsive mx-auto mb-5">If you want,you can contact with us anytime.</p>
                    <Form>
                        <Form.Group className="mb-3" controlId="formGroupPassword">
                            <Form.Label>Your Name</Form.Label>
                            <Form.Control type="text" placeholder="Name" />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formGroupEmail">
                            <Form.Label className="mb-3 input-field">Your Email address</Form.Label>
                            <Form.Control type="email" placeholder="Enter email" />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formGroupPassword">
                            <Form.Label>Your Message</Form.Label>
                            <textarea id="contact-message" class="form-control md-textarea" rows="3"></textarea>
                        </Form.Group>
                    </Form>
                    <div class="text-center text-md-left">
                        <Button variant="btn btn-primary btn-md">Send</Button>
                    </div>
                </div>
            </Container>
        </>
    );
};

export default Contact;