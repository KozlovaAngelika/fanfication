import React from 'react';
import { Container } from 'react-bootstrap';
import { Col, Row } from 'react-bootstrap';
import AuthLinks from './AuthLinks/AuthLinks';
import ThemeSwitcherBtn from './ThemeSwitcherBtn/ThemeSwitcherBtn';
import style from './Header.module.scss';
import logo from '@media/logo.jpg'
import { useHistory } from "react-router-dom";
const Header = ({ currentTheme, setCurrentTheme }) => {
    const history = useHistory();
    const logoHandler = () => {
        history.push("/");
    }
    return (
        <Container className={style.header} fluid>
            <Row className={style.navigation}>
                <Col sm={12} md={6} className='d-flex justify-content-between align-items-center'>
                    <img src={logo} alt="logo" className={style.logo} onClick={logoHandler} />
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

