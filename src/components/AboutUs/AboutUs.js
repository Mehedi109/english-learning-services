import React from 'react';
import './AboutUs.css'
import img from '../../images/img-1.jpg';
import { Container } from 'react-bootstrap';

const AboutUs = () => {

    return (
        <Container>
            <div className="about mt-5">
                <div className="about-image">
                    <img src={img} alt="" />
                </div>
                <div className="about-text">
                    <h2>About Us</h2>
                    <p>LearnEnglish is an english learning institute where you can learn your desired english course.We have qualified teacher who can teach very carefully to our students.There are some ielts course and also some basic English course that is very helful for the people who really wants to learn English.Right now there are total eight courses in our institute and they are <span className="fw-bold"> English Reading Course, IELTS with foundation, Regular IELTS Course, IELTS Crash Course, IELTS Writing Course, IELTS Listening Course, IELTS Speaking Course,English Spoken.</span><br />
                        <ul>
                            <li>We have total 20 teachers to teach our students</li>
                            <li>Every day our two teachers take a special session besides regular classes for the students who have some lackings about concept,students can easliy clear the concept and can remove the lackings.</li>
                            <li>There are also some club for our student for practice properly related the course.They can join the club and practice as much as they need with other students and teachers.</li>
                        </ul>
                    </p>
                </div>
            </div>
        </Container>
    );
};

export default AboutUs;