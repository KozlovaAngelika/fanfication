import React, { useCallback, useEffect, useState } from 'react';
import SearchPanel from './SearchPanel/SearchPanel';
import { Col } from 'react-bootstrap';
import style from './Main.module.scss';
import Funfiction from './../Fanfiction/Fanfiction';
import Loader from '../../Loader/Loader'
import axios from 'axios';

const Main = () => {
    const [allFanfiction, setAllFanfiction] = useState(null);
    const getFanfiction = useCallback(
        async () => {
            const data = await axios.get("/api/funfic/fanfiction").then((res) => {
                return res.data;
            });
            setAllFanfiction(data);
        }, [])
    useEffect(
        getFanfiction, [getFanfiction]
    )
    return (
        <Col className={style.main}>
            < SearchPanel ></SearchPanel >
            <div>
                {/* <Funfiction fanfictionData={allFanfiction ? allFanfiction : []}></Funfiction> */}
                < Loader ></Loader >
            </div>

        </Col>
    );
}

export default Main;
