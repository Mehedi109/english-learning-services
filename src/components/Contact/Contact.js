import React from 'react';
import { Form } from 'react-bootstrap';

const Contact = () => {
    return (
        <div>
            <div class="container my-5">
                <h1 className="text-center pt-3 pb-3 fw-bold">Contact Us</h1>
                <p className="text-center w-responsive mx-auto mb-5">If you want,you can contact with us anytime.</p>
                <Form>
                    <Form.Group className="mb-3" controlId="formGroupEmail">
                        <Form.Label className="mb-3 input-field">Email address</Form.Label>
                        <Form.Control type="email" placeholder="Enter email" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formGroupPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="Password" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formGroupPassword">
                        <Form.Label>Your Message</Form.Label>
                        <textarea id="contact-message" class="form-control md-textarea" rows="3"></textarea>
                    </Form.Group>
                </Form>
                <div class="text-center text-md-left">
                    <a class="btn btn-primary btn-md">Send</a>
                </div>
            </div>
        </div >
    );
};

export default Contact;