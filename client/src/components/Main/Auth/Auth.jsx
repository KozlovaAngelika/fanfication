import React, { useState } from 'react';
import { Row, Form, Button } from 'react-bootstrap';
import style from './Auth.module.scss';
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';
import axios from 'axios';

const Auth = () => {
    const [form, setForm] = useState({ name: '', email: '', password: '' });
    const cnahgeHandler = (event) => {
        setForm({ ...form, [event.target.name]: event.target.value })
    }
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
        <BrowserRouter>
            <Switch>
                <React.Fragment>
                    <Row className={`${style.auth} d-flex justify-content-center align-items-start`}>
                        <Route path='/signup'>
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
                        </Route>
                        <Route path='/signin'>
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
                        </Route>
                    </Row>
                </React.Fragment>
            </Switch>
        </BrowserRouter >
    );
}

export default Auth;
