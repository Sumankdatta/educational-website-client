import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';

const CourseSummary = ({course}) => {
    const {_id,title,details,img}=course;

    return (
        
        <Card className='mb-5 mx-auto' style={{ width: '40rem' }}>
      <Card.Img variant="top" src={img} />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>
        {details.length > 150 ?
                        <p>{details.slice(0, 250) + '...'} <Button variant="secondary"><Link className='text-light' to={`/coursedetails/${_id}`}>Premium Access</Link></Button></p>
                        : <p>{details}</p>}
        </Card.Text>
        
      </Card.Body>
    </Card>
    );
};

export default CourseSummary;