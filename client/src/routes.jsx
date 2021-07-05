import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import Profile from './components/Content/Profile/Profile';
import Main from './components/Content/Main/Main';
import Auth from './components/Content/Auth/Auth';
export const useRoutes = (isLogin) => {
    if (isLogin) {
        return (
            <Switch>
                <Route path='/profile' exact>
                    <Profile></Profile>
                </Route>
                <Route path='/main' exact>
                    <Main></Main>
                </Route>
                <Redirect to='/main'></Redirect>
            </Switch >
        )
    }
    return (
        <Switch>
            <Route path='/auth'>
                <Auth></Auth>
            </Route>
            <Route path='/main' exact>
                <Main></Main>
            </Route>
            <Redirect to='/main'></Redirect>
        </Switch >
    )
};