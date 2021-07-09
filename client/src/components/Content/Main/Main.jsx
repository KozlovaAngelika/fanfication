import React, { useCallback, useEffect, useState } from 'react';
import SearchPanel from './SearchPanel/SearchPanel';
import { Col } from 'react-bootstrap';
import style from './Main.module.scss';
import Funfiction from './../Fanfiction/Fanfiction';
import Loader from '../../Loader/Loader'
import ErrorMessage from '../../ErrorMessage/ErrorMessage'
import axios from 'axios';

const Main = () => {
    const [allFanfiction, setAllFanfiction] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(false);
    const getFanfiction = useCallback(
        async () => {
            setIsLoading(true)
            const data = await axios.get("/api/funfic/fanfiction").then((res) => {
                setIsLoading(false);
                return res.data;
            });
            setAllFanfiction(data);
        }, [])
    useEffect(
        getFanfiction, [getFanfiction]
    )
    const loaderElement = isLoading ? <Loader></Loader> : null;
    const errorElement = error ? <ErrorMessage></ErrorMessage> : null;
    const contentElement = !isLoading && !error ? <Funfiction fanfictionData={allFanfiction ? allFanfiction : []}></Funfiction> : null;
    return (
        <Col className={style.main}>
            < SearchPanel ></SearchPanel >
            <div>
                {loaderElement}
                {errorElement}
                {contentElement}
            </div>

        </Col>
    );
}

export default Main;
