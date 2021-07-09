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
        <Row className={style.fanfiction}>
            <Col>
                <Row className='pb-3'>
                    <Col xs={6}><h1>All fanfiction</h1></Col>
                    <Col xs={6} className='d-flex flex-column justify-content-center align-items-end'><div className={style.sortByDateBtn}>Sort by date<svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="sort" class="svg-inline--fa fa-sort fa-w-10" role="img" viewBox="0 0 320 512"><path fill="currentColor" d="M41 288h238c21.4 0 32.1 25.9 17 41L177 448c-9.4 9.4-24.6 9.4-33.9 0L24 329c-15.1-15.1-4.4-41 17-41zm255-105L177 64c-9.4-9.4-24.6-9.4-33.9 0L24 183c-15.1 15.1-4.4 41 17 41h238c21.4 0 32.1-25.9 17-41z" /></svg></div></Col>
                </Row>
                {FanfictionElements}
            </Col>
        </Row >
    );
}

export default Fanfiction;
