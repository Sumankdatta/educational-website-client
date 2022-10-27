import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { useLoaderData } from 'react-router-dom';

import LeftSideCourseName from '../LeftSideCourseName/LeftSideCourseName';

const Courses = () => {
    const courses=useLoaderData()
    console.log(courses)
    return (
        <Container>
            <Row>
                <Col lg='5'>
                    <LeftSideCourseName></LeftSideCourseName>
                </Col>
                <Col lg='7'>
                    <h1>this is course</h1>
                </Col>
            </Row>
        </Container>
    );
};

export default Courses;