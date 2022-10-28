import React from 'react';
import { useContext } from 'react';
import { Button, Image } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { FaUser } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import img2 from '../../assets/image/img2'
import { AuthContext } from '../../context/AuthProvider/AuthProvider';
import LeftSideCourseName from '../../pages/LeftSideCourseName/LeftSideCourseName';

const Header = () => {
    const { user, logOut } = useContext(AuthContext);

    const handalLogout = () => {
        logOut()
            .then(() => { })
            .catch(error => {
                console.error('error', error)
            })
    }


    return (
        <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
            <Container>
                <Navbar.Brand ><Link to='/'><Image style={{ height: '80px', width: '150px' }} src={img2}></Image></Link></Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="ms-auto">
                        <Nav.Link ><Link to='/'>Courses</Link></Nav.Link>
                        <Nav.Link ><Link to='/faq'>FAQ</Link></Nav.Link>
                        <Nav.Link ><Link to='/blog'>Blog</Link></Nav.Link>

                    </Nav>
                    <Nav>
                        <Nav.Link href="#deets">

                            {
                                user?.uid ?
                                    <>
                                        <span>{user?.displayName}</span>
                                        <Button variant="light" onClick={handalLogout}>Logout</Button>
                                    </>

                                    :
                                    <>
                                        <Link to='/login'>Login</Link>
                                        <Link to='/register'>Register</Link>
                                    </>

                            }
                        </Nav.Link>
                        <Nav.Link eventKey={2} href="#memes">
                            {
                                user?.photoURL ?

                                    <Image style={{ height: '30px' }} roundedCircle src={user.photoURL}></Image>
                                    : <FaUser></FaUser>
                            }

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