import React from 'react';
import Navigation from './Navigation/Navigation';
import { Container } from 'react-bootstrap';
import style from './Header.module.scss';
const Header = ({ currentTheme, setCurrentTheme }) => {
    return (
        <Container className={style.header} fluid>
            <Navigation currentTheme={currentTheme} setCurrentTheme={setCurrentTheme}></Navigation>
        </Container>
    );
}

export default Header;

