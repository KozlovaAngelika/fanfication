import React from 'react';
import { Container } from 'react-bootstrap';
import { Col, Row, Form } from 'react-bootstrap';
import AuthLinks from './AuthLinks/AuthLinks';
import ThemeSwitcherBtn from './ThemeSwitcherBtn/ThemeSwitcherBtn';
import style from './Header.module.scss';
import logo from '@media/logo.jpg'
const Header = ({ currentTheme, setCurrentTheme }) => {
    return (
        <Container className={style.header} fluid>
            <Row className={style.navigation}>
                <Col sm={12} md={6} className='d-flex justify-content-between align-items-center'>
                    <img src={logo} alt="logo" className={style.logo} />
                </Col>
                <Col sm={12} md={3} className='d-flex justify-content-md-end  align-items-center'>
                    <AuthLinks></AuthLinks>
                </Col>
                <Col sm={12} md={3} className='d-flex justify-content-md-end align-items-center'>
                    <ThemeSwitcherBtn currentTheme={currentTheme} setCurrentTheme={setCurrentTheme}></ThemeSwitcherBtn>
                </Col>
            </Row>
        </Container>
    );
}

export default Header;

