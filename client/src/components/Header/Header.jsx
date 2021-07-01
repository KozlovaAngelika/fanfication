import React from 'react';
import Navigation from './Navigation/Navigation';
import SearchPanel from './SearchPanel/SearchPanel'
import { Container } from 'react-bootstrap';
import style from './Header.module.scss';
const Header = ({ currentTheme, setCurrentTheme }) => {
    return (
        <Container className={style.header} fluid>
            <Navigation currentTheme={currentTheme} setCurrentTheme={setCurrentTheme}></Navigation>
            <SearchPanel></SearchPanel>
        </Container>
    );
}

export default Header;

