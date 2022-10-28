import React, { useContext, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import { FaGithub, FaGoogle } from 'react-icons/fa';
import { AuthContext } from '../../context/AuthProvider/AuthProvider';
import { GithubAuthProvider, GoogleAuthProvider } from 'firebase/auth';
import { Link } from 'react-router-dom';


const Register = () => {
    const { providerLogIn, createUser, githubLogin } = useContext(AuthContext)
    const googleProvider = new GoogleAuthProvider()
    const githubProvider = new GithubAuthProvider();
    const [error, setError] = useState(true);


    const handalGoogleSignIn = () => {
        providerLogIn(googleProvider)

            .then(result => {
                const user = result.user;
                console.log(user)
            })
            .catch(error => {
                console.error('error', error)
            })
    }

    const handleGithubSignIn=()=>{
        githubLogin(githubProvider)

        .then(result => {
            const user = result.user;
            console.log(user)
        })
        .catch(error => {
            console.error('error', error)
        })
    }

    const handleRegister = (event) => {
        event.preventDefault()
        const form = event.target;
        const name = form.name.value;
        const photo = form.photo.value;
        const email = form.email.value;
        const password = form.password.value;

        createUser(email, password)
            .then(result => {
                const user = result.user;
                console.log(user)
                form.reset()
                setError(false)
            })
            .catch(error => {
                setError(error.message)
            })

    }




    return (
        <Form onSubmit={handleRegister} className='w-50  mx-auto mt-5'>
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

            <Button variant="primary" type="submit" className='mb-3'>
                Registar
            </Button>
            <Form.Text className="text-danger">
                {error}
            </Form.Text>
            

            <div className=''>
                <ButtonGroup >
                    <Button onClick={handalGoogleSignIn} className="mb-2 " variant="outline-primary"> <FaGoogle></FaGoogle> Login with Google</Button>
                    <Button onClick={handleGithubSignIn} variant="outline-dark"> <FaGithub></FaGithub> Login with Github</Button>
                </ButtonGroup>
            </div>
            <p>Already have an account ? Please <Link to='/login'>Log in</Link></p>
        </Form>
    );
};

export default Register;