import React from 'react';
import { Row, Col } from 'react-bootstrap';
import style from './Fanfic.module.scss';

const Fanfic = ({ data }) => {
    return (
        <Row className={style.fanfic}>
            <Col>
                <Row>
                    <Col xs={6} className='d-flex flex-column'>
                        <span className={style.name}>{data.name}</span>
                        <span className={style.fandom}>{data.fandom}</span>
                    </Col>
                    <Col xs={6} className='d-flex align-items-start justify-content-end'>
                        <span className={style.date}>{data.lastUpdateDate}</span>
                    </Col>
                </Row>
                <Row>
                    <Col className={style.content}><p>{data.content}</p></Col>
                </Row>
                <Row>
                    <Col xs={6}><span className={style.owner}>Owner</span></Col>
                    <Col xs={6} className='d-flex align-items-start justify-content-end'>
                        <span className={style.fullScreenBtn}><svg viewBox="0 0 448 512"><path fill="currentColor" d="M212.686 315.314L120 408l32.922 31.029c15.12 15.12 4.412 40.971-16.97 40.971h-112C10.697 480 0 469.255 0 456V344c0-21.382 25.803-32.09 40.922-16.971L72 360l92.686-92.686c6.248-6.248 16.379-6.248 22.627 0l25.373 25.373c6.249 6.248 6.249 16.378 0 22.627zm22.628-118.628L328 104l-32.922-31.029C279.958 57.851 290.666 32 312.048 32h112C437.303 32 448 42.745 448 56v112c0 21.382-25.803 32.09-40.922 16.971L376 152l-92.686 92.686c-6.248 6.248-16.379 6.248-22.627 0l-25.373-25.373c-6.249-6.248-6.249-16.378 0-22.627z" /></svg></span>
                    </Col>
                </Row>
            </Col>
        </Row>
    );
}

export default Fanfic;
