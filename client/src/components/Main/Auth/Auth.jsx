import React from 'react';
import { Row, Form, Button } from 'react-bootstrap';
import style from './Auth.module.scss';

const Auth = () => {
    return (
        <Row className={style.auth}>
            <Form>
                <h3>Sign in</h3>
                <Form.Group controlId="formBasicEmail">
                    <Form.Label>Email</Form.Label>
                    <Form.Control
                        type="email"
                        placeholder="Enter email"
                        name="email"
                    />
                </Form.Group>
                <Form.Group controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control
                        type="password"
                        placeholder="Password"
                        name="password"
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
                    <a href="#">log in</a>
                </div>
            </Form>
            <Form>
                <h3>Log in</h3>
                <Form.Group controlId="formBasicEmail">
                    <Form.Label>Email</Form.Label>
                    <Form.Control
                        type="email"
                        placeholder="Enter email"
                        name="email"
                    />
                </Form.Group>
                <Form.Group controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control
                        type="password"
                        placeholder="Password"
                        name="password"
                    />
                </Form.Group>
                <div className="d-flex justify-flex-start align-items-center">
                    <Button
                        variant="secondary"
                        className="button"
                        type="submit"
                    >
                        Log in
                    </Button>
                    <a href="#">sign in</a>
                </div>
            </Form>
        </Row>
    );
}

export default Auth;
