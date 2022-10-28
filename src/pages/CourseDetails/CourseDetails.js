import React from 'react';

import Card from 'react-bootstrap/Card';
import { useLoaderData } from 'react-router-dom';


const CourseDetails = () => {
    const course=useLoaderData();

    const {title,img,details}=course;
    console.log(course)
    return (
        <Card className='mb-5 mx-auto' style={{ width: '40rem' }}>
            
        <Card.Img variant="top" src={img} />
        <Card.Body>
        <Card.Title>{title}</Card.Title>
          <Card.Text>
          {details}

          
          </Card.Text>
          
        </Card.Body>

        

      </Card>
    );
};

export default CourseDetails;