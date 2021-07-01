import React from 'react';
import { Row, Col, Button } from 'react-bootstrap';
import ThemeSwitcherBtn from './ThemeSwitcherBtn/ThemeSwitcherBtn';
import logo from './../../../media/logo.jpg';
import style from './Navigation.module.scss';
import { Link } from 'react-router-dom';
const Navigation = ({ currentTheme, setCurrentTheme }) => {


    return (
        <Row className={style.navigation}>
            <Col md={7} className='d-flex justify-content-between align-items-center'>
                <img src={logo} alt="logo" className={style.logo} />
            </Col>
            <Col md={2} className='d-flex justify-content-center align-items-center'>
                <Link to='signin'>sign in</Link>
                <div className={style.separator}></div>
                <Link to='signup'>sign up</Link>
            </Col>
            <Col md={3} className='d-flex justify-content-end align-items-center'>
                <ThemeSwitcherBtn currentTheme={currentTheme} setCurrentTheme={setCurrentTheme}></ThemeSwitcherBtn>
            </Col>
        </Row>
    );
}

export default Navigation;
