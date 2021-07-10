import React, { useContext, useEffect } from 'react';
import { Form, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { sha3_256 } from "js-sha3";
import { AuthContext } from '@context/AuthContext';
import { useHttp } from "@hooks/http.hook";
const SignIn = ({ cnahgeHandler, form, setForm, clearForm }) => {

    const { login } = useContext(AuthContext);
    const { loading, request } = useHttp();

    useEffect(clearForm, [clearForm]);

    const loginHandler = async () => {
        clearForm();
        form.password = (sha3_256(form.password))
        await request('/api/auth/login', 'POST', {
            email: form.email,
            password: form.password
        })
            .then((data) => {
                clearForm();
                login(data);
            })
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
                        value={form.email}
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
                        value={form.password}
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
                    disabled={loading}
                >
                    Sign in
                </Button>
                <Link to='/auth/signup'>sign up</Link>
            </div>
        </Form >
    );
}

export default SignIn;
