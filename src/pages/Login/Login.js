import React, { useContext, useState } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { AuthContext } from '../../context/AuthProvider/AuthProvider';
import { Link, useLocation, useNavigate } from 'react-router-dom';

const Login = () => {

    const [error,setError]=useState(true)
    const {userLogin}=useContext(AuthContext);
    const navigate=useNavigate();
    const location=useLocation();
    const from = location.state?.from?.pathname || "/";
    
    
    const handleLogin=(event)=>{
        event.preventDefault()
    
        const form=event.target;
        const email=form.email.value;
        const password=form.password.value;
    
        userLogin(email,password)
        .then(result=>{
            const user=result.user;
            console.log(user)
            form.reset()
            setError(false)
            navigate(from, { replace: true })
            
        })
        .catch(error=>{
            setError(error.message)
        })
    }


    return (
        <Form onSubmit={handleLogin} className='w-50  mx-auto '>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email</Form.Label>
                <Form.Control name='email' type="email" placeholder="Enter email" required/>

            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control name='password' type="password" placeholder="Password"required/>
            </Form.Group>

            <Button variant="primary" type="submit">
                Login
            </Button>
            <p>New to this website ? Please <Link to='/register'>Register</Link></p>
            <Form.Text className="text-danger">
            <h4>{error}</h4>
            </Form.Text>
        </Form>
    );
};

export default Login;