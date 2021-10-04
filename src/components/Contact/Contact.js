import React from 'react';
import { Form } from 'react-bootstrap';
import './Contact.css'

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
                {/* <div class="row ms-2 me-2 d-flex justify-content-center shadow-lg p-5 rounded-3">
                    <div class="col-lg-9 col-md-9 col-12 mb-5 pt-3 mx-auto">
                        <form>
                            <div class="row">
                                <div class="col-lg-6 col-md-6">
                                    <div class="pb-3">
                                        <input type="text" id="contact-name" class="form-control">
                                        <label for="contact-name" class ="">Your name</label>
                                    </div>
                                </div>
                                <div class="col-lg-6 col-md-6 col-12">
                                    <div class="pb-3">
                                        <input type="text" id="contact-email" class="form-control">
                                        <label for="contact-email" class ="">Your email</label>
                                    </div>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-lg-12 col-md-12 col-12">
                                    <div class="pb-3">
                                        <input type="text" id="contact-Subject" class="form-control">
                                        <label for="contact-Subject" class ="">Subject</label>
                                    </div>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-lg-12 col-md-12 col-12">
                                    <div class="pb-3">
                                        <textarea id="contact-message" class="form-control md-textarea" rows="3"></textarea>
                                        <label for="contact-message">Your message</label>
                                    </div>
                                </div>

                            </div>
                        </form> */}
                <div class="text-center text-md-left">
                    <a class="btn btn-primary btn-md">Send</a>
                </div>
            </div>
        </div >
        // </div >
        // </div >
    );
};

export default Contact;