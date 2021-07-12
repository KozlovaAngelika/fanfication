import React, { useState, useContext } from 'react';
import style from './NewFanficPopup.module.scss';
import { Col, Row, Form, Button } from 'react-bootstrap';
import { useHttp } from "@hooks/http.hook";
import { NoticeContext } from '@context/NoticeContext';
const NewFanficPopup = ({ isShow, setIsPopUpShow, getFanfiction }) => {
    const [form, setForm] = useState({ name: '', fandom: '', shortDescription: '', content: '' });
    const { loading, request } = useHttp();
    const { setMessage } = useContext(NoticeContext);
    const closeBtnOnClickHandler = () => {
        clearForm();
        setIsPopUpShow(false);
    }
    const cnahgeHandler = (event) => {
        setForm({ ...form, [event.target.name]: event.target.value })
    }
    const addFanficHandler = async (e) => {
        e.preventDefault();
        const data = await request('/api/funfic/fanfiction', "PUT", {
            ...form
        }).then(
            (data) => {
                if (data) {
                    clearForm();
                    closeBtnOnClickHandler();
                    getFanfiction();
                }
            }
        )
    }
    const clearForm = () => {
        setForm({ name: '', fandom: '', shortDescription: '', content: '' })
    }
    return (
        <div className={`${style.popup} ${isShow ? style.show : null} justify-content-center align-items-center`}>
            <Form>
                <div className='d-flex justify-content-between align-items-center'>
                    <h2>Add fanfiction</h2>
                    <span className={style.closeBtn} onClick={closeBtnOnClickHandler}><svg viewBox="0 0 352 512"><path d="M242.72 256l100.07-100.07c12.28-12.28 12.28-32.19 0-44.48l-22.24-22.24c-12.28-12.28-32.19-12.28-44.48 0L176 189.28 75.93 89.21c-12.28-12.28-32.19-12.28-44.48 0L9.21 111.45c-12.28 12.28-12.28 32.19 0 44.48L109.28 256 9.21 356.07c-12.28 12.28-12.28 32.19 0 44.48l22.24 22.24c12.28 12.28 32.2 12.28 44.48 0L176 322.72l100.07 100.07c12.28 12.28 32.2 12.28 44.48 0l22.24-22.24c12.28-12.28 12.28-32.19 0-44.48L242.72 256z" /></svg></span>
                </div>
                <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
                    <Form.Label column sm="12">
                        Name
                    </Form.Label>
                    <Col sm="12">
                        <Form.Control type="text" placeholder="Name" name="name" value={form.name} onChange={cnahgeHandler} />
                    </Col>
                </Form.Group>
                <Form.Group as={Row} className="mb-3">
                    <Form.Label column sm="12">Fandom</Form.Label>
                    <Col sm="12">
                        <Form.Control type="text" placeholder="Fandom" value={form.fandom} name="fandom" onChange={cnahgeHandler} />
                    </Col>
                </Form.Group>
                <Form.Group as={Row} className="mb-3">
                    <Form.Label column sm="12">Short description</Form.Label>
                    <Col sm="12">
                        <Form.Control type="text" placeholder="Short description" name="shortDescription" value={form.shortDescription} onChange={cnahgeHandler} />
                    </Col>
                </Form.Group>
                <Form.Group as={Row} className="mb-3">
                    <Form.Label column sm="12">Content</Form.Label>
                    <Col sm="12">
                        <textarea value={form.content} name="content" onChange={cnahgeHandler}></textarea>
                    </Col>
                </Form.Group>
                <Button variant="primary" type="button" disabled={loading} onClick={addFanficHandler}>
                    Submit
                </Button>
            </Form>
        </div>
    );
}

export default NewFanficPopup;
