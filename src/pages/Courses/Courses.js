import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { useLoaderData } from 'react-router-dom';
import CourseSummary from '../../shared/CourseSummary/CourseSummary';


import LeftSideCourseName from '../LeftSideCourseName/LeftSideCourseName';

const Courses = () => {
    const allCourses=useLoaderData()
    console.log(allCourses)
    return (
        <Container>
            <Row>
                <Col lg='4'>
                    <LeftSideCourseName></LeftSideCourseName>
                </Col>
                <Col lg='8'>
                    <h3>All Courses :{allCourses.length}</h3>
                    {
                        allCourses.map(course=><CourseSummary
                        key={course.id}
                        course={course}

                        ></CourseSummary>)
                    }
                </Col>
            </Row>
        </Container>
    );
};

export default Courses;