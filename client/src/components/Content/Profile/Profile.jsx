import React, { useCallback, useEffect, useState } from 'react';
import SearchPanel from './../SearchPanel/SearchPanel';
import { Col, Button } from 'react-bootstrap';
import Funfiction from './../Fanfiction/Fanfiction';
import style from './Profile.module.scss';
import Loader from '@loader/Loader'
import ErrorMessage from '@error/ErrorMessage'
import { useHttp } from "@hooks/http.hook";
import NewFanficPopup from './NewFanficPopup/NewFanficPopup';
const Profile = () => {
    const [allFanfiction, setAllFanfiction] = useState(null);
    const [isPopUpShow, setIsPopUpShow] = useState(false);
    const [fanfictionForDisplay, setFanfictionForDisplay] = useState(null);
    const { loading, request, error } = useHttp();
    const openNewFanficPopUpHandler = () => {
        setIsPopUpShow(true)
    }
    const getFanfiction = useCallback(
        async () => {
            const userId = JSON.parse(localStorage.getItem('userData')).id;
            const data = await request(`/api/funfic/fanfiction?userId=${userId}`, "GET").then((data) => {
                return data;
            });
            if (data != null) {
                const fanfication = data.map((elem) => {
                    elem.lastUpdateDate = new Date(Date.parse(elem.lastUpdateDate))
                    return elem;
                });
                setAllFanfiction(fanfication);
                setFanfictionForDisplay(fanfication);
            }
        }, [])
    useEffect(
        getFanfiction, [getFanfiction]
    )
    const loaderElement = loading ? <Loader></Loader> : null;
    const errorElement = error ? <ErrorMessage></ErrorMessage> : null;
    const contentElement = !loading && !error ? <Funfiction fanfictionData={fanfictionForDisplay ? fanfictionForDisplay : []} getFanfiction={getFanfiction} isEdit={true}></Funfiction> : null;
    return (
        <Col className={style.profile}>
            <h1>Your fanfiction</h1>
            <Button variant="secondary" onClick={openNewFanficPopUpHandler}>Add new fanfic</Button>
            <NewFanficPopup isShow={isPopUpShow} setIsPopUpShow={setIsPopUpShow} getFanfiction={getFanfiction}></NewFanficPopup>
            <SearchPanel allFanfiction={allFanfiction} setAllFanfiction={setAllFanfiction} fanfictionForDisplay={fanfictionForDisplay} setFanfictionForDisplay={setFanfictionForDisplay}></SearchPanel >
            {loaderElement}
            {errorElement}
            {contentElement}
        </Col>
    );
}

export default Profile;
