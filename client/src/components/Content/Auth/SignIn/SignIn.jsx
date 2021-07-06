import React, { useContext } from 'react';
import { Form, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { sha3_256 } from "js-sha3";
import axios from 'axios';
import { AuthContext } from '@context/AuthContext';
const SignIn = ({ cnahgeHandler, form, setForm }) => {
    const { login } = useContext(AuthContext);
    const loginHandler = async () => {
        try {
            form.password = (sha3_256(form.password))
            await axios.post('/api/auth/login', {
                email: form.email,
                password: form.password
            }, {
                headers: {
                    'Content-Type': 'application/json'
                }
            }
            )
                .then((res) => {
                    login(res.data);
                })
        } catch (error) {
            console.error(error)
        }
    }
    return (
        <Form onSubmit={(e) => { e.preventDefault() }} className='d-flex flex-column justify-content-between'>
            <h3>Sign in</h3>
            <div className='d-flex flex-column justify-content-start flex-grow-1'>
                <Form.Group controlId="formBasicEmail">
                    <Form.Label>Email</Form.Label>
                    <Form.Control
                        type="email"
                        placeholder="Enter email"
                        name="email"
                        onChange={cnahgeHandler}
                    />
                </Form.Group>
                <Form.Group controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control
                        type="password"
                        placeholder="Password"
                        name="password"
                        onChange={cnahgeHandler}
                    />
                </Form.Group>
            </div>
            <div className="d-flex justify-flex-start align-items-center">
                <Button
                    variant="secondary"
                    className="button"
                    type="submit"
                    onClick={loginHandler}
                >
                    Sign in
                </Button>
                <Link to='/auth/signup'>sign up</Link>
            </div>
        </Form >
    );
}

export default SignIn;
