import React from 'react';
import './AboutUs.css'
import img from '../../images/img-1.jpg';
import { Col, Container, Row } from 'react-bootstrap';

const AboutUs = () => {
    const about = {
        bottom: '0',
    }
    return (
        // <Row>
        <Container>
            <div style={about} className="about mt-5">
                {/* <Col xs={12} md={6} lg={6} className="g-4"> */}
                <div className="about-image">
                    <img src={img} alt="" />
                </div>
                <div className="about-text">
                    <h2>About Us</h2>
                    <p>LearnEnglish is an english learning institute where you can learn your desired english course.We have qualified teacher who can teach very carefully to our students.There are some ielts course and also some basic English course that is very helful for the people who really wants to learn English.Right now there are total eight courses in our institute and they are <span className="fw-bold"> IELTS with foundation,Online Regular IELTS Course,IELTS Crash Course,IELTS Writing Course,IELTS Listening Course,IELTS Speaking Course,English Spoken </span>  </p>
                </div>
                {/* </Col> */}
            </div>
        </Container>
        // </Row>
    );
};

export default AboutUs;