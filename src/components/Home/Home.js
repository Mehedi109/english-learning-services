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
            <div className="home">
                <div className="home-text">
                    <h4>Learning English is easy,not hard !!!</h4>
                    <h5>Take your learning as fun,enjoy it and learn much</h5>
                    <h6>Start your learning today,don't stop your learning and fullfill your dream</h6>
                </div>
            </div>
            <div>
                <Container fluid>
                    <h1 style={{ marginTop: '30px', marginBottom: '20px', }}>Our Courses</h1>
                    <Row>
                        {
                            courses.map(course => <Courses
                                key={course.id}
                                course={course}
                            ></Courses>).slice(0, 4)
                        }
                    </Row>
                </Container>
            </div>
        </>
    );
};

export default Home;