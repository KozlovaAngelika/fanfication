import React from 'react';
import { Col, Row, Form } from 'react-bootstrap';
import style from './SearchPanel.module.scss'

const SearchPanel = () => {
    return (
        <Row className={style.searchPanel}>
            <Col className='d-flex justify-content-md-end align-items-center'>
                <Form>
                    <Form.Control type="text" placeholder="search" />
                </Form>
            </Col>
        </Row>
    );
}

export default SearchPanel;
