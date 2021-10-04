import React from 'react';
import { Card, CardGroup, Col, Row } from 'react-bootstrap';
import './Courses.css'

const Courses = (props) => {
    const { name, price, img } = props.course;
    return (
        <Col xs={12} md={6} lg={3} className="g-4">
            <div className="shadow-lg">
                <CardGroup>
                    <Card>
                        <Card.Img variant="top" src={img} />
                        < Card.Body >
                            <Card.Title>{name}</Card.Title>
                            <Card.Text>
                                TK: {price}
                            </Card.Text>
                        </Card.Body >
                    </Card >
                </CardGroup>
            </div >
        </Col >
        // <div>
        //     <h5>Name : {name}</h5>
        //     <h5>Price : {price}</h5>
        //     <img src={img} alt="" />
        // </div>
    );
};

export default Courses;