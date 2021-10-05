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
        <>
            <div>
                <Container fluid className="courses">
                    <div style={{ position: 'relative', top: '30px', bottom: '20px' }}>
                        <h2 style={{ fontWeight: 'bold' }}>Courses</h2>
                        <p style={{ marginBottom: '40px' }}>See Our All courses</p>
                    </div>
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
        </>
    );
};

export default AllCourses;