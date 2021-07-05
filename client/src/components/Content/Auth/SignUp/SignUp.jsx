import React from 'react';
import { Form, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { sha3_256 } from "js-sha3";
import axios from 'axios';

const SignUp = ({ cnahgeHandler, form, setForm }) => {
    const registerHandler = async () => {
        try {
            form.password = (sha3_256(form.password))
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
        <Form onSubmit={(e) => { e.preventDefault() }} className='d-flex flex-column justify-content-between'>
            <h3>Sign up</h3>
            <div className='d-flex flex-column justify-content-start flex-grow-1'>
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
            </div>
            <div className="d-flex justify-flex-start align-items-center">
                <Button
                    variant="secondary"
                    className="button"
                    type="submit"
                    onClick={registerHandler}
                >
                    Sign up
                </Button>
                <Link to='/auth/signin'>sign in</Link>
            </div>
        </Form>
    );
}

export default SignUp;
