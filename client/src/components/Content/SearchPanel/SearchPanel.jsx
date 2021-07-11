import React, { useEffect, useState } from 'react';
import { Col, Row, Form } from 'react-bootstrap';
import style from './SearchPanel.module.scss'

const SearchPanel = ({ allFanfiction, setAllFanfiction, fanfictionForDisplay, setFanfictionForDisplay }) => {
    const [phraseForSearch, setPhraseForSearch] = useState('');
    const onSearchChangeHabdler = (phrase) => {
        setPhraseForSearch(phrase);
        setFanfictionForDisplay(allFanfiction.filter((item) => {
            return item.name.toLowerCase().indexOf(phrase.toLowerCase()) > -1;
        }))
    }
    return (
        <Row className={style.searchPanel}>
            <Col>
                <Form>
                    <Form.Control type="text" placeholder="Search by name" onChange={(e) => { onSearchChangeHabdler(e.target.value) }} value={phraseForSearch} />
                </Form>
            </Col>
        </Row>
    );
}

export default SearchPanel;
