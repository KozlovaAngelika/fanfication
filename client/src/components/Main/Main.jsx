import React from 'react';
import Auth from './Auth/Auth';
import { Container } from 'react-bootstrap';
import style from './Main.module.scss';

const Main = () => {
    return (
        <Container className={style.main}>
            <Auth></Auth>
        </Container>
    );
}

export default Main;
