import React, { useContext } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import {  FaGithub, FaGoogle } from 'react-icons/fa';
import { AuthContext } from '../../context/AuthProvider/AuthProvider';
import { GoogleAuthProvider } from 'firebase/auth';


const Register = () => {
    const {providerLogIn}=useContext(AuthContext)
    const googleProvider=new GoogleAuthProvider()
    const handalGoogleSignIn=()=>{
providerLogIn(googleProvider)

.then(result=>{
    const user=result.user;
    console.log(user)
})
.catch(error=>{
    console.error('error',error)
})
    }
    

    

    return (
        <Form className='w-50  mx-auto '>
        <Form.Group className="mb-3" >
            <Form.Label>Your Name</Form.Label>
            <Form.Control name='name' type="text" placeholder="Your Name" />
        </Form.Group>
        <Form.Group className="mb-3" >
            <Form.Label>Photo URL</Form.Label>
            <Form.Control name='photo' type="text" placeholder="Photo URl" />
        </Form.Group>
        <Form.Group className="mb-3" >
            <Form.Label>Email address</Form.Label>
            <Form.Control name='email' type="email" placeholder="Enter email" required />
        </Form.Group>

        <Form.Group className="mb-3" >
            <Form.Label>Password</Form.Label>
            <Form.Control name='password' type="password" placeholder="Password" required />
        </Form.Group>

        <Button variant="primary" type="submit">
            Registar
        </Button>
        <Form.Text className="text-danger">
          
        </Form.Text>
        
        <div className=''>
        <ButtonGroup >
                <Button onClick={handalGoogleSignIn} className="mb-2" variant="outline-primary"> <FaGoogle></FaGoogle> Login with Google</Button>
                <Button variant="outline-dark"> <FaGithub></FaGithub> Login with Github</Button>
            </ButtonGroup>
        </div>
    </Form>
    );
};

export default Register;