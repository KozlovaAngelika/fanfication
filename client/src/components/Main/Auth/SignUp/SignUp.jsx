import React from 'react';
import { Form, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import axios from 'axios';

const SignUp = ({ cnahgeHandler, form, setForm }) => {
    const registerHandler = async () => {
        try {
            await axios.post('/api/auth/registration', {
                ...form
            }, {
                headers: {
                    'Content-Type': 'application/json'
                }
            }
            )
                .then((res) => {
                    console.log(res);
                })
        } catch (error) {
            console.error(error)
        }
    }
    return (
        <Form onSubmit={(e) => { e.preventDefault() }}>
            <h3>Sign up</h3>
            <Form.Group controlId="formBasicName">
                <Form.Label>Name</Form.Label>
                <Form.Control
                    type="text"
                    placeholder="Enter your name"
                    name="name"
                    onChange={cnahgeHandler}
                />
            </Form.Group>
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
            <div className="d-flex justify-flex-start align-items-center">
                <Button
                    variant="secondary"
                    className="button"
                    type="submit"
                    onClick={registerHandler}
                >
                    Sign up
                </Button>
                <Link to='signin'>sign in</Link>
            </div>
        </Form>
    );
}

export default SignUp;