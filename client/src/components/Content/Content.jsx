import React, { useContext } from 'react';
import { Container } from 'react-bootstrap';
import style from './Content.module.scss';
import { useRoutes } from '@routes';
import { AuthContext } from '@context/AuthContext';


const Content = () => {
    const { isLogin } = useContext(AuthContext);
    return (
        <Container className={style.content}>
            {useRoutes(isLogin)}
        </Container>
    );
}

export default Content;
