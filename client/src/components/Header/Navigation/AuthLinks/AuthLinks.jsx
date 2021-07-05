import React from 'react';
import { Link } from 'react-router-dom';
import style from './AuthLinks.module.scss';

const AuthLinks = () => {
    return (
        <div className={`${style.authLinks} d-flex align-items-center`}>
            <Link to='/auth/signin'>sign in</Link>
            <div className={style.separator}></div>
            <Link to='/auth/signup'>sign up</Link>
        </div>
    );
}

export default AuthLinks;
