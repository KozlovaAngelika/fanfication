import React from 'react';
import { Form, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
const SignIn = ({ cnahgeHandler }) => {
    return (
        <Form onSubmit={(e) => { e.preventDefault() }}>
            <h3>Sign in</h3>
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
                >
                    Sign in
                </Button>
                <Link to='signup'>sign up</Link>
            </div>
        </Form>
    );
}

export default SignIn;
