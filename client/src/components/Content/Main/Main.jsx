import React, { useCallback, useEffect, useState } from 'react';
import SearchPanel from './SearchPanel/SearchPanel';
import Funfiction from './../Fanfiction/Fanfiction';
import axios from 'axios';

const Main = () => {
    const [allFanfiction, setAllFanfiction] = useState(null);
    const getFanfiction = useCallback(
        async () => {
            const data = await axios.get("/api/funfic/fanfiction").then((res) => {
                return res.data;
            });
            setAllFanfiction(data);
        }
        , [])
    useEffect(
        getFanfiction, [getFanfiction]
    )
    return (
        <React.Fragment>
            <SearchPanel></SearchPanel>
            <Funfiction fanfictionData={allFanfiction ? allFanfiction : []}></Funfiction>
        </React.Fragment>
    );
}

export default Main;
