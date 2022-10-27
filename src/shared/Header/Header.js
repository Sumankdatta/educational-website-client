import React from 'react';
import { Image } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from 'react-router-dom';
import img2 from '../../assets/image/img2'
import LeftSideCourseName from '../../pages/LeftSideCourseName/LeftSideCourseName';

const Header = () => {
    return (
        <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
        <Container>
          <Navbar.Brand href="#home"><Image style={{height:'80px',width:'150px'}} src={img2}></Image></Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link ><Link to='/courses'>Courses</Link></Nav.Link>
              <Nav.Link ><Link to='/faq'>FAQ</Link></Nav.Link>
              <Nav.Link ><Link to='/blog'>Blog</Link></Nav.Link>
              
            </Nav>
            <Nav>
              <Nav.Link href="#deets">More deets</Nav.Link>
              <Nav.Link eventKey={2} href="#memes">
                Dank memes
              </Nav.Link>
            </Nav>
            <div className='d-lg-none'>
                <LeftSideCourseName></LeftSideCourseName>
            </div>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    );
};

export default Header;