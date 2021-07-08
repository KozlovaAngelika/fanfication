import React from 'react';
import Fanfic from './Fanfic/Fanfic'
import { Row, Col } from 'react-bootstrap';
import style from './Fanfiction.module.scss';
const Fanfiction = ({ fanfictionData }) => {
    if (fanfictionData.length === 0) {
        return <p className={style.error}>No data to display...</p>
    }
    const FanfictionElements = fanfictionData.map((elem) => {
        return <Fanfic data={elem} key={elem._id}></Fanfic>
    })
    return (
        <Row className={`${style.fanfiction}`}>
            <Col>
                {FanfictionElements}
            </Col>
        </Row >
    );
}

export default Fanfiction;
