import React from 'react';
import { Row, Col } from 'react-bootstrap';
import ThemeSwitcherBtn from './ThemeSwitcherBtn/ThemeSwitcherBtn';
const Navigation = () => {
    return (
        <Row>
            <Col md={9} className='d-flex justify-content-between align-items-center'></Col>
            <Col md={3} className='d-flex justify-content-end align-items-center'>
                <ThemeSwitcherBtn></ThemeSwitcherBtn>
            </Col>
        </Row>
    );
}

export default Navigation;
