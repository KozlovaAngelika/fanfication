import React from 'react';
import { Link } from 'react-router-dom';
import style from './AuthLinks.module.scss';

const AuthLinks = () => {
    return (
        <React.Fragment>
            <Link to='signin'>sign in</Link>
            <div className={style.separator}></div>
            <Link to='signup'>sign up</Link>
        </React.Fragment>
    );
}

export default AuthLinks;
