import React from 'react';
import { Row, Col } from 'react-bootstrap';
import ThemeSwitcherBtn from './ThemeSwitcherBtn/ThemeSwitcherBtn';
import logo from './../../../media/logo.jpg';
import style from './Navigation.module.scss';
const Navigation = ({ currentTheme, setCurrentTheme }) => {
    return (
        <Row className={style.navigation}>
            <Col md={9} className='d-flex justify-content-between align-items-center'>
                <img src={logo} alt="logo" className={style.logo} />
            </Col>
            <Col md={3} className='d-flex justify-content-end align-items-center'>
                <ThemeSwitcherBtn currentTheme={currentTheme} setCurrentTheme={setCurrentTheme}></ThemeSwitcherBtn>
            </Col>
        </Row>
    );
}

export default Navigation;
