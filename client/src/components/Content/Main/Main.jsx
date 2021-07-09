import React, { useCallback, useEffect, useState } from 'react';
import SearchPanel from './SearchPanel/SearchPanel';
import { Col } from 'react-bootstrap';
import style from './Main.module.scss';
import Funfiction from './../Fanfiction/Fanfiction';
import Loader from '@loader/Loader'
import ErrorMessage from '../../ErrorMessage/ErrorMessage'
import { useHttp } from "@hooks/http.hook";

const Main = () => {
    const [allFanfiction, setAllFanfiction] = useState(null);
    const { loading, request, error } = useHttp();
    const getFanfiction = useCallback(
        async () => {
            const data = await request("/api/funfic/fanfiction", "GET").then((data) => {
                return data;
            });
            setAllFanfiction(data);
        }, [])
    useEffect(
        getFanfiction, [getFanfiction]
    )
    const loaderElement = loading ? <Loader></Loader> : null;
    const errorElement = error ? <ErrorMessage></ErrorMessage> : null;
    const contentElement = !loading && !error ? <Funfiction fanfictionData={allFanfiction ? allFanfiction : []}></Funfiction> : null;
    return (
        <Col className={style.main}>
            < SearchPanel ></SearchPanel >
            {loaderElement}
            {errorElement}
            {contentElement}
        </Col>
    );
}

export default Main;
