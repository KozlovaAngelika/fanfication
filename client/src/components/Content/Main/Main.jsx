import React, { useCallback, useEffect, useState } from 'react';
import SearchPanel from './../SearchPanel/SearchPanel';
import { Col } from 'react-bootstrap';
import style from './Main.module.scss';
import Funfiction from './../Fanfiction/Fanfiction';
import Loader from '@loader/Loader'
import ErrorMessage from '@error/ErrorMessage'
import { useHttp } from "@hooks/http.hook";

const Main = () => {
    const [allFanfiction, setAllFanfiction] = useState(null);
    const [fanfictionForDisplay, setFanfictionForDisplay] = useState(null);
    const { loading, request, error } = useHttp();
    const getFanfiction = useCallback(
        async () => {
            const data = await request("/api/funfic/fanfiction", "GET").then((data) => {
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
    const contentElement = !loading && !error ? <Funfiction fanfictionData={fanfictionForDisplay ? fanfictionForDisplay : []} isEdit={false}></Funfiction> : null;
    return (
        <Col className={style.main}>
            < SearchPanel allFanfiction={allFanfiction} setAllFanfiction={setAllFanfiction} fanfictionForDisplay={fanfictionForDisplay} setFanfictionForDisplay={setFanfictionForDisplay}></SearchPanel >
            {loaderElement}
            {errorElement}
            {contentElement}
        </Col>
    );
}

export default Main;
