import React from 'react';
import { Col, Row, Form } from 'react-bootstrap';
import style from './SearchPanel.module.scss'

const SearchPanel = () => {
    return (
        <Row className={style.searchPanel}>
            <Col>
                <Form>
                    <Form.Control type="text" placeholder="Search by name" />
                </Form>
            </Col>
        </Row>
    );
}

export default SearchPanel;
