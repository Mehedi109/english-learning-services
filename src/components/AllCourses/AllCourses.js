import React, { useEffect, useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import Courses from '../Courses/Courses';

const AllCourses = () => {
    const [courses, setCourses] = useState([]);
    useEffect(() => {
        const url = './fakeDB.json';
        fetch(url)
            .then(res => res.json())
            .then(data => setCourses(data));
    }, []);

    return (
        <div>
            <div>
                <Container fluid>
                    <h1 style={{ marginTop: '20px' }}>Courses</h1>
                    <p>See Our All courses</p>
                    <Row>
                        {
                            courses.map(course => <Courses
                                key={course.id}
                                course={course}
                            ></Courses>)
                        }
                    </Row>
                </Container>
            </div>
        </div>
    );
};

export default AllCourses;