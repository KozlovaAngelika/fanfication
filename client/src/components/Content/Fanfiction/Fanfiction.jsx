import React, { useState } from 'react';
import Fanfic from './Fanfic/Fanfic'
import { Row, Col } from 'react-bootstrap';
import style from './Fanfiction.module.scss';
const Fanfiction = ({ fanfictionData, isEdit, getFanfiction }) => {
    const [isLastDataFirst, setIsLastDataFirst] = useState(true);
    const sortBtnHandler = () => {
        setIsLastDataFirst((isLastDataFirst) => {
            return !isLastDataFirst;
        });
    }
    if (fanfictionData.length === 0) {
        return <p className={style.error}>No data to display...</p>
    }
    const fanfictionElements = fanfictionData.sort((a, b) => {
        if (isLastDataFirst) {
            return b.lastUpdateDate > a.lastUpdateDate ? 1 : -1
        } else {
            return a.lastUpdateDate > b.lastUpdateDate ? 1 : -1
        }
    }).map((elem) => {
        return <Fanfic data={elem} isEdit={isEdit} getFanfiction={getFanfiction} key={elem._id}></Fanfic>
    });
    return (
        <Row className={style.fanfiction}>
            <Col>
                <Row className='pb-3'>
                    <Col xs={12} md={6}><h1>Fanfiction</h1></Col>
                    <Col xs={12} md={6} className='d-flex flex-column justify-content-center align-items-md-end'><div className={style.sortByDateBtn} onClick={sortBtnHandler}>Sort by date<svg viewBox="0 0 448 512" className={isLastDataFirst ? style.active : null}><path d="M413.1 222.5l22.2 22.2c9.4 9.4 9.4 24.6 0 33.9L241 473c-9.4 9.4-24.6 9.4-33.9 0L12.7 278.6c-9.4-9.4-9.4-24.6 0-33.9l22.2-22.2c9.5-9.5 25-9.3 34.3.4L184 343.4V56c0-13.3 10.7-24 24-24h32c13.3 0 24 10.7 24 24v287.4l114.8-120.5c9.3-9.8 24.8-10 34.3-.4z" /></svg></div></Col>
                </Row>
                {fanfictionElements}
            </Col>
        </Row >
    );
}

export default Fanfiction;
