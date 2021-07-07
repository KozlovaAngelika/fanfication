import React, { useContext } from "react";
import { Toast } from "react-bootstrap";
import style from './Notice.module.scss';
import { NoticeContext } from '@context/NoticeContext';

export const Notice = () => {
    const { message, setMessage } = useContext(NoticeContext);
    return (
        <Toast
            onClose={() => setMessage(null)}
            show={!!message}
            delay={4000}
            autohide
            className={style.notice}
        >
            <Toast.Header className='d-flex justify-content-between'>Error</Toast.Header>
            <Toast.Body>{message}</Toast.Body>
        </Toast>
    );
};