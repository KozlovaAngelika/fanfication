import React, { useContext } from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import style from './AuthLinks.module.scss';
import { AuthContext } from '@context/AuthContext';
import { useHistory } from "react-router-dom";
const AuthLinks = () => {
    const { logout, isLogin, name } = useContext(AuthContext);
    const history = useHistory();
    if (!isLogin) {
        return (
            <div className={`${style.authLinks} d-flex align-items-center`}>
                <Link to='/auth/signin'>sign in</Link>
                <div className={style.separator}></div>
                <Link to='/auth/signup'>sign up</Link>
            </div>
        );
    }
    return (
        <div className={`${style.authLinks} d-flex align-items-center`}>
            <span onClick={() => { history.push("./profile"); }}>{name}</span>
            <div className={style.separator}></div>
            <Button variant="link" onClick={() => { logout() }}>Logout</Button>
        </div>

    )
}

export default AuthLinks;
