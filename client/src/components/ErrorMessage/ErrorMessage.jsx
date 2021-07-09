import React from 'react';
import style from './ErrorMessage.module.scss'

const ErrorMessage = () => {
    return (
        <p className={style.error}>Something went wrong. Please, try again...</p>
    );
}

export default ErrorMessage;
