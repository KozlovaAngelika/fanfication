import React, { useState } from 'react';
import { Row } from 'react-bootstrap';
import style from './Auth.module.scss';
import { Route } from 'react-router-dom';
import SignIn from './SignIn/SignIn';
import SignUp from './SignUp/SignUp';

const Auth = () => {
    const [form, setForm] = useState({ name: '', email: '', password: '' });
    const cnahgeHandler = (event) => {
        setForm({ ...form, [event.target.name]: event.target.value })
    }
    return (
        <React.Fragment>
            <Row className={`${style.auth} d-flex justify-content-center align-items-start`}>
                <Route path='/signup'>
                    <SignUp cnahgeHandler={cnahgeHandler} form={form} setForm={setForm} ></SignUp>
                </Route>
                <Route path='/signin'>
                    <SignIn cnahgeHandler={cnahgeHandler}></SignIn>
                </Route>
            </Row>
        </React.Fragment>
    );
}
export default Auth;
