import React from 'react';
import Navigation from './Navigation/Navigation';
import SearchPanel from './SearchPanel/SearchPanel'
import { Row, Col } from 'react-bootstrap';
import style from './Header.module.scss';
const Header = () => {
    return (
        <Row className={style.header}>
            <Col>
                <Navigation></Navigation>
                <SearchPanel></SearchPanel>
            </Col>
        </Row>
    );
}

export default Header;

