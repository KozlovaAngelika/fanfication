import React, { useState, useContext } from 'react';
import { Row, Col, Button } from 'react-bootstrap';
import { useHttp } from "@hooks/http.hook";
import style from './Fanfic.module.scss';
import { NoticeContext } from '@context/NoticeContext';

const Fanfic = ({ data, isEdit, getFanfiction }) => {
    const [isFanficViewMode, setIsFanficViewMode] = useState(false);
    const fullScreenBtnToggleHandler = () => {
        setIsFanficViewMode((isFanficViewMode) => {
            return !isFanficViewMode;
        })
    }
    const { loading, request } = useHttp();
    const deleteFanficHandler = async () => {
        await request('/api/funfic/fanfiction', "DELETE", { id: data._id }).then(() => {
            getFanfiction();
        }
        )
    }
    const deleteFanficBtn = isEdit ? <Button variant="dark" className={style.deleteBtn} onClick={deleteFanficHandler}><svg viewBox="0 0 448 512"><path d="M32 464a48 48 0 0 0 48 48h288a48 48 0 0 0 48-48V128H32zm272-256a16 16 0 0 1 32 0v224a16 16 0 0 1-32 0zm-96 0a16 16 0 0 1 32 0v224a16 16 0 0 1-32 0zm-96 0a16 16 0 0 1 32 0v224a16 16 0 0 1-32 0zM432 32H312l-9.4-18.7A24 24 0 0 0 281.1 0H166.8a23.72 23.72 0 0 0-21.4 13.3L136 32H16A16 16 0 0 0 0 48v32a16 16 0 0 0 16 16h416a16 16 0 0 0 16-16V48a16 16 0 0 0-16-16z" /></svg></Button> : null
    return (
        <Row className={`${style.fanfic} ${isFanficViewMode ? style.show : null}`}>
            <Col className='d-flex flex-column justify-content-between'>
                <Row>
                    <Col xs={6} className='d-flex flex-column'>
                        <span className={style.name}>{data.name}</span>
                        <span className={style.fandom}>{data.fandom}</span>
                    </Col>
                    <Col xs={6} className='d-flex align-items-start justify-content-end'>
                        <span className={style.date}>{data.lastUpdateDate.toDateString()}</span>
                    </Col>
                </Row>
                <Row>
                    <Col className={style.shortDescription}><p>{data.shortDescription}</p></Col>
                </Row>
                <Row>
                    <Col className={style.content}><p>{data.content}</p></Col>
                </Row>
                <Row>
                    <Col xs={6}><span className={style.owner}>{data.owner}</span></Col>
                    <Col xs={6} className='d-flex align-items-center justify-content-end'>
                        {deleteFanficBtn}
                        <span className={style.fullScreenBtn} onClick={fullScreenBtnToggleHandler}><svg viewBox="0 0 448 512"><path fill="currentColor" d="M212.686 315.314L120 408l32.922 31.029c15.12 15.12 4.412 40.971-16.97 40.971h-112C10.697 480 0 469.255 0 456V344c0-21.382 25.803-32.09 40.922-16.971L72 360l92.686-92.686c6.248-6.248 16.379-6.248 22.627 0l25.373 25.373c6.249 6.248 6.249 16.378 0 22.627zm22.628-118.628L328 104l-32.922-31.029C279.958 57.851 290.666 32 312.048 32h112C437.303 32 448 42.745 448 56v112c0 21.382-25.803 32.09-40.922 16.971L376 152l-92.686 92.686c-6.248 6.248-16.379 6.248-22.627 0l-25.373-25.373c-6.249-6.248-6.249-16.378 0-22.627z" /></svg></span>
                    </Col>
                </Row>
            </Col>
        </Row>
    );
}

export default Fanfic;
