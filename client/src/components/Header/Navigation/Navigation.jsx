import React from 'react';
import { Row, Col } from 'react-bootstrap';
import ThemeSwitcherBtn from './ThemeSwitcherBtn/ThemeSwitcherBtn';
import AuthLinks from './AuthLinks/AuthLinks';
import logo from '@media/logo.jpg';
import style from './Navigation.module.scss';

const Navigation = ({ currentTheme, setCurrentTheme }) => {
    return (
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
    );
}

export default Navigation;
