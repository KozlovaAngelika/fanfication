import React, { useState } from 'react';
import { Row } from 'react-bootstrap';
import style from './Auth.module.scss';
import { Route, Switch, Redirect } from 'react-router-dom';
import SignIn from './SignIn/SignIn';
import SignUp from './SignUp/SignUp';

const Auth = () => {
    const [form, setForm] = useState({ name: '', email: '', password: '' });
    const cnahgeHandler = (event) => {
        setForm({ ...form, [event.target.name]: event.target.value })
    }
    const clearForm = () => {
        setForm({ name: '', email: '', password: '' })
    }
    return (
        <React.Fragment>
            <Row className={`${style.auth} d-flex justify-content-center align-items-start`}>
                <Switch>
                    <Route path='/auth/signup'>
                        <SignUp cnahgeHandler={cnahgeHandler} form={form} setForm={setForm} clearForm={clearForm}></SignUp>
                    </Route>
                    <Route path='/auth/signin'>
                        <SignIn cnahgeHandler={cnahgeHandler} form={form} setForm={setForm} clearForm={clearForm} ></SignIn>
                    </Route>
                </Switch>
            </Row>
        </React.Fragment>
    );
}
export default Auth;
