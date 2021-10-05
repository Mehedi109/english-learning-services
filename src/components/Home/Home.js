import React, { useEffect, useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import Courses from '../Courses/Courses';
import './Home.css';

const Home = () => {
    const [courses, setCourses] = useState([]);
    useEffect(() => {
        const url = './fakeDB.json';
        fetch(url)
            .then(res => res.json())
            .then(data => setCourses(data));
    }, []);

    return (
        <>
            <div className="home all-bg">
                <div className="home-banner">
                    <div className="home-text">
                        <h4>Learning English is easy,not hard</h4>
                        <h5>Take your learning as fun,enjoy it and learn much</h5>
                        <h6>Start your learning today,don't stop your learning and fullfill your dream</h6>
                    </div>
                </div>
                <div>
                    <Container fluid className="courses">
                        <h2 style={{ marginTop: '50px', marginBottom: '20px', fontWeight: 'bold' }}>Our Courses</h2>
                        <Row>
                            {
                                courses.map(course => <Courses
                                    key={course.id}
                                    course={course}
                                ></Courses>).slice(0, 4)  // slice is used for showing only four courses
                            }
                        </Row>
                    </Container>
                </div>
            </div>
        </>
    );
};

export default Home;